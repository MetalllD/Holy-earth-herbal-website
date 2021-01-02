import './home.css';
import bowls from './bowls.png';
import leaf from './leaf.png';

function Home(){
    return(
      <div className="Home">
           <div id="bowls">
             <img
                 src={bowls}
                 alt="logo"
             />
        </div>
        <h1>Beautifully crafted handmade natural products</h1>
       
      </div>
    )
  }

export default Home;
