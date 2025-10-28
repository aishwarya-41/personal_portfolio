import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const PROJECTS = [
  {
    id: 'recipe-book',
    title: 'Recipe Book',
    summary:
      'A simple React-based CRUD application that allows users to add, view, edit, and delete recipes using a mock JSON backend.',
    tech: ['React', 'Vite', 'JavaScript', 'CSS', 'HTML'],
    image: '/project/project1.png',
    github: 'https://github.com/aishwarya-41/recipe_book',
    description:
      'Recipe Book is a full-featured CRUD web app built using React and Vite. It helps users organize and manage recipes effectively. The project explores component-driven design, efficient state management, and REST-style JSON mock API integration for persistent data handling. It emphasizes responsive UI, fast rendering, and user-friendly navigation.',
    features: [
      'Add, view, edit, and delete recipes using JSON mock backend.',
      'Responsive UI across devices with clean modular components.',
      'Built with Vite for lightning-fast development and hot reload.',
    ],
  },
  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors (Webcam-Based Game)',
    summary:
      'A real-time Rock Paper Scissors game where the computer picks randomly and the user’s move is detected via webcam hand gesture recognition.',
    tech: ['Python', 'OpenCV', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    image: '/project/project2.png',
    github: 'https://github.com/aishwarya-41/rock_paper_scissor',
    description:
      'An interactive real-time game where players compete against the computer using hand gestures captured via webcam. The system uses computer vision and machine learning to recognize hand signs (rock, paper, or scissors) in real-time and determine the winner instantly. It demonstrates gesture recognition, Flask–frontend integration, and efficient real-time processing.',
    features: [
      'Real-time hand gesture detection using OpenCV and Mediapipe.',
      'Random computer choices for each round ensuring fair gameplay.',
      'Dynamic score tracking for wins, losses, and draws.',
      'Responsive web interface with smooth camera interaction.',
      'Cross-platform support for devices with a webcam.',
    ],
  },
  {
    id: 'clinic-management-system',
    title: 'Clinic Management System',
    summary:
      'A web-based application that streamlines communication and workflow between doctors and receptionists at a clinic, managing patients, tokens, and billing efficiently.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    image: '/project/project3.png',
    github: 'https://github.com/aishwarya-41/clinic-management',
    description:
      'The Clinic Management System is designed to simplify daily clinic operations by enabling doctors and receptionists to collaborate seamlessly. It provides secure authentication, real-time patient and billing management using Firebase, and a clean, responsive interface for effective workflow handling. This project focuses on usability, accessibility, and efficient data synchronization between roles.',
    features: [
      'Doctor dashboard with secure login and patient detail view.',
      'Receptionist panel to assign tokens, manage patients, and generate bills.',
      'Dynamic patient list and automatic bill generation with payment tracking.',
      'Secure authentication and error handling for invalid credentials.',
      'Real-time database updates using Firebase Firestore for seamless synchronization.',
    ],
  },
  
  {
    id: 'medicine-tracker',
    title: 'Medicine Tracker App (Ongoing)',
    summary:
      'A React Native mobile application that helps users track their medicines, manage schedules, and maintain consistent medication habits across devices.',
    tech: ['React Native', 'Expo', 'JavaScript', 'Appwrite'],
    image: '/project/project4.png',
    github: 'https://github.com/aishwarya-41/medicine_tracker',
    description:
      'Medicine Tracker is a cross-platform mobile application designed to simplify medication management. Built with React Native and Expo for a smooth development experience, it allows users to log medicines, set daily schedules, and monitor medication history. The backend is powered by Appwrite for real-time updates and secure data storage. Future enhancements include AI-powered medicine detection and reminder notifications.',
    features: [
      'Add, view, edit, and delete medicines with dosage and schedule details.',
      'Track medication history and compliance (planned feature).',
      'Set reminders and receive notifications for scheduled medicines (planned feature).',
      'AI-based medicine detection from bills using PyTesseract (planned feature).',
      'Cross-platform support with Expo for both Android and iOS.',
    ],
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    summary:
      'A simple React-based weather application that displays real-time weather updates using the OpenWeatherMap API.',
    tech: ['React', 'Vite', 'JavaScript', 'CSS', 'HTML'],
    image: '/project/project5.png',
    github: 'https://github.com/aishwarya-41/weather_app',
    description:
      'The Weather App provides users with accurate, real-time weather data fetched from the OpenWeatherMap API. Built with React and Vite for optimal performance, the app offers a clean and intuitive interface where users can search any city and view detailed information including temperature, humidity, wind speed, and weather conditions. The project focuses on simplicity, responsiveness, and efficient API integration.',
    features: [
      'Search and view real-time weather data for any city worldwide.',
      'Fetches accurate weather details using the OpenWeatherMap API.',
      'Responsive design that adapts smoothly across devices.',
      'Clean and modern user interface with clear weather visualization.',
      'Built with Vite for fast development and optimized performance.',
    ],
  },
  
  {
    id: 'market_basket_analysis',
    title: 'Market Basket Analysis',
    summary:
      'A data analysis and web application that discovers market basket patterns using the Apriori algorithm, based on self-collected transaction data from BigBasket, Zepto, and Amazon orders.',
    tech: ['Python', 'Flask', 'pandas', 'mlxtend', 'matplotlib', 'HTML', 'CSS', 'JavaScript'],
    image: '/project/project6.png',
    github: 'https://github.com/aishwarya-41/market_analysis',
    description:
      'This project analyzes real-world transaction data to identify frequent itemsets and association rules using the Apriori algorithm. Data is collected from BigBasket, Zepto, and Amazon orders to provide meaningful insights into consumer purchasing patterns. The application includes a Flask-powered web interface for running analyses, visualizing results, and interpreting business-relevant insights.',
    features: [
      'Cleans and preprocesses real-world transaction data from multiple e-commerce platforms.',
      'Applies Apriori algorithm for frequent itemset mining.',
      'Extracts actionable association rules for business insights.',
      'Interactive web interface for running analyses and viewing results.',
      'Visualizations of frequent items and association rules for easy interpretation.',
    ],
  },
  
  {
    id: 'student-teacher-appointment',
    title: 'Student-Teacher Appointment System',
    summary:
      'A web-based application for scheduling and managing appointments between students and teachers, with dashboards for students, teachers, and admins.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    image: '/project/project7.png',
    github: 'https://github.com/aishwarya-41/student-teacher-appointment',
    description:
      'The Student-Teacher Appointment System streamlines scheduling and communication between students and teachers. Students can book, view, and manage appointments, teachers can respond and oversee schedules, and admins can manage users and verify registrations. The application leverages Firebase for authentication, data storage, and real-time updates, providing a secure and responsive experience.',
    features: [
      'Student dashboard to book, view, and manage appointments, and send messages to teachers.',
      'Teacher dashboard to manage personal schedule and respond to student messages.',
      'Admin dashboard to manage teacher data, verify student registrations, and monitor system statistics.',
      'Secure authentication and real-time updates using Firebase.',
      'Responsive and accessible UI for efficient user interactions.',
    ],
  },
  
  {
    id: 'to-do-list',
    title: 'To-Do List',
    summary:
      'A responsive web-based task manager that allows users to add, view, update, and delete tasks through a simple form-driven interface.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'MySQL'],
    image: '/project/project8.png',
    github: 'https://github.com/aishwarya-41/to_do_list',
    description:
      'The To-Do List application provides an intuitive and responsive interface for managing daily tasks. Users can add new tasks, update existing ones, mark them as complete, or delete them. Built with Flask and MySQL, the application ensures persistent storage and efficient CRUD operations. The design focuses on usability and mobile-friendliness for seamless task management across devices.',
    features: [
      'Add, view, edit, and delete tasks easily through a form-driven interface.',
      'Mark tasks as complete and track progress efficiently.',
      'Responsive design for desktop and mobile use.',
      'Backend powered by Flask with MySQL database via SQLAlchemy for persistent storage.',
      'Clean and intuitive UI to simplify daily task management.',
    ],
  },
  
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot',
    summary:
      'A basic AI-powered chatbot built with Python and Flask, featuring a modular backend and integration with Ollama for natural language conversations.',
    tech: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Ollama'],
    image: '/project/project9.png',
    github: 'https://github.com/aishwarya-41/ai_chatbot',
    description:
      'The AI Chatbot project demonstrates the fundamentals of conversational AI using Python and Ollama. It enables users to chat with an intelligent bot through a simple web or console interface. The backend is modular, allowing easy integration of new NLP models or conversational logic. Flask handles the web communication, and MySQL ensures persistent data storage for chat history and user interactions.',
    features: [
      'Engage in text-based conversations with an AI bot powered by Ollama.',
      'Modular backend for extending NLP capabilities or integrating alternative AI models.',
      'Flask-based architecture for serving responses via a clean web interface.',
      'Persistent chat history management using MySQL.',
      'Simple, extensible, and well-structured Python codebase.',
    ],
  },
  
  {
    id: "music-recommender",
    title: "Music Recommender System",
    summary: "A simple music recommender system using Spotify data with both notebook-based analysis and a Flask web interface for interactive song recommendations.",
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Jupyter Notebook", "pandas", "numpy"],
    image: "/project/project10.png",
    github: "https://github.com/aishwarya-41/music_recommender",
    description: "The Music Recommender System suggests songs based on Spotify song feature data such as tempo, energy, and danceability. It includes both a data science notebook for exploratory analysis and a deployable web app powered by Flask. Users can input song preferences or names to receive similar track recommendations. The project demonstrates how data-driven insights can be integrated into a practical, user-friendly web interface.",
    features: [
      "Recommends songs based on Spotify features and user-selected criteria.",
      "Interactive web interface built with HTML, CSS, and JavaScript.",
      "Flask-powered backend connecting data and recommendation logic.",
      "Exploratory Data Analysis and model development in Jupyter Notebook.",
      "Cleaned Spotify dataset ensures reproducible and high-quality recommendations."
    ]
  },
  {
    id: "counterfeit-currency-detection",
    title: "Advanced Counterfeit Currency Detection",
    summary: "A comprehensive deep learning and machine learning project designed to detect counterfeit banknotes using multiple AI-based methodologies, including CNNs, transfer learning, and hybrid ensemble models.",
    tech: ["Python", "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "OpenCV", "Pandas", "Matplotlib", "Seaborn", "XGBoost", "CatBoost"],
    image: "",
    github: "https://github.com/aishwarya-41/currency_counterfeit_detection",
    description: "This project explores three distinct AI-driven approaches for counterfeit currency detection, combining the power of deep learning and classical machine learning. It evaluates an end-to-end CNN enhanced with CBAM attention, a transfer learning pipeline with traditional ML classifiers, and a hybrid ensemble model integrating both paradigms. The goal is to build robust and deployable systems capable of accurately distinguishing genuine notes from sophisticated forgeries using the Indian Currency Dataset.",
    features: [
      "Implements three advanced variants for counterfeit detection:",
      "Variant 1 (Attention-Enhanced CNN with CBAM): End-to-end CNN model achieving 83.24% test accuracy.",
      "Variant 2 (Transfer Learning + ML Classifiers): Combines MobileNetV2 feature extraction with SVM, Random Forest, and XGBoost, achieving up to 98.74% accuracy (SVM).",
      "Variant 3 (Hybrid Model - MobileNetV2 + CBAM + Ensemble): Combines attention-based refinement with ensemble learning, achieving 70.11% overall accuracy.",
      "Uses Indian Currency Dataset from Mendeley Data for real-world relevance.",
      "Compares the performance of deep, transfer, and hybrid learning architectures.",
      "Fully modular structure — each variant in its own directory with individual documentation.",
      "Comprehensive evaluation metrics, confusion matrices, and visualizations using Matplotlib and Seaborn."
    ]
  }
  
  
]

