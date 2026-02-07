
import React, { useState, useEffect } from 'react';
import { CourseData, AppView, Topic } from './types';
import { PRELOADED_COURSE } from './preloadedData';
import FlashcardItem from './components/FlashcardItem';
import QuizGame from './components/QuizGame';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('upload');
  const [isLoading, setIsLoading] = useState(false);
  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [quizComplete, setQuizComplete] = useState<{score: number, total: number} | null>(null);
  
  // Persistence states
  const [topicMastery, setTopicMastery] = useState<Record<string, number>>({});
  const [topicXP, setTopicXP] = useState<Record<string, number>>({});
  const [grandQuizXP, setGrandQuizXP] = useState(0);

  // Initialize App
  useEffect(() => {
    // Load course data
    if (PRELOADED_COURSE) {
      setCourseData(PRELOADED_COURSE);
      setView('dashboard');
    } else {
      const saved = localStorage.getItem('marathi_mitr_cache');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setCourseData(parsed);
          setView('dashboard');
        } catch (e) {
          console.error("Failed to load cached course", e);
        }
      }
    }

    // Load mastery progress
    const savedMastery = localStorage.getItem('marathi_mitr_mastery');
    if (savedMastery) {
      try {
        setTopicMastery(JSON.parse(savedMastery));
      } catch (e) {
        console.error("Failed to load mastery", e);
      }
    }

    // Load per-topic XP
    const savedTopicXP = localStorage.getItem('marathi_mitr_topic_xp');
    if (savedTopicXP) {
      try {
        setTopicXP(JSON.parse(savedTopicXP));
      } catch (e) {
        console.error("Failed to load topic XP", e);
      }
    }

    // Load Grand Quiz XP
    const savedGrandXP = localStorage.getItem('marathi_mitr_grand_xp');
    if (savedGrandXP) {
      setGrandQuizXP(parseInt(savedGrandXP, 10) || 0);
    }
  }, []);

  // CONFETTI EFFECT: Triggers whenever a perfect 100% score is achieved
  useEffect(() => {
    if (quizComplete && quizComplete.score === quizComplete.total && quizComplete.total > 0) {
      // @ts-ignore
      if (window.confetti) {
        // @ts-ignore
        window.confetti({
          particleCount: 200,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#f97316', '#fb923c', '#fbbf24', '#22c55e', '#ef4444'],
          ticks: 300
        });
      }
    }
  }, [quizComplete]);

  const handleCorrectAnswer = () => {
    if (view === 'topic' && selectedTopic) {
      const currentXP = topicXP[selectedTopic.id] || 0;
      const nextXP = currentXP + 20;
      const newTopicXP = { ...topicXP, [selectedTopic.id]: nextXP };
      setTopicXP(newTopicXP);
      localStorage.setItem('marathi_mitr_topic_xp', JSON.stringify(newTopicXP));
    } else if (view === 'grand-quiz') {
      const nextXP = grandQuizXP + 20;
      setGrandQuizXP(nextXP);
      localStorage.setItem('marathi_mitr_grand_xp', nextXP.toString());
    }
  };

  const handleTopicComplete = (topicId: string, score: number, total: number) => {
    const percentage = (score / total) * 100;
    const currentBest = topicMastery[topicId] || 0;
    
    // Always store the highest mastery achieved
    if (percentage >= currentBest) {
      const newMastery = { ...topicMastery, [topicId]: percentage };
      setTopicMastery(newMastery);
      localStorage.setItem('marathi_mitr_mastery', JSON.stringify(newMastery));
    }
  };

  const getQuizFeedback = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return { message: "उत्कृष्ट! तुम्ही या पाठात प्राविण्य मिळवले आहे! (Excellent Mastery!)", color: "text-green-600" };
    if (percentage >= 80) return { message: "You are almost there! Keep it up!", color: "text-blue-600" };
    if (percentage >= 60) return { message: "You should study more to improve.", color: "text-orange-600" };
    return { message: "आणखी सराव करा! (Keep practicing more!)", color: "text-red-500" };
  };

  const getTopicCardStyle = (topicId: string) => {
    const mastery = topicMastery[topicId];
    if (mastery === undefined) return 'border-gray-100 bg-white hover:border-orange-200';
    if (mastery === 100) return 'border-green-400 bg-green-50 shadow-green-100';
    if (mastery >= 80) return 'border-orange-400 bg-orange-50 shadow-orange-100';
    return 'border-red-400 bg-red-50 shadow-red-100';
  };

  const navigateToTopic = (topic: Topic) => {
    setSelectedTopic(topic);
    setView('topic');
    setQuizComplete(null);
  };

  const calculateTotalXP = () => {
    const totalTopicXP = Object.values(topicXP).reduce((acc, val) => acc + val, 0);
    return totalTopicXP + grandQuizXP;
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type === 'application/json' || file.name.endsWith('.json')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target?.result as string);
          setCourseData(json);
          setView('dashboard');
          localStorage.setItem('marathi_mitr_cache', JSON.stringify(json));
        } catch (err) {
          alert("Invalid Course JSON file.");
        }
      };
      reader.readAsText(file);
    }
  };

  const resetApp = () => {
    if (confirm("Reset everything? This will clear all your progress, scores, and XP.")) {
      localStorage.removeItem('marathi_mitr_mastery');
      localStorage.removeItem('marathi_mitr_topic_xp');
      localStorage.removeItem('marathi_mitr_grand_xp');
      setTopicMastery({});
      setTopicXP({});
      setGrandQuizXP(0);
      setView('dashboard');
    }
  };

  const totalTopics = courseData?.topics.length || 0;
  const masteredCount = Object.keys(topicMastery).filter(id => topicMastery[id] === 100).length;
  const progressPercentage = totalTopics > 0 ? (masteredCount / totalTopics) * 100 : 0;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 border-8 border-orange-200 border-t-orange-500 rounded-full animate-spin mb-8"></div>
        <h2 className="text-3xl font-bold text-orange-800">Loading Marathi Mitr...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => courseData && setView('dashboard')}>
              <div className="bg-orange-500 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">म</div>
              <h1 className="text-2xl font-bold text-gray-800 hidden sm:block tracking-tight">Marathi Mitr</h1>
            </div>
            
            {courseData && (
              <div className="flex gap-2 items-center">
                <button onClick={() => { setView('grand-quiz'); setQuizComplete(null); }} className="text-orange-600 hover:bg-orange-50 px-3 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors">
                  <i className="fas fa-trophy"></i><span className="hidden md:inline">Grand Quiz</span>
                </button>
                <button onClick={() => setView('grand-flashcards')} className="text-orange-600 hover:bg-orange-50 px-3 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors">
                  <i className="fas fa-layer-group"></i><span className="hidden md:inline">Flashcards</span>
                </button>
                <div className="h-6 w-px bg-gray-200 mx-1"></div>
                <button onClick={resetApp} title="Reset Progress" className="text-gray-400 hover:text-red-500 p-2 transition-colors">
                  <i className="fas fa-redo-alt"></i>
                </button>
              </div>
            )}
          </div>

          {courseData && view !== 'upload' && (
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
                <span>Course Mastery (100%)</span>
                <span>{masteredCount} / {totalTopics} Chapters</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 transition-all duration-1000 ease-out" style={{ width: `${progressPercentage}%` }}></div>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        {view === 'upload' && !courseData && (
          <div className="max-w-3xl mx-auto text-center mt-12 animate-fade-in">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">Your Digital Marathi Tutor</h2>
            <div className="bg-white border-4 border-dashed border-orange-200 rounded-3xl p-16 hover:border-orange-400 transition-all cursor-pointer relative group shadow-sm">
              <input type="file" accept="application/json" onChange={handleFileUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                  <i className="fas fa-file-import text-4xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Import Course</h3>
                <p className="text-gray-500 text-lg">Upload your Curriculum JSON</p>
              </div>
            </div>
          </div>
        )}

        {view === 'dashboard' && courseData && (
          <div className="animate-fade-in">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4 marathi-font leading-tight">{courseData.title}</h2>
                <p className="text-xl text-gray-500">Pick a chapter to start learning and earning XP!</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-100 flex items-center gap-4">
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-400 uppercase">Total Score</p>
                  <p className="text-3xl font-black text-orange-600">{calculateTotalXP()} XP</p>
                </div>
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white text-xl animate-pulse">
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseData.topics.map((topic, index) => {
                const mastery = topicMastery[topic.id];
                const earnedXP = topicXP[topic.id] || 0;
                const isCompleted = mastery !== undefined;
                return (
                  <div key={topic.id} onClick={() => navigateToTopic(topic)} className={`p-8 rounded-[2rem] shadow-sm border-2 transition-all cursor-pointer group relative overflow-hidden flex flex-col min-h-[240px] ${getTopicCardStyle(topic.id)} hover:shadow-xl hover:-translate-y-1`}>
                    <div className="absolute top-6 right-6">
                      {mastery === 100 && <i className="fas fa-check-circle text-3xl text-green-600"></i>}
                      {mastery !== undefined && mastery < 100 && mastery >= 80 && <i className="fas fa-star text-3xl text-orange-500"></i>}
                      {mastery !== undefined && mastery < 80 && <i className="fas fa-exclamation-circle text-3xl text-red-500"></i>}
                    </div>
                    
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl mb-6 shadow-sm ${isCompleted ? 'bg-white text-gray-800' : 'bg-orange-500 text-white'}`}>
                      {index + 1}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 marathi-font group-hover:text-orange-600 transition-colors leading-tight">{topic.title}</h3>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Chapter XP</span>
                        <span className="text-lg font-black text-orange-600">{earnedXP} XP</span>
                      </div>
                      <div className="text-right">
                        {mastery !== undefined && (
                          <span className={`text-sm font-black ${mastery === 100 ? 'text-green-600' : mastery >= 80 ? 'text-orange-600' : 'text-red-600'}`}>
                            {mastery}% Mastery
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {view === 'topic' && selectedTopic && (
          <div className="animate-fade-in max-w-5xl mx-auto">
            <button onClick={() => setView('dashboard')} className="mb-8 flex items-center gap-2 text-gray-400 hover:text-orange-600 font-bold transition-colors">
              <i className="fas fa-arrow-left"></i> Back to Dashboard
            </button>

            <div className="mb-10 flex justify-between items-center">
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-2 marathi-font">{selectedTopic.title}</h2>
                <div className="h-2 w-32 bg-orange-500 rounded-full"></div>
              </div>
              <div className="bg-orange-100 text-orange-700 px-6 py-3 rounded-2xl font-black text-xl shadow-sm border border-orange-200">
                {topicXP[selectedTopic.id] || 0} XP
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-800">
                    <i className="fas fa-book-open text-orange-500"></i> Detailed Summary
                  </h3>
                  <div className="space-y-8">
                    <div className="bg-gray-50 p-8 rounded-3xl border-l-8 border-gray-200">
                      <p className="text-gray-700 leading-relaxed text-lg italic">{selectedTopic.summaryEn}</p>
                    </div>
                    <div className="bg-orange-50 p-8 rounded-3xl border-l-8 border-orange-400">
                      <p className="text-gray-800 leading-relaxed text-2xl marathi-font font-medium">{selectedTopic.summaryMr}</p>
                    </div>
                  </div>
                </div>

                <div id="practice-quiz">
                  {quizComplete ? (
                    <div className="bg-white rounded-[2rem] p-16 text-center shadow-xl border-t-8 border-orange-500 animate-fade-in">
                      <div className="w-24 h-24 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl shadow-inner">
                        <i className={`fas ${quizComplete.score === quizComplete.total ? 'fa-crown animate-bounce' : 'fa-check'}`}></i>
                      </div>
                      <h3 className="text-4xl font-extrabold text-gray-800 mb-4">Quiz Finished!</h3>
                      <p className="text-2xl text-gray-600 mb-2">{quizComplete.score} / {quizComplete.total} Correct</p>
                      
                      <div className={`text-3xl font-black mb-10 marathi-font ${getQuizFeedback(quizComplete.score, quizComplete.total).color}`}>
                        {getQuizFeedback(quizComplete.score, quizComplete.total).message}
                      </div>

                      <div className="flex gap-4 justify-center">
                        <button onClick={() => setView('dashboard')} className="bg-gray-100 text-gray-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-200">Dashboard</button>
                        <button onClick={() => setQuizComplete(null)} className="bg-orange-500 text-white px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-lg">Try Again</button>
                      </div>
                    </div>
                  ) : (
                    <QuizGame 
                      title="Practice Quiz" 
                      questions={selectedTopic.practiceQuestions || []} 
                      onCorrectAnswer={handleCorrectAnswer}
                      onComplete={(score) => {
                        const total = selectedTopic.practiceQuestions?.length || 0;
                        setQuizComplete({score, total});
                        handleTopicComplete(selectedTopic.id, score, total);
                      }} 
                    />
                  )}
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 sticky top-44">
                  <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                    <i className="fas fa-clone text-orange-500"></i> Flashcards
                  </h3>
                  <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                    {(selectedTopic.flashcards || []).map(card => <FlashcardItem key={card.id} card={card} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'grand-quiz' && courseData && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <button onClick={() => setView('dashboard')} className="mb-8 flex items-center gap-2 text-gray-500 hover:text-orange-600 font-bold">
              <i className="fas fa-arrow-left"></i> Exit Quiz
            </button>
            
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-black text-gray-900">Grand Mastery Challenge</h2>
              <div className="bg-orange-500 text-white px-6 py-2 rounded-xl font-bold shadow-md">
                +{grandQuizXP} Grand XP
              </div>
            </div>

            {quizComplete ? (
              <div className="bg-white rounded-[2rem] p-20 text-center shadow-2xl border-t-8 border-orange-600 animate-fade-in">
                <div className="w-32 h-32 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-10 text-5xl">
                  <i className={`fas ${quizComplete.score === quizComplete.total ? 'fa-medal animate-bounce' : 'fa-award'}`}></i>
                </div>
                <h3 className="text-5xl font-black text-gray-900 mb-4">Challenge Finished!</h3>
                <p className="text-2xl text-gray-600 mb-6">Final Score: {quizComplete.score} / {quizComplete.total}</p>
                
                <div className={`text-3xl font-black mb-12 marathi-font ${getQuizFeedback(quizComplete.score, quizComplete.total).color}`}>
                  {getQuizFeedback(quizComplete.score, quizComplete.total).message}
                </div>

                <div className="flex gap-6 justify-center">
                  <button onClick={() => setView('dashboard')} className="bg-gray-100 text-gray-700 px-10 py-4 rounded-2xl font-bold">Back Home</button>
                  <button onClick={() => setQuizComplete(null)} className="bg-orange-500 text-white px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl">Retake Grand Challenge</button>
                </div>
              </div>
            ) : (
              <QuizGame 
                title="Full Course Final Quiz" 
                questions={courseData.grandQuiz || []} 
                onCorrectAnswer={handleCorrectAnswer}
                onComplete={(score) => setQuizComplete({score, total: courseData.grandQuiz?.length || 0})} 
              />
            )}
          </div>
        )}

        {view === 'grand-flashcards' && courseData && (
          <div className="animate-fade-in max-w-5xl mx-auto">
            <button onClick={() => setView('dashboard')} className="mb-8 flex items-center gap-2 text-gray-500 hover:text-orange-600 font-bold">
              <i className="fas fa-arrow-left"></i> Back to Dashboard
            </button>
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-5xl font-black text-gray-900 mb-4">Master Vocabulary</h2>
              <div className="bg-orange-500 text-white px-8 py-4 rounded-[2rem] font-black text-2xl shadow-xl">{courseData.grandFlashcards?.length} Total Cards</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {(courseData.grandFlashcards || []).map(card => <FlashcardItem key={card.id} card={card} />)}
            </div>
          </div>
        )}
      </main>
      <footer className="py-12 text-center text-gray-400 font-medium border-t border-gray-100 mt-12 bg-white">
        Marathi Mitr • Encouraging Learning Excellence • {calculateTotalXP()} Global XP
      </footer>
    </div>
  );
};

export default App;
