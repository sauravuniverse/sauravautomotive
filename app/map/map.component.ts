import { Component, OnInit } from '@angular/core';
import { registerElement } from "nativescript-angular/element-registry";
import * as geolocation from "nativescript-geolocation";
import {alert} from "tns-core-modules/ui/dialogs";
import { Accuracy } from "tns-core-modules/ui/enums";
import * as app from "tns-core-modules/application";
import {Mapbox,MapboxMarker,MapboxViewApi} from "nativescript-mapbox"
import {Directions} from "nativescript-directions"
registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  mapBox: MapboxViewApi
  directions : Directions;
  constructor() 
  { 
    this.directions=new Directions;
  }

  ngOnInit(){
   
    
  }
  onMapReady(args)
  {
       this.mapBox=args.map;
   
  }
  addmarker()
  {
      const firstMarker = <MapboxMarker>{ 
      id: 1, 
      lat: 26.1542, 
      lng: 85.8918, 
      title: 'Darbhanga', 
      subtitle: 'Find Darbhanga here!',
      onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
      onCalloutTap: marker => {
       this. directions.navigate({
        from: { // optional, default 'current location'
        lat: 26.1542 ,
        lng: 85.8918
      },
          to: { // either pass in a single object or an Array (see the TypeScript example below)
            address: "patna"
          }
          
        }).then(
          function() {
            console.log("Maps app launched.");
          },
          function(error) {
            console.log(error);
          }
        );
      }
    };
   
   this.mapBox.addMarkers([
      firstMarker
     
    ])
  }
     animateCamera()
     {
       this.mapBox.animateCamera({
        // this is where we animate to
        target: {
            lat: 24.7914,
            lng: 85.0002
        },
        duration:1500
        // zoomLevel: 17, // Android
        // altitude: 2000, // iOS (meters from the ground)
        // bearing: 270, // Where the camera is pointing, 0-360 (degrees)
        // tilt: 50,
        // duration: 5000 // default 10000 (milliseconds)
      })
     }

}
