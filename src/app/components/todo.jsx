import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import axios from 'axios'
import { browserHistory } from "react-router"

import store from '../store'


export default class Goals extends React.Component {
  

  render() {
    return (
      <div className='goalsMain'>
        <div id="myDIV" className="goalsHeader">
          <h1>My Goals</h1>
        </div>    
        <ul id="myUL" className="goalsList">
          <li>Save 20% of my income</li>
          <li className="checked">Learn what a 401k is</li>
          <li>Pay off my student loans</li>
           <li className="checked">Pay bills</li>
          <li>Start a vacation fund</li>
        </ul>
        <div >
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
              placeholder="Enter Goal">
            </input>
            <button type="submit" className="addBtn">+</button>
          </form>
        </div>
      </div>
    );
  }
}