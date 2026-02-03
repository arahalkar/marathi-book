
import { CourseData, Difficulty } from './types';

export const PRELOADED_COURSE: CourseData | null = {
  "title": "मराठी मित्र - इयत्ता पाचवी (Level 5)",
  "topics": [
    {
      "id": "1",
      "title": "संत ज्ञानेश्वर (Sant Dnyaneshwar)",
      "isLoaded": true,
      "summaryEn": "Sant Dnyaneshwar was a prominent 13th-century Marathi saint and poet who translated the Bhagavad Gita into simple Marathi as the 'Dnyaneshwari'.",
      "summaryMr": "संत ज्ञानेश्वर हे १३ व्या शतकातील महान मराठी संत आणि कवी होते. त्यांनी सामान्य लोकांसाठी 'ज्ञानेश्वरी' हा ग्रंथ लिहिला आणि वारकरी संप्रदायाचा पाया रचला.",
      "practiceQuestions": [
        {
          "id": "1-1",
          "text": "संत ज्ञानेश्वरांचा जन्म कोठे झाला?",
          "options": ["आळंदी", "आपेगाव", "देहू", "पैठण"],
          "correctAnswer": 1,
          "difficulty": Difficulty.EASY,
          "explanation": "संत ज्ञानेश्वरांचा जन्म आपेगाव येथे झाला."
        },
        {
          "id": "1-2",
          "text": "ज्ञानेश्वरी या ग्रंथाची रचना कोणी केली?",
          "options": ["संत तुकाराम", "संत नामदेव", "संत ज्ञानेश्वर", "संत एकनाथ"],
          "correctAnswer": 2,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "1-3",
          "text": "ज्ञानेश्वरांच्या मोठ्या भावाचे नाव काय होते?",
          "options": ["सोपान", "निवृत्तीनाथ", "विठ्ठल", "नामदेव"],
          "correctAnswer": 1,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "1-4",
          "text": "मुक्ताबाईसाठी ज्ञानेश्वरांनी काय चमत्कार केला होता?",
          "options": ["पाऊस पाडला", "पाठीवर मांडे भाजले", "झाड लावले", "मदत केली"],
          "correctAnswer": 1,
          "difficulty": Difficulty.HARD
        },
        {
          "id": "1-5",
          "text": "ज्ञानेश्वरांनी कोठे संजीवन समाधी घेतली?",
          "options": ["आळंदी", "पुणे", "मुंबई", "नाशिक"],
          "correctAnswer": 0,
          "difficulty": Difficulty.EASY
        }
      ],
      "flashcards": [
        { "id": "1-f1", "front": "ज्ञानेश्वरी", "back": "भगवद्गीतेचा मराठी अनुवाद." },
        { "id": "1-f2", "front": "आपेगाव", "back": "ज्ञानेश्वरांचे जन्मस्थान." },
        { "id": "1-f3", "front": "वारकरी", "back": "विठ्ठलाचे भक्त." },
        { "id": "1-f4", "front": "निवृत्तीनाथ", "back": "ज्ञानेश्वरांचे थोरले बंधू आणि गुरु." },
        { "id": "1-f5", "front": "आळंदी", "back": "ज्ञानेश्वरांचे समाधी स्थळ." }
      ]
    },
    {
      "id": "2",
      "title": "संत तुकाराम (Sant Tukaram)",
      "isLoaded": true,
      "summaryEn": "Sant Tukaram was a 17th-century saint-poet whose abhangas are widely read in Maharashtra. He lived in Dehu.",
      "summaryMr": "संत तुकाराम हे १७ व्या शतकातील थोर संत कवी होते. त्यांनी देहू येथे राहून 'गाथा' लिहिली आणि विठ्ठलाची भक्ती केली.",
      "practiceQuestions": [
        {
          "id": "2-1",
          "text": "संत तुकाराम महाराजांचे गाव कोणते?",
          "options": ["आळंदी", "देहू", "पुणे", "पैठण"],
          "correctAnswer": 1,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "2-2",
          "text": "तुकारामांच्या काव्यरचनांना काय म्हणतात?",
          "options": ["ओवी", "अभंग", "श्लोक", "दोहे"],
          "correctAnswer": 1,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "2-3",
          "text": "तुकाराम महाराजांच्या वडिलांचे नाव काय होते?",
          "options": ["विठ्ठल", "बोल्होबा", "नामदेव", "राम"],
          "correctAnswer": 1,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "2-4",
          "text": "'तुकाराम बीज' हा दिवस कोणत्या महिन्यात येतो?",
          "options": ["चैत्र", "फाल्गुन", "आषाढ", "कार्तिक"],
          "correctAnswer": 1,
          "difficulty": Difficulty.HARD
        },
        {
          "id": "2-5",
          "text": "कोणत्या महान राजाने तुकारामांचा आदर केला होता?",
          "options": ["अकबर", "शिवाजी महाराज", "संभाजी महाराज", "शाहू महाराज"],
          "correctAnswer": 1,
          "difficulty": Difficulty.MEDIUM
        }
      ],
      "flashcards": [
        { "id": "2-f1", "front": "गाथा", "back": "तुकारामांच्या अभंगांचा संग्रह." },
        { "id": "2-f2", "front": "विठ्ठल", "back": "तुकारामांचे कुलदैवत." },
        { "id": "2-f3", "front": "देहू", "back": "तुकारामांचे जन्मस्थान." },
        { "id": "2-f4", "front": "जगद्गुरू", "back": "तुकारामांना दिलेली उपाधी." },
        { "id": "2-f5", "front": "अभंग", "back": "एक मराठी काव्यप्रकार." }
      ]
    },
    {
      "id": "3",
      "title": "माझा महाराष्ट्र (My Maharashtra)",
      "isLoaded": true,
      "summaryEn": "A comprehensive look at the state of Maharashtra, its geography, culture, and capital Mumbai.",
      "summaryMr": "महाराष्ट्र राज्याची स्थापना १ मे १९६० रोजी झाली. मुंबई ही राज्याची राजधानी असून सह्याद्री आणि गोदावरी हे राज्याचे वैभव आहेत.",
      "practiceQuestions": [
        {
          "id": "3-1",
          "text": "महाराष्ट्र राज्याची स्थापना कधी झाली?",
          "options": ["१५ ऑगस्ट १९४७", "२६ जानेवारी १९५०", "१ मे १९६०", "१ मे १९५०"],
          "correctAnswer": 2,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "3-2",
          "text": "महाराष्ट्राची राजधानी कोणती आहे?",
          "options": ["पुणे", "मुंबई", "नागपूर", "नाशिक"],
          "correctAnswer": 1,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "3-3",
          "text": "नागपूर शहर कोणत्या फळासाठी प्रसिद्ध आहे?",
          "options": ["आंबा", "द्राक्षे", "संत्री", "केळी"],
          "correctAnswer": 2,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "3-4",
          "text": "महाराष्ट्रातील सर्वात मोठी नदी कोणती?",
          "options": ["गोदावरी", "कृष्णा", "तापी", "भीमा"],
          "correctAnswer": 0,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "3-5",
          "text": "खानदेशात कोणती बोलीभाषा बोलली जाते?",
          "options": ["मालवणी", "अहिराणी", "वऱ्हाडी", "कोकणी"],
          "correctAnswer": 1,
          "difficulty": Difficulty.HARD
        }
      ],
      "flashcards": [
        { "id": "3-f1", "front": "सह्याद्री", "back": "महाराष्ट्रातील मुख्य पर्वतरांग." },
        { "id": "3-f2", "front": "मुंबई", "back": "महाराष्ट्राची राजधानी." },
        { "id": "3-f3", "front": "१ मे", "back": "महाराष्ट्र दिन." },
        { "id": "3-f4", "front": "लाडू-पोळी", "back": "मराठी सणांचा गोड पदार्थ." },
        { "id": "3-f5", "front": "वारली", "back": "महाराष्ट्राची प्रसिद्ध आदिवासी चित्रकला." }
      ]
    },
    {
      "id": "4",
      "title": "विरामचिन्हे (Punctuation)",
      "isLoaded": true,
      "summaryEn": "Learn the correct usage of full stops, commas, and question marks in Marathi grammar.",
      "summaryMr": "लेखन करताना अर्थ स्पष्ट होण्यासाठी विरामचिन्हांचा वापर करणे आवश्यक असते. पूर्णविराम, स्वल्पविराम आणि प्रश्नचिन्ह ही महत्त्वाची चिन्हे आहेत.",
      "practiceQuestions": [
        {
          "id": "4-1",
          "text": "वाक्य पूर्ण झाल्यावर कोणते चिन्ह वापरतात?",
          "options": ["स्वल्पविराम", "प्रश्नचिन्ह", "पूर्णविराम", "उद्गारचिन्ह"],
          "correctAnswer": 2,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "4-2",
          "text": "प्रश्न विचारण्यासाठी कोणते चिन्ह वापरतात?",
          "options": ["!", "?", ".", ","],
          "correctAnswer": 1,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "4-3",
          "text": "एकाच जातीचे अनेक शब्द लागोपाठ आल्यास काय वापरतात?",
          "options": ["पूर्णविराम", "स्वल्पविराम", "अर्धविराम", "संयोगचिन्ह"],
          "correctAnswer": 1,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "4-4",
          "text": "दुहेरी अवतरण चिन्ह ( \" \" ) केव्हा वापरतात?",
          "options": ["वाक्य पूर्ण झाल्यावर", "बोलणाऱ्याच्या तोंडचे शब्द दाखवण्यासाठी", "प्रश्न विचारण्यासाठी", "भीती वाटल्यावर"],
          "correctAnswer": 1,
          "difficulty": Difficulty.HARD
        },
        {
          "id": "4-5",
          "text": "उद्गारचिन्ह केव्हा वापरले जाते?",
          "options": ["प्रश्न विचारताना", "आनंद किंवा भीती व्यक्त करताना", "नाव सांगताना", "स्वल्पविराम देताना"],
          "correctAnswer": 1,
          "difficulty": Difficulty.MEDIUM
        }
      ],
      "flashcards": [
        { "id": "4-f1", "front": "पूर्णविराम (.)", "back": "वाक्य पूर्ण झाले की वापरतात." },
        { "id": "4-f2", "front": "स्वल्पविराम (,)", "back": "थोड्या विश्रांतीसाठी वापरतात." },
        { "id": "4-f3", "front": "प्रश्नचिन्ह (?)", "back": "प्रश्न विचारताना वापरतात." },
        { "id": "4-f4", "front": "उद्गारचिन्ह (!)", "back": "भावना व्यक्त करताना वापरतात." },
        { "id": "4-f5", "front": "अवतरण चिन्ह", "back": "महत्त्वाचा शब्द किंवा संवाद दर्शवण्यासाठी." }
      ]
    },
    {
      "id": "5",
      "title": "वाक्प्रचार (Idioms)",
      "isLoaded": true,
      "summaryEn": "Idioms add beauty to language. Understand common Marathi idioms and their meanings.",
      "summaryMr": "वाक्प्रचार हे भाषेचे दागिने आहेत. शब्दांच्या मूळ अर्थापेक्षा वेगळा आणि अर्थपूर्ण अर्थ वाक्प्रचारांतून मिळतो.",
      "practiceQuestions": [
        {
          "id": "5-1",
          "text": "'नाक मुरडणे' या वाक्प्रचाराचा अर्थ काय?",
          "options": ["नाक साफ करणे", "नापसंती दाखवणे", "खूप राग येणे", "हसणे"],
          "correctAnswer": 1,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "5-2",
          "text": "'धडा शिकवणे' म्हणजे काय?",
          "options": ["पुस्तकातून शिकणे", "शाळेत जाणे", "अद्दल घडवणे", "मदत करणे"],
          "correctAnswer": 2,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "5-3",
          "text": "'गंमत पाहणे' या वाक्प्रचाराचा अर्थ सांगा.",
          "options": ["मजा पाहणे", "काम करणे", "शांत बसणे", "दुःखी होणे"],
          "correctAnswer": 0,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "5-4",
          "text": "'कान फुंकणे' म्हणजे काय?",
          "options": ["कान स्वच्छ करणे", "चुगली करणे", "मदत करणे", "हवा मारणे"],
          "correctAnswer": 1,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "5-5",
          "text": "'कंबर कसणे' म्हणजे काय?",
          "options": ["व्यायाम करणे", "पूर्ण तयारीत राहणे", "बसून राहणे", "दोरी बांधणे"],
          "correctAnswer": 1,
          "difficulty": Difficulty.HARD
        }
      ],
      "flashcards": [
        { "id": "5-f1", "front": "हातभार लावणे", "back": "मदत करणे." },
        { "id": "5-f2", "front": "पायावर उभे राहणे", "back": "स्वावलंबी होणे." },
        { "id": "5-f3", "front": "तोंडात बोट घालणे", "back": "आश्चर्यचकित होणे." },
        { "id": "5-f4", "front": "घाम गाळणे", "back": "खूप कष्ट करणे." },
        { "id": "5-f5", "front": "गगन ठेंगणे होणे", "back": "खूप आनंद होणे." }
      ]
    },
    {
      "id": "6",
      "title": "अंक आणि आकडेमोड (Numbers)",
      "isLoaded": true,
      "summaryEn": "Practice Marathi numbers from 1 to 100 and basic arithmetic terms.",
      "summaryMr": "गणिताच्या क्रिया आणि संख्यांची ओळख असणे दैनंदिन व्यवहारासाठी आवश्यक आहे. १ ते १०० अंक आणि बेरीज-वजाबाकी शिकूया.",
      "practiceQuestions": [
        {
          "id": "6-1",
          "text": "मराठीत ९९ ला काय म्हणतात?",
          "options": ["ऐंशी", "नव्वद", "नव्याण्णव", "एकशे नऊ"],
          "correctAnswer": 2,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "6-2",
          "text": "'Addition' ला मराठीत काय म्हणतात?",
          "options": ["वजाबाकी", "गुणाकार", "भागाकार", "बेरीज"],
          "correctAnswer": 3,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "6-3",
          "text": "दहा लाख म्हणजे किती?",
          "options": ["१ कोटी", "१ मिलियन", "१ बिलियन", "१ लाख"],
          "correctAnswer": 1,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "6-4",
          "text": "शून्याचा शोध कोणी लावला?",
          "options": ["आर्यभट्ट", "भास्कराचार्य", "न्यूटन", "आईन्स्टाईन"],
          "correctAnswer": 0,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "6-5",
          "text": "७५ अधिक २५ किती होतात?",
          "options": ["८०", "९०", "१००", "१२०"],
          "correctAnswer": 2,
          "difficulty": Difficulty.MEDIUM
        }
      ],
      "flashcards": [
        { "id": "6-f1", "front": "पाऊण", "back": "७५ टक्के (3/4)." },
        { "id": "6-f2", "front": "सव्वा", "back": "१ पूर्णांक १/४ (1.25)." },
        { "id": "6-f3", "front": "गुणाकार", "back": "Multiplication." },
        { "id": "6-f4", "front": "भागाकार", "back": "Division." },
        { "id": "6-f5", "front": "दशक", "back": "१० ची संख्या (Ten)." }
      ]
    },
    {
      "id": "7",
      "title": "भारताचे राष्ट्रीय सण (National Festivals)",
      "isLoaded": true,
      "summaryEn": "India celebrates major national festivals like Independence Day and Republic Day to honor its history.",
      "summaryMr": "भारत हा विविधतेने नटलेला देश आहे. १५ ऑगस्ट आणि २६ जानेवारी हे आपले राष्ट्रीय सण आपण उत्साहात साजरे करतो.",
      "practiceQuestions": [
        {
          "id": "7-1",
          "text": "भारताचा स्वातंत्र्यदिन कधी असतो?",
          "options": ["२६ जानेवारी", "१ मे", "१५ ऑगस्ट", "२ ऑक्टोबर"],
          "correctAnswer": 2,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "7-2",
          "text": "प्रजासत्ताक दिन कधी साजरा केला जातो?",
          "options": ["२६ जानेवारी", "१५ ऑगस्ट", "५ सप्टेंबर", "१४ नोव्हेंबर"],
          "correctAnswer": 0,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "7-3",
          "text": "लाल किल्ल्यावर राष्ट्रध्वज कोण फडकवतात?",
          "options": ["राष्ट्रपती", "पंतप्रधान", "राज्यपाल", "मुख्यमंत्री"],
          "correctAnswer": 1,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "7-4",
          "text": "गांधी जयंती कधी असते?",
          "options": ["१५ ऑगस्ट", "२६ जानेवारी", "२ ऑक्टोबर", "१ मे"],
          "correctAnswer": 2,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "7-5",
          "text": "आपल्या राष्ट्रध्वजात किती रंग आहेत?",
          "options": ["दोन", "तीन", "चार", "पाच"],
          "correctAnswer": 1,
          "difficulty": Difficulty.EASY
        }
      ],
      "flashcards": [
        { "id": "7-f1", "front": "तिरंगा", "back": "भारताचा राष्ट्रध्वज." },
        { "id": "7-f2", "front": "अशोकचक्र", "back": "ध्वजाच्या मध्यभागी असलेले निळे चक्र." },
        { "id": "7-f3", "front": "लाल किल्ला", "back": "दिल्ली येथील ऐतिहासिक ठिकाण." },
        { "id": "7-f4", "front": "स्वातंत्र्य", "back": "Independence." },
        { "id": "7-f5", "front": "राष्ट्रगीत", "back": "जन गण मन." }
      ]
    },
    {
      "id": "8",
      "title": "शिवनेरी किल्ला (Shivneri Fort)",
      "isLoaded": true,
      "summaryEn": "The historic birthplace of Chhatrapati Shivaji Maharaj, located near Junnar.",
      "summaryMr": "शिवनेरी हा जुन्नर जवळील एक ऐतिहासिक किल्ला आहे. येथेच छत्रपती शिवाजी महाराजांचा जन्म झाला.",
      "practiceQuestions": [
        {
          "id": "8-1",
          "text": "शिवाजी महाराजांचा जन्म कोणत्या किल्ल्यावर झाला?",
          "options": ["रायगड", "प्रतापगड", "शिवनेरी", "सिंहगड"],
          "correctAnswer": 2,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "8-2",
          "text": "शिवनेरी किल्ला कोणत्या जिल्ह्यात आहे?",
          "options": ["ठाणे", "पुणे", "सातारा", "कोल्हापूर"],
          "correctAnswer": 1,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "8-3",
          "text": "शिवनेरी किल्ल्यावर कोणत्या देवीचे मंदिर आहे?",
          "options": ["भवानी माता", "शिवाई देवी", "तुळजापूरची अंबाबाई", "काळुबाई"],
          "correctAnswer": 1,
          "difficulty": Difficulty.HARD
        },
        {
          "id": "8-4",
          "text": "शिवनेरी किल्ला कोणत्या डोंगरात आहे?",
          "options": ["सह्याद्री", "सातपुडा", "अरवली", "हिमालय"],
          "correctAnswer": 0,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "8-5",
          "text": "जुन्नर हे शहर कोणत्या जिल्ह्याचा भाग आहे?",
          "options": ["नागपूर", "पुणे", "मुंबई", "सोलापूर"],
          "correctAnswer": 1,
          "difficulty": Difficulty.EASY
        }
      ],
      "flashcards": [
        { "id": "8-f1", "front": "किल्लेदार", "back": "किल्ल्याचे रक्षण करणारा प्रमुख." },
        { "id": "8-f2", "front": "जुन्नर", "back": "शिवनेरी जवळचे ऐतिहासिक शहर." },
        { "id": "8-f3", "front": "शिवाई देवी", "back": "महाराजांचे नाव या देवीवरून ठेवले गेले." },
        { "id": "8-f4", "front": "१९ फेब्रुवारी १६३०", "back": "शिवाजी महाराजांचा जन्मदिवस." },
        { "id": "8-f5", "front": "तटबंदी", "back": "किल्ल्याच्या संरक्षणासाठी बांधलेली भिंत." }
      ]
    },
    {
      "id": "9",
      "title": "झाडे लावा, झाडे जगवा (Nature)",
      "isLoaded": true,
      "summaryEn": "Importance of trees for oxygen, rain, and maintaining environmental balance.",
      "summaryMr": "झाडे आपल्याला ऑक्सिजन देतात आणि पाऊस पाडण्यास मदत करतात. पर्यावरणाचे रक्षण करण्यासाठी झाडे लावणे गरजेचे आहे.",
      "practiceQuestions": [
        {
          "id": "9-1",
          "text": "झाडे आपल्याला कोणता वायू देतात?",
          "options": ["नायट्रोजन", "ऑक्सिजन", "कार्बन डायऑक्साइड", "हायड्रोजन"],
          "correctAnswer": 1,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "9-2",
          "text": "पाऊस पडण्यासाठी कशाची गरज असते?",
          "options": ["गाड्यांची", "झाडांची", "विमानांची", "मोबाईलची"],
          "correctAnswer": 1,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "9-3",
          "text": "झाडे कार्बन डायऑक्साइड शोषून काय बाहेर सोडतात?",
          "options": ["दूध", "अन्न", "ऑक्सिजन", "पाणी"],
          "correctAnswer": 2,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "9-4",
          "text": "वनमहोत्सव कधी साजरा केला जातो?",
          "options": ["जून", "जुलै", "ऑगस्ट", "मे"],
          "correctAnswer": 1,
          "difficulty": Difficulty.HARD
        },
        {
          "id": "9-5",
          "text": "झाडांमुळे कशाची धूप थांबते?",
          "options": ["लोखंडाची", "पाण्याची", "मातीची", "काचेची"],
          "correctAnswer": 2,
          "difficulty": Difficulty.MEDIUM
        }
      ],
      "flashcards": [
        { "id": "9-f1", "front": "ऑक्सिजन", "back": "प्राणवायू." },
        { "id": "9-f2", "front": "बाष्पीभवन", "back": "पाण्याची वाफ होण्याची क्रिया." },
        { "id": "9-f3", "front": "पर्यावरण", "back": "Environment." },
        { "id": "9-f4", "front": "बीजारोपण", "back": "बिया पेरण्याची क्रिया." },
        { "id": "9-f5", "front": "संवर्धन", "back": "जतन करणे किंवा रक्षण करणे." }
      ]
    },
    {
      "id": "10",
      "title": "सावित्रीबाई फुले (Savitribai Phule)",
      "isLoaded": true,
      "summaryEn": "The first female teacher in India and a pioneer of women's education in Maharashtra.",
      "summaryMr": "क्रांतीज्योती सावित्रीबाई फुले या भारताच्या पहिल्या महिला शिक्षिका होत्या. त्यांनी स्त्रियांच्या शिक्षणासाठी मोठे कार्य केले.",
      "practiceQuestions": [
        {
          "id": "10-1",
          "text": "भारताच्या पहिल्या महिला शिक्षिका कोण?",
          "options": ["इंदिरा गांधी", "सरोजिनी नायडू", "सावित्रीबाई फुले", "झाशीची राणी"],
          "correctAnswer": 2,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "10-2",
          "text": "सावित्रीबाईंच्या पतीचे नाव काय होते?",
          "options": ["जोतिराव फुले", "शाहू महाराज", "न्यायमूर्ती रानडे", "लोकमान्य टिळक"],
          "correctAnswer": 0,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "10-3",
          "text": "मुलींची पहिली शाळा कोठे सुरू झाली?",
          "options": ["मुंबई", "पुणे", "नाशिक", "नागपूर"],
          "correctAnswer": 1,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "10-4",
          "text": "पुण्यातील कोणत्या वाड्यात पहिली शाळा सुरू झाली?",
          "options": ["शनिवारवाडा", "भिडे वाडा", "विश्रामबाग वाडा", "लाल महाल"],
          "correctAnswer": 1,
          "difficulty": Difficulty.HARD
        },
        {
          "id": "10-5",
          "text": "सावित्रीबाईंचा जन्मदिवस काय म्हणून साजरा होतो?",
          "options": ["शिक्षक दिन", "बालिका दिन", "महिला दिन", "स्वच्छता दिन"],
          "correctAnswer": 1,
          "difficulty": Difficulty.MEDIUM
        }
      ],
      "flashcards": [
        { "id": "10-f1", "front": "भिडे वाडा", "back": "मुलींची पहिली शाळा सुरू झालेली जागा." },
        { "id": "10-f2", "front": "क्रांतीज्योती", "back": "सावित्रीबाईंना दिलेली उपाधी." },
        { "id": "10-f3", "front": "३ जानेवारी", "back": "सावित्रीबाईंचा जन्मदिवस." },
        { "id": "10-f4", "front": "स्त्री शिक्षण", "back": "Women's Education." },
        { "id": "10-f5", "front": "सत्यशोधक समाज", "back": "फुले दांपत्याने स्थापन केलेली संस्था." }
      ]
    },
    {
      "id": "11",
      "title": "पाण्याचे महत्त्व (Water)",
      "isLoaded": true,
      "summaryEn": "Water is life. Learn why we must save water and the sources of fresh water.",
      "summaryMr": "पाणी हे जीवन आहे. पिण्याचे पाणी जपून वापरणे आणि पाण्याचा अपव्यय टाळणे ही आपली जबाबदारी आहे.",
      "practiceQuestions": [
        {
          "id": "11-1",
          "text": "पाण्याचा मुख्य स्रोत कोणता आहे?",
          "options": ["नदी", "विहीर", "पाऊस", "समुद्र"],
          "correctAnswer": 2,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "11-2",
          "text": "पिण्याचे पाणी कसे असावे?",
          "options": ["कडू", "स्वच्छ आणि निर्जंतुक", "खाऱ्या चवीचे", "रंगीत"],
          "correctAnswer": 1,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "11-3",
          "text": "पाणी गरम केल्यावर त्याची काय होते?",
          "options": ["बर्फ", "वाफ", "दगड", "दूध"],
          "correctAnswer": 1,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "11-4",
          "text": "पृथ्वीचा किती भाग पाण्याने व्यापलेला आहे?",
          "options": ["२५%", "५०%", "७१%", "९०%"],
          "correctAnswer": 2,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "11-5",
          "text": "जागतिक जल दिन कधी साजरा केला जातो?",
          "options": ["२२ मार्च", "५ जून", "१५ ऑगस्ट", "१ जानेवारी"],
          "correctAnswer": 0,
          "difficulty": Difficulty.HARD
        }
      ],
      "flashcards": [
        { "id": "11-f1", "front": "जीवन", "back": "पाण्याला दिलेले दुसरे नाव." },
        { "id": "11-f2", "front": "प्रदूषण", "back": "पाणी अस्वच्छ होण्याची क्रिया." },
        { "id": "11-f3", "front": "धरण", "back": "पाणी साठवण्यासाठी बांधलेली भिंत." },
        { "id": "11-f4", "front": "कंजर्वेशन", "back": "पाणी वाचवणे (Conservation)." },
        { "id": "11-f5", "front": "बाष्प", "back": "पाण्याची वाफ (Vapor)." }
      ]
    },
    {
      "id": "12",
      "title": "आपले सोबती - प्राणी (Animals)",
      "isLoaded": true,
      "summaryEn": "Introduction to domestic and wild animals and their role in nature.",
      "summaryMr": "प्राणी आपले मित्र आहेत. पाळीव प्राणी आपल्याला मदत करतात तर जंगली प्राणी जंगलाचे रक्षण करतात.",
      "practiceQuestions": [
        {
          "id": "12-1",
          "text": "भारताचा राष्ट्रीय प्राणी कोणता?",
          "options": ["सिंह", "हत्ती", "वाघ", "बिबट्या"],
          "correctAnswer": 2,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "12-2",
          "text": "खालीलपैकी कोणता पाळीव प्राणी आहे?",
          "options": ["कोल्हा", "गाय", "लांडगा", "अस्वल"],
          "correctAnswer": 1,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "12-3",
          "text": "वाघाच्या पिल्लाला काय म्हणतात?",
          "options": ["वासरू", "कोकरू", "बछडा", "रेडू"],
          "correctAnswer": 2,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "12-4",
          "text": "सर्वात बुद्धिमान जलचर प्राणी कोणता मानला जातो?",
          "options": ["मगर", "मासा", "डॉल्फिन", "कासव"],
          "correctAnswer": 2,
          "difficulty": Difficulty.HARD
        },
        {
          "id": "12-5",
          "text": "शेतकऱ्याचा मित्र कोणाला म्हणतात?",
          "options": ["साप", "बैल", "गांडूळ", "वरील सर्व"],
          "correctAnswer": 3,
          "difficulty": Difficulty.MEDIUM
        }
      ],
      "flashcards": [
        { "id": "12-f1", "front": "अभयारण्य", "back": "प्राण्यांसाठी राखीव असलेले जंगल." },
        { "id": "12-f2", "front": "पाळीव प्राणी", "back": "घरात पाळले जाणारे प्राणी." },
        { "id": "12-f3", "front": "हिंस्र", "back": "जंगली किंवा शिकारी प्राणी." },
        { "id": "12-f4", "front": "पक्षी", "back": "आकाशात उडणारे प्राणी." },
        { "id": "12-f5", "front": "अंडज", "back": "अंडी घालणारे प्राणी." }
      ]
    },
    {
      "id": "13",
      "title": "डॉ. बाबासाहेब आंबेडकर (Dr. Ambedkar)",
      "isLoaded": true,
      "summaryEn": "The architect of the Indian Constitution and a champion of human rights.",
      "summaryMr": "डॉ. बाबासाहेब आंबेडकर हे भारतीय राज्यघटनेचे शिल्पकार आहेत. त्यांनी समतेसाठी मोठे आंदोलन केले.",
      "practiceQuestions": [
        {
          "id": "13-1",
          "text": "भारतीय राज्यघटनेचे शिल्पकार कोण?",
          "options": ["नेहरू", "गांधी", "डॉ. आंबेडकर", "पटेल"],
          "correctAnswer": 2,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "13-2",
          "text": "डॉ. आंबेडकरांचा जन्म कोठे झाला?",
          "options": ["मुंबई", "महू (मध्य प्रदेश)", "नागपूर", "रत्नागिरी"],
          "correctAnswer": 1,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "13-3",
          "text": "चवदार तळ्याचे सत्याग्रह कोठे झाले?",
          "options": ["नाशिक", "महाड", "पुणे", "सातारा"],
          "correctAnswer": 1,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "13-4",
          "text": "आंबेडकरांनी बौद्ध धर्म कोठे स्वीकारला?",
          "options": ["नागपूर", "मुंबई", "सारनाथ", "गया"],
          "correctAnswer": 0,
          "difficulty": Difficulty.HARD
        },
        {
          "id": "13-5",
          "text": "डॉ. आंबेडकरांना कोणता सर्वोच्च किताब मिळाला आहे?",
          "options": ["पद्मश्री", "भारतरत्न", "ज्ञानपीठ", "अर्जुन पुरस्कार"],
          "correctAnswer": 1,
          "difficulty": Difficulty.EASY
        }
      ],
      "flashcards": [
        { "id": "13-f1", "front": "राज्यघटना", "back": "भारताचा सर्वोच्च कायदा (Constitution)." },
        { "id": "13-f2", "front": "१४ एप्रिल", "back": "आंबेडकर जयंती." },
        { "id": "13-f3", "front": "बौद्ध धर्म", "back": "आंबेडकरांनी स्वीकारलेला धर्म." },
        { "id": "13-f4", "front": "दलित उद्धार", "back": "दलितांच्या हक्कांसाठी केलेले कार्य." },
        { "id": "13-f5", "front": "उच्च शिक्षण", "back": "त्यांनी परदेशात जाऊन मिळवलेली पदवी." }
      ]
    },
    {
      "id": "14",
      "title": "व्यायाम आणि आरोग्य (Health)",
      "isLoaded": true,
      "summaryEn": "Exercise is crucial for a healthy body and mind. Learn simple yoga and activities.",
      "summaryMr": "निरोगी शरीर आणि मनासाठी नियमित व्यायाम करणे आवश्यक आहे. योगासने आणि खेळ यामुळे आरोग्य सुधारते.",
      "practiceQuestions": [
        {
          "id": "14-1",
          "text": "व्यायाम केल्यामुळे काय वाढते?",
          "options": ["आळस", "रोग", "प्रतिकारशक्ती आणि शक्ती", "वजन"],
          "correctAnswer": 2,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "14-2",
          "text": "योगासनांची सुरुवात कोणत्या दिवशी साजरी केली जाते?",
          "options": ["१५ ऑगस्ट", "२१ जून", "१ मे", "२ ऑक्टोबर"],
          "correctAnswer": 1,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "14-3",
          "text": "मैदानी खेळ खेळल्यामुळे काय होते?",
          "options": ["वेळ वाया जातो", "शरीर चपळ बनते", "थकवा येतो", "काहीच नाही"],
          "correctAnswer": 1,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "14-4",
          "text": "निरोगी राहण्यासाठी किती तास झोप आवश्यक आहे?",
          "options": ["२ तास", "४ तास", "७ ते ८ तास", "१२ तास"],
          "correctAnswer": 2,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "14-5",
          "text": "सूर्य नमस्कारात किती स्थिती असतात?",
          "options": ["५", "१०", "१२", "१५"],
          "correctAnswer": 2,
          "difficulty": Difficulty.HARD
        }
      ],
      "flashcards": [
        { "id": "14-f1", "front": "योगासने", "back": "शारीरिक आणि मानसिक व्यायाम." },
        { "id": "14-f2", "front": "मैदानी खेळ", "back": "खो-खो, कबड्डी, फुटबॉल इ." },
        { "id": "14-f3", "front": "प्रतिकारशक्ती", "back": "रोगांशी लढण्याची ताकद." },
        { "id": "14-f4", "front": "संतुलित आहार", "back": "Balanced Diet." },
        { "id": "14-f5", "front": "प्राणायाम", "back": "श्वासावर नियंत्रण ठेवण्याचा व्यायाम." }
      ]
    },
    {
      "id": "15",
      "title": "अंतराळ सफर (Space)",
      "isLoaded": true,
      "summaryEn": "A journey through the stars and planets. Learn about Indian space missions.",
      "summaryMr": "आकाश, ग्रह आणि तारे यांची माहिती मनोरंजक असते. भारताच्या चांद्रयान मोहिमेबद्दल अधिक जाणून घेऊया.",
      "practiceQuestions": [
        {
          "id": "15-1",
          "text": "आपल्या सूर्यमालेत किती मुख्य ग्रह आहेत?",
          "options": ["७", "८", "९", "१०"],
          "correctAnswer": 1,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "15-2",
          "text": "अंतराळात जाणारे पहिले भारतीय कोण?",
          "options": ["राकेश शर्मा", "कल्पना चावला", "सुनीता विल्यम्स", "विक्रम साराभाई"],
          "correctAnswer": 0,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "15-3",
          "text": "भारताची अंतराळ संशोधन संस्था कोणती?",
          "options": ["NASA", "ISRO", "DRDO", "BARC"],
          "correctAnswer": 1,
          "difficulty": Difficulty.EASY
        },
        {
          "id": "15-4",
          "text": "चंद्रावर जाणारे पहिले मानव कोण?",
          "options": ["युरि गागारिन", "नील आर्मस्ट्राँग", "राकेश शर्मा", "बझ एल्ड्रिन"],
          "correctAnswer": 1,
          "difficulty": Difficulty.MEDIUM
        },
        {
          "id": "15-5",
          "text": "भारताच्या चांद्रयान-३ चे यशस्वी लँडिंग कोठे झाले?",
          "options": ["चंद्राचा उत्तर ध्रुव", "चंद्राचा दक्षिण ध्रुव", "मंगळ", "शुक्र"],
          "correctAnswer": 1,
          "difficulty": Difficulty.HARD
        }
      ],
      "flashcards": [
        { "id": "15-f1", "front": "इस्रो (ISRO)", "back": "भारतीय अंतराळ संशोधन संस्था." },
        { "id": "15-f2", "front": "उपग्रह", "back": "Satellite." },
        { "id": "15-f3", "front": "चांद्रयान", "back": "भारताची चंद्र मोहीम." },
        { "id": "15-f4", "front": "मंगळयान", "back": "मंगळ ग्रहावर गेलेले भारताचे यान." },
        { "id": "15-f5", "front": "आकाशगंगा", "back": "तारांचा समूह (Galaxy)." }
      ]
    }
  ],
  "grandQuiz": [
    { "id": "g-1", "text": "महाराष्ट्राची राजधानी कोणती?", "options": ["पुणे", "नागपूर", "मुंबई", "नाशिक"], "correctAnswer": 2, "difficulty": Difficulty.EASY },
    { "id": "g-2", "text": "ज्ञानेश्वरांचे जन्मस्थान कोणते?", "options": ["आळंदी", "आपेगाव", "पैठण", "देहू"], "correctAnswer": 1, "difficulty": Difficulty.EASY },
    { "id": "g-3", "text": "तुकाराम महाराज कोणत्या गावचे होते?", "options": ["देहू", "आळंदी", "नाशिक", "पैठण"], "correctAnswer": 0, "difficulty": Difficulty.EASY },
    { "id": "g-4", "text": "भारताच्या पहिल्या महिला शिक्षिका कोण?", "options": ["सरोजिनी नायडू", "सावित्रीबाई फुले", "इंदिरा गांधी", "आनंदीबाई जोशी"], "correctAnswer": 1, "difficulty": Difficulty.EASY },
    { "id": "g-5", "text": "भारतीय राज्यघटनेचे शिल्पकार कोणाला म्हणतात?", "options": ["नेहरू", "गांधी", "डॉ. आंबेडकर", "सरदार पटेल"], "correctAnswer": 2, "difficulty": Difficulty.EASY },
    { "id": "g-6", "text": "महाराष्ट्र राज्याची स्थापना कधी झाली?", "options": ["१ मे १९६०", "१५ ऑगस्ट १९४७", "२६ जानेवारी १९५०", "१ मे १९५०"], "correctAnswer": 0, "difficulty": Difficulty.EASY },
    { "id": "g-7", "text": "नागपूर शहर कोणत्या फळासाठी प्रसिद्ध आहे?", "options": ["आंबा", "द्राक्षे", "संत्री", "चिकू"], "correctAnswer": 2, "difficulty": Difficulty.EASY },
    { "id": "g-8", "text": "भारताचा स्वातंत्र्यदिन कधी असतो?", "options": ["२६ जानेवारी", "१५ ऑगस्ट", "२ ऑक्टोबर", "१ मे"], "correctAnswer": 1, "difficulty": Difficulty.EASY },
    { "id": "g-9", "text": "शिवाजी महाराजांचा जन्म कोठे झाला?", "options": ["रायगड", "प्रतापगड", "शिवनेरी", "सिंहगड"], "correctAnswer": 2, "difficulty": Difficulty.EASY },
    { "id": "g-10", "text": "झाडे आपल्याला कोणता वायू देतात?", "options": ["कार्बन डायऑक्साइड", "नायट्रोजन", "ऑक्सिजन", "हायड्रोजन"], "correctAnswer": 2, "difficulty": Difficulty.EASY },
    { "id": "g-11", "text": "मुलींची पहिली शाळा कोठे सुरू झाली?", "options": ["मुंबई", "नाशिक", "पुणे", "सातारा"], "correctAnswer": 2, "difficulty": Difficulty.MEDIUM },
    { "id": "g-12", "text": "पाण्याचा मुख्य स्रोत कोणता?", "options": ["नदी", "विहीर", "पाऊस", "धरण"], "correctAnswer": 2, "difficulty": Difficulty.EASY },
    { "id": "g-13", "text": "भारताचा राष्ट्रीय प्राणी कोणता?", "options": ["सिंह", "वाघ", "हत्ती", "चित्ता"], "correctAnswer": 1, "difficulty": Difficulty.EASY },
    { "id": "g-14", "text": "डॉ. आंबेडकरांचा जन्म कोठे झाला?", "options": ["मुंबई", "नागपूर", "महू", "रत्नागिरी"], "correctAnswer": 2, "difficulty": Difficulty.MEDIUM },
    { "id": "g-15", "text": "जागतिक योग दिन कधी असतो?", "options": ["१५ ऑगस्ट", "२१ जून", "१ मे", "५ सप्टेंबर"], "correctAnswer": 1, "difficulty": Difficulty.MEDIUM },
    { "id": "g-16", "text": "इस्रो (ISRO) ही संस्था कशाशी संबंधित आहे?", "options": ["शेती", "शिक्षण", "अंतराळ संशोधन", "खेळ"], "correctAnswer": 2, "difficulty": Difficulty.EASY },
    { "id": "g-17", "text": "ज्ञानेश्वरांच्या मोठ्या भावाचे नाव काय होते?", "options": ["निवृत्तीनाथ", "सोपान", "मुक्ताबाई", "विठ्ठलपंत"], "correctAnswer": 0, "difficulty": Difficulty.MEDIUM },
    { "id": "g-18", "text": "तुकारामांच्या अभंग संग्रहाला काय म्हणतात?", "options": ["ज्ञानेश्वरी", "गाथा", "दासबोध", "भावार्थ दीपिका"], "correctAnswer": 1, "difficulty": Difficulty.MEDIUM },
    { "id": "g-19", "text": "प्रजासत्ताक दिन कधी साजरा केला जातो?", "options": ["१५ ऑगस्ट", "२६ जानेवारी", "१ मे", "१४ नोव्हेंबर"], "correctAnswer": 1, "difficulty": Difficulty.EASY },
    { "id": "g-20", "text": "शिवनेरी किल्ला कोणत्या जिल्ह्यात आहे?", "options": ["सातारा", "पुणे", "रायगड", "कोल्हापूर"], "correctAnswer": 1, "difficulty": Difficulty.MEDIUM },
    { "id": "g-21", "text": "सावित्रीबाईंच्या पतीचे नाव काय होते?", "options": ["जोतिराव फुले", "शाहू महाराज", "आंबेडकर", "टिळक"], "correctAnswer": 0, "difficulty": Difficulty.EASY },
    { "id": "g-22", "text": "जागतिक जल दिन कधी असतो?", "options": ["२२ मार्च", "५ जून", "१ मे", "१५ ऑगस्ट"], "correctAnswer": 0, "difficulty": Difficulty.HARD },
    { "id": "g-23", "text": "शेतकऱ्याचा मित्र कोणाला म्हणतात?", "options": ["बैल", "साप", "गांडूळ", "वरील सर्व"], "correctAnswer": 3, "difficulty": Difficulty.MEDIUM },
    { "id": "g-24", "text": "चवदार तळ्याचा सत्याग्रह कोठे झाला?", "options": ["नाशिक", "महाड", "पुणे", "मुंबई"], "correctAnswer": 1, "difficulty": Difficulty.HARD },
    { "id": "g-25", "text": "अंतराळात जाणारे पहिले भारतीय कोण?", "options": ["राकेश शर्मा", "कल्पना चावला", "सुनीता विल्यम्स", "अब्दुल कलाम"], "correctAnswer": 0, "difficulty": Difficulty.MEDIUM },
    { "id": "g-26", "text": "मराठीत ९९ ला काय म्हणतात?", "options": ["ऐंशी", "नव्वद", "नव्याण्णव", "एकशे नऊ"], "correctAnswer": 2, "difficulty": Difficulty.EASY },
    { "id": "g-27", "text": "प्रश्न विचारण्यासाठी कोणते चिन्ह वापरतात?", "options": ["!", "?", ".", ","], "correctAnswer": 1, "difficulty": Difficulty.EASY },
    { "id": "g-28", "text": "'नाक मुरडणे' वाक्प्रचाराचा अर्थ काय?", "options": ["हसणे", "रडणे", "नापसंती दाखवणे", "मदत करणे"], "correctAnswer": 2, "difficulty": Difficulty.MEDIUM },
    { "id": "g-29", "text": "सूर्य नमस्कारात किती स्थिती असतात?", "options": ["५", "१०", "१२", "१५"], "correctAnswer": 2, "difficulty": Difficulty.HARD },
    { "id": "g-30", "text": "मराठी राजभाषा दिन कधी असतो?", "options": ["१ मे", "२७ फेब्रुवारी", "१५ ऑगस्ट", "२६ जानेवारी"], "correctAnswer": 1, "difficulty": Difficulty.MEDIUM }
  ],
  "grandFlashcards": [
    { "id": "gf-1", "front": "१ मे", "back": "महाराष्ट्र दिन." },
    { "id": "gf-2", "front": "तिरंगा", "back": "भारताचा राष्ट्रध्वज." },
    { "id": "gf-3", "front": "ज्ञानेश्वरी", "back": "संत ज्ञानेश्वरांचा ग्रंथ." },
    { "id": "gf-4", "front": "देहू", "back": "संत तुकारामांचे गाव." },
    { "id": "gf-5", "front": "इस्रो", "back": "भारताची अंतराळ संस्था." },
    { "id": "gf-6", "front": "मुंबई", "back": "महाराष्ट्राची राजधानी." },
    { "id": "gf-7", "front": "आपेगाव", "back": "ज्ञानेश्वरांचे जन्मस्थान." },
    { "id": "gf-8", "front": "१५ ऑगस्ट", "back": "भारताचा स्वातंत्र्यदिन." },
    { "id": "gf-9", "front": "शिवनेरी", "back": "शिवाजी महाराजांचे जन्मस्थान." },
    { "id": "gf-10", "front": "ऑक्सिजन", "back": "झाडांकडून मिळणारा वायू." },
    { "id": "gf-11", "front": "पुणे", "back": "मुलींची पहिली शाळा सुरू झालेले शहर." },
    { "id": "gf-12", "front": "पाणी", "back": "सजीवांचे जीवन." },
    { "id": "gf-13", "front": "वाघ", "back": "भारताचा राष्ट्रीय प्राणी." },
    { "id": "gf-14", "front": "१४ एप्रिल", "back": "आंबेडकर जयंती." },
    { "id": "gf-15", "front": "योगासने", "back": "शारीरिक आणि मानसिक व्यायाम." },
    { "id": "gf-16", "front": "चांद्रयान", "back": "भारताची चंद्र मोहीम." },
    { "id": "gf-17", "front": "अभंग", "back": "तुकारामांची काव्यरचना." },
    { "id": "gf-18", "front": "२६ जानेवारी", "back": "प्रजासत्ताक दिन." },
    { "id": "gf-19", "front": "सह्याद्री", "back": "महाराष्ट्रातील पर्वतरांग." },
    { "id": "gf-20", "front": "सावित्रीबाई फुले", "back": "पहिल्या महिला शिक्षिका." },
    { "id": "gf-21", "front": "पूर्णविराम", "back": "वाक्य संपल्यावर दिले जाणारे चिन्ह." },
    { "id": "gf-22", "front": "हातभार लावणे", "back": "मदत करणे." },
    { "id": "gf-23", "front": "बेरीज", "back": "अंकांची मिळवणी." },
    { "id": "gf-24", "front": "अशोकचक्र", "back": "राष्ट्रध्वजाच्या मध्यभागी असलेले चक्र." },
    { "id": "gf-25", "front": "राकेश शर्मा", "back": "पहिले भारतीय अंतराळवीर." },
    { "id": "gf-26", "front": "२७ फेब्रुवारी", "back": "मराठी भाषा दिन." },
    { "id": "gf-27", "front": "अहिराणी", "back": "खानदेशातील बोलीभाषा." },
    { "id": "gf-28", "front": "गाथा", "back": "तुकारामांच्या अभंगांचा संग्रह." },
    { "id": "gf-29", "front": "संजीवन समाधी", "back": "ज्ञानेश्वरांनी आळंदीत घेतलेली समाधी." },
    { "id": "gf-30", "front": "क्रांतीज्योती", "back": "सावित्रीबाई फुले यांना दिलेली उपाधी." }
  ]
};
