import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { browserHistory } from "react-router"



export default class Florists extends React.Component {


    render() {
        return (
            <div>
                <div className="container">
                   
                        <h1>Flowers</h1>
                        <table >
                            {/*<tr>
                                <th>Firstname</th>
                                 <th>Lastname</th> 
                                 <th>Age</th>
                            </tr>*/}
                             <tr>
                                 <td>Flower Kingdom</td>
                                 <td></td> 
                                 <td></td>
                             </tr>
                             <tr>
                                 <td>Simply Flowers</td>
                                 <td>Smith</td> 
                                 <td>50</td>
                             </tr>
                               <tr>
                                 <td>Floral Gardens And Gifts</td>
                                 <td>Smith</td> 
                                 <td>50</td>
                             </tr>
                               <tr>
                                 <td>Botanical Bliss Flourist</td>
                                 <td>Smith</td> 
                                 <td>50</td>
                             </tr>
                               <tr>
                                 <td>A Red Rose</td>
                                 <td>Smith</td> 
                                 <td>50</td>
                             </tr>
                          
                        </table>
                  
                </div>
            </div>
        );
    }
}