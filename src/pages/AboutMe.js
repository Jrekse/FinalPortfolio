import React from "react";
import Me from "../images/me.jpg"
import "../App.css";

function AboutMe(){
    return (
        <div className="aboutMeDiv">
            <div className="row">
                <div className="col-4">
                </div>
                <div className="col-4">
                    <div class="card meCard">
                        <img src={Me} class="card-img-top me" alt="Me"/>
                        <div class="card-body">
                            <h5 class="card-title foottext">Jon Ekse</h5>
                            <p class="card-text foottext">I am a 20 year old software developer in Washington state. I have built apps using a wide range of technologies including
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