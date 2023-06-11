import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {

constructor(private mapService:MapService,
  private placesService:PlacesService
  ){}

  goToMyLocation(){
    if(!this.placesService.isUserLocationReady) throw Error('no hay ubicacion de usuario');
    if(!this.mapService.isMapReady) throw Error('no hay mapa disponible');
    this.mapService.flyTo(this.placesService.userLocation!);
  }
}
