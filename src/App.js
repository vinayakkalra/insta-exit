import telegram from './images/telegram.svg';
import twitter from './images/twitter.svg';
import discord from "./images/discord.svg";
import globe from "./images/globe.svg";
import ReactPlayer from 'react-player';
import './App.css';
import HubspotForm from 'react-hubspot-form'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-fluid mb-4 mt-5">
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-sm-12 col-md-12" style={{paddingTop:'110px'}}>
                  <div className="heading mt-5">
                    <h1 className="text-center main-heading text-uppercase"> Instant Cross-chain Transactions</h1>
                    <h3 className="sub-heading text-center text-capitalize">Enable users to instantly transfer funds between layer 1 & layer 2</h3>
                  </div>
                </div>
              </div>
              {/* <div className="row" style={{paddingTop:'35px'}}>
                <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center">
                  <h1 className="text-center sub-heading2 pt-3 text-white">Want to integrate ASAP?</h1>
                </div>
              </div> */}
              <div className="row mt-4">
                <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center">
                  <a href="https://t.me/@aniketjindal" className="text-button text-capitalize">Request early access</a>
                </div>
              </div>
              <div className="row d-flex justify-content-center pb-4" style={{paddingTop:'260px'}}>
                <div className="col-sm-12 col-md-6 col-lg-11">
                    <div className="d-flex justify-content-center">
                      {/* <ReactPlayer
                        playing
                        url={[
                          {src:{video}, type: 'video/mp4'}
                        ]}
                      /> */}
                      <ReactPlayer controls={true} loop={true} url='https://www.youtube.com/watch?v=aX2Cx2hiME4'
                      width = '100%'
                      height = '500px'/>
                    </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center">
                  <div className="text-uppercase">
                    <h1 className="text-center cs text-white">Coming Soon</h1>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center">
                  <h6 className="text-center pt-3 pbb text-white">Powered by Biconomy</h6>
                </div>
                {/* <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center">
                    <h3 className="text-center pt-3 follow_us text-white">Follow Us</h3>
                </div> */}
              </div>
              <div className="row mt-2">
                <div className="col-sm-12 col-md-12 col-lg-12 ">
                  <div className="social d-flex justify-content-center">
                    <div className="share_image">
                      <a href="http://biconomy.io/">
                        <img src={globe} alt="" className="image"/>  
                      </a>
                    </div>
                    <div className="share_image ml-2">
                      <a href="https://t.me/biconomy">
                        <img src={telegram} alt="" className="image"/>  
                      </a>
                    </div>
                    <div className="share_image ml-2">
                      <a href="https://discord.gg/HKHxgyEExQ">
                        <img src={discord} alt="" style={{height:'110%',marginTop:'-3px',marginLeft:'-3px'}}/>  
                      </a>
                    </div>
                    <div className="share_image ml-2">
                      <a href="https://twitter.com/biconomy?s=11">
                        <img src={twitter} alt="" className="image"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-3 row">
                <div className="col-sm-4 col-md-4 col-lg-4 mt-2">
                  <HubspotForm
                    portalId='7327864'
                    formId='961102ec-2db1-40c7-9dde-f8215a9678a3'
                    cssClass = 'HubspotFormcss'
                    onSubmit={() => console.log('Submit!')}
                    onReady={(form) => console.log('Form ready!')}
                    loading={<div>Loading...</div>}
                  />
                  {/* <form className="form-subscribe" action="#">
                    <div className="input-group">
                      <input type="text" className="form-control input-lg" placeholder="Your eamil address"/>
                      <span className="input-group-btn">
                        <button className="btn" type="submit">Subscribe</button>
                      </span>
                    </div>
                  </form> */}
                </div>
              </div>
            </div>
          </div>  
        </div>
        <p style={{color:'gray',zIndex:'1',fontSize:'16px'}}>Developed By <a rel="noreferrer" href="https://www.quadbtech.com" target="_blank" style={{color:"#9D00FF!important"}}>QuadBTech</a></p>
      </header>
    </div>
  );
}

export default App;
