import React from 'react';
import { Link } from 'react-router'

export default class EventPage extends React.Component {
    render() {
        return (
            <div className="intro-header">
                <div className="container">
                    <div className="form-style-10">
                        <h1>Sign Up Now!<span>Sign up and tell us what you think of the site!</span></h1>
                        <form>
                            <div className="section"><span>1</span>First Name &amp; Address</div>
                            <div className="inner-wrap">
                                <label>Your Full Name <input type="text" name="field1" /></label>
                                <label>Address <textarea name="field2"></textarea></label>
                            </div>

                            <div className="section"><span>2</span>Email &amp; Phone</div>
                            <div className="inner-wrap">
                                <label>Email Address <input type="email" name="field3" /></label>
                                <label>Phone Number <input type="text" name="field4" /></label>
                            </div>

                            <div className="section"><span>3</span>Passwords</div>
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
