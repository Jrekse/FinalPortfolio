import React from "react";
import Petseeker from "../assets/images/petseeker.jpg"
import Ss1 from "../assets/images/ss1.png"
import "../App.css";

function Project(props){
    return (
        <div>
            <div className='row'>
                <div className='col-4'>

                </div>
                <div className='col-4'>
                    <div className="card" >
                        <img src={Petseeker} className="card-img-top" alt="screenshot of site"/>
                        <div className="card-body">
                            <h5 className="card-title">Pet Seeker Palooza</h5>
                            <p className="card-text">Adopt pets based on your families personal needs</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Handlebars.js</li>
                        </ul>
                        <div className="card-body">
                            <a href="https://github.com/ShaylaStevenson/PetSeekerPalooza" className="card-link">Github</a>
                            <a href="https://shrouded-lake-69367.herokuapp.com/" className="card-link">Check it Out Yourself</a>
                        </div>
                    </div> 
                </div>
                <div className='col-4'>
                    
                </div>
            </div>

            <br/>
            <br/>
            
            <div className='row'>
                <div className='col-4'>

                </div>
                <div className='col-4'>
                    <div className="card" >
                        <img src={Ss1} className="card-img-top" alt="screenshot of site"/>
                        <div className="card-body">
                            <h5 className="card-title">Coding Quiz</h5>
                            <p className="card-text">Test your skills</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">jQuery</li>
                        </ul>
                        <div className="card-body">
                            <a href="https://github.com/Jrekse/Coding-quiz" className="card-link">Github</a>
                            <a href="/" className="card-link">Check it Out Yourself</a>
                        </div>
                    </div> 
                </div>
                <div className='col-4'>
                    
                </div>
            </div>
        </div>
    )
}
export default Project;