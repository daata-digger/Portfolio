import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack",
      icon: web,
    },
    {
      title: "Data Wrangling",
      icon: mobile,
    },
    {
      title: "DevOps Engineer",
      icon: backend,
    },
    {
      title: "Machine Learning",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Research Assistant",
      company_name: "Manipal University Jaipur",
      icon: tesla,
      iconBg: "#FFBF00",
      date: "Jan 2021 - Jun 2021",
      points: [
        "MERN Stack Development: Created a Real Estate Web App using MongoDB, Express.js, React, and Node.js.",
        "Advanced Authentication: Implemented JWT, Firebase, and Google OAuth for secure user access.",
        "CRUD Operations: Enabled property listing creation, updating, and deletion using MongoDB.",
        "User-Friendly Features: Added image uploads, property management, and advanced search functionality for an enhanced user experience.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Acxiom Consulting",
      icon: shopify,
      iconBg: "#ffffff",
      date: "Aug 2021 - Jan 2022",
      points: [
        "AI-Powered Data Analysis: Developed AI-based data analysis for enhanced insights.",
        "Git Collaboration: Used Git for seamless team collaboration and version control.",
        "IBM Tool Integration: Integrated IBM Watson Studio and IBM Cloud for streamlined development.",
        "Data-Driven Insights: Provided actionable insights for informed decision-making.",
      ],
    },
    {
      title: "DevOps Engineer",
      company_name: "Keen & Able",
      icon: starbucks,
      iconBg: "#ffffff",
      date: "Sept 2022 - Aug 2023",
      points: [
        "Developed and maintained web infrastructure using Docker containers, Linux servers, and load balancing.",
        "Collaborated with cross-functional teams on high-quality web applications and contributed to the iGot project led by Prime Minister Narendra Modi.",
        "Focused on infrastructure scalability and reliability, optimizing resources and handling traffic spikes.",
        "Actively participated in system architecture reviews, providing constructive feedback for improvements.",
      ],
    },
    {
      title: "Data Science",
      company_name: "Northeastern University Boston",
      icon: meta,
      iconBg: "#000000",
      date: "Sept 2023 - Aug 2025",
      points: [
        "Pursuing Data Science at Northeastern University, Boston to master essential skills in data analysis and decision-making.",
        "This program equips me with cutting-edge technologies, such as Python, machine learning, and data visualization, vital for a successful data science career.",
        "Northeastern's strong industry connections and co-op opportunities will provide me with real-world experience and valuable networking connectionns.",
        "I'm excited to leverage my education at Northeastern to drive data-driven innovation in diverse industries.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Aayon's expertise, dedication, and problem-solving skills have streamlined our development and deployment processes, ensuring our projects run smoothly and efficiently",
      name: "Bidyut Baran Mukherjee",
      designation: "CIO",
      company: "Fostering Linux",
      image: "https://media.licdn.com/dms/image/C4E03AQFwotVcZilDYA/profile-displayphoto-shrink_800_800/0/1516467980020?e=1704326400&v=beta&t=EUj8ULMACJbckp0fylvkrMpLqinTQW3NL_ZUTCcYzr0",
    },
    {
      testimonial:
        "Aayon's skills have made our development pipeline seamless, and our operations more efficient. Highly recommended!",
      name: "Varad Gupta",
      designation: "CTO",
      company: "Keen & Able",
      image: "https://www.dqchannels.com/wp-content/uploads/2020/12/5b6405c93638d.jpg",
    },
    {
      testimonial:
        "Aayon is an exceptional deep learner, always hungry for knowledge and quick to adapt. His ability to absorb information and apply it is truly remarkable.",
      name: "Hemant Sharma",
      designation: "Senior Manager",
      company: "Acxiom Consulting",
      image: "https://media.licdn.com/dms/image/C4D03AQEDMi__gJOKtQ/profile-displayphoto-shrink_800_800/0/1658848238805?e=1704326400&v=beta&t=xL5fzbiyQBTaXWxDdCzR9EdLQaua5IRhXSscuHA6wGM",
    },
  ];
  
  const projects = [
    {
      name: "Housing Facility",
      description:
        "Developed a comprehensive real estate project using the MERN stack, enriched with Google OAuth for robust user authentication. This platform revolutionizes property listings and searches, offering a secure and user-friendly experience.",
      tags: [
        {
          name: "MongoDb",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name: "NodeJs",
          color: "orange-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/daata-digger/Housing_Facility",
    },
    {
      name: "My Gov",
      description:
        "Built a DevOps-driven website for Prime Minister Narendra Modi, ensuring optimal performance through load balancing, user tracking, and scalable architecture, showcasing our team's expertise in cutting-edge technologies.",
      tags: [
        {
          name: "Linux",
          color: "blue-text-gradient",
        },
        {
          name: "Nginx",
          color: "green-text-gradient",
        },
        {
          name: "Docker",
          color: "pink-text-gradient",
        },
        {
          name: "Ansible",
          color: "orange-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://www.mygov.in/",
    },
    {
      name: "Prediction Model",
      description:
        "Developed an advanced animal tracking system employing machine learning techniques. Leveraged Python, Scikit-Learn, and TensorFlow to build a robust prediction model, enhancing precision and efficiency in monitoring and analyzing animal movements.",
      tags: [
        {
          name: "ScikitLearn  ",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "TensorFlow ",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
