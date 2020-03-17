import React from "react";                                                                       //Module Import for JSX

import "./KeyLegend.css";                                                                        //Style Import

export const KeyLegend = () => {

    return (
        <div className="legendwrapper">
            <div><span className="red"></span><div>Sick counts over 50, High Risk</div></div>
            <div><span className="orange"></span><div>Sick counts over 10, Potential Risk</div></div>
            <div><span className="grey"></span><div>Counts less than 10, Major Caution</div></div>
        </div>
    );
}
