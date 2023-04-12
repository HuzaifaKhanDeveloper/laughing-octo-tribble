const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "TheBuddyz | Portfolio",
  description:
    "TheBuddyz is a team of skilled and experienced brothers who provide top-notch programming services. As freelancers, we specialize in developing customized solutions tailored to our clients' specific needs, using our combined expertise in a wide range of programming languages and technologies. Our mission is to deliver high-quality work and exceptional customer service, helping our clients bring their ideas to life.",
  og: {
    title: "TheBuddyz",
    type: "website",
    url: "http://thebuddyz.com/",
  },
};

//Home Page
const greeting = {
  title: "Salam!",
  sub: "TheBuddyz",
  logo_name: "TheBuddyz",
  resumeLink: "",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Fiverr",
      iconifyClassname: "simple-icons:fiverr",
      style: {
        color: "#00b22d",
      },
      profileLink: "https://www.fiverr.com/buddiesofficial?",
    },
    {
      siteName: "Facebook",
      iconifyClassname: "simple-icons:facebook",
      style: {
        color: "White",
      },
      profileLink: "https://www.facebook.com/TheBuddyzOfficial",
    },
    {
      siteName: "UpWork",
      iconifyClassname: "simple-icons:upwork",
      style: {
        color: "#6fda44",
      },
      profileLink: "https://www.upwork.com/freelancers/~012266cb5607e5d9e4",
    },
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/TheBuddiesOfficial",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/the-buddyz-50b4ba267/",
    },  
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science & Analysis",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production-ready models for various deep learning and statistical use cases",
        "⚡ Experience in working with Computer Vision using OpenCV and NLP projects(T5-Transformer & OpenAI)",
        "⚡ Having good hands-on with Data Cleaning, processing & Analysing using Pandas, Tableau & PowerBI",
        "⚡ Experience with Text-to-speech encoders/decoders (speech synthesis) & Voice Cloning",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Amazon",
          fontAwesomeClassname: "simple-icons:amazon",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using HTML5, CSS3, BootStrap5, ReactJS & NodeJS",
        "⚡ Creating blockchain application using Web3, Solidity",
        "⚡ Having experience in Domain & Hosting using Netlify, Vercel, Heroku & Hostinger",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos-bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Solidity",
          fontAwesomeClassname: "simple-icons:solidity",
          style: {
            backgroundColor: "#000000",
            color: "#FFFFFF",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interfaces for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
        "⚡ Applying latest Design principles and experienced in product wireframing",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#2fa3f7",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Our projects make use of a vast variety of latest technology tools. Our best experience is creating Data Science projects and deploying them to web applications using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "Pancakeswap",
      img_path: "project-06.png",
      description:
        "PancakeSwap is a decentralized exchange on Binance Smart Chain known for its user-friendly interface and ability to earn rewards through yield farming.",
      tags: [
        {
          lang: "Typescript",
          color: "#007acc",
        },
        {
          lang: "NextJS",
          color: "#000000",
        },
        {
          lang: "Solidity",
          color: "#808080",
        },
        {
          lang: "JavaScript",
          color: "#F0DB4F",
        },
        {
          lang: "Netlify",
          color: "#00AD9F",
        },
      ],
      link: "https://thebuddies-pancakeswap.netlify.app/",
    },

    // {
    //   title: "Voice Gender Detection",
    //   img_path: "voice.gif",
    //   description:
    //     "A streamlit webapp which detects user's gender and emotion based on realtime audio input.",
    //   tags: [
    //     {
    //       lang: "ongoing",
    //       color: "red",
    //     },
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "matplotlib",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "tensorflow",
    //       color: "#4257f5",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //   ],
    //   link: "",
    //   code: "",
    //   linkcolor: "white",
    // },
    {
      title: "Uniswap",
      img_path: "neural.png",
      description:
        "Uniswap is a decentralized exchange known for its user-friendly interface, low fees, and ability to earn rewards through liquidity provision.",
      tags: [
        {
          lang: "Typescript",
          color: "#007acc",
        },
        {
          lang: "NextJS",
          color: "#000000",
        },
        {
          lang: "Solidity",
          color: "#808080",
        },
        {
          lang: "JavaScript",
          color: "#F0DB4F",
        },
        {
          lang: "Netlify",
          color: "#00AD9F",
        },
      ],
      link: "https://thebuddies-uniswap.netlify.app/",
    },
    // {
    //   title: "Semantic Search APP",
    //   img_path: "project-03.png",
    //   description:
    //     "Demo of OpenAI's GPT-3 model on Semantic search using streamlit.",
    //   tags: [
    //     {
    //       lang: "ongoing",
    //       color: "red",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //   ],
    //   link: "",
    //   code: "",
    //   linkcolor: "white",
    // },
    // {
    //   title: "Youtube Thumbnail Generator & AutoUploader",
    //   img_path: "project-02.png",
    //   description:
    //     "A python streamlit webapp to automate generating & uploading youtube thumbnails using Youtube v3 API",
    //   tags: [
    //     {
    //       lang: "internal project",
    //       color: "red",
    //     },
    //     {
    //       lang: "youtube v3 api",
    //       color: "red",
    //     },
    //   ],
    //   link: "",
    //   code: "",
    //   linkcolor: "white",
    // },

    {
      title: "Sushiswap",
      img_path: "news.png",
      description:
        "SushiSwap is a decentralized exchange known for its ability to earn rewards through liquidity provision and yield farming on the Ethereum blockchain.",
      tags: [
        {
          lang: "Typescript",
          color: "#007acc",
        },
        {
          lang: "NextJS",
          color: "#000000",
        },
        {
          lang: "Solidity",
          color: "#808080",
        },
        {
          lang: "JavaScript",
          color: "#F0DB4F",
        },
        {
          lang: "Netlify",
          color: "#00AD9F",
        },
      ],
      link: "https://www.sushi.com/swap",
    },
    // {
    //   title: "ActiWeight",
    //   img_path: "acti.gif",
    //   description:
    //     "ActiWeight is an Interactive Visualizer for understanding intuition behind 10 Activation Functions used in Neural Networks.",
    //   tags: [
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "matplotlib",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "Heroku",
    //       color: "#3c0095",
    //     },
    //   ],
    //   link: "https://www.youtube.com/watch?v=2vk9lQuX_1Q",
    //   code: "https://github.com/rohankokkula/Actiweight",
    //   linkcolor: "white",
    // },
  ],
};

