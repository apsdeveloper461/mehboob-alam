
export interface Projects {
  id: number;
  url: string;
  title: string;
  customData: {
    title: string;
    github: string;
    pdf?:string;
    technolgies: string;
    descrition: string;
    subtitle: string;
    subdescription: string;
    slideImages: { url: string }[];
  };
}


export const popularProject:Projects[] = [
  {
    id: 1,
    url:
      'https://img.freepik.com/free-vector/gradient-ui-ux-landing-page-template_23-2149053664.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716422400&semt=ais_user',
    title: 'Contact Api Backend App',
    customData: {
      title: 'Contact Api Backend App',
      github:'https://github.com/apsdeveloper461/Contact_Api-with-ExpressJs-and-MongoDb-.git',
      technolgies: " NODE JS || EXPRESS JS || MONGO DB || GIT || GITHUB ||API ",
      descrition: "This project builds a robust backend API specifically designed to manage contact information. It leverages the powerful combination of Node.js for server-side execution, Express for handling HTTP requests and responses, and MongoDB for storing and retrieving contact data in a flexible and scalable NoSQL database. >>>      Node.js:  Acts as the core foundation for your project. It provides an event-driven, non-blocking I/O model, making it efficient in handling multiple concurrent requests. Node.js allows you to write server-side logic in JavaScript, simplifying development and maintenance. >>>     Express:  Built on top of Node.js, Express is a popular web application framework. It provides a streamlined and organized way to handle incoming HTTP requests (GET, POST, PUT, DELETE) and generate the corresponding responses.>>>      MongoDB:  Serves as your primary data storage solution. As a NoSQL database, MongoDB offers a document-oriented approach, allowing you to store contact information in a flexible schema, where each document can have different fields or structures. This flexibility is ideal for managing various contact details like name, email, phone number, and even additional custom fields. >>>   API Endpoints:  Your API will expose well-defined endpoints that act as interaction points for client applications (web or mobile) to access and manipulate contact data. ",
      subtitle:' Benefits : ',
      subdescription:' >> Scalability: Node.js and MongoDB excel at handling large amounts of data and concurrent requests, making your API scalable for future growth.>>   Flexibility: The NoSQL nature of MongoDB allows easy adaptation to changes in your contact data structure without schema modifications.>>    Efficiency: Express simplifies API development and promotes fast response times.>>  RESTful Design: By adhering to RESTful principles, your API provides a well-defined interface for client applications to interact with.',
       slideImages : [ ]
    }
  },
  {
    id: 2,
    url:
      'https://img.freepik.com/free-photo/medium-shot-pharmacist-helping-patient_23-2150348229.jpg',
    title: 'Medical Store Management App',
    customData: {
      title: 'Medical Store Management App',
      github:'https://github.com/apsdeveloper461/E_Commerce_website-with-Php.git',
      technolgies: " MERN STACK || HTML || CSS || JS  || REACTJS || MONGODB || NODEJS || EXPRESSJS || GIT || GITHUB ||API ",
      descrition: "This is the storefront where customers browse, search, and purchase products. It offers a user-friendly interface with the following functionalities:   >>   Product Browsing: Users can easily navigate through product categories, search for specific items using filters like brand, price, or color. Attractive product listings with clear images, descriptions, and prices provide all the necessary information for informed buying decisions.    >>  Shopping Cart Management: Users can add items to their shopping cart, adjust quantities, and review their selections before proceeding to checkout. Secure payment gateways ensure a smooth and reliable transaction experience.  >>    Account Management: Users can create and manage their accounts, view past orders and purchase history, update personal details, and manage their preferences like saved addresses and preferred payment methods. Additionally, wishlists allow users to save products for later purchase and receive notifications about price changes or availability.  >>    Order Tracking and Customer Support: Users can track the status of their orders and access customer support features through integrated ticketing systems or live chat functionalities.",
      subtitle:'Admin Panel',
      subdescription:'This is the backend where you, the store owner, manage all aspects of your e-commerce business. It provides comprehensive tools for:     >> Product Management: You can add, edit, and remove products, manage inventory levels, set prices, and assign categories. An intuitive interface allows uploading high-quality product images and detailed descriptions to showcase your offerings.      >> Order Management: You can view all orders, track their status (processing, shipped, delivered), and manage returns or refunds efficiently. This allows you to fulfill orders promptly and provide excellent customer service.     >> Customer Management: You can access customer information, manage user accounts, and track their purchase history. This provides valuable insights into customer behavior and preferences, helping you tailor your marketing and promotional strategies.  >>  Analytics and Reporting: The admin panel offers data-driven insights into your e-commerce business performance. You can analyze sales trends, identify top-selling products, track marketing campaign effectiveness, and make informed decisions to optimize your business strategy. >>   By combining a user-friendly storefront with a powerful admin panel, your e-commerce app simplifies the online shopping experience for customers while empowering you to manage all aspects of your business effectively.',
       slideImages : [
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
    }
  },
  {
    id: 3,
    url:
      'https://st4.depositphotos.com/3051589/39540/i/380/depositphotos_395408610-stock-photo-lms-thoughtful-male-person-looking.jpg',
    title: 'Learning Management System',
    customData: {
      title: 'Lerning Managment System Using MYSQL ',
      github:'https://github.com/apsdeveloper461/LMS_DB_project.git',
      pdf:'https://drive.google.com/file/d/13RbLjF9P848aJ6M5YgCl6NXRb8qi1Y5T/view?usp=sharing',
      technolgies: " HTML || CSS || JS || REACT JS || NODE JS || EXPRESS JS || MYSQL || GIT || GITHUB || RESTFUL API ",
      descrition: "In the modern educational landscape, managing student information    efficiently is crucial for educational institutions to streamline operations   and provide effective services. To address this need, we propose the     development of a Student Database Management System (DBMS). This      system will facilitate the storage, retrieval, and management of various      student-related data, including personal information, academic records,      enrollment details, attendance, grades, scholarships, and fee payments.",

      subtitle:' Objectives :',
      subdescription:'➢ Design and implement a relational database schema to store student      information systematically.  ➢ Develop a user-friendly interface for administrators, faculty       members, and students to interact with the database.   ➢ Enable secure access control mechanisms to ensure data privacy and       integrity.      ➢ Provide functionalities for managing enrollments, attendance,       grades, scholarships, and fee payments efficiently.      ➢ Generate insightful reports and analytics to aid decision-making       processes within the institution.        <<<< :::: Consulion :::: >>> The proposed Student Database Management System aims to       streamline the management of student information within the educational       institution, providing various benefits such as efficient data management,       improved decision-making, and enhanced communication. By       implementing this system, the institution can better serve its students and       faculty members, ultimately contributing to academic excellence and       institutional success.',
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
    }
  },
  {
    id: 4,
    url:
      'https://img.freepik.com/free-vector/human-hand-holding-mobile-phone-with-text-messages_74855-6531.jpg',
    title: 'Chat App',
    customData: {
      title: 'Chat App',
      github:'https://github.com/apsdeveloper461/text_manipulator.git',
      technolgies: " MERN STACK || HTML || CSS || JS || REACTJS || NODDEJS || EXPRESSJS || SOCKET || MONGODB",
      descrition: `Want to transform your text with ease? Our interactive text manipulator empowers you to take control! From converting to uppercase or lowercase to removing pesky extra spaces, our user-friendly website simplifies your text editing needs. Explore real-world use cases, conquer challenges, and share your creativity with the world. Let our text manipulator become your secret weapon for crafting impactful and polished content!  Tired of fixing typos or counting words? Our website makes changing your text easy! Make it all CAPS or lowercase, get rid of extra spaces, and even see how many words and letters you have. It's fun too! Play games with your text and share your creations. Make cool social media posts and write better with our tips. Come play with your words and see what you can do!`,
      subtitle:'',
      subdescription:'',
       slideImages : []
    }
  },
  {
    id: 5,
    url:
      'https://t4.ftcdn.net/jpg/04/60/23/37/360_F_460233735_3q7EPRIRdlLIQZYK2ucez8QY8PC53bWA.jpg',
    title: 'Learning Managment System(LMS) in C++',
    customData: {
      title: 'Learning Managment System(LMS) in C++ OOP',
      github:'https://github.com/apsdeveloper461/LMS_OOP_CPP_PROJECT.git',
      
      pdf:'https://drive.google.com/file/d/1yEZ9ndX-qmWWz9rIATJvqh8GX8qupMu5/view?usp=sharing',
      technolgies: " C PLUS PLUS || MYSQL || OOP C++ || GIT || GITHUB",
      descrition: `he Learning Management System (LMS) project is a comprehensive solution
      designed to streamline academic operations within educational institutions. It aims to integrate
      various components such as student information, course enrollment, faculty management, departmental coordination, extracurricular activities, resource management, and feedback
      collection into a cohesive system. By facilitating efficient course enrollment, effective faculty
      coordination, and comprehensive academic progress tracking, the LMS project seeks to enhance the
      overall learning experience for students while improving operational efficiency for educational
      institutions.`,
      subtitle:'PURPOSE and OBJECTIVES :',
      subdescription:"The primary purpose of the LMS project is to facilitate the efficient      management of academic resources and processes. The key objectives include:  -->     Efficient Course Enrollment: Providing students with a seamless process for enrolling in      courses based on their academic requirements and interests.  Effective Faculty Management: Assigning faculty members to teach specific courses and    ensuring smooth coordination between instructors and students.  Comprehensive Department Management: Managing departmental information, including    department IDs, names, and heads, to support the effective delivery of academic programs.  Academic Progress Tracking: Tracking students' academic progress and performance     throughout the semester through enrollment records, grades, and attendance.   --> Extracurricular Engagement: Allowing students to participate in clubs and extracurricular      activities to enhance their overall learning experience. -->  Resource Management: Managing library resources such as books, journals, and online      databases to support students' research and learning activities.-->  Event Organization: Organizing seminars, workshops, and conferences to complement     students' academic curriculum and facilitate their professional development. -->  Project and Research Support: Providing opportunities for students to engage in projects     and research activities under faculty supervision to gain practical experience. -->  Feedback Collection and Analysis: Collecting feedback from students to identify areas for  improvement and enhance the quality of education provided by the institution.",
      slideImages: [
        { url:'https://i.ibb.co/m071GNB/1.jpg'},
        { url:'https://i.ibb.co/xzmNsCw/2.jpg'},
        { url:'https://i.ibb.co/zH5PBVp/3.jpg'},
        { url:'https://i.ibb.co/k8qvnNh/4.jpg'},
        { url:'https://i.ibb.co/grwrPMy/5.jpg'},
        { url:'https://i.ibb.co/wryY6P5/6.jpg'},
        { url:'https://i.ibb.co/z6hMrS0/7.jpg'},
        { url:'https://i.ibb.co/Q9zf04S/8.jpg'},
        { url:'https://i.ibb.co/rMTcVxf/9.jpg'},
        { url:'https://i.ibb.co/hgQ3jNs/10.jpg'},
        { url:'https://i.ibb.co/17r9zRZ/11.jpg'},
        { url:'https://i.ibb.co/cNzYkpQ/12.jpg'},
        { url:'https://i.ibb.co/ng6n1g7/13.jpg'}
      ]
    }
  },
    {
    id: 6,
    url:
      'https://www.unicotaxi.com/images/blog_images/658b8b316c1130b3ae57d89155efdb57.jpg',
    title: 'Car Rental Management System',
    customData: {
      title: 'Car Rental Management System',
      github:'https://github.com/apsdeveloper461/CarRentalsystem.com.git',
      pdf:'https://drive.google.com/file/d/1iXMuQjparrTC7tmzShWn1j4iqqcxXK8Z/view?usp=sharing',
      technolgies: " C PLUS PLUS (C++) || FILE HANDLING WITH CPP (stored Data)|| GIT || GITHUB",
      descrition: "This project zooms into car rentals, building a user-friendly system in C++. Customers can browse cars, book rentals, and manage their accounts. A clear interface lets them search for the perfect car, make secure payments, and view upcoming reservations.      For admins, the system offers complete control. They manage the car fleet, oversee bookings, and track customer information. Data-driven reports help optimize pricing and car selection, ensuring a smooth rental experience for everyone. C++ provides a reliable and efficient foundation for this system, making it a great tool to streamline your car rental business.",
      subtitle:'Admin Control Panel: Steering the Business',
      subdescription:    "For administrators, the system offers a central hub for seamless management. They can add, edit, and maintain the car fleet, keeping details like mileage and availability up-to-date. A comprehensive booking overview dashboard keeps all ongoing and upcoming rentals at their fingertips. Customer management allows for profile updates and account creation. Finally, the system generates valuable reports, providing insights into rental trends, popular vehicles, and revenue. With data-driven decision making empowered by these reports, admins can optimize pricing strategies, adjust fleet composition, and keep the business running smoothly.      Built with C++, this car rental system leverages its object-oriented programming capabilities for modularity and code reusability. C++'s efficiency in memory management ensures smooth performance for this comprehensive system, making it a reliable and powerful tool for managing your car rental business.",
        slideImages : [
      {url:'https://i.ibb.co/rcnFFBB/1.png'},
      {url:'https://i.ibb.co/k6g97g3/2.png'},
      {url:'https://i.ibb.co/Z1J4Ncj/3.png'},
      {url:'https://i.ibb.co/VpbMcjj/4.png'},
      {url:'https://i.ibb.co/Wp8ryX7/5.png'},
      {url:'https://i.ibb.co/cwwdXJw/6.png'},
      {url:'https://i.ibb.co/w7dSpfG/7.png'},
      {url:'https://i.ibb.co/SJSTMfd/8.png'},
      {url:'https://i.ibb.co/8NsjrRT/9.png'},
      {url:'https://i.ibb.co/dcGNNHX/10.png'},
      {url:'https://i.ibb.co/nRCqPhs/11.png'},
      {url:'https://i.ibb.co/0YVT7yt/12.png'},
      {url:'https://i.ibb.co/QfsCF1K/13.png'},
      {url:'https://i.ibb.co/jDVRmcD/14.png'},
      {url:'https://i.ibb.co/ZGbg3MJ/15.png'}
    ]
    }
  }
];
export default popularProject;








// https://i.ibb.co/fNF6ZSM/attendence.jpg
// https://i.ibb.co/6PjKsZq/courses.jpg
// https://i.ibb.co/QKQs1kD/current-Course.jpg
// https://i.ibb.co/MgKTVKw/fee.jpg
// https://i.ibb.co/FmJzYzM/grades.jpg
// https://i.ibb.co/zm7CM0k/home.jpg
// https://i.ibb.co/G5NhM1v/login.jpg
// https://i.ibb.co/j8V77Jw/scholarship.jpg
// https://i.ibb.co/jyZRLQ4/signup.jpg