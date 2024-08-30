export interface Projects {
  id: number;
  url: string;
  title: string;
  github: string;
  pdf?: string;
  technolgies: string;
  descrition: string;
  OtherData: { subtitle: string; subdescription: string[] }[];
  slideImages: string[];
  videoLink?:string;
}

export const popularProject: Projects[] = [
  {
    id: 1,
    url: "/projects/apscodenotes.png",
    title: "ApsCodesNotes App",
    github:
      "https://github.com/apsdeveloper461/Contact_Api-with-ExpressJs-and-MongoDb-.git",
    technolgies:
      " REACTJS || JAVASCRIPT || CSS || JSX || STATE || GIT || GITHUB ||API ",
    descrition:
      "Welcome to apsCodesNotes, your ultimate resource for handwritten notes, roadmaps, and cheat sheets! Our platform is dedicated to providing high-quality, visually appealing study materials to help you learn and retain information effectively. Whether you're a student, developer, or simply a curious learner, our notes and resources are designed to support your journey.",
    OtherData: [
      {
        subtitle: "1. Featured Notes:",
        subdescription: [
          "➢ Showcase a selection of popular or recently added notes.",
          "➢ Include a brief summary, tags, and a preview image.",
          "➢ Link to the full note or download option.",
        ],
      },
      {
        subtitle: "2. Note Categories:",
        subdescription: [
          "➢ Organize notes by programming languages, frameworks, or topics.",
          "➢ Display a list or grid of notes with summaries and tags.",
          "➢ Allow filtering or sorting by relevance, date, or popularity.",
        ],
      },
      {
        subtitle: "3. Roadmap Collections",
        subdescription: [
          "➢ Showcase curated collections of notes and resources for specific topics or skills.",
          "➢ Include a brief introduction, list of included notes, and a download option.",
        ],
      },
      {
        subtitle: "4. Cheat Sheet Library:",
        subdescription: [
          "➢ Display a collection of concise, printable cheat sheets.",
          "➢ Organize by topic or category, with tags and summaries.",
          "➢ Allow users to download or print individual sheets.",
        ],
      },
      {
        subtitle: "6. Search and Filter:",
        subdescription: [
          "➢ Allow users to find specific notes or resources quickly.",
          "➢ Implement a robust search bar with filtering options (by name, categories, tages).",
        ],
      },
    ],
    slideImages: [],
  },
  {
    id: 2,
    url: "/projects/medical-store-app.avif",
    title: "Medical Store Management App",
videoLink:'https://youtu.be/dxJYSqHfGe0?si=_0jKJhBse1aQE7XM',
    github:
      "https://github.com/apsdeveloper461/E_Commerce_website-with-Php.git",
    technolgies:
      " MERN STACK || HTML || CSS || JS  || REACTJS || MONGODB || NODEJS || EXPRESSJS || GIT || GITHUB ||API ",
    descrition:
      "Welcome to MEDICAL STORE💊👨‍⚕️🥼🩺. At MEDICAL STORE 🏪, we strive to provide you with the best medical products and a seamless shopping experience. Our website is designed to ensure that managing and purchasing medical supplies is both efficient and straightforward. ",
    OtherData: [
      {
        subtitle: "Key Features:",
        subdescription: [
          "1. Add and Update Products: Easily add new products to our inventory. Our user-friendly interface allows you to update product details quickly, ensuring our catalog is always accurate and up-to-date.",
          "2. Manage Stock Quantities: Keep track of your inventory with ease. You can add or remove stock quantities, helping you maintain optimal inventory levels and avoid shortages.",
          "3. Comprehensive Stock Logs: Our system maintains detailed logs of all stock movements.You willll always know when stock is added or removed, providing full transparency and control over your inventory.",
          "4. Real-Time Tracking: Track your products in real-time. Monitor stock levels, get notifications for low stock, and make informed decisions based on current inventory data.",
          "5. Insightful Analytics and Graphs: Gain valuable insights into your business with our detailed analytics. Our graphs display data on product categories, total products added each month, and daily sales. Use this information to understand trends and make strategic decisions.",
          "6. Secure and Reliable: Your data is safe with us. Our platform uses the latest security measures to protect your information and ensure a reliable service.",
          "7. Advanced Search: Quickly find the products you need with our powerful search feature.",
          "8. Secure and Reliable: Your data is safe with our advanced security measures.",
        ],
      },
    ],
    slideImages: [],
  },
  {
    id: 3,
    url: "/projects/lms.jpg",
    title: "Learning Management System",

    github: "https://github.com/apsdeveloper461/LMS_DB_project.git",
    pdf: "https://drive.google.com/file/d/13RbLjF9P848aJ6M5YgCl6NXRb8qi1Y5T/view?usp=sharing",
    technolgies:
      " HTML || CSS || JS || REACT JS || NODE JS || EXPRESS JS || MYSQL || GIT || GITHUB || RESTFUL API ",
    descrition:
      "In the modern educational landscape, managing student information efficiently is crucial for educational institutions to streamline operations   and provide effective services. To address this need, we propose the development of a Student Database Management System (DBMS). This system will facilitate the storage, retrieval, and management of various student-related data, including personal information, academic records, enrollment details, attendance, grades, scholarships, and fee payments.",
    OtherData: [
      {
        subtitle: " Objectives :",
        subdescription: [
          "➢ Design and implement a relational database schema to store student information systematically.",
          "➢ Develop a user-friendly interface for administrators, faculty members, and students to interact with the database.",
          "➢ Enable secure access control mechanisms to ensure data privacy and integrity.",
          "➢ Provide functionalities for managing enrollments, attendance, grades, scholarships, and fee payments efficiently.",
          "➢ Generate insightful reports and analytics to aid decision-making processes within the institution.",
        ],
      },
      {
        subtitle: "Conculsion: ",
        subdescription: [
          " The proposed Student Database Management System aims to treamline the management of student information within the educational institution, providing various benefits such as efficient data management, improved decision-making, and enhanced communication. By implementing this system, the institution can better serve its students and faculty members, ultimately contributing to academic excellence and institutional success.",
        ],
      },
    ],
    slideImages: [
      "/projects/P3/login.jpg",
      "/projects/P3/signup.jpg",
      "/projects/P3/attendence.jpg",
      "/projects/P3/courses.jpg",
      "/projects/P3/current-Course.jpg",
      "/projects/P3/fee.jpg",
      "/projects/P3/home.jpg",
      "/projects/P3/scholarship.jpg",
    ],
  },
  {
    id: 4,
    url: "/projects/chat-app.avif",
    title: "Chat App with MERN Stack",
    github: "https://github.com/apsdeveloper461/text_manipulator.git",
    technolgies:
      " MERN STACK || HTML || CSS || JS || REACTJS || NODDEJS || EXPRESSJS || SOCKET || MONGODB",
    descrition: `Welcome to Aps Chat App, a fast and secure messaging platform built with the MERN stack. Our app allows users to communicate in real-time, with features like instant messaging, chat rooms, and file sharing. With a strong focus on security and scalability, our app is perfect for teams, communities, and individuals looking for a reliable chat solution.
`,
    OtherData: [
      {
        subtitle: "Benefits:",
        subdescription: [
          "➢ Real-time messaging with instant delivery and read receipts",
          "➢ Fast and reliable messaging for seamless communication",
          "➢ Secure data storage and transmission for peace of mind",
          "➢ User-friendly interface for easy navigation and use",
        ],
      },
      {
        subtitle: "1. Real-time Messaging",
        subdescription: [
          "➢ Instant messaging for seamless communication",
          "➢ Support for text, images, and files",
          "➢ Automatic message delivery and read receipts",
        ],
      },
      {
        subtitle: "2. User Authentication",
        subdescription: [
          "➢ Secure user registration and login",
          "➢ Password hashing and salting for added security",
          "➢ User profile management and editing",
        ],
      },
      {
        subtitle: "3. Notifications and Alerts",
        subdescription: [
          "➢ Real-time notifications for new messages",
          "➢ Customizable notification settings",
          "➢ Support for desktop and mobile notifications",
        ],
      },
      {
        subtitle: "4. Security and Scalability",
        subdescription: [
          "➢ Built with MERN stack for scalability",
          "➢ Secure data storage and transmission",
          "➢ Regular updates and maintenance",
        ],
      },
    ],
    slideImages: [],
  },
  {
    id: 5,
    url: "/projects/lms-cpp.jpg",
    title: "Learning Managment System(LMS) in C++",

    github: "https://github.com/apsdeveloper461/LMS_OOP_CPP_PROJECT.git",

    pdf: "https://drive.google.com/file/d/1yEZ9ndX-qmWWz9rIATJvqh8GX8qupMu5/view?usp=sharing",
    technolgies: " C PLUS PLUS || MYSQL || OOP C++ || GIT || GITHUB",
    descrition: `he Learning Management System (LMS) project is a comprehensive solution
      designed to streamline academic operations within educational institutions. It aims to integrate
      various components such as student information, course enrollment, faculty management, departmental coordination, extracurricular activities, resource management, and feedback collection into a cohesive system. By facilitating efficient course enrollment, effective faculty coordination, and comprehensive academic progress tracking, the LMS project seeks to enhance the overall learning experience for students while improving operational efficiency for educational institutions.`,
    OtherData: [
      {
        subtitle: "Purpose and Objectives :",
        subdescription: [
          "The primary purpose of the LMS project is to facilitate the efficient      management of academic resources and processes. The key objectives include:",
          "➢ Efficient Course Enrollment: Providing students with a seamless process for enrolling in      courses based on their academic requirements and interests.",
          "➢ Effective Faculty Management: Assigning faculty members to teach specific courses and    ensuring smooth coordination between instructors and students.",
          "➢ Comprehensive Department Management: Managing departmental information, including    department IDs, names, and heads, to support the effective delivery of academic programs.",
          "➢ Academic Progress Tracking: Tracking students academic progress and performance     throughout the semester through enrollment records, grades, and attendance.",
          "➢ Extracurricular Engagement: Allowing students to participate in clubs and extracurricular      activities to enhance their overall learning experience.",
          "➢ Resource Management: Managing library resources such as books, journals, and online      databases to support students research and learning activities.",
          "➢ Event Organization: Organizing seminars, workshops, and conferences to complement students academic curriculum and facilitate their professional development.",
          "➢ Project and Research Support: Providing opportunities for students to engage in projects     and research activities under faculty supervision to gain practical experience.",
          "➢ Feedback Collection and Analysis: Collecting feedback from students to identify areas for  improvement and enhance the quality of education provided by the institution.",
        ],
      },
    ],
    slideImages: [
      "/projects/P2/1.jpg",
      "/projects/P2/2.jpg",
      "/projects/P2/3.jpg",
      "/projects/P2/4.jpg",
      "/projects/P2/5.jpg",
      "/projects/P2/6.jpg",
      "/projects/P2/7.jpg",
      "/projects/P2/8.jpg",
      "/projects/P2/9.jpg",
      "/projects/P2/10.jpg",
      "/projects/P2/11.jpg",
      "/projects/P2/12.jpg",
      "/projects/P2/13.jpg",
    ],
  },
  {
    id: 6,
    url: "/projects/car-rental.jpg",
    title: "Car Rental Management System",

    github: "https://github.com/apsdeveloper461/CarRentalsystem.com.git",
    pdf: "https://drive.google.com/file/d/1iXMuQjparrTC7tmzShWn1j4iqqcxXK8Z/view?usp=sharing",
    technolgies:
      " C PLUS PLUS (C++) || FILE HANDLING WITH CPP (stored Data)|| GIT || GITHUB",
    descrition:
      "This project zooms into car rentals, building a user-friendly system in C++. Customers can browse cars, book rentals, and manage their accounts. A clear interface lets them search for the perfect car, make secure payments, and view upcoming reservations. For admins, the system offers complete control. They manage the car fleet, oversee bookings, and track customer information. Data-driven reports help optimize pricing and car selection, ensuring a smooth rental experience for everyone. C++ provides a reliable and efficient foundation for this system, making it a great tool to streamline your car rental business.",
    OtherData: [
      {
        subtitle: "Admin Control Panel: Steering the Business",
        subdescription: [
          "For administrators, the system offers a central hub for seamless management. They can add, edit, and maintain the car fleet, keeping details like mileage and availability up-to-date. A comprehensive booking overview dashboard keeps all ongoing and upcoming rentals at their fingertips. Customer management allows for profile updates and account creation. Finally, the system generates valuable reports, providing insights into rental trends, popular vehicles, and revenue. With data-driven decision making empowered by these reports, admins can optimize pricing strategies, adjust fleet composition, and keep the business running smoothly. Built with C++, this car rental system leverages its object-oriented programming capabilities for modularity and code reusability. C++ efficiency in memory management ensures smooth performance for this comprehensive system, making it a reliable and powerful tool for managing your car rental business.",
        ],
      },
    ],
    slideImages: [
      "/projects/P1/1.png",
      "/projects/P1/2.png",
      "/projects/P1/3.png",
      "/projects/P1/4.png",
      "/projects/P1/5.png",
      "/projects/P1/6.png",
      "/projects/P1/7.png",
      "/projects/P1/8.png",
      "/projects/P1/9.png",
      "/projects/P1/10.png",
      "/projects/P1/11.png",
      "/projects/P1/12.png",
      "/projects/P1/13.png",
      "/projects/P1/14.png",
      "/projects/P1/15.png",
    ],
  },
];
export default popularProject;
