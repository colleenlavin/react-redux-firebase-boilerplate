import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { browserHistory } from "react-router"



export default class ToDo extends React.Component {


    render() {
        return (
            <div className='goalsMain'>
                <div className='goalsMain max-w-800'>
                    <h2 className="has-text-left is-size-2 thin">Checklist</h2>

                    <ol id="myUL" >
                        <li className="box">  <Link to={`/info`}> Fill out our form  </Link></li>
                        <li className="box">  <Link to={`/vendors`}> Explore your options  </Link></li>
                        <li className="box">  <Link to="http://www.floridahealth.gov/%5C%5C/certificates/certificates/death/index.html"> Order death certificate </Link></li>
                        <li className="checked" className="box">Choose a date <h6>August 6, 2017</h6></li>
                        <li className="box">  <Link to={`/`}> Choose your floral arrangements  </Link></li>
                        <li className="box">  <Link to={`/funeralhomes`}> Arrange your funeral service  </Link></li>
                        <li className="box">  <Link to={`/reception`}> Pick a reception venue  </Link></li>
                        <li className="box">  <Link to={`/catering`}> Find your caterer  </Link></li>
                         <li className="box">  <Link to={`/grimreaper`}> Send your event page to all your guests  </Link></li>
                        <li className="box">Pick up Aunt Sheila from the airport. <h6>Friday, 2:00 PM</h6></li>
                    </ol>

                </div>
                <div >
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                            placeholder="Enter additional task">
                        </input>
                        <button type="submit" className="addBtn">+</button>
                    </form>
                </div>
            </div>

        );
    }
}