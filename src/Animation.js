import React,{Component} from 'react';
// import ParticlesBg from 'particles-bg';
import Particles from 'react-particles-js';
import './animation.css';

// function Animation() {
//   return (
//     <ParticlesBg type="cobweb" num={100} bg={true} color="#ffffff" />
//   );
// }

// export default Animation;
class Animation extends Component{
  
  render(){
    if(window.innerWidth >= 960){
      return (
        <Particles
          params={{
            "particles": {
                "number": {
                  "value": 100
                },
                "size": {
                  "value": 4
                },
                "color": {
                  "value": "#9D00FF"
                },
                "links": {
                  blink: false,
                  color: "#9D00FF",
                  consent: false
                },
            
            },
            "interactivity": {
                "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "repulse"
                    }
                }
            }
          }} 
        />
      );
    }else{
      return (
        <Particles
          params={{
            "particles": {
                "number": {
                  "value": 30
                },
                "size": {
                  "value": 4
                },
                "color": {
                  "value": "#9D00FF"
                },
                "links": {
                  blink: false,
                  color: "#9D00FF",
                  consent: false
                },
            },
            "interactivity": {
                "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "repulse"
                    }
                }
            }
          }} 
        />
      );
    }
  };

}
export default Animation;