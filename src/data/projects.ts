export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  link?: string;
  challenge: string;
  solution: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    id: 'asf-ngo',
    title: 'Abdullahi Shuaib Foundation (ASF)',
    category: 'Software Engineering',
    description: 'An integrated web platform for a major NGO facilitating multi-sector donations and charitable activities.',
    fullDescription: 'Abdullahi Shuaib Foundation (ASF) is a sophisticated digital platform designed to streamline large-scale charitable giving. It enables donors to contribute across various sectors including health, education, and water sanitation, while providing specialized tools like a Zakat calculator for accurate philanthropy.',
    image: '/images/imagge1.png',
    tags: ['React', 'Web Development', 'NGO', 'Zakat Calculator', 'FinTech', 'Tailwind CSS'],
    link: 'https://asf.org.ng',
    challenge: 'The organization required a unified system to manage diverse donation streams and provide donors with a reliable, transparent way to calculate and distribute their charity across multiple welfare sectors.',
    solution: 'I developed a robust web application featuring a custom-built Zakat calculator and a categorized donation portal with real-time tracking. The system ensures a high-trust user experience with clear sector-specific fund allocation.',
    outcome: 'Successful deployment led to a 50% increase in digital engagement and a more streamlined donation process, significantly improving transparency and reach.'
  },
  {
    id: 'mep-layout',
    title: 'Commercial Plaza MEP Layout',
    category: 'Electrical Design',
    description: 'Complete electrical power distribution and lighting design for a 50,000 sq ft commercial plaza.',
    fullDescription: 'This project involved the comprehensive electrical design for a large-scale commercial development. The focus was on creating a robust, scalable power network that meets international safety standards while providing flexible lighting solutions for various commercial tenants.',
    image: '/images/generated.png',
    tags: ['AutoCAD', 'Revit', 'Lighting Design', 'Power Systems'],
    challenge: 'The plaza required a complex power distribution system that could handle high-load retail tenants while maintaining emergency power reliability for essential services.',
    solution: 'I implemented a redundant feeder system and optimized the lighting layout using DIALux to ensure maximum efficiency. The Revit model allowed for seamless coordination with mechanical and plumbing teams.',
    outcome: 'The successful design passed all regulatory inspections on the first attempt and reduced estimated energy consumption for common areas by 20% compared to traditional layouts.'
  },
  {
    id: 'quran-command',
    title: 'QuranCommand - EdTech Platform',
    category: 'Software Engineering',
    description: 'An interactive learning platform for mastering Tajweed rules with gamification elements.',
    fullDescription: 'QuranCommand is a specialized learning management system designed to make Tajweed rules accessible and engaging for students worldwide. It bridges traditional knowledge with modern pedagogical techniques through a competitive and rewarding interface.',
    image: '/images/imagge.png',
    tags: ['React', 'Firebase', 'Gamification', 'EdTech', 'Tailwind CSS'],
    link: 'https://qurancommand.com',
    challenge: 'Traditional Tajweed learning often feels disconnected or repetitive for younger students, leading to lower retention rates and slower progress.',
    solution: 'I built a gamified ecosystem featuring daily streaks, XP points, and global leaderboards. The platform includes interactive real-time quizzes that provide immediate feedback on pronunciation and rule application.',
    outcome: 'Since its soft launch, the platform has seen a 40% increase in daily active users and a significant improvement in student test scores across various levels.'
  },
  {
    id: 'fixit-services',
    title: 'FixIt - Home Services Platform',
    category: 'Software Engineering',
    description: 'A comprehensive mobile-first web application connecting homeowners with verified service professionals for home maintenance.',
    fullDescription: 'FixIt is a sophisticated digital ecosystem facilitating home service bookings, real-time job tracking, and quality assurance. It features a multi-role architecture with dedicated interfaces for customers, technicians, and administrators, powered by a robust Supabase backend.',
    image: '/images/Imagge2.png',
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Mobile-First'],
    link: 'https://fixit-services.app',
    challenge: 'Homeowners struggle to find reliable, vetted service professionals, while technicians lack a streamlit workflow. The platform needed to bridge this gap with accountability, clear pricing, and role-based access control.',
    solution: 'I engineered a full-stack solution using React and Supabase. The platform includes a gamified onboarding experience, a multi-step booking flow, and a real-time job status tracking system with an automated pricing engine.',
    outcome: 'Successfully delivered a production-ready application featuring 40+ components, role-based dashboards, and a scalable database schema. The mobile-first design ensures 100% feature parity across all device types.'
  }
];
