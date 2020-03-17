import React from "react";                                                                         //Module Import for JSX

import "./Info.css";                                                                            //Styles Import

import { Mycontext } from "../Context/Context";                                                    //Context Import

const Day = () => {                                                                                 //Functional Component computing day of the week. 
    const arr = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    var today = new Date();
    var currentDay = today.getDay();
    return (arr[currentDay]);
}

export const Info = ({ location }) => {                                                           //Destructuring, Prop drilling for conditional rendering           

    const { tvalue } = React.useContext(Mycontext);

    const [info,] = tvalue;                                                                           //Not using setInfo

    return (    
        <div className="redcaution">

            <div className="title_koisk">Information Koisk</div>
            <Day />
            {location ? <h5>Long: {location.long} Lat: {location.lat}</h5> : null}
            <div className="totality">
                <div className="worldtotal">
                    {"Total Cases"}
                    <div>{info.confirmed}</div>
                </div>
                <hr />
                <div className="worlddead">
                    {"Deceased"}
                    <div>{info.deaths}</div>
                </div>
                <hr />
                <div className="worldrecovered">
                    {"Recovered "}
                    <div>{info.recovered}</div>
                </div>
            </div>
            <div className="title_advisory">WHO Public Health Advisory</div>
            <div className="advisory">
                <ul>
                    <li>Stay informed and follow advice given by your healthcare provider.</li>
                    <hr />
                    <li>Avoid touching eyes, nose and mouth.</li>
                    <hr />
                    <li>Wash your hands frequently.</li>
                    <hr />
                    <li>Maintain social distancing.</li>
                    <hr />
                    <li>Practice respiratory hygiene.</li>
                    <hr />
                    <li>If you have fever, cough and difficulty breathing, seek medical care early.</li>
                    <hr />
                </ul>

            </div>
            {"Build Links"}
            <div className="links">
                <div className="git"><a target="__blank" rel="noopener noreferrer" href="https://github.com/nickb94">github</a></div>
                <div className="datasourceapp"><a target="__blank" rel="noopener noreferrer" href="https://coronavirus.app/">coronavirus.app</a></div>
                <div className="apidata"><a target="__blank" rel="noopener noreferrer" href="https://coronavirus-tracker-api.herokuapp.com/all">API</a></div>
            </div>

        </div>
    );
}




