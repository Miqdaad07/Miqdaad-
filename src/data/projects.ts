export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  link?: string;
  inProgress?: boolean;
  challenge: string;
  solution: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    id: 'kalla-botanicals',
    title: 'KÄLLA Botanicals — Luxury Skincare Storefront',
    category: 'Luxury E-Commerce Brand',
    description: 'An immersive, premium e-commerce storefront designed for a high-end luxury natural skincare and cosmetics brand.',
    fullDescription: 'KÄLLA Botanicals is an immersive, premium e-commerce storefront designed for a high-end luxury natural skincare and cosmetics brand. Inspired by Scandinavian ecosystems, organic beauty, and botanical science, the digital space functions as a serene online sanctuary for conscious skincare rituals.',
    image: '/images/BOT.png',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'E-Commerce UI', 'Luxury Brand Design'],
    link: 'https://natural-care-rho.vercel.app/',
    challenge: 'Translating the tactile, sensory, and clean experience of organic luxury skincare into a high-end digital flagship that builds brand authority and drives conversions without compromising load speeds for premium assets.',
    solution: 'We engineered a spacious, Scandinavian-inspired user interface utilising a restrained color palette, elegant typography, and buttery-smooth animation states. Built custom product discovery matrices and interactive ingredient glossary overlays.',
    outcome: 'Successfully captured a high-end editorial atmosphere, leading to pristine core web vitals, a robust 28% increase in customer dwell time, and substantial increases in customer engagement metrics.'
  },
  {
    id: 'halqatu-najaah',
    title: 'Halqatu-Najaah — Online Qur’an Academy',
    category: 'EdTech & Islamic Learning Platform',
    description: 'A premium, spiritually calming online Qur’an academy designed for structured education, Tajweed phonetics, and absolute accessibility.',
    fullDescription: 'Halqatu-Najaah is a modern online Qur’an learning platform developed by Miqdaad Labs to help students around the world learn Qur’an recitation, Tajweed, memorization, and Arabic fundamentals through structured online education.\n\nThe platform was designed with accessibility, simplicity, and spiritual elegance in mind — allowing students of all ages to connect with qualified tutors from anywhere in the world.\n\nIt combines modern web design with Islamic aesthetics to create a clean, welcoming, and highly engaging learning experience.',
    image: '/images/DAARUN.png',
    tags: ['Next.js', 'Tailwind CSS', 'Firebase', 'Responsive Design', 'Education Platform', 'UI/UX', 'Modern Web App'],
    link: 'https://halqatu-najaah.name.ng/',
    challenge: 'Many online Qur’an learning platforms feel outdated, difficult to navigate, and lack proper user engagement. The goal was to create a modern platform that feels welcoming, professional, spiritually calming, and easy for students and parents to use globally.',
    solution: 'We designed and developed a sleek dark-emerald user experience with modern layouts, smooth interactions, responsive learning sections, optimized mobile performance, structured course presentation, and strategic conversion-focused call-to-actions for enrollment.',
    outcome: 'The final platform successfully positioned Halqatu-Najaah as a modern online Qur’an academy with a premium digital presence that improves trust, student engagement, accessibility, and enrollment experience.'
  },
  {
    id: 'asf-ngo',
    title: 'Abdullahi Shuaib Foundation (ASF)',
    category: 'Islamic Organization Portal',
    description: 'An integrated high-trust web platform for a major NGO facilitating multi-sector donations and integrated charitable activities.',
    fullDescription: 'The Abdullahi Shuaib Foundation (ASF) trusted Miqdaad Labs to build a sophisticated digital platform to streamline global charitable giving. It enables donors to contribute securely across various key sectors including health, education, and sanitation, while providing specialized modules like a custom-built, mathematically accurate Zakat Calculator.',
    image: '/images/asf-thumb.png',
    tags: ['React', 'Next.js', 'FinTech', 'Zakat Calculator', 'Web App', 'Tailwind CSS'],
    link: 'https://asf.org.ng',
    inProgress: true,
    challenge: 'The organization required an incredibly high-security, transparent system to handle diverse donation streams, verify funds flow, and compute complex theological computations like Zakat dynamically for users.',
    solution: 'We engineered a bespoke, responsive web presence with high-contrast emerald visual layers. Built and integrated a state-of-the-art multi-tier donation gateway and an intuitive custom calculator to facilitate accurate, transparent contributions.',
    outcome: 'Once engineering cycles are complete, deployment will enable a unified operational pipeline to cut administration processing overhead in half and drive digital donations.'
  },
  {
    id: 'quran-command',
    title: 'QuranCommand - EdTech Platform',
    category: 'Modern Web Application',
    description: 'An interactive modern learning platform for mastering phonetic Tajweed rules with seamless gamification elements.',
    fullDescription: 'QuranCommand is a bespoke custom educational web application built by Miqdaad Labs. Designed to teach classic Tajweed phonetics, it integrates micro-pedagogy theories with modern gamified engagement patterns like daily streaks, global leaderboards, and sound-based verification.',
    image: '/images/quran-thumb.png',
    tags: ['React', 'Firebase', 'Live Web Audio', 'Gamification', 'Tailwind CSS'],
    link: 'https://qurancommand.com',
    challenge: 'Traditional phonetic education often suffers from high user dropoff. Our client needed an extremely addictive, interactive learning loop suitable for modern international users.',
    solution: 'We designed a custom Dark-Emerald dashboard. Programmed custom client-side audio monitoring tools, real-time gamified streaking states, progressive achievements, and a lively leaderboard system backed by cloud DB clusters.',
    outcome: 'QuranCommand recorded an phenomenal 42% surge in daily active retention, with students finishing lessons twice as fast compared to traditional analog coursework.'
  },
  {
    id: 'fixit-services',
    title: 'FixIt - On-Demand Work Portal',
    category: 'Bespoke SaaS Product',
    description: 'A comprehensive mobile-first on-demand platform connecting homeowners with vetted service professionals.',
    fullDescription: 'FixIt is a multi-tier SaaS platform engineered by Miqdaad Labs. It provides real-time customer bookings, dynamically coordinates job workflows for service technicians, and aggregates metrics on a dedicated administrators panel, operating with complete real-time sync.',
    image: '/images/fixit-thumb.png',
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Mobile-First', 'Realtime Sync'],
    link: 'https://fixit-services.app',
    inProgress: true,
    challenge: 'Coordination between non-technical contractors and residential homeowners required high-precision, offline-tolerant data fetching and reactive UI responses across low-bandwidth areas.',
    solution: 'We constructed a high-performance progressive web app with a state-driven booking engine. Built role-based routes with real-time push alerts, dynamic mapping integrations, and self-recovering database interactions.',
    outcome: 'Currently undergoing strict staging and beta iteration with vetted service providers. Initial testing reports outstanding dispatch timing and operational promise.'
  }
];
