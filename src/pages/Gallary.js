import React from "react";
import "../App.css";

function Gallary(){
    return (
        <div className='aboutMeDiv'>
            <div className='row'>
                <div className='col-4'>

                </div>
                <div className='col-4'>
                    <div className="card" >
                        <img src="..." className="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                        <div class="card-body">
                            <a href="/" className="card-link">Card link</a>
                            <a href="/" className="card-link">Another link</a>
                        </div>
                    </div> 
                </div>
                <div className='col-4'>
                    
                </div>
            </div>
        </div>
    )
}
export default Gallary;