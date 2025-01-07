import React from "react";
import './DataAnalyst.css';
import {DataProjects} from '../../Data/tableauData'




const DataAnalyst =()=> {

    return(
        <div className="data-container  dataAnalyst">
            <h2>welcome to my Data Analystic Projects</h2>
            <button className="tableau-btn">
            <a href="https://public.tableau.com/app/profile/richard.sikaonga/vizzes" target="_blank" rel="noopener noreferrer">
              Got to Tableau
            </a>
          </button>
            <div className="data-content">
            {DataProjects.map((item,index)=>(
                <div key={index} className="data-cards">
                <div className="image-holder"><img src={item.image} alt={item.name} /></div>
                <h3 className="item-name">{item.name}</h3>
                </div>
            ))}
            </div>
        </div>
    )
}

export default DataAnalyst