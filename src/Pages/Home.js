import React, { useState } from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../Styles/main.css';
import Project from '../Components/Projects/Project';

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  const headTimeline = gsap.timeline();
  // const introTimeline = gsap.timeline();
  

  useEffect(() => {
    const headH1 = document.querySelector('.head__name h1');
    const headFunction = document.querySelector('.head__name_function');
    // const headPicture = document.querySelector('.head__picture img');

    gsap.set(headH1, { y: 100, autoAlpha: 0 });
    gsap.set(headFunction, { y: 100, autoAlpha: 0 });
    // gsap.set(headPicture, { y: 100, autoAlpha: 0 });
    
    headTimeline
      .to('.head__name h1', { 
        duration: 1, 
        y: 0, 
        autoAlpha: 1 
      })
      .to('.head__name_function', { 
        duration: 1, 
        y: 0, 
        autoAlpha: 1
      }, '-=0.5')
      // .to('.head__picture img', { 
      //   duration: 1, 
      //   y: 0, 
      //   autoAlpha: 1
      // }, '-=0.5')


      const pictureTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: '-=250',
          end: '+=1000',
          scrub: true,
          // markers: true,
        }
      });
      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.intro p',
          start: '-=1000',
          end: '-=400',
          scrub: true,
          // markers: true,
        }
      });
      const titleTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.head__name',
          start: '-=250',
          end: 'bottom',
          scrub: true,
          // markers: true,  
        }
      });

  
      pictureTimeline
        .to('.head__picture img', { 
          duration: 1, 
          y: -200, 
          autoAlpha: 0
        })

      introTimeline
        .to('.intro p', { 
          duration: 1, 
          y: 270, 
          autoAlpha: 1
        })

      titleTimeline
        .to('.head__name', { 
          duration: 1, 
          y: 400, 
          autoAlpha: 1
        })




        document.addEventListener('mousemove', mouseMoveFunc);
        function mouseMoveFunc(e) {
          const depth = 10;
          const moveX = ((e.pageX)-(window.innerWidth/2))/depth;
          const moveY = ((e.pageY)-(window.innerHeight/2))/depth;
          gsap.to(".head__picture img", {
            duration: 1,
            x: moveX,
            y: moveY,
            ease: "slow",
            stagger: 0.008,
            overwrite: true
          });
        }
        // greensock forum link:https://greensock.com/forums/topic/33156-objects-interact-with-mouse-move/


        // footer

        


  }, );
  const footerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.footer__socials',
      start: '200 bottom',
      end: 'bottom',
      scrub: true,
      // markers: true,
    }
  });

  gsap.set('.footer__socials a', { x: 200, autoAlpha: 0 });
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
    }, '-=1')

  // fetch json bestand "Projects"
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('projects.json')
      .then(response => response.json())
      .then(data => setProjects(data.projecten));
  }
  , []);

  const [xvalue, setXvalue] = useState(0);
  const maxProject = projects.length;
  const procentJump = 100 / maxProject;

  const nextProject = () => {
    if (xvalue < maxProject - 2) {
      const projectDiv = document.querySelector('.projectDiv');
      gsap.to(projectDiv, { 
        duration: 1, 
        x: "-="+procentJump+"%", 
        
      })
    } else {
      return;
    }
    setXvalue(xvalue + 1);
  }

  const previousProject = () => {
    if (xvalue > 0) {
      const projectDiv = document.querySelector('.projectDiv');
      gsap.to(projectDiv, { 
        duration: 1, 
        x: "+="+procentJump+"%", 
        
      })
    } else {
      return;
      
    }
    setXvalue(xvalue - 1);
  }

  useEffect(() => {
    if (xvalue === 0) {
      const previousBtn = document.querySelector('.previousBtn');
      previousBtn.style.display = 'none';
    }
    if (xvalue === maxProject - 2) {
      const nextBtn = document.querySelector('.nextBtn');
      nextBtn.style.display = 'none';
    }
    if (xvalue === 1) {
      const previousBtn = document.querySelector('.previousBtn');
      previousBtn.style.display = 'block';
    }
    if (xvalue === maxProject - 3) {
      const nextBtn = document.querySelector('.nextBtn');
      nextBtn.style.display = 'block';
    }
  }
  , [xvalue, maxProject]);

  return (
    <div>
      <main>
        <section className='head'>
          <div className='head__name'>
            <h1>Sebastien <br /> Daled-Rosseel</h1>
            <p className='head__name_function'>Webdeveloper/WebDesigner</p>
          </div>
          <div className='head__picture'>
            <img src="/images/foto.jpg" alt="Foto van Sebastien" />
          </div>
        </section>
        <section className='intro'>
          <p>Hallo, ik ben Sebastien Daled-Rosseel, een enthousiaste student aan Artevelde Hogeschool, waar ik de opleiding New Media Development volg. Momenteel zit ik in mijn derde en laatste jaar van deze boeiende studie. Mijn interesse in de wereld van multimedia en webontwikkeling begon eigenlijk al in het middelbaar, waar ik de opleiding Multimedia volgde aan Viso Mariakerke. Tijdens deze periode leerde ik voornamelijk de kunst van het ontwerpen, en dit vormde een solide basis voor mijn verdere academische reis. <br /><br />

Wat mij echt drijft en inspireert, is het coderen en ontwerpen van websites. Het is fascinerend om te zien hoe je met programmeertalen en creatieve ontwerpelementen iets kunt creëren dat toegankelijk is voor een wereldwijd publiek. Het proces van het bedenken van een concept, het schrijven van de code, en uiteindelijk het zien van een goed ontworpen website tot leven komen, geeft me enorm veel voldoening.<br /><br />

Naast mijn passie voor webontwikkeling heb ik nog een andere liefde, en dat is voetbal. Als hobby breng ik graag mijn vrije tijd door op het voetbalveld. Het is niet alleen een geweldige manier om fit te blijven, maar het biedt ook de kans om samen te werken in een team, strategieën te bedenken en je vaardigheden op het veld te verbeteren. Voetbal brengt mensen samen en leert belangrijke levenslessen over teamwork en doorzettingsvermogen.</p>
        </section>
        <section className='projecten'>
          <h2>Projecten</h2>

          <div className='projecten__container'>
            <div className='projectDiv__Mask'>
              
              <div className='projectDiv'>
              

                {projects.map((_, i) => {
                  return <Project key={i} index={i} />
                })}

                
              </div>
              
            </div>
            <div className='projects__buttons'>
              <button onClick={previousProject} className='btn_action previousBtn'><svg
    id="Layer_4"
    data-name="Layer 4"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 82.61 146.43"
    style={{ fill: 'none', stroke: '#C9C9C9', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '10px' }}
  >
    <polyline points="74.8 140.43 8.49 74.12 76.61 6"/>
  </svg></button>
              <button onClick={nextProject} className='btn_action nextBtn'>
<svg id="Layer_4" data-name="Layer 4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.61 146.43" style={{fill: 'none', stroke: '#C9C9C9', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '10px' }}>
  <polyline class="cls-1" points="7.81 6 74.12 72.31 6 140.43"/>
</svg></button>
            </div>
          </div>
        </section>

        <section className='contact'>
          <h2>Contact</h2>

          <table>
            <tr>
              <td>
                <label for="naam">Naam</label>
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" id="naam" name="naam" placeholder='Vul je naam hier in' />
              </td>
            </tr>
            <tr>
              <td>
                <label for="email">Email</label>
              </td>
            </tr>
            <tr>
              <td>
                <input type="email" id="email" name="email" placeholder='Vul je email hier in'/>
              </td>
            </tr>
            <tr>
              <td>
                <label for="bericht">Bericht</label>
              </td>
            </tr>
            <tr>
              <td>
                <textarea id="bericht" name="bericht" placeholder='Schrijf hier je bericht' rows={20}></textarea>
              </td>
            </tr>
          </table>
        </section>
      </main>

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
                <img src="/images/footer/linkedin.png" alt="linkedin logo" />
                <p>Sebastien Daled-Rosseel</p>
              </div>
            </a>
            <a href="https://www.instagram.com/sebastien_dr/" target="_blank" rel="noreferrer">
              <div>
                <img src="/images/footer/instagram.png" alt="Instagram logo" />
                <p>sebastien_dr</p>
              </div>
            </a>
            <a href="https://www.facebook.com/sebastien.daledrosseel.7" target="_blank" rel="noreferrer">
              <div>
                <img src="/images/footer/facebook.png" alt="Facebook logo" />
                <p>Sébastien Daled-Rosseel</p>
              </div>
            </a>
          </div>
        </div>
        <p className='copyrights'>© copyright 2023 Sebastien Daled-Rosseel</p>
      </footer>
    </div>
  );
};

export default Home;