export default function Projects() {
  const [index, setIndex] = useState(0)
  const clamped = useMemo(
    () => Math.max(0, Math.min(index, PROJECTS.length - 1)),
    [index]
  )

  function prev() {
    setIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length)
  }

  function next() {
    setIndex((i) => (i + 1) % PROJECTS.length)
  }

  return (
    <div className="projects">
      <h2 className="section-title">Projects</h2>

      <div className="carousel card-surface">
        <div
          className="slides"
          style={{ transform: `translateX(-${clamped * 100}%)` }}
        >
          {PROJECTS.map((p) => (
            <div className="project-card" key={p.id}>
              <div className="pill">{p.tech.join(' · ')}</div>
              <h3>{p.title}</h3>
              <p className="muted">{p.summary}</p>

              <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
                <button className="btn" onClick={prev}>
                  Prev
                </button>
                <button className="btn" onClick={next}>
                  Next
                </button>
                <a
                  className="btn"
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
                <Link className="btn" to={`/projects/${p.id}`}>
                  More details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <div className="muted">
          {clamped + 1} / {PROJECTS.length}
        </div>
        <div className="dots">
          {PROJECTS.map((p, i) => (
            <button
              key={p.id}
              className={`dot ${i === clamped ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to ${p.title}`}
            />
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <a 
          href="https://github.com/aishwarya-41" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '20px', height: '20px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          View All Projects on GitHub
        </a>
      </div>
    </div>
  )
}

export { PROJECTS }
