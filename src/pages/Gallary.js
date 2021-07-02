import React from "react";
import Project from "../components/Project";
import projectData from "../assets/js/projectData";
import "../App.css";

function Gallary(){
    return (
        <div className='aboutMeDiv'>
            {projectData.map(each => (
                <Project head={each.head} title={each.title} 
                desc={each.desc} techOne={each.techOne} github={each.github} 
                live={each.live} id={each.id} key={each.id}/>
            ))}
        </div>
    )
}
export default Gallary;