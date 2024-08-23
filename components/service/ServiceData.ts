
export interface SERVICE_CARD {
  title: string;
  properties: string[];
  button: string;
}

export const serviceCards: SERVICE_CARD[] = [
  {
    title: 'Hire MERN STACK Developer',
    properties: [
      'Expertise in MongoDB, Express, React, and Node.js',
      'Custom web application development',
      'Fast and efficient development with agile methodologies',
      'Robust and secure coding practices',
      'Regular updates and maintenance',
    ],
    button: 'Hire Now',
  },
  {
    title: 'Hire Business Application Developer',
    properties: [
      'Customized business application solutions',
      'Expertise in business process automation',
      'Integration with existing systems and tools',
      'Enhanced productivity and efficiency',
      'Ongoing support and maintenance',
    ],
    button: 'Hire Expert',
  },
  {
    title: 'Hire Next.js Developer',
    properties: [
      'Expertise in Next.js framework and React ecosystem',
      'Fast and scalable web application development',
      'Server-side rendering for SEO optimization',
      'Customizable and extensible architecture',
      'Regular updates and maintenance',
    ],
    button: 'Hire Next.js Expert',
  },
];

