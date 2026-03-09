// ══════════════════════════════════════════════════════════════
// DATA
// ══════════════════════════════════════════════════════════════
var currentPage='home',openFaq=null,worksFilter='All',contactSent=false;

var WD=[
  {id:1,num:"01",year:"2025",title:"CrowdCure",cats:["AI/ML","Research","Web"],
   desc:"AI-powered disaster relief coordination platform with multilingual NLP, real-time dashboards, and intelligent resource classification. Authored research paper presented at Paper-a-thon 2025, Microsoft Learn Student Ambassador Club.",
   tags:["Python","TensorFlow","NLP","React","REST API","Azure"],
   bg:"linear-gradient(135deg,#030818,#091840)",em:"AI",link:"#",github:"https://github.com/RyomenSukuna25",
   arch:"Multilingual NLP Engine → Event Classifier → Resource Mapper → REST API → React Dashboard → Azure Deployment",
   archFlow:["Multilingual Input","NLP Classifier","Resource Mapper","FastAPI Backend","Real-time Dashboard","Azure Cloud"],
   challenges:"Handling 7+ languages with inconsistent disaster terminology. Real-time updates under high load. Getting the resource classification model to generalise across event types.",
   learned:"How to design systems under ambiguity. That NLP in crisis contexts demands precision over speed — a misclassified resource request is not a software bug, it's a real-world failure."
  },
  {id:2,num:"02",year:"2024",title:"Maize Disease Detector",cats:["AI/ML","Computer Vision"],
   desc:"CNN model detecting maize crop diseases from leaf images using TensorFlow. Built for offline deployment on low-end Android devices — AI that works in farm fields, not just data centres.",
   tags:["TensorFlow","Computer Vision","Python","Keras","CNN","TFLite","Android"],
   bg:"linear-gradient(135deg,#030a05,#091a0e)",em:"CV",link:"#",github:"https://github.com/RyomenSukuna25",
   arch:"Image Input → CNN Feature Extractor → Disease Classifier → TFLite Converter → Android Offline App",
   archFlow:["Leaf Image","CNN (Keras)","Disease Classifier","TFLite Export","Android Runtime"],
   challenges:"Training a robust model with limited labelled data. Compressing without accuracy loss for low-memory devices. Handling wildly different lighting conditions in the field.",
   learned:"Model optimisation for constrained hardware is a discipline of its own. Quantisation and pruning aren't afterthoughts — they need to be part of the design from day one."
  },
  {id:3,num:"03",year:"2024",title:"Gym Management System",cats:["Full Stack","Web","Database"],
   desc:"Full-stack web application for gym membership management, session scheduling, and daily operations. Built for a real client — shipped, used, and maintained in production.",
   tags:["JavaScript","HTML/CSS","MySQL","REST API","Responsive Design"],
   bg:"linear-gradient(135deg,#080310,#14062a)",em:"WEB",link:"#",github:"https://github.com/RyomenSukuna25",
   arch:"Client UI → REST API Layer → Business Logic → MySQL → Admin Dashboard",
   archFlow:["Member UI","REST API","Auth + Logic","MySQL Database","Admin Panel"],
   challenges:"Handling concurrent session bookings without double-booking. Designing a schema flexible enough for different membership tiers without over-engineering.",
   learned:"Real clients expose assumptions your test suite never will. The gap between 'it works' and 'it works reliably' is where production software actually lives."
  },
  {id:4,num:"04",year:"2023–24",title:"Team Ethan Racing Electric",cats:["Engineering","EV","Formula Bharat"],
   desc:"Technical contributions to an electric formula race car at Formula Bharat — India's premier EV motorsport competition. Applied systems thinking across mechanical and software domains under real competition pressure.",
   tags:["EV Engineering","CAD","Formula Bharat","Systems Design","Data Logging"],
   bg:"linear-gradient(135deg,#100303,#240808)",em:"EV",link:"#",github:"https://github.com/RyomenSukuna25",
   arch:"Sensor Array → Data Logger → Telemetry Parser → Performance Dashboard → Engineering Decision Loop",
   archFlow:["Sensor Array","Data Logger","Telemetry Parser","Perf Dashboard","Eng. Decisions"],
   challenges:"Integrating software tooling into a team that thinks in mechanical terms. Tight tolerances on data latency for real-time performance decisions during runs.",
   learned:"Cross-disciplinary teams are harder to build than the systems they produce. Shared vocabulary between mechanical and software engineers doesn't happen automatically — you have to build it."
  }
];

