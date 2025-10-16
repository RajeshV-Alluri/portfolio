import apa from '../../assets/editorials/apa-logo.png'
import bps from '../../assets/editorials/bps-logo.png'
import frontiers from '../../assets/editorials/frontiers-logo.png'
import peerj from '../../assets/editorials/peerj-logo.png'
import springer from '../../assets/editorials/springer-logo.png'
import wiley from '../../assets/editorials/wiley-logo.png'
import profile from '../../assets/profile_2.png'
import { useEffect, useState } from 'react';

const Hero = () => {
	const Counter = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = null;

      const easeOutQuad = (t) => t * (2 - t); // Ease-out function (0 → 1)

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1); // progress: 0 to 1
        const easedProgress = easeOutQuad(progress);
        const currentCount = Math.floor(easedProgress * target);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(target); // ensure it lands exactly on target
        }
      };

      requestAnimationFrame(step);
    }, [target, duration]);

    return <span>{count}</span>;
	};

  const editorialLogos = [
    { src: apa, width: '20em' },
    { src: bps, width: '10em' },
    { src: frontiers, width: '8em', style: { filter: 'contrast(250%)' } },
    { src: peerj, width: '6em' },
    { src: springer, width: '6em' },
    { src: wiley, width: '6em' }
  ];

	return (
		<section className="hero">
			<div className="design">
				<img className='profile' src={profile} alt="profile" />
        <div>
          <h1>Dr. Tushar Singh</h1>
          <p>Professor, Banaras Hindu University, India.</p>
          <p>Research Areas: <span>gender and social minorities,</span><span>Affect,</span><span>Cognition and health.</span></p>
        </div>
        
			</div>

      <div className='editorials'>
        <h1>Editorial Activities</h1>
        <div className='slider'>
          <div className="list">
            {/* Render the original list */}
            {editorialLogos.map((logo, index) => (
              <div className="item" key={`logo-${index}`} style={{'--width': logo.width}}>
                <img src={logo.src} alt="" style={logo.style || {}} />
              </div>
            ))}
            {/* Render the duplicated list for a seamless loop */}
            {editorialLogos.map((logo, index) => (
              <div className="item" key={`logo-duplicate-${index}`} style={{'--width': logo.width}}>
                <img src={logo.src} alt="" style={logo.style || {}} />
              </div>
            ))}
          </div>        
        </div>
      </div>

			<div className="stats">
        <div className="single-stat">
          <p className="count">
            <Counter target={36} />
            <span className='plus'>+</span>
          </p>
          <p className="stat-info">Lectures & Keynotes</p>
        </div>
        <div className="single-stat">
          <p className="count">
            <Counter target={30} />
            <span colorName='plus'>+</span>
          </p>
          <p className="stat-info">Workshops Conducted</p>
        </div>
        <div className="single-stat">
          <p className="count">
            <Counter target={50} />
            <span colorName='plus'>+</span>
          </p>
          <p className="stat-info">Conference Presentations</p>
        </div>
      </div>


		</section>
	)	
}

export default Hero;