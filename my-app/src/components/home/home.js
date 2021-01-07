import './home.css';
import bowls from '../../assets/bowls.png';
import leaf from '../../assets/leaf.png';
import product from '../../assets/Product-home.png'

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

        <section id="products">
          <h1>Products</h1>
          <div className="products">
                <div id="prod-img">
                <img
                    src={product}
                    alt="product"
                />
                </div>
                <div id="descri">
                  <h6>
                  We make the wide range of organic products. Starting from soaps, Shampoos, Body mists and more. All the products are made using 100% natural ingredients.
                  </h6>
                </div>
          </div>
          </section>
      </div>
    )
  }

export default Home;
