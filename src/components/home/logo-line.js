import './logo-line.css';
import logo1 from '../../assets/logo-01.png';
import logo2 from '../../assets/logo-02.png';
import logo3 from '../../assets/logo-03.png';
import logo4 from '../../assets/logo-04.png';
import logo5 from '../../assets/logo-05.png';
import logo6 from '../../assets/logo-06.png';
import Fade from 'react-reveal/Fade';

function Logo(){
    return(
      <Fade bottom>
      <div className="Logo-line">
          <div id="logo1">
                 <img
                    src={logo1}
                    alt="logo1"
                />
          </div>
          <div id="logo2">
                 <img
                    src={logo2}
                    alt="logo2"
                />
          </div>
          <div id="logo3">
                 <img
                    src={logo3}
                    alt="logo3"
                />
          </div>
          <div id="logo4">
                 <img
                    src={logo4}
                    alt="logo4"
                />
          </div>
          <div id="logo5">
                 <img
                    src={logo5}
                    alt="logo5"
                />
          </div>
          <div id="logo6">
                 <img
                    src={logo6}
                    alt="logo6"
                />
          </div>
    
      </div>
      </Fade>
    )
  }

export default Logo;