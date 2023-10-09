import React from 'react';
import '../Styles/main.css';

const Home = () => {
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
        <section>
          <p>Hi, ik ben Sebastien Daled-Rosseel. Ik ben een student op Artevelde hogeschool waar ik new media development studeer. Nu zit ik in m’n 3de en ook laatste jaar. Voor de hogeschool heb ik een opleiding gehad in multimedia in het middelbaar, dat was op Viso mariakerke hier heb ik vooral leren desigen.

            Mijn passie is het coderen en het ontwerpen van site’s.  </p>
        </section>
        <section>
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