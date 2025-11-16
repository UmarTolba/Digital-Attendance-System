import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./welcome.css";

function Welcome() {
    return (
        <>
            <NavBar />

            <div className="page-content">
                <section id="welcome-message" >
                        <h1>Welcome to the Attendance System</h1> <br />
                        <p>This is a simple attendance tracking application developed as a project for ESLSCA University.</p>
                </section>
            </div>

            <Footer />
        </>
    );
}

export default Welcome;