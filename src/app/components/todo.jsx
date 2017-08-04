import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { browserHistory } from "react-router"



export default class ToDo extends React.Component {


    render() {
        return (
            <div className="todo-centered">
                <h2 className="is-size-2 thin">Checklist</h2>
                <div className="row m-t-16">
                    <div className="col-md-2">
                        <h1 className="is-size-2 has-text-centered">1</h1>
                    </div> 
                    <div className="col-md-10">
                        <div className="row shadow todo">
                            <Link to={`/info`}>
                                <div className="col-md-9 link p-16">
                                    <h3>Fill out our form </h3>
                                </div>
                            </Link> 
                        </div>
                    </div>
                </div>
                <div className="row m-t-16">
                    <div className="col-md-2">
                        <h1 className="is-size-2 has-text-centered">2</h1>
                    </div> 
                    <div className="col-md-10">
                        <div className="row shadow todo">
                            <Link to={`/vendors`}>
                                <div className="col-md-9 link p-16">
                                    <h3>Explore your options</h3>
                                </div>
                            </Link> 
                        </div>
                    </div>
                </div>
                <div className="row m-t-16">
                    <div className="col-md-2">
                        <h1 className="is-size-2 has-text-centered">3</h1>
                    </div> 
                    <div className="col-md-10">
                        <div className="row shadow todo">
                            <Link to="http://www.floridahealth.gov/%5C%5C/certificates/certificates/death/index.html">
                                <div className="col-md-9 link p-16">
                                    <h3>Order death certificate</h3>
                                </div>
                            </Link> 
                        </div>
                    </div>
                </div>
                <div className="row m-t-16">
                    <div className="col-md-2">
                        <h1 className="is-size-2 has-text-centered">4</h1>
                    </div> 
                    <div className="col-md-10">
                        <div className="row shadow todo">
                                <div className="col-md-9 link p-16">
                                    <h3><i className="fa fa-check big-check"></i> Choose a date <span className="bold">August 6, 2017</span></h3>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="row m-t-16">
                    <div className="col-md-2">
                        <h1 className="is-size-2 has-text-centered">4</h1>
                    </div> 
                    <div className="col-md-10">
                        <div className="row shadow todo">
                            <Link to={`/florists/1`}>
                                <div className="col-md-9 link p-16">
                                    <h3>Choose your floral arrangements</h3>
                                </div>
                            </Link> 
                        </div>
                    </div>
                </div>
                <div className="row m-t-16">
                    <div className="col-md-2">
                        <h1 className="is-size-2 has-text-centered">5</h1>
                    </div> 
                    <div className="col-md-10">
                        <div className="row shadow todo">
                            <Link to={`/funeralhomes`}>
                                <div className="col-md-9 link p-16">
                                    <h3>Arrange your funeral service </h3>
                                </div>
                            </Link> 
                        </div>
                    </div>
                </div>       
                <div className="row m-t-16">
                    <div className="col-md-2">
                        <h1 className="is-size-2 has-text-centered">6</h1>
                    </div> 
                    <div className="col-md-10">
                        <div className="row shadow todo">
                            <Link to={`/reception`}>
                                <div className="col-md-9 link p-16">
                                    <h3>Pick a reception venue</h3>
                                </div>
                            </Link> 
                        </div>
                    </div>
                </div>  
                <div className="row m-t-16">
                    <div className="col-md-2">
                        <h1 className="is-size-2 has-text-centered">7</h1>
                    </div> 
                    <div className="col-md-10">
                        <div className="row shadow todo">
                            <Link to={`/catering`}>
                                <div className="col-md-9 link p-16">
                                    <h3>Find your caterer </h3>
                                </div>
                            </Link> 
                        </div>
                    </div>
                </div>    
                <div className="row m-t-16">
                    <div className="col-md-2">
                        <h1 className="is-size-2 has-text-centered">8</h1>
                    </div> 
                    <div className="col-md-10">
                        <div className="row shadow todo">
                            <Link to={`/grimreaper`}>
                                <div className="col-md-9 link p-16">
                                    <h3>Send your event page to all your guests </h3>
                                </div>
                            </Link> 
                        </div>
                    </div>
                </div>     
                <div className="row m-t-16">
                    <div className="col-md-2">
                        <h1 className="is-size-2 has-text-centered">9</h1>
                    </div> 
                    <div className="col-md-10">
                        <div className="row shadow todo">
                            <Link to={`/grimreaper`}>
                                <div className="col-md-9 link <p-16></p-16>">
                                    <h3 >Pick up Aunt Sheila from the airport. <span className="bold">Friday, 2:00 PM</span></h3>
                                </div>
                            </Link> 
                        </div>
                    </div>
                </div>   
                <form onSubmit={this.addItem}>
                    <div className="row m-t-16">
                        <div className="col-md-2">
                            
                        </div> 
                        <div className="col-md-10">
                            <div className="row  todo">

                                    <div className="col-md-9 link p-16">
                                        <input ref={(a) => this._inputElement = a}
                                placeholder="Enter additional task">
                            </input><button type="submit" className="addBtn">+</button>
                                    </div>

                            </div>
                        </div>
                    </div>  
                </form>

            </div>

        );
    }
}