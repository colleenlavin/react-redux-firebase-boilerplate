import React from 'react';
import { Link } from 'react-router'

export default class Vendors extends React.Component {
    render() {
        return (

            <div className="container">

                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Vendors
                            <small>Secondary Text</small>
                        </h1>
                    </div>
                </div>

                <div className="row">
                    {/*Florists*/}
                    <div className="col-md-4 portfolio-item">
                        <Link to={`/florists`}>
                            <h3>Flowers</h3>
                            <img className="img-responsive" src="http://placehold.it/700x400" alt="" />
                        </Link>
                        <h3>Flowers</h3>
                        <Link to="/florists"><button type="button" className="btn btn-danger"
                        >Add to Cart</button></Link>
                     
                    </div>
                    {/*Funeral Homes*/}
                    <div className="col-md-4 portfolio-item">
                        <Link to={`/florists`}>
                            <h3>Funeral Homes</h3>
                            <img className="img-responsive" src="http://placehold.it/700x400" alt="" />
                        </Link>
                        <h3>Flowers</h3>
                        <Link to="/florists"><button type="button" className="btn btn-danger"
                         >Add to Cart</button></Link>
                    </div>
                </div>
            </div>

        );
    }
};
