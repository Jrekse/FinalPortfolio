import React from "react";
import "../App.css";

function Project(props){
    return (
        <div className='row'>
            <div className='col-4'>

            </div>
            <div className='col-4'>
                <div className="card" >
                    <img src={props.head} className="card-img-top" alt="screenshot of site"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{props.techOne}</li>
                    </ul>
                    <div className="card-body">
                        <a href={props.github} className="card-link">Github</a>
                        <a href={props.live} className="card-link">Check it Out Yourself</a>
                    </div>
                </div> 
            </div>
            <div className='col-4'>
                
            </div>
        </div>
    )
}
export default Project;