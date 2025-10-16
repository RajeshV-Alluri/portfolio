import { useState, useEffect, useRef } from "react";

const About = () => {
  const Counter = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef(null);
    const frameRef = useRef(null);

    // Detect when element enters viewport
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        },
        { threshold: 0.3 } // Trigger when 30% visible
      );

      if (counterRef.current) {
        observer.observe(counterRef.current);
      }

      return () => {
        if (counterRef.current) observer.unobserve(counterRef.current);
      };
    }, [hasAnimated]);

    // Run counter animation when visible
    useEffect(() => {
      if (!hasAnimated) return;

      let start = null;
      const easeOutQuad = (t) => t * (2 - t);

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const easedProgress = easeOutQuad(progress);
        const currentCount = Math.floor(easedProgress * target);

        setCount(currentCount);

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };

      frameRef.current = requestAnimationFrame(step);

      return () => cancelAnimationFrame(frameRef.current);
    }, [hasAnimated, target, duration]);

    return <span ref={counterRef}>{count}</span>;
  };

  return (
    <section className="about-wrapper">
      <div className="about-info">
        <h4>About</h4>
        <p>
          I am currently working as <span>Professor</span> at the Department of
          Psychology, Banaras Hindu University. I completed my D. Phil in
          Psychology from the University of Allahabad. Having more than fifteen
          years of teaching experience in premier institutes like the Centre for
          Behavioural and Cognitive Sciences, University of Allahabad, Amity
          University and now in B.H.U., I have also been Visiting Professor at
          the Indian Institute of Management, Indore and the Indian Institute of
          Technology BHU. teaching I am involved in research in areas of gender
          and social minorities. I have published more than 60 research papers
          and articles in reputed National and International Journals and Books.
        </p>

        <p>
          Besides teaching and research, I am actively involved in training psychological/ soft skills to the students and professionals in relevant fields. I have been involved in teaching and training behavioral skills related to Understanding Self for effectiveness, Communication skills, Group Dynamics, Professional skills, Stress management, Memory enhancement, Group Discussion and Interviewing Skills etc.
        </p>
      </div>

      <div className="stats">
        <div className="single-stat">
          <p className="count">
            <Counter target={36} />
            <span>+</span>
          </p>
          <p className="stat-info">Lectures & Keynotes</p>
        </div>
        <div className="single-stat">
          <p className="count">
            <Counter target={30} />
            <span>+</span>
          </p>
          <p className="stat-info">Workshops Conducted</p>
        </div>
        <div className="single-stat">
          <p className="count">
            <Counter target={50} />
            <span>+</span>
          </p>
          <p className="stat-info">Conference Presentations</p>
        </div>
      </div>
    </section>
  );
};

export default About;
