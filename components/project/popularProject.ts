
export interface Projects {
  id: number;
  url: string;
  title: string;
  github: string;
  pdf?: string;
  technolgies: string;
  descrition: string;
  OtherData: { subtitle: string, subdescription: string[] }[]
  slideImages: { url: string }[];

}


export const popularProject: Projects[] = [
  {
    id: 1,
    url:
      'https://img.freepik.com/free-vector/gradient-ui-ux-landing-page-template_23-2149053664.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716422400&semt=ais_user',
    title: 'Contact Api Backend App',
    github: 'https://github.com/apsdeveloper461/Contact_Api-with-ExpressJs-and-MongoDb-.git',
    technolgies: " REACTJS || JAVASCRIPT || CSS || JSX || STATE || GIT || GITHUB ||API ",
    descrition: "Welcome to apsCodesNotes, your ultimate resource for handwritten notes, roadmaps, and cheat sheets! Our platform is dedicated to providing high-quality, visually appealing study materials to help you learn and retain information effectively. Whether you're a student, developer, or simply a curious learner, our notes and resources are designed to support your journey.",
    OtherData: [{
      subtitle: '1. Featured Notes:',
      subdescription: [
        'Showcase a selection of popular or recently added notes.',
        'Include a brief summary, tags, and a preview image.',
        'Link to the full note or download option.'
      ]
    },
    {
      subtitle: '2. Note Categories:',
      subdescription: [
        'Organize notes by programming languages, frameworks, or topics.',
        'Display a list or grid of notes with summaries and tags.',
        'Allow filtering or sorting by relevance, date, or popularity.'
      ]
    },
    {
      subtitle: '3. Roadmap Collections',
      subdescription: [
        'Showcase curated collections of notes and resources for specific topics or skills.',
        'Include a brief introduction, list of included notes, and a download option.'
      ]
    },
    {
      subtitle: '4. Cheat Sheet Library:',
      subdescription: [
        'Display a collection of concise, printable cheat sheets.',
        'Organize by topic or category, with tags and summaries.',
        'Allow users to download or print individual sheets.'
      ]
    },
    {
      subtitle: '6. Search and Filter:',
      subdescription: [
        'Allow users to find specific notes or resources quickly.',
        'Implement a robust search bar with filtering options (by name, categories, tages).'
      ]
    }],
    slideImages: []

  },
  {
    id: 2,
    url:
      'https://img.freepik.com/free-photo/medium-shot-pharmacist-helping-patient_23-2150348229.jpg',
    title: 'Medical Store Management App',

    github: 'https://github.com/apsdeveloper461/E_Commerce_website-with-Php.git',
    technolgies: " MERN STACK || HTML || CSS || JS  || REACTJS || MONGODB || NODEJS || EXPRESSJS || GIT || GITHUB ||API ",
    descrition: "This is the storefront where customers browse, search, and purchase products. It offers a user-friendly interface with the following functionalities: ",
    OtherData: [{
      subtitle: '',
      subdescription: [
        '➢ Product Browsing: Users can easily navigate through product categories, search for specific items using filters like brand, price, or color. Attractive product listings with clear images, descriptions, and prices provide all the necessary information for informed buying decisions.',
        '➢ Shopping Cart Management: Users can add items to their shopping cart, adjust quantities, and review their selections before proceeding to checkout. Secure payment gateways ensure a smooth and reliable transaction experience.',
        '➢ Account Management: Users can create and manage their accounts, view past orders and purchase history, update personal details, and manage their preferences like saved addresses and preferred payment methods. Additionally, wishlists allow users to save products for later purchase and receive notifications about price changes or availability.',
        '➢ Order Tracking and Customer Support: Users can track the status of their orders and access customer support features through integrated ticketing systems or live chat functionalities.'
      ]
    }, {
      subtitle: 'Admin Panel',
      subdescription: [
        'This is the backend where you, the store owner, manage all aspects of your e-commerce business. It provides comprehensive tools for:',
        '➢ Product Management: You can add, edit, and remove products, manage inventory levels, set prices, and assign categories. An intuitive interface allows uploading high-quality product images and detailed descriptions to showcase your offerings. ',
        '➢ Order Management: You can view all orders, track their status (processing, shipped, delivered), and manage returns or refunds efficiently. This allows you to fulfill orders promptly and provide excellent customer service.',
        '➢ Customer Management: You can access customer information, manage user accounts, and track their purchase history. This provides valuable insights into customer behavior and preferences, helping you tailor your marketing and promotional strategies.',
        '➢ Analytics and Reporting: The admin panel offers data-driven insights into your e-commerce business performance. You can analyze sales trends, identify top-selling products, track marketing campaign effectiveness, and make informed decisions to optimize your business strategy. ',
        '➢ By combining a user-friendly storefront with a powerful admin panel, your e-commerce app simplifies the online shopping experience for customers while empowering you to manage all aspects of your business effectively.'
      ]
    }
    ],
    slideImages: [
      { url: 'https://i.ibb.co/BgKgPfV/1.jpg' },
      { url: 'https://i.ibb.co/Xxp8FYB/2.jpg' },
      { url: 'https://i.ibb.co/xJzpHjG/3.jpg' },
      { url: 'https://i.ibb.co/TbcQmTV/4.jpg' },
      { url: 'https://i.ibb.co/sy8DM7z/5.jpg' },
      { url: 'https://i.ibb.co/8m4QcdF/6.jpg' },
      { url: 'https://i.ibb.co/8m4QcdF/6.jpg' },
      { url: 'https://i.ibb.co/GkCvnBy/8.jpg' },
      { url: 'https://i.ibb.co/k4ZnpBJ/9.jpg' },
    ]

  },
  {
    id: 3,
    url:
      'https://st4.depositphotos.com/3051589/39540/i/380/depositphotos_395408610-stock-photo-lms-thoughtful-male-person-looking.jpg',
    title: 'Learning Management System',

    github: 'https://github.com/apsdeveloper461/LMS_DB_project.git',
    pdf: 'https://drive.google.com/file/d/13RbLjF9P848aJ6M5YgCl6NXRb8qi1Y5T/view?usp=sharing',
    technolgies: " HTML || CSS || JS || REACT JS || NODE JS || EXPRESS JS || MYSQL || GIT || GITHUB || RESTFUL API ",
    descrition: "In the modern educational landscape, managing student information efficiently is crucial for educational institutions to streamline operations   and provide effective services. To address this need, we propose the development of a Student Database Management System (DBMS). This system will facilitate the storage, retrieval, and management of various student-related data, including personal information, academic records, enrollment details, attendance, grades, scholarships, and fee payments.",
    OtherData: [{
      subtitle: ' Objectives :',
      subdescription: [
        '➢ Design and implement a relational database schema to store student information systematically.',
        '➢ Develop a user-friendly interface for administrators, faculty members, and students to interact with the database.',
        '➢ Enable secure access control mechanisms to ensure data privacy and integrity.',
        '➢ Provide functionalities for managing enrollments, attendance, grades, scholarships, and fee payments efficiently.',
        '➢ Generate insightful reports and analytics to aid decision-making processes within the institution.'
      ]
    }, {
      subtitle: 'Conculsion: ',
      subdescription: [
        ' The proposed Student Database Management System aims to treamline the management of student information within the educational institution, providing various benefits such as efficient data management, improved decision-making, and enhanced communication. By implementing this system, the institution can better serve its students and faculty members, ultimately contributing to academic excellence and institutional success.'
      ]
    }
    ],
    slideImages: [
      {
        url: 'https://i.ibb.co/G5NhM1v/login.jpg'
      }, {
        url: 'https://i.ibb.co/jyZRLQ4/signup.jpg'
      }, {
        url: 'https://i.ibb.co/fNF6ZSM/attendence.jpg'
      }, {
        url: 'https://i.ibb.co/6PjKsZq/courses.jpg'
      }, {
        url: 'https://i.ibb.co/QKQs1kD/current-Course.jpg'
      }, {
        url: 'https://i.ibb.co/MgKTVKw/fee.jpg'
      }, {
        url: 'https://i.ibb.co/FmJzYzM/grades.jpg'
      }, {
        url: 'https://i.ibb.co/zm7CM0k/home.jpg'
      }, {
        url: 'https://i.ibb.co/j8V77Jw/scholarship.jpg'
      }

    ]

  },
  {
    id: 4,
    url:
      'https://img.freepik.com/free-vector/human-hand-holding-mobile-phone-with-text-messages_74855-6531.jpg',
    title: 'Chat App with MERN Stack',
    github: 'https://github.com/apsdeveloper461/text_manipulator.git',
    technolgies: " MERN STACK || HTML || CSS || JS || REACTJS || NODDEJS || EXPRESSJS || SOCKET || MONGODB",
    descrition: `Welcome to Aps Chat App, a fast and secure messaging platform built with the MERN stack. Our app allows users to communicate in real-time, with features like instant messaging, chat rooms, and file sharing. With a strong focus on security and scalability, our app is perfect for teams, communities, and individuals looking for a reliable chat solution.
`,
    OtherData: [{
     subtitle:'Benefits:',
     subdescription:[
      ' Real-time messaging with instant delivery and read receipts',
      'Fast and reliable messaging for seamless communication',
      'Secure data storage and transmission for peace of mind',
      'User-friendly interface for easy navigation and use'
     ]
    },{
      subtitle: 'Real-time Messaging',
      subdescription: [
        'Instant messaging for seamless communication',
        'Support for text, images, and files',
        'Automatic message delivery and read receipts'
      ]
    }, {
      subtitle: 'User Authentication',
      subdescription: [
        'Secure user registration and login',
        'Password hashing and salting for added security',
        'User profile management and editing'
      ]
    }, {
      subtitle: 'Notifications and Alerts',
      subdescription: [
        'Real-time notifications for new messages',
        'Customizable notification settings',
        'Support for desktop and mobile notifications'
      ]
    }, {
      subtitle: 'Security and Scalability',
      subdescription: [
        'Built with MERN stack for scalability',
        'Secure data storage and transmission',
        'Regular updates and maintenance'
      ]
    }],
    slideImages: []
  },
  {
    id: 5,
    url:
      'https://t4.ftcdn.net/jpg/04/60/23/37/360_F_460233735_3q7EPRIRdlLIQZYK2ucez8QY8PC53bWA.jpg',
    title: 'Learning Managment System(LMS) in C++',

    github: 'https://github.com/apsdeveloper461/LMS_OOP_CPP_PROJECT.git',

    pdf: 'https://drive.google.com/file/d/1yEZ9ndX-qmWWz9rIATJvqh8GX8qupMu5/view?usp=sharing',
    technolgies: " C PLUS PLUS || MYSQL || OOP C++ || GIT || GITHUB",
    descrition: `he Learning Management System (LMS) project is a comprehensive solution
      designed to streamline academic operations within educational institutions. It aims to integrate
      various components such as student information, course enrollment, faculty management, departmental coordination, extracurricular activities, resource management, and feedback collection into a cohesive system. By facilitating efficient course enrollment, effective faculty coordination, and comprehensive academic progress tracking, the LMS project seeks to enhance the overall learning experience for students while improving operational efficiency for educational institutions.`,
    OtherData: [{
      subtitle: 'Purpose and Objectives :',
      subdescription: [
        'The primary purpose of the LMS project is to facilitate the efficient      management of academic resources and processes. The key objectives include:',
        '➢ Efficient Course Enrollment: Providing students with a seamless process for enrolling in      courses based on their academic requirements and interests.',
        '➢ Effective Faculty Management: Assigning faculty members to teach specific courses and    ensuring smooth coordination between instructors and students.',
        '➢ Comprehensive Department Management: Managing departmental information, including    department IDs, names, and heads, to support the effective delivery of academic programs.',
        '➢ Academic Progress Tracking: Tracking students academic progress and performance     throughout the semester through enrollment records, grades, and attendance.',
        '➢ Extracurricular Engagement: Allowing students to participate in clubs and extracurricular      activities to enhance their overall learning experience.',
        '➢ Resource Management: Managing library resources such as books, journals, and online      databases to support students research and learning activities.',
        '➢ Event Organization: Organizing seminars, workshops, and conferences to complement students academic curriculum and facilitate their professional development.',
        '➢ Project and Research Support: Providing opportunities for students to engage in projects     and research activities under faculty supervision to gain practical experience.',
        '➢ Feedback Collection and Analysis: Collecting feedback from students to identify areas for  improvement and enhance the quality of education provided by the institution.'
      ]
    }],
    slideImages: [
      { url: 'https://i.ibb.co/m071GNB/1.jpg' },
      { url: 'https://i.ibb.co/xzmNsCw/2.jpg' },
      { url: 'https://i.ibb.co/zH5PBVp/3.jpg' },
      { url: 'https://i.ibb.co/k8qvnNh/4.jpg' },
      { url: 'https://i.ibb.co/grwrPMy/5.jpg' },
      { url: 'https://i.ibb.co/wryY6P5/6.jpg' },
      { url: 'https://i.ibb.co/z6hMrS0/7.jpg' },
      { url: 'https://i.ibb.co/Q9zf04S/8.jpg' },
      { url: 'https://i.ibb.co/rMTcVxf/9.jpg' },
      { url: 'https://i.ibb.co/hgQ3jNs/10.jpg' },
      { url: 'https://i.ibb.co/17r9zRZ/11.jpg' },
      { url: 'https://i.ibb.co/cNzYkpQ/12.jpg' },
      { url: 'https://i.ibb.co/ng6n1g7/13.jpg' }
    ]

  },
  {
    id: 6,
    url:
      'https://www.unicotaxi.com/images/blog_images/658b8b316c1130b3ae57d89155efdb57.jpg',
    title: 'Car Rental Management System',

    github: 'https://github.com/apsdeveloper461/CarRentalsystem.com.git',
    pdf: 'https://drive.google.com/file/d/1iXMuQjparrTC7tmzShWn1j4iqqcxXK8Z/view?usp=sharing',
    technolgies: " C PLUS PLUS (C++) || FILE HANDLING WITH CPP (stored Data)|| GIT || GITHUB",
    descrition: "This project zooms into car rentals, building a user-friendly system in C++. Customers can browse cars, book rentals, and manage their accounts. A clear interface lets them search for the perfect car, make secure payments, and view upcoming reservations. For admins, the system offers complete control. They manage the car fleet, oversee bookings, and track customer information. Data-driven reports help optimize pricing and car selection, ensuring a smooth rental experience for everyone. C++ provides a reliable and efficient foundation for this system, making it a great tool to streamline your car rental business.",
    OtherData: [{
      subtitle: 'Admin Control Panel: Steering the Business',
      subdescription: [
        'For administrators, the system offers a central hub for seamless management. They can add, edit, and maintain the car fleet, keeping details like mileage and availability up-to-date. A comprehensive booking overview dashboard keeps all ongoing and upcoming rentals at their fingertips. Customer management allows for profile updates and account creation. Finally, the system generates valuable reports, providing insights into rental trends, popular vehicles, and revenue. With data-driven decision making empowered by these reports, admins can optimize pricing strategies, adjust fleet composition, and keep the business running smoothly. Built with C++, this car rental system leverages its object-oriented programming capabilities for modularity and code reusability. C++ efficiency in memory management ensures smooth performance for this comprehensive system, making it a reliable and powerful tool for managing your car rental business.'
      ]
    }],
    slideImages: [
      { url: 'https://i.ibb.co/rcnFFBB/1.png' },
      { url: 'https://i.ibb.co/k6g97g3/2.png' },
      { url: 'https://i.ibb.co/Z1J4Ncj/3.png' },
      { url: 'https://i.ibb.co/VpbMcjj/4.png' },
      { url: 'https://i.ibb.co/Wp8ryX7/5.png' },
      { url: 'https://i.ibb.co/cwwdXJw/6.png' },
      { url: 'https://i.ibb.co/w7dSpfG/7.png' },
      { url: 'https://i.ibb.co/SJSTMfd/8.png' },
      { url: 'https://i.ibb.co/8NsjrRT/9.png' },
      { url: 'https://i.ibb.co/dcGNNHX/10.png' },
      { url: 'https://i.ibb.co/nRCqPhs/11.png' },
      { url: 'https://i.ibb.co/0YVT7yt/12.png' },
      { url: 'https://i.ibb.co/QfsCF1K/13.png' },
      { url: 'https://i.ibb.co/jDVRmcD/14.png' },
      { url: 'https://i.ibb.co/ZGbg3MJ/15.png' }
    ]
  }
];
export default popularProject;








