import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {Map, Marker} from 'mapbox-gl'

@Component({
  selector: 'maps-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent {

  @ViewChild('map') divMap?:ElementRef;

  @Input() lngLat?:[number,number];

  public map?:Map;

  ngAfterViewInit(){
    if (!this.divMap) throw 'divMap no fue encontrado';
    if (!this.lngLat) throw 'lngLat no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive:false,
    });

    new Marker()
    .setLngLat(this.lngLat)
    .addTo(this.map);

  }
}
