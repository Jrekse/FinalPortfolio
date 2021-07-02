import React from "react";
import "../App.css";

function Contact(){
    return (
        <div className='aboutMeDiv'>
            <div className="row">
                <div className="col-4">
                </div>
                <div className="col-4">
                    <div className="card text-center">
                        <div className="card-header cardbtn">
                            Contact Info
                        </div>
                        <div className="card-body contactCard">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="/" className="btn btn-primary cardbtn">Go somewhere</a>
                        </div>
                        <div className="card-footer cardbtn">
                            2 days ago
                        </div>
                    </div>  
                </div>
                <div className="col-4">
                </div>
            </div>  
        </div>
    )
}
export default Contact;