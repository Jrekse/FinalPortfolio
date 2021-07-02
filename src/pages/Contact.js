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
                            <p className="card-text">Phone: (503)-791-9996</p>
                            <p className="card-text btn btn-primary">Email: Jrekse@gmail.com</p>
                            <br/>
                            <p className="card-text btn btn-primary">Github: </p>
                            <br/>
                            <p className="card-text btn btn-primary">StackOverflow: </p>
                            <br/>
                            <p className="card-text btn btn-primary">Linkdin: </p>
                        </div>
                        <div className="card-footer cardbtn">
                            Dont be shy
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