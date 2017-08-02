import React from 'react';
import { Link } from 'react-router'

export default class Vendors extends React.Component {
    render() {
        return (

            <div className="container">

               
                 <h1>High Priority</h1>
                    {/*Funeral Coordination*/}
                    <div className="col-md-4 portfolio-item">
                        <Link to={`/funeralhomes`}>
                            <img className="img-responsive" src="https://pbs.twimg.com/media/DGOUrepUAAAzRRC.jpg" alt="" />
                        </Link>
                    </div>
                   <div className="col-md-4 portfolio-item">
                        <Link to={`/florists`}>
                            <img className="img-responsive" src="https://pbs.twimg.com/media/DGOUla7UMAQBEp9.jpg" alt="" />
                        </Link>
                    </div>
                    {/*Reception Venues*/}
                    <div className="col-md-4 portfolio-item">
                        <Link to={`/reception`}>
                            <img className="img-responsive" src="https://pbs.twimg.com/media/DGOUuTLUMAIlfvK.jpg" alt="" />
                        </Link>
                    </div>
                    {/*Catering*/}
                    <div className="col-md-4 portfolio-item">
                        <Link to={`/catering`}>
                            <img className="img-responsive" src="https://pbs.twimg.com/media/DGOUoCjUwAAztvi.jpg" alt="" />
                        </Link>

                    </div>
             
            </div>

        );
    }
};
