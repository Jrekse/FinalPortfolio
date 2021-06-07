import React from "react";
import "../App.css";

function Contact(){
    return (
        <div className='aboutMeDiv'>
            <div className="row">
                <div className="col-4">
                </div>
                <div className="col-4">
                    <div class="card text-center">
                        <div class="card-header cardbtn">
                            Contact Info
                        </div>
                        <div class="card-body contactCard">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="/" class="btn btn-primary cardbtn">Go somewhere</a>
                        </div>
                        <div class="card-footer cardbtn">
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