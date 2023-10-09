import React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../Styles/main.css';

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  const headTimeline = gsap.timeline();
  const introTimeline = gsap.timeline();
  

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
  }, []);
  


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

          <div>
            <div>
              <div>
                <h4>vak</h4>
                <p>naam project</p>
              </div>
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
            <div>
              <img src="/images/footer/linkedin.png" alt="linkedin logo" />
              <p>Sebastien Daled-Rosseel</p>
            </div>
            <div>
              <img src="/images/footer/instagram.png" alt="Instagram logo" />
              <p>sebastien_dr</p>
            </div>
            <div>
              <img src="/images/footer/facebook.png" alt="Facebook logo" />
              <p>Sébastien Daled-Rosseel</p>
            </div>
          </div>
        </div>
        <p className='copyrights'>© copyright 2023 Sebastien Daled-Rosseel</p>
      </footer>
    </div>
  );
};

export default Home;