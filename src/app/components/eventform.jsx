import React from 'react';
import { Link } from 'react-router'

export default class EventForm extends React.Component {
    render() {
        return (
            <div >
                <div ss>
                    <div className="form-style-10">
                        <h1><span>Event information</span></h1>
                        <form>
                            <div className="section">Deceased Information</div>
                            <div className="inner-wrap">
                                <label> Full Name <input type="text" name="field1" /></label>
                                 <label> Date of Birth: <input type="text" name="field1" /></label>
                                  <label>Date of Death: <input type="text" name="field1" /></label>
                            </div>

                            <div className="section">Venue Information</div>
                            <div className="inner-wrap">
                                <label>Email Address <input type="email" name="field3" /></label>
                                <label>Phone Number <input type="text" name="field4" /></label>
                            </div>

                            <div className="section">Passwords</div>
                            <div className="inner-wrap">
                                <label>Password <input type="password" name="field5" /></label>
                                <label>Confirm Password <input type="password" name="field6" /></label>
                            </div>
                            <div className="button-section">
                                <input type="submit" name="Preview" />

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
};
