import React from 'react';

export default class Vendors extends React.Component {
  render() {
    return (
      <div className="intro-header">
        <div className="container">

          <div className="row">
            <div className="col-lg-12">
              <div className="intro-message">
                <h1>Daisy</h1>
                <h3>A Template by Start Bootstrap</h3>

                <ul className="list-inline intro-social-buttons">
                  <li>
                    <a href="https://twitter.com/SBootstrap" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
                  </li>
                  <li>
                    <a href="https://github.com/IronSummitMedia/startbootstrap" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
};
