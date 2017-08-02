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
                            <tr>
                                <th>Firstname</th>
                                 <th>Lastname</th> 
                                 <th>Age</th>
                            </tr>
                             <tr>
                                 <td>Jill</td>
                                 <td>Smith</td> 
                                 <td>50</td>
                             </tr>
                        </table>
                  
                </div>
            </div>
        );
    }
}