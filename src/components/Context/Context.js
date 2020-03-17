import React, { createContext } from "react"                                                //Modules Import

export const Mycontext = createContext();                                                   //creating context: Mycontext

export const Provider = props => {                                                          //Provider component

    const [info, setInfo] = React.useState([])                                              //State storing the app data
    const [state, setState] = React.useState(false)                                         //State storing display toggle state 
    const URL = "https://coronavirus-tracker-api.herokuapp.com/all";

    React.useEffect(() => {

        fetch(URL)                                                                           //Api call
            .then(resp => resp.json())
            .then(data => setInfo(data.latest))
            .catch(error => console.log(error));

    }, [])

    return (                                                                                  //passing props to Provider for children to access

        <Mycontext.Provider value={{ cvalue: [state, setState], tvalue: [info, setInfo] }}>  
            {props.children}
        </Mycontext.Provider>

    );
}