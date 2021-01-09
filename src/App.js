import telegram from './images/telegram.svg';
import twitter from './images/twitter.svg';
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
                <div className="col-lg-12 col-sm-12 col-md-12">
                  <div className="heading">
                    <h1 className="text-center main-heading"> Instant Cross-chain Transactions</h1>
                    <h3 className="sub-heading text-center">Enable users to instantly transfer funds between layer 1 & layer 2</h3>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="d-flex justify-content-center">
                      {/* <ReactPlayer
                        playing
                        url={[
                          {src:{video}, type: 'video/mp4'}
                        ]}
                      /> */}
                      <ReactPlayer url='https://www.youtube.com/watch?v=UoCVi1KyF7Q' />
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center">
                  <h1 className="text-center sub-heading2 pt-3 text-white">Want to integrate asap ?</h1>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center">
                  <a href="mailto:connect@biconomy.io" className="text-button">Request early access</a>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center">
                    <h3 className="text-center pt-3 follow_us text-white">Follow Us</h3>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-sm-12 col-md-12 col-lg-12 ">
                  <div className="social d-flex justify-content-center">
                    <div className="telegram_image">
                      <a href="https://t.me/biconomy">
                        <img src={telegram} alt="" className="image"/>  
                      </a>
                    </div>
                    <div className="telegram_image ml-2">
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
                    portalId='7291319'
                    formId='08c23b16-f14b-46c0-9ae6-27255b2e66c1'
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
        <p style={{color:'gray',zIndex:'1',fontSize:'16px'}}>Developed By <a rel="noreferrer" href="https://www.quadbtech.com" target="_blank" style={{color:"cornflowerblue !important"}}>QuadBTech</a></p>
      </header>
    </div>
  );
}

export default App;
