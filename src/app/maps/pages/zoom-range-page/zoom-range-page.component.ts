import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import {LngLat, Map} from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy{
  ngOnDestroy(): void {
    this.map?.remove(); // remueve el mapa y los listeners
  }


  @ViewChild('map') divMap?:ElementRef;


  public zoom:number =17;
  public map?:Map;
  public currentLngLat:LngLat= new LngLat(-79.03556293317628, -8.134204015292582);


  ngAfterViewInit(): void {

    if (!this.divMap) throw 'elemento html no fue encontrado';
   this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });
    this.mapListeners();
  }

  mapListeners(){
    if(!this.map) throw 'Mapa no incializado';

    this.map.on('zoom',(ev)=>{
      this.zoom=this.map!.getZoom();
    });

    this.map.on('zoomend',(ev)=>{
      if(this.map!.getZoom()<18) return;
      this.map!.zoomTo(18);
    });

    this.map.on('move',()=>{
      this.currentLngLat=this.map!.getCenter();
      const {lng,lat} = this.currentLngLat;

    });


  }

  zoomIn(){
    this.map?.zoomIn();
  }

  zoomOut(){
    this.map?.zoomOut();
  }

  zoomChanged(value:string){
    this.zoom=Number(value);
    this.map?.zoomTo(this.zoom);
  }
}
