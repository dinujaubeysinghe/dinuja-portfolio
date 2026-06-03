// ── Wageesha Portfolio images ──
import wageeshaPortfolio from '../assets/projects/wageesha_portfolio.png'
import wdp2 from '../assets/projects/wageesha/wdp2.png'
import wdp3 from '../assets/projects/wageesha/wdp3.png'
import wdp4 from '../assets/projects/wageesha/wdp4.png'
import wdp5 from '../assets/projects/wageesha/wdp5.png'
import wdp6 from '../assets/projects/wageesha/wdp6.png'
import wdp7 from '../assets/projects/wageesha/wdp7.png'
import wdp8 from '../assets/projects/wageesha/wdp8.png'
import wdp9 from '../assets/projects/wageesha/wdp9.png'

// ── UniSport images ──
import unisports from '../assets/projects/unisports.png'
import udp1 from '../assets/projects/unisports/udp1.png'
import udp2 from '../assets/projects/unisports/udp2.png'
import udp3 from '../assets/projects/unisports/udp3.png'
import udp4 from '../assets/projects/unisports/udp4.png'
import udp5 from '../assets/projects/unisports/udp5.png'
import udp6 from '../assets/projects/unisports/udp6.png'
import udp7 from '../assets/projects/unisports/udp7.png'
import udp8 from '../assets/projects/unisports/udp8.png'
import udp9 from '../assets/projects/unisports/udp9.png'
import udp10 from '../assets/projects/unisports/udp10.png'

// ── Smart Campus images ──
import sdp1 from '../assets/projects/Smart Campus/sdp1.png'
import sdp2 from '../assets/projects/Smart Campus/sdp2.png'
import sdp3 from '../assets/projects/Smart Campus/sdp3.png'
import sdp4 from '../assets/projects/Smart Campus/sdp4.png'
import sdp5 from '../assets/projects/Smart Campus/sdp5.png'

// ── Sportify images ──
import spdp1 from '../assets/projects/sportify/spdp1.png'
import spdp2 from '../assets/projects/sportify/spdp2.png'
import spdp3 from '../assets/projects/sportify/spdp3.png'
import spdp4 from '../assets/projects/sportify/spdp4.png'
import spdp5 from '../assets/projects/sportify/spdp5.png'

// ── Graphify images ──
import fdp1 from '../assets/projects/Figma/fdp1.png'
import fdp2 from '../assets/projects/Figma/fdp2.png'
import fdp3 from '../assets/projects/Figma/fdp3.png'
import fdp4 from '../assets/projects/Figma/fdp4.png'
import fdp5 from '../assets/projects/Figma/fdp5.png'
import fdp6 from '../assets/projects/Figma/fdp6.png'
import fdp7 from '../assets/projects/Figma/fdp7.png'
import fdp8 from '../assets/projects/Figma/fdp8.png'
import fdp9 from '../assets/projects/Figma/fdp9.png'
import fdp10 from '../assets/projects/Figma/fdp10.png'
import fdp11 from '../assets/projects/Figma/fdp11.png'
import fdp12 from '../assets/projects/Figma/fdp12.png'

