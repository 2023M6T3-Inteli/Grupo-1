//import React, { useState } from "react";
import "./DeleteProject.css";

export function DeleteProject() {

    return(
        <div>
            <div className="container">
                <h3>Delete Project</h3>
                <hr></hr>
                <p>Are you sure you want to delete this project</p>
                <button className="delete-button">Delete permanently</button>

                <button className="cancel-button">×</button>
            </div>
        </div> 
    )
}

