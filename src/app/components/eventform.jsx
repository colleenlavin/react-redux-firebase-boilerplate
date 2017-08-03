import React from 'react';
import { Link } from 'react-router'

export default class EventForm extends React.Component {
    render() {
        return (
            <div >
                <div >
                    <div className="form-style-10">
                        <h3><span>Event information</span></h3>
                        <form>
                            <div className="section">Deceased Information</div>
                            <div className="inner-wrap">
                                <label> Full Name <input type="text" name="field1" /></label>
                                 <label> Date of Birth: <input type="text" name="field1" /></label>
                                  <label>Date of Death: <input type="text" name="field1" /></label>
                            </div>

                            <div className="section">Service Information</div>
                            <div className="inner-wrap">
                                <label>Date <input type="date" name="field3" /></label>
                                <label>What time will the service begin? <input type="text" name="field4" /></label>
                                <label>What time will the service end? <input type="text" name="field4" /></label>
                                <label>What's the name of the venue?<input type="text" name="field4" /></label>
                                <label>Where is it? <input type="text" name="field4" /></label>
                                <label>Anything else?  <input type="text" name="field4" /></label>
                            </div>

                            <div className="section">Additional Events</div>
                            <div className="inner-wrap">
                                 <label>What is the event? <input type="text" name="field4" /></label>
                                 <label>When is it? <input type="date" name="field3" /></label>
                                <label>What time will the event begin? <input type="text" name="field4" /></label>
                                <label>What time will the service end? <input type="text" name="field4" /></label>
                                <label>What's the name of the venue?<input type="text" name="field4" /></label>
                                <label>Where is it? <input type="text" name="field4" /></label>
                                <label>Anything else?  <input type="text" name="field4" /></label>
                            </div>
                          
                        </form>
                           <div className="button-section">
                                <input type="submit" name="Preview" />

                            </div>
                    </div>
                </div>
            </div>

        );
    }
};
