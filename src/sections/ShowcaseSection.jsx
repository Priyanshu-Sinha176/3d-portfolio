import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (

    <div id="work" ref={sectionRef} className="app-showcase">

      <div className="w-full">

        <div className="showcaselayout">

          <div ref={rydeRef} className="first-project-wrapper">

            <a href="https://hospital-managment-vert.vercel.app/" target="_blank" rel="noopener noreferrer">

              <div className="image-wrapper">

                <img src="/images/a.png" alt="Ryde App Interface" />

              </div>

              <div className="text-content">

                <h2>

                  Streamlining healthcare for doctors and patients with an intuitive management platform.

                </h2>

                <p className="text-white-50 md:text-xl">

                  An app built with TypeScript, Appwrite, Twilio & TailwindCSS v4 for a fast,
                  user-friendly experience.

                </p>

              </div>

            </a>

          </div>

          <div className="project-list-wrapper overflow-hidden">

            <div className="project" ref={libraryRef}>

              <a href="https://nova-learn-eta.vercel.app/" target="_blank" rel="noopener noreferrer">

                <div className="image-wrapper bg-[#FFEFDB]">

                  <img
                    src="/images/b.png"
                    alt="Library Management Platform"
                  />

                </div>

                <h2> Your AI-Powered Partner in Teaching and Learning </h2>

              </a>

            </div>

            <div className="project" ref={ycDirectoryRef}>

              <a href="https://tennent-e-commerce.vercel.app/" target="_blank" rel="noopener noreferrer">

                <div className="image-wrapper bg-[#FFE7EB]">

                  <img src="/images/project3.png" alt="YC Directory App" />

                </div>

                <h2>An All-in-One Marketplace for Course Creators and Students</h2>

              </a>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default AppShowcase;
