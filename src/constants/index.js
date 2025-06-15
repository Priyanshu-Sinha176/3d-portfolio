const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 25, suffix: "+", label: "Completed Projects" },
  { value: 20, suffix: "+", label: "Technologies Used" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/f.svg",
  },
  {
    imgPath: "/images/logos/a.png",
  },
  {
    imgPath: "/images/logos/b.png",
  },
  {
    imgPath: "/images/logos/e.svg",
  },
  {
    imgPath: "/images/logos/d.svg",
  },
  {
    imgPath: "/images/logos/g.svg",
  },
  {
    imgPath: "/images/logos/c.svg",
  },
  {
    imgPath: "/images/logos/h.png",
  },
  {
    imgPath: "/images/logos/i.svg",
  },
  {
    imgPath: "/images/logos/j.png",
  },
  {
    imgPath: "/images/logos/exp2.png",
  },
  {
    imgPath: "/images/logos/k.png",
  },
  {
    imgPath: "/images/logos/l.png",
  },
  {
    imgPath: "/images/logos/m.png",
  },
  {
    imgPath: "/images/logos/n.png",
  },
  {
    imgPath: "/images/logos/o.svg",
  },
  {
    imgPath: "/images/logos/p.svg",
  },
  {
    imgPath: "/images/logos/q.svg",
  },
  {
    imgPath: "/images/logos/r.png",
  },
  {
    imgPath: "/images/logos/s.svg",
  },
  {
    imgPath: "/images/logos/t.png",
  },
  {
    imgPath: "/images/logos/u.svg",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "AI Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Android Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "The versatility of full-stack development excites me daily. One moment I'm designing APIs, the next I'm perfecting responsive layouts. This broad skill set helps me build better, more cohesive applications.",
    
    logoPath: "/images/e.gif",
    title: "Full Stack Developer",
    date: "January 2025 - Present",
    responsibilities: [
      "Built responsive, high-performance web applications using React, Node.js, and MongoDB.",
      "Integrated RESTful APIs and third-party services to enhance platform functionality.",
      "Implemented reusable components and state management for scalable front-end architecture.",
    ],
  },
  {
    review: "Frontend development taught me to think like a user first. Every animation, every responsive breakpoint, and every interaction I built was focused on creating intuitive experiences that just work.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/c.gif",
    title: "Frontend Developer",
    date: "June 2024 - December 2024",
    responsibilities: [
      "Developed responsive user interfaces using React and Tailwind CSS, ensuring seamless performance across devices.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Implemented reusable UI components and followed design system guidelines for consistency and maintainability.",
    ],
  },
  {
    review: "Developing Android apps with Kotlin opened up a whole new world of mobile possibilities. I loved crafting native experiences that felt intuitive on Android devices, from smooth animations to material design implementations.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/d.png",
    title: "Android Developer (Kotlin)",
    date: "March 2023 - June 2024",
    responsibilities: [
      "Built and deployed scalable Android applications using Kotlin, following MVVM architecture and modern development practices.",
      "Integrated Firebase for authentication, real-time database, and push notifications to enhance app functionality.",
      "Optimized app performance through effective use of Jetpack components, background processing, and memory management.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Rakesh Kumar",
    mentions: "MBBS, Ranchi",
    review:
      "Working with Priyanshu on our hospital system was a great experience. He made it easy for both patients and doctors to use. The platform is smooth and well-built. Very happy with the final results.",
  },
  {
    name: "Rajeev Singh",
    mentions: "Business Owner, Rajgir",
    review:
      "Priyanshu was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
  },
  {
    name: "Sunil Verma",
    mentions: "Shop Owner, Bokaro",
    review: "Priyanshu created a beautiful and responsive website for our shop. It looks professional, works perfectly across all devices, and loads quickly. He made the whole process smooth and easy. Very happy with the results!",
  },
];

const socialImgs = [

  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/priyanshu-kumar-a13a84349"
  },

  {
    name: "Git-hub",
    imgPath: "/images/code-branch.png",
    link: "https://github.com/Priyanshu-Sinha176"
  },


  {
    name: "whatsapp",
    imgPath: "/images/whatsapp.png",
    link: "http://wa.me/919570603449"
  },

  {
    name: "resume",
    imgPath: "/cv.png",
    link: "/priyanshu_kumar_resume.pdf"
  },

];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
