export const buildings = [
  {
    id: 'innovation-hub',
    name: 'Innovation Hub',
    type: 'Research and Startup Center',
    departments: ['AI Lab', 'Robotics', 'Incubation'],
    occupancy: 84,
    energy: 'Net positive',
    floors: 8,
    x: -3.4,
    z: -1.2,
    height: 2.8,
    color: '#00E5FF',
  },
  {
    id: 'aurora-library',
    name: 'Aurora Library',
    type: 'Knowledge Commons',
    departments: ['Digital Archive', 'Study Pods', 'Media Studio'],
    occupancy: 62,
    energy: 'Low demand',
    floors: 5,
    x: 0.3,
    z: -2.1,
    height: 2.2,
    color: '#7B61FF',
  },
  {
    id: 'quantum-labs',
    name: 'Quantum Labs',
    type: 'Advanced Engineering',
    departments: ['Nano Fabrication', 'Clean Rooms', 'Photonics'],
    occupancy: 76,
    energy: 'Optimized',
    floors: 6,
    x: 3.7,
    z: -0.8,
    height: 2.7,
    color: '#00FFB3',
  },
  {
    id: 'atlas-hall',
    name: 'Atlas Hall',
    type: 'Academic Block',
    departments: ['Classrooms', 'Seminar Halls', 'Exam Cell'],
    occupancy: 91,
    energy: 'Peak learning',
    floors: 10,
    x: -1.8,
    z: 2.3,
    height: 3.4,
    color: '#6EE7F9',
  },
  {
    id: 'pulse-center',
    name: 'Pulse Center',
    type: 'Student Life',
    departments: ['Canteen', 'Clubs', 'Wellness'],
    occupancy: 68,
    energy: 'Social active',
    floors: 4,
    x: 2.1,
    z: 2.2,
    height: 1.7,
    color: '#A78BFA',
  },
];

export const locations = [
  'AI Lab 402',
  'Robotics Arena',
  'Aurora Library West Wing',
  'Quantum Clean Room',
  'Atlas Lecture Hall 9',
  'Canteen Sky Deck',
  'Faculty Office B-214',
  'Media Studio',
  'Student Wellness Pod',
];

export const stats = [
  { label: 'Smart buildings', value: 42, suffix: '+' },
  { label: 'Live sensors', value: 1280, suffix: '' },
  { label: 'Energy saved', value: 31, suffix: '%' },
  { label: 'Route accuracy', value: 98, suffix: '%' },
];

export const events = [
  { title: 'AI Research Expo', date: 'Jun 14', venue: 'Innovation Hub', registrations: 842, status: 'Open' },
  { title: 'Moonlight Code Sprint', date: 'Jun 18', venue: 'Quantum Labs', registrations: 318, status: 'Filling fast' },
  { title: 'Founder Fireside', date: 'Jun 22', venue: 'Pulse Center', registrations: 214, status: 'Open' },
  { title: 'Sustainability Hackday', date: 'Jun 28', venue: 'Atlas Hall', registrations: 507, status: 'Open' },
];

export const timetable = [
  { time: '09:00', course: 'Neural Systems', room: 'AI Lab 402', progress: 92 },
  { time: '11:00', course: 'Cyber Physical Design', room: 'Atlas 9', progress: 86 },
  { time: '14:00', course: 'Data Visualization', room: 'Media Studio', progress: 78 },
  { time: '16:00', course: 'Capstone Sync', room: 'Incubation Bay', progress: 64 },
];

export const departmentStats = [
  { name: 'Engineering', students: 2840, occupancy: 82 },
  { name: 'Design', students: 1160, occupancy: 64 },
  { name: 'Business', students: 2020, occupancy: 71 },
  { name: 'Sciences', students: 1740, occupancy: 76 },
];
