import React from 'react';
import ReactDOM from 'react-dom';
// import './reset.css';
import './index.css';
class Sample extends React.Component {
	render() {
		return (
      		<div className="bdy">
                        <div className="lay">
                              <header>
                                    <div className="cover">
                                          <div className="covercon">
                                                <h3>Cover</h3>
                                          </div>
                                          <nav className="nav1">
                                                <a className="menu1 active" href="#">Home</a>
                                                <a className="menu1" href="#">Features</a>
                                                <a className="menu1" href="#">Contact</a>
                                          </nav>
                                    </div>
                              </header>
                              <main className="mainlay"> 
                                    <div className="foot">
                                          <h1 className="inner">Cover your Page.</h1>
                                          <p className="font">Cover is one-page template for building simple and beautiful</p>
                                          <p className="font">home page. Download,edit the text,add your own full screen </p>
                                          <p className="font"> background photo to make it your own.</p>
                                                <div className="butt">
                                                      <a  className="butcon" href="">Learn More</a>
                                                </div>
                                    </div>
                              </main>
                              <footer className="foot">
                                    <div className="foot">
                                          <p >Cover template for  <a  className="foot hover" href=""> Bootstrap</a> by <a className="foot hover" href="">@mdo</a></p>
                                    </div>
                              </footer>
                        </div>
                  </div>
            );
      }
}

ReactDOM.render(<Sample />, document.getElementById('root'));

