import React from "react";
import { auto } from "@popperjs/core";

const StatCard = ({ title, value }) => {
  
  return ( 
    <div className="m-1" style={{textAlign:"center",height:'245px'}}>
      <h1 className="card-title" style={{color:`#fff`}}>{value}</h1>
      <h5 className="card-subtitle" style={{color:`#fff`}}>{title}</h5>
    </div>
  );
};

export default StatCard;
