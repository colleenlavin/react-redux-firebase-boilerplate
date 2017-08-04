import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { browserHistory } from "react-router"



export default class Florist extends React.Component {


    render() {
        return (
            <div className='section'>
                <div className='container'>
                    <h2 className="has-text-left is-size-2 thin">Florists</h2>
                    <div className='columns m-t-16'>
                        <div className="column">
                            <div className="shadow">
                                <div className="columns m-t-0">
                                    <div className="column p-0 main-pic">
                                        
                                    </div>
                                    <div className="column">
                                        <h2 className="has-text-left is-size-5">Botanical Bliss Florist</h2>
                                        <p className="p-2 l-h-22 m-t-8">
                                            <i className="fa fa-envelope"></i> info@flowerkingdom.com <br/>
                                            <i className="fa fa-link"></i> flowerkingdom.com <br/>
                                            <i className="fa fa-phone"></i> (561) 627-4200 <br/>
                                             
                                        </p>
                                        <p className="money">$$</p>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column bg-yellow has-text-centered stretch-button">
                                        Add to Checklist
                                    </div>
                                </div>

                            </div>
                            {/*Pair Row  */}
                            <div className="columns m-t-16">
                                <div className="column">
                                    <div className="shadow">
                                        <h2 className="p-2 has-text-centered card-title">Flower Kingdom</h2>
                                        <p className="p-2 l-h-22 m-t-8">
                                            <i className="fa fa-envelope"></i> info@flowerkingdom.com <br/>
                                            <i className="fa fa-link"></i> flowerkingdom.com <br/>
                                            <i className="fa fa-phone"></i> (561) 627-4200 <br/>
                                             
                                        </p>
                                        <p className="money">$$</p>
                                        <div className="stretch-button bg-light-yellow p-8 has-text-centered w-full">
                                            Add to Checklist
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="shadow">
                                        <h2 className="p-2 has-text-centered card-title">Flower Kingdom</h2>
                                        <p className="p-2 l-h-22 m-t-8">
                                            <i className="fa fa-envelope"></i> info@flowerkingdom.com <br/>
                                            <i className="fa fa-link"></i> flowerkingdom.com <br/>
                                            <i className="fa fa-phone"></i> (561) 627-4200 <br/>
                                             
                                        </p>
                                        <p className="money">$$</p>
                                        <div className="stretch-button bg-light-yellow p-8 has-text-centered w-full">
                                            Add to Checklist
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns m-t-16">
                                <div className="column">
                                    <div className="shadow">
                                        <h2 className="p-2 has-text-centered card-title">Flower Kingdom</h2>
                                        <p className="p-2 l-h-22 m-t-8">
                                            <i className="fa fa-envelope"></i> info@flowerkingdom.com <br/>
                                            <i className="fa fa-link"></i> flowerkingdom.com <br/>
                                            <i className="fa fa-phone"></i> (561) 627-4200 <br/>
                                             
                                        </p>
                                        <p className="money">$$</p>
                                        <div className="stretch-button bg-light-yellow p-8 has-text-centered w-full">
                                            Add to Checklist
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="shadow">
                                        <h2 className="p-2 has-text-centered card-title">Flower Kingdom</h2>
                                        <p className="p-2 l-h-22 m-t-8">
                                            <i className="fa fa-envelope"></i> info@flowerkingdom.com <br/>
                                            <i className="fa fa-link"></i> flowerkingdom.com <br/>
                                            <i className="fa fa-phone"></i> (561) 627-4200 <br/>
                                             
                                        </p>
                                        <p className="money">$$</p>
                                        <div className="stretch-button bg-light-yellow p-8 has-text-centered w-full">
                                            Add to Checklist
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column has-text-left florist-right">
                            <p className="font-16">The average price funeral floral casket spray</p>
                            <p className="is-size-2">$400</p>
                            <p className="font-16">Flowers for the funeral service go directly to the funeral home. These floral arrangements are often large and formal. They provide decoration and serve as a tribute to the deceased. Due to this, they look best in a funeral home and at graveside services. Funeral flowers are usually not addressed to a particular loved one of the deceased but are intended, instead, as a way to pay respect to the deceased themselves.</p>
                            <a className="button bg-yellow m-t-16 ">Full Article</a>
                            <ul className="price">
                                <li>$$$ - above average</li>
                                <li>$$ - average</li>
                                <li>$ - below average</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
            // <div className='main-container'>
            //     <div className='title'>
            //         <h2>
            //            Flower Kingdom
            //         </h2>
            //     </div>
            //     <div>
            //         <img className='img-item' src=" " />
            //     </div>
            //     <div>
            //         <div>description</div>
            //         <div>price</div>
            //         <div>Availability</div>
            //         <button type="submit" className="btn btn-danger">Add to Checklist</button>
            //     </div>
            // </div>
        );
    }
}