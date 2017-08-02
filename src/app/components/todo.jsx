import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { browserHistory } from "react-router"



export default class ToDo extends React.Component {


    render() {
        return (
            <div className='goalsMain'>
                <div className='goalsMain'>
                    <div id="myDIV" className="goalsHeader">
                        <h1>To Do</h1>
                    </div>
                    <ul id="myUL" className="goalsList">
                        <li>  <Link to={`/vendors`}> Decide on your must haves  </Link></li>
                        <li className="checked">Choose a date</li>
                        <li>  <Link to={`/florists`}> Choose your floral arrangements  </Link></li>
                        <li>  <Link to={`/funeralhomes`}> Arrange your funeral service  </Link></li>
                        <li>  <Link to={`/reception`}> Pick a reception venue  </Link></li>
                        <li>  <Link to={`/catering`}> Find your caterer  </Link></li>
                        <li >Pick up Aunt Sheila from the airport. <h6>Friday, 2:00 PM</h6></li>
                    </ul>

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