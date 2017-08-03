import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { browserHistory } from "react-router"



export default class Florist extends React.Component {


    render() {
        return (
            <div className='main-container'>
                <div className='title'>
                    <h2>
                       Flower Kingdom
                    </h2>
                </div>
                <div>
                    <img className='img-item' src=" " />
                </div>
                <div>
                    <div>description</div>
                    <div>price</div>
                    <div>Availability</div>
                    <button type="submit" className="btn btn-danger">Add to Checklist</button>
                </div>
            </div>
        );
    }
}