import './product-sect.css';
import product from '../../assets/Product-home.png';

function ProdSect(){
    return(
      <div>
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
        </div>
    )
  }


export default ProdSect;
