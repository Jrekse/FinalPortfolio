import React, {Component} from "react";
import Nav from "./Nav";
import Head from "./Head"
import Foot from "./Foot";
import AboutMe from "../pages/AboutMe";
import Gallary from "../pages/Gallary";
import Contact from "../pages/Contact";
import "../App.css";

class Wrapper extends Component{
    state = {
        currentPage: "AboutMe"
      };
    
      handlePageChange = page => {
        this.setState({ currentPage: page });
      };
    
      renderPage = () => {
        if (this.state.currentPage === "AboutMe") {
          return <AboutMe />;
        } else if (this.state.currentPage === "Gallary") {
          return <Gallary />;
        } else {
          return <Contact />;
        }
      };
    render(){
        return (
            <div>
                <Nav currentPage={this.state.currentPage} handlePageChange={this.handlePageChange}/>
                <Head/>
                    {this.renderPage()}
                <Foot/>
            </div>
        )
    }
}
export default Wrapper;