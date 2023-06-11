import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import {Map, Marker, Popup} from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit{

  @ViewChild('mapDiv')
  mapDiv!:ElementRef;


  constructor( private placesService:PlacesService,
    private mapSerice:MapService
    ){}



  ngAfterViewInit(): void {
    if(!this.placesService.userLocation) throw Error('no hay geolocalizacion');

    if (!this.mapDiv) throw 'elemento html no fue encontrado';
    const map = new Map({
      container: this.mapDiv.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placesService.userLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    const popup = new Popup()
  .setHTML(`
    <h6>Aqui estoy</h6>
    <span>Estoy en este lugar del mundo</span>
    <span>Coordenadas: ${this.placesService.userLocation}</span>
  `);
    new Marker({color:'red'})
    .setLngLat(this.placesService.userLocation)
    .setPopup(popup)
    .addTo(map)

    this.mapSerice.setMap(map);

  }

}