const projects = [
  {
    id: 1,
    number: '01',
    title: 'Wageesha Diaz Portfolio',
    tagline: 'A modern portfolio website for a compere, announcer, and voiceover artist.',
    description: `A modern and interactive portfolio website developed to showcase the professional profile of Wageesha Diaz as a compere, announcer, and voiceover artist. The platform serves as a central hub for presenting professional experience, event appearances, voiceover services, and contact information through a visually engaging and user-friendly interface.

I was responsible for designing and developing the complete portfolio website using React and Vite. I created a responsive user interface with smooth navigation, modern layouts, and engaging animations to enhance the user experience. A strong hero section and personal branding elements were implemented to effectively communicate Wageesha's professional identity and services.

I developed dedicated sections for About, Events, Voiceover Services, and Contact, ensuring content was organized and easily accessible. To create a premium browsing experience, I integrated scroll-based animations and page transition effects using Framer Motion and Lenis. Additionally, I built an event showcase section to highlight hosting and public speaking engagements and implemented a contact form with EmailJS to facilitate booking requests and inquiries.

The website was optimized for responsiveness across desktop, tablet, and mobile devices, ensuring a consistent experience for all visitors.

Outcome: Delivered a professional and visually appealing portfolio website that strengthens personal branding, showcases services effectively, and provides a seamless way for potential clients and event organizers to connect with Wageesha Diaz.`,
    status: 'Completed',
    year: '2026',
    github: 'https://github.com/dinujaubeysinghe/senura_portfolio',
    live: 'https://wageeshadiaz.online/',
    tech: ['React', 'Vite', 'React Router', 'Framer Motion', 'Lenis', 'Tailwind CSS', 'EmailJS', 'Git'],
    features: [
      'Responsive portfolio interface with modern layouts and smooth navigation',
      'Dedicated About, Events, Voiceover Services, and Contact sections',
      'Scroll-based animations and page transitions using Framer Motion and Lenis',
      'Event showcase and EmailJS contact form for booking requests and inquiries',
    ],
    screenshots: [
      { src: wageeshaPortfolio, caption: 'Professional hero and branding' },
      { src: wdp2, caption: 'About section' },
      { src: wdp3, caption: 'Event showcase section' },
      { src: wdp4, caption: 'Contact section' },
      { src: wdp5, caption: 'About Page' },
      { src: wdp6, caption: 'Event showcase' },
      { src: wdp7, caption: 'Voiceover services' },
      { src: wdp8, caption: 'Contact Page' },
      { src: wdp9, caption: 'Contact form' },
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'UniSport',
    tagline: 'A secure sports, tournaments and sports items platform for university ',
    description: `A comprehensive sports management platform developed to support university sports administration through secure user management, role-based access control, and integrated payment processing. The system enables administrators, coaches, and students to efficiently manage sports activities, registrations, memberships, and event-related payments within a centralized platform.

My contribution focused on the User Management and Payment Management modules. I implemented secure authentication and authorization using JWT, role-based access control, and password hashing to support Admin, Coach, and Student roles. I also developed user profile management features and REST APIs for user administration and authentication.

For the Payment Management module, I designed and implemented payment workflows including order creation, checkout processes, payment status tracking, success and failure handling, and transaction recording. I built backend payment APIs and transaction models to manage payments securely, enforce data integrity, and maintain accurate payment records. On the frontend, I developed responsive payment interfaces and dashboards that allowed users to view payment details, track transactions, and manage payment-related activities seamlessly.

Additionally, I implemented server-side validation, optimized data fetching using Axios, and integrated role-based dashboards to provide a personalized experience for different user types.

Outcome: Delivered a secure, scalable, and maintainable sports management platform that streamlined user administration, simplified payment processing, and improved operational transparency for administrators, coaches, and students.`,
    status: 'Completed',
    year: '2026',
    github: 'https://github.com/dilumiattanayake/Uni_Sports/',
    live: 'https://www.loom.com/share/795a9ae816aa4feb9a1ed7187176af5f',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TypeScript', 'Mongoose', 'REST API', 'JWT Authentication', 'React Context API', 'Tailwind CSS', 'Git', 'Postman'],
    features: [
      'Secure authentication and role-based access control for Admin, Coach, and Student roles',
      'User profile management and REST APIs for administration and authentication',
      'Payment workflows for order creation, checkout, status tracking, and transaction recording',
      'Role-based dashboards with server-side validation and optimized data fetching',
    ],
    screenshots: [
      { src: unisports, caption: 'Sports management hero section' },
      { src: udp1, caption: 'Feature highlights' },
      { src: udp2, caption: 'How it works section' },
      { src: udp3, caption: 'Popular sports section' },
      { src: udp4, caption: 'Admin dashboard' },
      { src: udp5, caption: 'User details and profile' },
      { src: udp6, caption: 'Admin payment page' },
      { src: udp7, caption: 'Admin transaction history' },
      { src: udp8, caption: 'Admin reporting and analytics' },
      { src: udp9, caption: 'Student dashboard' },
      { src: udp10, caption: 'Checkout process' },
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'Smart Campus Hub',
    tagline: 'A campus maintenance and incident ticketing system with secure role-based workflow management.',
    description: `A full-stack web application developed to streamline campus maintenance operations and incident reporting. The system enables users to report issues, upload supporting files, track ticket progress, and communicate with technicians through a secure role-based workflow.

My contribution focused on the Maintenance and Incident Ticketing module. I designed and developed a responsive ticket submission interface that allowed users to report issues by providing details such as category, priority level, location, contact information, and supporting attachments. I also built RESTful APIs for ticket creation, status updates, technician assignment, resolution tracking, and ticket detail management using Spring Boot and MongoDB.

In addition, I implemented role-based access control for users, technicians, and administrators to support secure workflow management throughout the ticket lifecycle. I also developed ticket search, filtering, and tracking features to improve issue visibility and management while ensuring secure handling and viewing of uploaded files and supporting documents.

This module helped streamline campus maintenance operations by improving issue reporting, tracking, communication, and resolution efficiency.`,
    status: 'Completed',
    year: '2026',
    github: 'https://github.com/dilumiattanayake/it3030-paf-2026-smart-campus-group29',
    live: 'https://www.loom.com/share/78935d8f0cd5401481969e15b1361b4e',
    tech: ['Spring Boot', 'React', 'TypeScript', 'MongoDB', 'REST API', 'Tailwind CSS', 'Git', 'Postman'],
    features: [
      'Responsive ticket submission with category, priority, location, and attachment support',
      'RESTful APIs for ticket creation, updates, assignment, and resolution tracking',
      'Role-based access control for users, technicians, and administrators',
      'Ticket search, filtering, and progress tracking for better visibility',
    ],
    screenshots: [
      { src: sdp1, caption: 'AdminMaintenance and incident dashboard' },
      { src: sdp2, caption: 'Ticket submission workflow' },
      { src: sdp3, caption: 'Ticket details and status tracking' },
      { src: sdp4, caption: 'Technician assignment and resolution flow' },
      { src: sdp5, caption: 'Supporting files and secure document handling' },
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Sportify',
    tagline: 'Sports equipment e-commerce platform with secure shopping and payment management.',
    description: `Sportify is a full stack e-commerce platform developed for a real world client specializing in sports equipment sales. The system was designed to provide customers with a convenient online shopping experience while helping the business manage products, orders, payments, and inventory through a centralized digital platform.

I was responsible for designing and developing the Shopping Cart and Payment Management modules of the application. I implemented a dynamic shopping cart that allows customers to browse sports equipment, add and remove products, update quantities, and review order summaries before checkout. The module was designed to provide a smooth and user-friendly purchasing experience while ensuring accurate pricing and cart calculations.

I also developed the Payment Management functionality, including order processing, payment workflows, transaction tracking, payment status management, and purchase confirmation handling. Secure backend APIs were implemented to manage payment-related operations, while responsive frontend interfaces were created to display payment details, transaction records, and order summaries. These features helped ensure a reliable and transparent payment process for both customers and administrators.

The application was developed with a strong focus on usability, security, and responsiveness, delivering a seamless shopping experience across desktop, tablet, and mobile devices.

Outcome: Delivered a secure and scalable e-commerce solution that streamlined sports equipment sales, simplified payment processing, enhanced customer convenience, and supported the client's business growth through an improved online presence.`,
    status: 'Completed',
    year: '2025',
    github: 'https://github.com/dinujaubeysinghe/Sportify',
    live: 'https://www.loom.com/share/3800b50aaf824020a0dcd4f3c2878673',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript', 'Mongoose', 'REST API', 'JWT Authentication', 'React Context API', 'Tailwind CSS', 'Git', 'Postman'],
    features: [
      'Dynamic Shopping Cart with Add, Remove, and Quantity Update Functionality',
      'Order Summary and Cart Total Calculation',
      'Integration Between Shopping Cart and Payment Modules',
      'Payment Status Tracking and Management',
      'Order Confirmation and Purchase Summary',
    ],
    screenshots: [
      { src: spdp2, caption: 'Shopping cart page' },
      { src: spdp1, caption: 'Home page' },
      { src: spdp3, caption: 'Checkout shipping' },
      { src: spdp4, caption: 'Checkout payment' },
      { src: spdp5, caption: 'Checkout confirmation' },
    ],
  },
  {
    id: 5,
    number: '05',
    title: 'Graphify',
    tagline: 'A custom print on demand marketplace where users can buy and sell personalized printed products.',
    description: `Graphify is a print on demand e-commerce platform designed to connect buyers and sellers through a seamless and intuitive interface. The application was designed using Figma, focusing on delivering a clean, modern, and user-friendly experience across all screens.

The platform features a dual-role system where any registered user can switch their account into a seller account. As a buyer, users can browse and purchase custom-designed printed products such as t-shirts, bags, mugs, and mats — applying their own unique designs before checkout. As a seller, users can list their own products and manage sales through a dedicated seller dashboard.

I was responsible for designing the complete UI/UX of the application from scratch. This included designing the authentication flow, home screen, product listing pages, product detail and custom design upload screens, shopping cart, checkout flow, and the seller dashboard. Special attention was given to maintaining visual consistency, intuitive navigation, and a smooth user journey throughout the app.

Outcome: Delivered a comprehensive and visually polished UI/UX design that clearly communicates the platform's dual-role concept, making it easy for both buyers and sellers to navigate and interact with the system.`,
    status: 'Completed',
    year: '2026',
    github: 'https://github.com/dinujaubeysinghe/figma-designs',
    live: 'https://www.loom.com/share/ce5b188b793b486dbd74e7b3b8c274a6',
    tech: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Mobile App Design'],
    features: [
      'User Authentication Flow — Register and Login screens',
      'Product Marketplace — Browse and buy custom printed products',
      'Custom Design Upload — Users can apply their own designs to any product',
      'Dual Role System — Any user can switch to a seller account',
      'Seller Dashboard — Sellers can list, manage, and sell their products',
      'Cart and Checkout Flow — Smooth and intuitive purchase experience',
    ],
    screenshots: [
  { src: fdp1, caption: 'Splash screen and application launch' },

  { src: fdp2, caption: 'Welcome screen introducing the fashion marketplace' },

  { src: fdp3, caption: 'User login interface with secure authentication' },

  { src: fdp4, caption: 'User registration and account creation screen' },

  { src: fdp5, caption: 'Home dashboard featuring trending products and categories' },

  { src: fdp6, caption: 'User profile and account information management' },

  { src: fdp7, caption: 'Product catalog with fashion item browsing' },

  { src: fdp8, caption: 'Detailed product view with item information and purchase options' },

  { src: fdp9, caption: 'Custom apparel designer with color and style customization' },

  { src: fdp10, caption: 'Shopping cart with selected items and order summary' },

  { src: fdp11, caption: 'Checkout form for shipping and payment details' },

  { src: fdp12, caption: 'User account access and personalized experience entry point' },
]
  },
]

export default projects