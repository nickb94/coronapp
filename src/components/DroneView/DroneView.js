import React from "react";                                               //Modules Import

import "./DroneView.css";                                                //Style import

import { Mycontext } from "../Context/Context";                          //Context Import

export const DroneView = () => {

    const { tvalue } = React.useContext(Mycontext);                      //Destructuring prop values

    const [info,] = tvalue;                                              //Not using setInfom, therefore as nul

    return (
        <div className="view_wrapper">
            <div className="worldtotal">
                {"Total Cases"}
                <div>{info.confirmed}</div>
            </div>
            <div className="worlddead">
                {"Deceased"}
                <div>{info.deaths}</div>
            </div>
            <div className="worldrecovered">
                {"Recovered "}
                <div>{info.recovered}</div>
            </div>
        </div>
    );
}