// Projects Page
const servicesHeader = {
  title: "Services",
  description:
    "We offer personalized services to support businesses of all sizes and industries. Our services include strategic planning, consulting, implementation, and ongoing support. With our team of experts, we are committed to delivering high-quality services to help you achieve your goals. ",
};  

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const servicecards = {
  list: [
    {
      title: "Dex Cloning",
      img_path: "project-06.png",
      description:
        "Build a unique decentralized exchange platform with customized features and branding.",
      tags: [
        {
          lang: "Typescript",
          color: "#007acc",
        },
        {
          lang: "NextJS",
          color: "#000000",
        },
        {
          lang: "Solidity",
          color: "#808080",
        },
        {
          lang: "JavaScript",
          color: "#F0DB4F",
        },
      ],
      link: "https://www.fiverr.com/share/wPQ78B",
    },
   
    {
      title: "Mern Stack Development",
      img_path: "mern.png",
      description:
      "Build fast and responsive web apps with MERN stack development using MongoDB, Express.js, React, and Node.js.z",
      tags: [
       
        {
          lang: "MongoDB",
          color: "#589636",
        },

        {
          lang: "ExpressJs",
          color: "#68A063",
        },
        {
          lang: "ReactJS",
          color: "#7cc5d9",
        },
        {
          lang: "NextJS",
          color: "#45ce05",
        },
        {
          lang: "JavaScript",
          color: "#FF0000   ",
        },
       
      ],
      link: "https://www.fiverr.com/share/wPQ78B",
    },

    {
      title: "React / Next Js",
      img_path: "reactnextwebapp.png",
      description:
        "Build reusable and responsive user interfaces for web or mobile applications with React.js/Next.js.",
      tags: [
       
        {
          lang: "ReactJS",
          color: "#7cc5d9",
        },
        {
          lang: "NextJS",
          color: "#45ce05",
        },
        {
          lang: "JavaScript",
          color: "#FF0000   ",
        }, 
        {
          lang: "Boostrap",
          color: "#563d7c",
        },

      ],
      link: "https://www.fiverr.com/share/qPz6Eg",
    }, 

     {
      title: "WordPress Development",
      img_path: "wordpress.png",
      description:
        "Build a professional and responsive website for your business with custom WordPress development services.",
      tags: [
            
        {
          lang: "ReactJS",
          color: "#7cc5d9",
        },
        {
          lang: "NextJS",
          color: "#45ce05",
        },
        {
          lang: "JavaScript",
          color: "#FF0000   ",
        }, 
        {
          lang: "Boostrap",
          color: "#563d7c",
        },

      ],
      link: "#",
    },
    {
      title: "Converting Into React/Next Js",
      img_path: "converting.png",
      description:
        "Converting Figma , Adobe xD , psd Into React Js Or Next Js",
      tags: [
        {
          lang: "Figma",
          color: "#b67148 ",
        },
        {
          lang: "Adobe xd / Psd",
          color: "#ec640f ",
        },
      
        {
          lang: "ReactJS",
          color: "#7cc5d9",
        },
        {
          lang: "NextJS",
          color: "#45ce05",
        },
        {
          lang: "JavaScript",
          color: "#FF0000",
        }, 
        {
          lang: "Boostrap",
          color: "#563d7c",
        },

      ],
      link: "#",
    }
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Data Scientist",
        subtitle: "Nactus India Services Private Limited",
        date: "June 2020 - present",
        content: [
          "Used T5 Transformer Model to build a Question Answering Model which generates questions based on Keywords extracted (WordNet, Sense2Vec) from studyshot notes.",
          "Built an MCQ Generation model using BERT",
          "Developed a personalized Chatbot using Rasa (Botfront.io).",
          "Created an Automatic Thumbnail Generator & Uploader for our youtube videos using Youtube v3 API",
          "Working on OpenAI's semantic search engine.",
          "Created a Clean MaterialUI Design for prototyping and design fixing before production-ready of APP",
          "Created FrontEnd components for StudyShot website",
          "Working on recommendation system for concept notes and questions based on student's behavior on our Flutter App(tracking)",
        ],
      },
      {
        title: "Machine Learning Intern",
        subtitle: "Listnr",
        date: "April 2020 - June 2020",
        content: [
          "My role at Listnr included a lot of research work about Audio Encoders and Vocoders and Speech Synthesis in general.",
          "Worked on some SOTA Inference TTS Models such as TacoTron2, FastSpeech2, and Wavenet.",
          "Also had hands-on with real-time voice cloning algorithm.",
        ],
      },
      {
        title: "Data Science Intern",
        subtitle: "iNeuron.ai",
        date: "Nov 2020 - January 2021",
        content: [
          "Phase 1 included Data Cleaning & Data Annotation for object detection task",
          "Used YOLO v5 for Fire Detection Project",
        ],
      },
      {
        title: "Summer Analytics Participant",
        subtitle: "IIT Guwahati",
        date: "April 2020 - June 2020",
        content: [
          "Learnt & applied various Machine Learning libraries",
          "Had hands-on with Data Visualization techniques using matplotlib, plotly, streamlit",
          "Understood and applied Neural networks using Tensorflow and finally competed in Kaggle Hackathon ranking 135 (top 16 percentile) among 854 Kaggle participants",
          "Ranked 85 out of 1500+ students for overall performance.",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Bachelor of Engineering in Information Technology",
          subtitle: "Vidyalankar Institute of Technology, Mumbai",
          date: "2016 - 2020",
          content: ["CGPA: 8.06/10"],
        },
        {
          title: "Higher Secondary Certificate [HSC]",
          subtitle: "Dr. Antonio Da Silva Technical Jr. College, Mumbai",
          date: "2014 - 2016",
          content: ["Precentage: 80%"],
        },
      ],
    },
    {
      title: ["Ranks and Achivements"],
      data: [
        {
          title: "Ranks",
          content: [
            "#135/854 in Summer Analytics Kaggle Competition by IITG",
            "#113/5064 in CV-NLP Hackathon by HackerEarth",
          ],
        },
        {
          title: "Achievements",
          content: [
            "Designing Team Head at ACM-VIT",
            "5⭐ Gold Badges for Python & Problem Solving at HackerRank ",
            "Tableau Analyst & Consumer Badge by Tableau Official",
          ],
        },
      ],
    },
    {
      title: ["Freelance Work"],
      data: [
        {
          title: "Consultancy Website",
          subtitle: "kidsworldeducationconsultants.com",
          content: [
            "Created and hosted a website for consultancy providers in Kids Education Domain",
          ],
        },
        {
          title: "Portfolio Website",
          subtitle: "pranavphulware.netlify.app",
          content: [
            "Built a personal Filmography portfolio for a friend and later hosted it at Netlify",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Tableau Analyst",
      subtitle: "Tableau",
      logo_path: "tabana-01.png",
      certificate_link:
        "https://www.credly.com/badges/2d43f401-7be0-407d-9a77-7477dda8cade/linked_in_profile",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Tableau Consumer",
      subtitle: "Tableau",
      logo_path: "tabcon-01.png",
      certificate_link:
        "https://www.credly.com/badges/e5befe7b-2eec-486f-b77e-bd2458c18b26/linked_in_profile",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Problem solving",
      subtitle: "HackerRank",
      logo_path: "problem-01.png",
      certificate_link: "https://www.hackerrank.com/rohankokkula",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Python",
      subtitle: "HackerRank",
      logo_path: "python-01.png",
      certificate_link: "https://www.hackerrank.com/rohankokkula",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Certificate of Merit",
      subtitle: "Summer Analytics | IIT Guwahati",
      logo_path: "iitg-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "IITG",
      color_code: "#000000",
    },
    {
      title: "Tableau Desktop Qualified Associate",
      subtitle: "SimpliLearn",
      logo_path: "simplilearn-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Simplilearn",
      color_code: "#000000",
    },
    {
      title: "Question Generation using Transformers",
      subtitle: "Udemy",
      logo_path: "udemy-01.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-b17c4c21-91e3-4f8b-b9c2-259468910985/",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "Machine Learning",
      subtitle: "Stanford University",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#000000",
    },
    {
      title: "Data Visualization",
      subtitle: "University of Michigan",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "University of Michigan",
      color_code: "#000000",
    },
    {
      title: "Data Scientist Career Track",
      subtitle: "DataCamp",
      logo_path: "datacamp-01.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/track/29f2ddab3fbfd0a470713a19c729c0f9d89c88aa",
      alt_name: "DataCamp",
      color_code: "#000000",
    },
    {
      title: "PowerBI Masters",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://academy.ineuron.ai/certificates/downloads/PB009929.pdf",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Tableau Masters",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://academy.ineuron.ai/certificates/downloads/TB000634.pdf",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Us",
    profile_image_path: "contact.jpg",
    description:
      "We're available on almost every social media. You can message us, We will reply within 24 hours. We can help you with Blockchain, AI, React, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "1675 Fordham Way, Mountain View, CA 94040, USA",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 (707) 500-2924",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/TheBuddiesOfficial",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/the-buddyz-50b4ba267/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "Fiverr",
  //   link: "https://www.youtube.com/c/rohanalytics",
  //   iconifyClassname: "simple-icons:fiverr", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:thebuddyzofficial@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/soberohan/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  servicesHeader,
  servicecards,
  certifications,
  resumeleft,
  resumeright,
};
