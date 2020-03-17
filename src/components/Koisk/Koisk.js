import React from "react";                                                                          //Module Import fo JSX

import "./Koisk.css";                                                                                //Style Import

import { Info } from "../Info/Info";                                                                //Module exports

import { Mycontext } from "../Context/Context";                                                      //Context Import

export const Koisk = ({ location }) => {                                                            //(location)Prop Drilling instance

    const { cvalue } = React.useContext(Mycontext);                                                 //Using Context states
    const [state, setState] = cvalue;

    const handleMouseEnter = () => {
        setState(true);
    }

    const handleMouseLeave = () => {
        setState(false);
    }

    return (                                                                                                                                               //Conditional rendering using prop drilling
        <div className="tooltip" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{state ? <Info location={location} /> : null}
           i
        </div>
    )
}
