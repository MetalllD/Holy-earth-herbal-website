import './home.css';
import Logo from './logo-line';
import ProdSect from './product-sect';
import bowls from '../../assets/bowls.png';
import leaf from '../../assets/leaf.png';


function Home(){
    return(
      <div className="Home">
        <div className="hero">
          <div className="hero-section">
              <div id="leaf">
                <img
                    src={leaf}
                    alt="bowls"
                />
              </div>
              <div id="bowls">
                <img
                    src={bowls}
                    alt="bowls"
                />
             </div>
          </div>
        </div>
          <div id="title">
                <h1>Beautifully crafted handmade natural products</h1>
                <h6>Beautifully crafted handmade natural products made from 100 percent natural products </h6>
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
