import React from "react";                                                            //Import for using JSX

import './App.css';                                                                   //Style Import

import { TOKEN } from "./token";                                                      //Module or Component Imports                                               
import { KeyLegend } from "./components/KeyLegend/KeyLegend";
import { DroneView } from "./components/DroneView/DroneView";
import { Koisk } from "./components/Koisk/Koisk";

import { Mycontext } from "./components/Context/Context";                             //Context Import

var mapboxgl = require('mapbox-gl');                                                  //Library Import


const App = () => {                                                                   //App Component

  const [location, setLocation] = React.useState(null);                               //Storing state to drill within components

  const { cvalue } = React.useContext(Mycontext);                                     //Using Context, allows global state management
  const [state,] = cvalue;

  React.useEffect(() => {                                                             //Like ComponentDidMount() for initial mount

    mapboxgl.accessToken = TOKEN;

    var map = new mapboxgl.Map({                                                      //Drawing mapbox on page
      container: 'root',
      style: 'mapbox://styles/mapbox/dark-v10',
      zoom: 1,
      center: [0, 20]
    });

    map.addControl(

      new mapboxgl.GeolocateControl({                                                  // Add geolocate control to the map.
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    );



    if (navigator.geolocation) {                                                       //to access user location permission 
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }


    function showPosition(position) {
      console.log("Latitude: " + position.coords.latitude + " " +
        "Longitude: " + position.coords.longitude);

      setLocation({                                                                     //set state to user lat, longs
        lat: position.coords.latitude,
        long: position.coords.longitude
      })

    }

    const getColor = (count) => {                                                       //function to return colors based on infected count

      if (count >= 50) {
        return "tomato";
      }
      if (count >= 10) {
        return "orange";
      }
      return "gray";
    }


    fetch("./Data.json")                                                                 //fetches data from local file
      .then((response) => response.json())
      .then((data) => {

        var info = data.data;

        info.forEach(thing => {

          var popup = new mapboxgl.Popup({ offset: 2 }).setHTML(                         //Drawing popups on clicks
            "<div id=placename>"
            + thing.name + "</div><div>Actively sick: "
            + thing.sick + "</div><div>Total infected : "
            + thing.infected + "</div><div>Recovery Count: "
            + thing.recovered + "</div>"
          );

          var el = document.createElement('div');                                         // create DOM element for the marker
          el.id = 'marker';
          el.style.backgroundColor = getColor(thing.sick);
          el.style.opacity = "0.5";

          new mapboxgl.Marker(el)                                                         // create the marker
            .setLngLat([thing.longitude, thing.latitude])
            .setPopup(popup)                                                             // sets a popup on this marker
            .addTo(map);
        })

      });

  }, [])


  return (                                                                               //conditional rendering component

    <div className="App">
      <Koisk location={location} />
      <KeyLegend />
      {state ? null : <DroneView />}
    </div>

  );
}

export default App;