var HD=[
  {id:"h1",event:"COHERENCE '26",year:"2025",
   title:"Hackathon Nexus",
   result:"eliminated",resultLabel:"Mentor Eliminated",
   problem:"Students across India miss hackathons constantly — they're scattered across Devfolio, Unstop, HackerEarth, LinkedIn, and dozens of college portals. No single source. Massive signal loss.",
   solution:"Built an automated detection and notification system. Scrapers monitor 10+ platforms continuously, parse event data into a unified schema, deduplicate, and push personalised alerts to students by domain interest.",
   stack:["Python","FastAPI","BeautifulSoup","MongoDB","Telegram Bot API","Cron Jobs"],
   bg:"linear-gradient(135deg,#080a03,#161a06)",em:"NX",
   arch:"Platform Scrapers → Event Parser → Dedup Engine → MongoDB → Filter Layer → Notification Dispatch",
   archFlow:["10+ Platform Scrapers","Event Parser","Dedup Engine","MongoDB Store","Interest Filter","Telegram + Email Alerts"],
   challenges:"Duplicate hackathon listings across platforms were the core technical problem — the same event posted on 4 different sites with different names, dates, and descriptions. Our deduplication logic wasn't robust enough.",
   learned:"A mentor at Coherence '26 identified this as the critical holdback and eliminated us on it. He was right. We'd underestimated deduplication as a problem. It's not a feature — it's the entire product. That lesson alone was worth the loss.",
   holdback:"Deduplication at scale across inconsistent, semi-structured data sources."
  }
];

var MEDIUM_PROFILE='https://medium.com/@chiragdnagvekar';
var BD=[
  {cat:"AI & Research",title:"Building CrowdCure: What I Learned Designing AI for Disaster Relief",date:"March 2025",summary:"A deep-dive into how we designed CrowdCure's multilingual NLP pipeline, the architecture decisions that made real-time disaster coordination possible, and what I wish I'd known going in.",bg:"linear-gradient(135deg,#030818,#091840)",em:"AI",fs:96,span2:true,live:true,url:MEDIUM_PROFILE},
  {cat:"Machine Learning",title:"Computer Vision for Farmers: Making AI Accessible in Agriculture",date:"January 2025",summary:"How we trained a CNN to identify maize leaf diseases with 94% accuracy using limited labeled data, and the challenges of deploying AI in low-connectivity field environments.",bg:"linear-gradient(135deg,#030a05,#091a0e)",em:"CV",fs:64,live:true,url:MEDIUM_PROFILE},
  {cat:"Engineering",title:"Why a Mechanical Background Makes You a Better Developer",date:"November 2024",summary:"Systems thinking, tolerance stacks, failure mode analysis — the mental models I carried from mech engineering to software and why they make me debug faster than anyone in the room.",bg:"linear-gradient(135deg,#080310,#14062a)",em:"Dev",fs:64,live:true,url:MEDIUM_PROFILE},
  {cat:"Full Stack",title:"REST API Design Patterns I Wish I Knew Earlier",date:"October 2024",summary:"The versioning strategies, error handling patterns, and rate-limiting approaches that would have saved me weeks of refactoring early projects.",bg:"linear-gradient(135deg,#0a0318,#1c0640)",em:"API",fs:64,url:null},
  {cat:"Career",title:"From Mechanical to Software: How I Made the Switch",date:"August 2024",summary:"The honest account of leaving a mechanical engineering path to go all-in on computer science — what I gave up, what I gained, and how both worlds now feed each other.",bg:"linear-gradient(135deg,#0a0603,#221408)",em:"→",fs:64,live:true,url:MEDIUM_PROFILE}
];

