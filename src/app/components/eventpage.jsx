import React from 'react';
import { Link } from 'react-router'

export default class EventPage extends React.Component {
    render() {
        return (
            <div>
                <div>
                   <h2>In Rememberence</h2>
                   <div className="card">
                      <img src="http://images.thesartorialist.com/photos/12211GentMilano_1486Web.jpg" alt="" />
                         <div className="cont">
                            <h3>Seymour Graves</h3> 
                             <p>Dearly Departed</p> 
                             <p>Services held at 3:00 pm on August 5, 2017 at  St. Edward Roman Catholic Church at 144 N County Rd, Palm Beach, FL </p>
                              <p>In lieu of flowers please donate to Save the Children </p>
                        </div>
                    </div>
                    </div>
                </div>
          

        );
    }
};
