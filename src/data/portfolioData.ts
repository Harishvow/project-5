export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Attendance Tracker',
    description: 'Track the Attendance',
    image: 'https://images.pexels.com/photos/8423018/pexels-photo-8423018.jpeg',
    tags: ['Python', 'SQL', 'Streamlit'],
    liveUrl: 'https://attendancetrack.streamlit.app/',
    githubUrl: 'https://github.com/Harishvow/AttendanceTracker',
  },
  {
    id: 2,
    title: 'News API',
    description: 'TodayNews – News Search Web App',
    image: 'https://images.pexels.com/photos/265642/pexels-photo-265642.jpeg',
    tags: ['Python', 'Streamlit', 'APIs'],
    liveUrl: 'https://todaynews.streamlit.app/search_news',
    githubUrl: 'https://github.com/Harishvow/NEWSAPI',
  },
  {
    id: 3,
    title: 'Spendify',
    description:
      'Track income and expenses, set budgets, view detailed reports with filters, and analyze spending habits through interactive charts—all with a secure, personalized account system.',
    image: 'https://images.pexels.com/photos/32401525/pexels-photo-32401525.jpeg',
    tags: ['Python', 'Streamlit', 'APIs'],
    liveUrl: 'https://spendify.streamlit.app/',
    githubUrl: 'https://github.com/Harishvow/spendify',
  },
  {
    id: 4,
    title: 'Password Manager ',
    description: ' Generate strong passwords, check their strength, securely manage, edit, and view saved passwords.',
    image: 'https://images.pexels.com/photos/2882630/pexels-photo-2882630.jpeg',
    tags: ['Python'],
    githubUrl: 'https://github.com/Harishvow/Password_Manager',
  },
  {
    id: 5,
    title: 'WeatherDataApi',
    description: 'RESTful Weather Data API using Python (Flask) that serves historical climate data from various global weather stations.',
    image: 'https://images.pexels.com/photos/32358153/pexels-photo-32358153/free-photo-of-modern-weather-station-against-clear-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'Flask', 'APIs'],
    githubUrl: 'https://github.com/Harishvow/WeatherDataAPI',
  },
  {
    id: 6,
    title: 'Weather Forecastdata Api',
    description: 'It is simple and basic Api for Checking The Weather For Next Few Days For Any Location.',
    image: 'https://images.pexels.com/photos/32358153/pexels-photo-32358153/free-photo-of-modern-weather-station-against-clear-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'Streamlit', 'APIs'],
    liveUrl: 'https://forecastdata.streamlit.app/',
    githubUrl: 'https://github.com/Harishvow/Forecastdata-Webapp',
  },
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'B.Tech Computer Science With Business System',
    institution: 'SRM University',
    duration: '2023 - 2027',
  },
];