var CERTS=[
  {ico:"🏆",issuer:"Microsoft",name:"Azure AI Fundamentals",date:"2025",badge:"AI-900",verify:"#"},
  {ico:"🎓",issuer:"Google",name:"Machine Learning Crash Course",date:"2024",badge:"Completed",verify:"#"},
  {ico:"⚡",issuer:"NPTEL",name:"Programming in Java",date:"2023",badge:"Elite",verify:"#"},
  {ico:"🔬",issuer:"Coursera / DeepLearning.AI",name:"Neural Networks & Deep Learning",date:"2024",badge:"Verified",verify:"#"},
  {ico:"🌐",issuer:"freeCodeCamp",name:"Responsive Web Design",date:"2023",badge:"Certified",verify:"#"},
  {ico:"📊",issuer:"Kaggle",name:"Pandas & Data Visualization",date:"2024",badge:"Expert",verify:"#"}
];

var ORIGIN=[
  {year:"2019–2021",title:"Diploma — Mechanical Engineering",desc:"Started at the machines. Learned to think in tolerances, failure modes, and systems under stress. Drew blueprints before I wrote functions.",tag:"Foundation"},
  {year:"2021",title:"The Pivot",desc:"Mid-diploma, I built my first script to automate a lab report. Three lines of Python rewired my entire trajectory. I realised software was just engineering — but without the weight limits.",tag:"Turning Point"},
  {year:"2022",title:"B.E. Computer Science — Data Science",desc:"Enrolled at University of Mumbai. Carried mechanical thinking into algorithms. While classmates debugged, I was designing systems. Different mental model — same obsession with precision.",tag:"Transition"},
  {year:"2023",title:"Formula Bharat — Team Ethan Racing Electric",desc:"Rejoined engineering — but now as both domains. Contributed to the EV software stack and data systems for a formula-spec electric race car. The two worlds became one.",tag:"Crossover"},
  {year:"2024",title:"First Real AI Product",desc:"Built the Maize Disease Detector — a CNN model that works offline on low-end phones in farm fields. First time AI felt like it had a body and a purpose.",tag:"AI/ML"},
  {year:"2025",title:"CrowdCure — Paper-a-thon 2025",desc:"Authored and presented an AI disaster relief platform at Microsoft Learn Student Ambassador Club. Multilingual NLP, real-time resource dashboards. The most complete thing I've built.",tag:"Research"}
];

var FD=[
  {q:"What types of projects do you take on?",a:"Full-stack web apps, AI/ML systems, data pipelines, UI/UX design, and research-driven engineering. My mechanical engineering background means I think in systems and constraints — not just features."},
  {q:"Are you open to internships or full-time roles?",a:"Yes — actively. Seeking internships and open to part-time/contract work while completing my B.E. Especially excited about AI engineering, full-stack development, and product teams building real-world tools."},
  {q:"What does your development process look like?",a:"Deep discovery first. Then: architecture, iterative builds with regular demos, and clean documented handoff. Good software is built through clarity and intention, not just speed."},
  {q:"Do you work with international clients?",a:"Absolutely. Based in Mumbai but work async-first. Comfortable collaborating remotely across time zones — location is rarely a barrier."},
  {q:"Can you contribute to open-source or research?",a:"Yes, actively. Authored research on CrowdCure, contributed to Formula Bharat. If you're working on something with real impact, let's talk."},
  {q:"How do you handle revisions and feedback?",a:"I build feedback into the process, not bolt it on at the end. Regular demos mean you're never surprised. I prefer early, honest input over a polished mess at the finish line."}
];