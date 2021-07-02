import React from "react";
import Me from "../assets/images/me.jpg"
import "../App.css";

function AboutMe(){
    return (
        <div className="aboutMeDiv">
            <div className="row">
                <div className="col-4">
                </div>
                <div className="col-4">
                    <div className="card meCard">
                        <img src={Me} className="card-img-top me" alt="Me"/>
                        <div className="card-body">
                            <h5 className="card-title foottext">Jon Ekse</h5>
                            <p className="card-text foottext">I am a 20 year old software developer in Washington state. I have built apps using a wide range of technologies including
                                JavaScript, HTML5, CSS, Git/Github, Heroku, Toolbelt, Node.js, Express.js, MySQL, Sequelize, Handlebars.js, Postman, Mongo.db, React, Jest, Bootstrap
                                and, jQuery.</p>
                        </div>
                    </div> 
                </div>
                <div className="col-4">
                </div>
            </div>  
        </div>
    )
}
export default AboutMe;