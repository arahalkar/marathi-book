
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
  const [completedTopicIds, setCompletedTopicIds] = useState<string[]>([]);

  // Initialize App: Directly load pre-loaded data if available
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

    // Load completion progress
    const savedProgress = localStorage.getItem('marathi_mitr_progress');
    if (savedProgress) {
      try {
        setCompletedTopicIds(JSON.parse(savedProgress));
      } catch (e) {
        console.error("Failed to load progress", e);
      }
    }
  }, []);

  const handleTopicComplete = (topicId: string) => {
    if (!completedTopicIds.includes(topicId)) {
      const newCompleted = [...completedTopicIds, topicId];
      setCompletedTopicIds(newCompleted);
      localStorage.setItem('marathi_mitr_progress', JSON.stringify(newCompleted));
    }
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
    } else {
      alert("AI Processing is disabled. Please upload a pre-processed .json course file or use the built-in curriculum.");
    }
  };

  const navigateToTopic = (topic: Topic) => {
    if (!courseData) return;
    if (!topic.isLoaded) {
      alert("This chapter content is not yet available in the static data.");
      return;
    }
    setSelectedTopic(topic);
    setView('topic');
    setQuizComplete(null);
  };

  const startGrandQuiz = () => {
    if (!courseData || !courseData.grandQuiz) {
      alert("Grand Quiz data is missing in this course.");
      return;
    }
    setView('grand-quiz');
    setQuizComplete(null);
  };

  const startGrandFlashcards = () => {
    if (!courseData || !courseData.grandFlashcards) {
      alert("Grand Flashcard data is missing in this course.");
      return;
    }
    setView('grand-flashcards');
  };

  const exportCourseData = () => {
    if (!courseData) return;
    const blob = new Blob([JSON.stringify(courseData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${courseData.title.replace(/\s+/g, '_')}_course.json`;
    a.click();
  };

  const resetApp = () => {
    if (confirm("Reset everything? This will clear any imported curriculum data and your learning progress.")) {
      localStorage.removeItem('marathi_mitr_cache');
      localStorage.removeItem('marathi_mitr_progress');
      setCompletedTopicIds([]);
      if (PRELOADED_COURSE) {
        setCourseData(PRELOADED_COURSE);
        setView('dashboard');
      } else {
        setCourseData(null);
        setView('upload');
      }
    }
  };

  const totalTopics = courseData?.topics.length || 0;
  const completedCount = completedTopicIds.length;
  const progressPercentage = totalTopics > 0 ? (completedCount / totalTopics) * 100 : 0;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 border-8 border-orange-200 border-t-orange-500 rounded-full animate-spin mb-8"></div>
        <h2 className="text-3xl font-bold text-orange-800 mb-2">Marathi Mitr</h2>
        <p className="text-orange-600 max-w-md font-medium text-lg">Loading Content...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <div 
              className="flex items-center gap-3 cursor-pointer" 
              onClick={() => courseData && setView('dashboard')}
            >
              <div className="bg-orange-500 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">म</div>
              <h1 className="text-2xl font-bold text-gray-800 hidden sm:block tracking-tight">Marathi Mitr</h1>
            </div>
            
            {courseData && (
              <div className="flex gap-2 items-center">
                <button onClick={startGrandQuiz} className="text-orange-600 hover:bg-orange-50 px-3 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors">
                  <i className="fas fa-trophy"></i><span className="hidden md:inline">Quiz</span>
                </button>
                <button onClick={startGrandFlashcards} className="text-orange-600 hover:bg-orange-50 px-3 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors">
                  <i className="fas fa-layer-group"></i><span className="hidden md:inline">Cards</span>
                </button>
                <div className="h-6 w-px bg-gray-200 mx-1"></div>
                <button onClick={exportCourseData} title="Export Course Data" className="text-gray-400 hover:text-orange-500 p-2 transition-colors">
                  <i className="fas fa-download"></i>
                </button>
                <button onClick={resetApp} title="Reset Progress" className="text-gray-400 hover:text-red-500 p-2 transition-colors">
                  <i className="fas fa-redo-alt"></i>
                </button>
              </div>
            )}
          </div>

          {courseData && view !== 'upload' && (
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
                <span>Learning Progress</span>
                <span>{completedCount} / {totalTopics} Chapters</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-orange-500 transition-all duration-1000 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        {view === 'upload' && !courseData && (
          <div className="max-w-3xl mx-auto text-center mt-12 animate-fade-in">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">Your Digital Marathi Tutor</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Static version: Import a Course JSON to begin.</p>
            
            <div className="bg-white border-4 border-dashed border-orange-200 rounded-3xl p-16 hover:border-orange-400 transition-all cursor-pointer relative group shadow-sm hover:shadow-md">
              <input type="file" accept="application/json" onChange={handleFileUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform shadow-inner">
                  <i className="fas fa-file-code text-4xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Import Course JSON</h3>
                <p className="text-gray-500 text-lg">Click to browse your files</p>
              </div>
            </div>
          </div>
        )}

        {view === 'dashboard' && courseData && (
          <div className="animate-fade-in">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4 marathi-font leading-tight">{courseData.title}</h2>
                <p className="text-xl text-gray-500">Pick a chapter and boost your Marathi skills!</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-100 flex items-center gap-4">
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-400 uppercase">Total Score</p>
                  <p className="text-2xl font-black text-orange-600">{completedCount * 100} XP</p>
                </div>
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white text-xl">
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseData.topics.map((topic, index) => {
                const isCompleted = completedTopicIds.includes(topic.id);
                return (
                  <div key={topic.id} onClick={() => navigateToTopic(topic)} className={`bg-white p-8 rounded-3xl shadow-sm border transition-all cursor-pointer group relative overflow-hidden flex flex-col min-h-[220px] ${isCompleted ? 'border-green-200 bg-green-50/20' : 'border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:border-orange-200'}`}>
                    <div className={`absolute top-6 right-6 ${isCompleted ? 'text-green-500' : 'text-gray-200'}`}>
                      <i className={`fas ${isCompleted ? 'fa-check-circle text-2xl' : 'fa-circle text-lg opacity-20'}`}></i>
                    </div>
                    <div className={`${isCompleted ? 'bg-green-500 text-white' : 'bg-orange-50 text-orange-600 group-hover:bg-orange-500 group-hover:text-white'} w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl mb-6 transition-all shadow-sm`}>
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 marathi-font group-hover:text-orange-600 transition-colors leading-snug">{topic.title}</h3>
                    <div className="mt-auto flex items-center gap-2">
                      {isCompleted ? (
                        <span className="text-green-600 text-sm font-bold flex items-center gap-1">
                          <i className="fas fa-check"></i> Completed
                        </span>
                      ) : (
                        <span className="text-gray-400 text-sm font-medium group-hover:text-orange-500">
                          Start Learning <i className="fas fa-arrow-right ml-1"></i>
                        </span>
                      )}
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

            <div className="mb-10 flex justify-between items-start">
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4 marathi-font">{selectedTopic.title}</h2>
                <div className="h-1.5 w-24 bg-orange-500 rounded-full"></div>
              </div>
              {completedTopicIds.includes(selectedTopic.id) && (
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-xl flex items-center gap-2 font-bold animate-fade-in">
                  <i className="fas fa-check-circle"></i> Chapter Completed
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-800">
                    <i className="fas fa-book-open text-orange-500"></i> Detailed Summary
                  </h3>
                  <div className="space-y-10">
                    <div className="bg-gray-50 p-8 rounded-3xl border-l-8 border-gray-200">
                      <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">English Version</h4>
                      <p className="text-gray-700 leading-relaxed text-lg italic">{selectedTopic.summaryEn}</p>
                    </div>
                    <div className="bg-orange-50 p-8 rounded-3xl border-l-8 border-orange-400">
                      <h4 className="text-xs font-black text-orange-400 uppercase tracking-widest mb-4">मराठी सारांश</h4>
                      <p className="text-gray-800 leading-relaxed text-2xl marathi-font font-medium">{selectedTopic.summaryMr}</p>
                    </div>
                  </div>
                </div>

                <div id="practice-quiz">
                  {quizComplete ? (
                    <div className="bg-white rounded-[2rem] p-16 text-center shadow-xl border-t-8 border-green-500">
                      <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl shadow-inner"><i className="fas fa-check"></i></div>
                      <h3 className="text-4xl font-extrabold text-gray-800 mb-4">Quiz Finished!</h3>
                      <p className="text-xl text-gray-600 mb-4">Score: {quizComplete.score} / {quizComplete.total}</p>
                      <p className="text-green-600 font-bold mb-10">Chapter progress saved!</p>
                      <div className="flex gap-4 justify-center">
                        <button onClick={() => setView('dashboard')} className="bg-gray-100 text-gray-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 transition-all">Dashboard</button>
                        <button onClick={() => setQuizComplete(null)} className="bg-orange-500 text-white px-10 py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-lg hover:scale-105 active:scale-95">Retry Quiz</button>
                      </div>
                    </div>
                  ) : (
                    <QuizGame 
                      title="Practice Quiz" 
                      questions={selectedTopic.practiceQuestions || []} 
                      onComplete={(score) => {
                        setQuizComplete({score, total: selectedTopic.practiceQuestions?.length || 0});
                        handleTopicComplete(selectedTopic.id);
                      }} 
                    />
                  )}
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 sticky top-44">
                  <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                    <i className="fas fa-clone text-orange-500"></i> Vocabulary Cards
                  </h3>
                  <div className="space-y-8 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                    {(selectedTopic.flashcards || []).map(card => <FlashcardItem key={card.id} card={card} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'grand-quiz' && courseData && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <button onClick={() => setView('dashboard')} className="mb-8 flex items-center gap-2 text-gray-500 hover:text-orange-600 font-bold transition-colors">
              <i className="fas fa-arrow-left"></i> Exit Quiz
            </button>
            {quizComplete ? (
              <div className="bg-white rounded-[2rem] p-20 text-center shadow-2xl border-t-8 border-orange-500">
                <div className="w-32 h-32 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-10 text-5xl shadow-inner"><i className="fas fa-award"></i></div>
                <h3 className="text-5xl font-black text-gray-900 mb-4">Course Mastery</h3>
                <p className="text-2xl text-gray-600 mb-12">Final Score: {quizComplete.score} / {quizComplete.total}</p>
                <div className="flex gap-6 justify-center">
                  <button onClick={() => setView('dashboard')} className="bg-gray-100 text-gray-700 px-10 py-4 rounded-2xl font-bold hover:bg-gray-200 transition-all">Done</button>
                  <button onClick={() => setQuizComplete(null)} className="bg-orange-500 text-white px-10 py-4 rounded-2xl font-bold hover:bg-orange-600 shadow-xl hover:scale-105 transition-all">Retake</button>
                </div>
              </div>
            ) : (
              <QuizGame title="Full Mastery Quiz" questions={courseData.grandQuiz || []} onComplete={(score) => setQuizComplete({score, total: courseData.grandQuiz?.length || 0})} />
            )}
          </div>
        )}

        {view === 'grand-flashcards' && courseData && (
          <div className="animate-fade-in max-w-5xl mx-auto">
            <button onClick={() => setView('dashboard')} className="mb-8 flex items-center gap-2 text-gray-500 hover:text-orange-600 font-bold transition-colors">
              <i className="fas fa-arrow-left"></i> Back to Dashboard
            </button>
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-5xl font-black text-gray-900 mb-4">Course Flashcards</h2>
              <div className="bg-orange-500 text-white px-8 py-4 rounded-[2rem] font-black text-2xl shadow-xl">{courseData.grandFlashcards?.length} Cards</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {(courseData.grandFlashcards || []).map(card => <FlashcardItem key={card.id} card={card} />)}
            </div>
          </div>
        )}
      </main>
      <footer className="py-12 text-center text-gray-400 font-medium border-t border-gray-100 mt-12 bg-white">
        Marathi Mitr • Your Digital Language Journey • {completedCount}/{totalTopics} Done
      </footer>
    </div>
  );
};

export default App;
