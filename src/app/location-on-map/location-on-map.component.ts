import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';
// import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-location-on-map',
  templateUrl: './location-on-map.component.html',
  styleUrls: ['./location-on-map.component.css']
})
export class LocationOnMapComponent implements OnInit {

  constructor(
    private storage: StorageService,
    // private mapsService: MapsService
  ) { }

  zoom: number = 17;
  
  // initial center position for the map
  lat: number = -22.410101;
  lng: number = -42.967093;

  locationList: any = []

  ngOnInit(): void {
    const d = document.getElementsByClassName("draggable");
    
    this.locationList = this.storage.getCityLocations();
    // console.log(this.locationList)
  }

  goMap(event) {
    // console.log(event);
    this.lat = event.lat
    this.lng = event.lng
    this.zoom = 17
  }

}