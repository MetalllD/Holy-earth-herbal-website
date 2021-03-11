import './home.css';
import Logo from './logo-line';
import ProdSect from './product-sect';
import bowls from '../../assets/bowls.png';
import leaf from '../../assets/leaf.png';
import Fade from 'react-reveal/Fade';


function Home(){
    return(
      <div className="Home">
        <div className="hero">
        <Fade bottom>
        <div id="title">
            <text>
                <h1>Beautifully crafted handmade natural products</h1>
                <h6>Beautifully crafted handmade natural products made from 100 percent natural products </h6>
            </text>
        </div>
        </Fade>
                    <div className="hero-section">
                    <Fade bottom>
                        <div id="leaf">
                          <img
                              src={leaf}
                              alt="bowls"
                        />
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div id="bowls">
                          <img
                              src={bowls}
                              alt="bowls"
                          />
                        </div>
                    </Fade>
          </div>
        </div>
          

        <section id="logo-line">
          <Logo />
        </section>

        <section id="products">
          <ProdSect />
        </section>

      </div>
    )
  }


export default Home;
