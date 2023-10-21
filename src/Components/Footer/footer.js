import React from 'react';
import './footer.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Footer = () => {
  gsap.registerPlugin(ScrollTrigger);
  


    const footerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.footer__socials',
        start: '-1000 bottom',
        end: 'bottom',
        scrub: true,
        // markers: true,
      }
    });
  
    gsap.set('.footer__socials a', { x: 100, autoAlpha: 0 });
    gsap.set('.footer__info div', { x: 100, autoAlpha: 0 });

    footerTimeline
    .to('.footer__info', { 
      duration: 1, 
      y: -100, 
      autoAlpha: 1
    })
    .to('.footer__socials', { 
      duration: 1, 
      y: -100, 
      autoAlpha: 1
    }, '-=1')
    .to('.copyrights', {
      duration: 1,
      y: -100,
      autoAlpha: 1,
    }, '-=1')
    .to('.footer__info div', {
      duration: 5,
      x: 0,
      autoAlpha: 1,
      stagger: 0.2,
    }, '-=1')
    .to('.footer__socials a', {
      duration: 5,
      x: 0,
      autoAlpha: 1,
      stagger: 0.2,
    }, '-=4')
  

 
  return (
    <footer>
    <div className='footer'>
      <div className='footer__info'>
        <div>
          <p>seba.daled@telenet.be</p>
          <p>0472 72 04 63</p>
        </div>
      </div>
      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/sebastien-daled-rosseel-5b3261223/" target="_blank" rel="noreferrer">
          <div>
            <img src="./images/footer/linkedin.png" alt="linkedin logo" />
            <p>Sebastien Daled-Rosseel</p>
          </div>
        </a>
        <a href="https://www.instagram.com/sebastien_dr/" target="_blank" rel="noreferrer">
          <div>
            <img src="images/footer/instagram.png" alt="Instagram logo" />
            <p>sebastien_dr</p>
          </div>
        </a>
        <a href="https://www.facebook.com/sebastien.daledrosseel.7" target="_blank" rel="noreferrer">
          <div>
            <img src="images/footer/facebook.png" alt="Facebook logo" />
            <p>Sébastien Daled-Rosseel</p>
          </div>
        </a>
      </div>
    </div>
    <p className='copyrights'>© copyright 2023 Sebastien Daled-Rosseel v0.0.5</p>
  </footer>
  );
};

export default Footer;