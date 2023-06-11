import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places';
import { PlacesApiClient } from '../api/placesApiClient';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {


  constructor(private http:PlacesApiClient,
    private mapService:MapService) {
    this.getUserLocation();
  }

  public userLocation?:[number,number]=undefined;
  public isLoadingPlaces:boolean=false;
  public places:Feature[]=[];


  get isUserLocationReady():boolean{
    return !!this.userLocation
  }

  public async getUserLocation():Promise<[number,number]>{
    return new Promise((resolve,reject)=>{
      navigator.geolocation.getCurrentPosition(
        ({coords})=> {
          this.userLocation=[coords.longitude,coords.latitude];
          resolve(this.userLocation);
        },
        (err) =>{
          alert('no se pudo obtener la geolocalizacion')
          console.log(err);
          reject();
        }
      );
    });
  }

  getPlacesByQuery(query:string=''){
    if(query.length===0){
      this.isLoadingPlaces=false;
      this.places=[];
      return;
    }

    if(!this.userLocation) throw Error('no hay una localizacion especifica')

    this.isLoadingPlaces=true;
    this.http.get<PlacesResponse>(`/${query}.json`,{
      params:{
        proximity:this.userLocation.join(',')
      }
    })
    .subscribe(resp=>{
      this.isLoadingPlaces=false;
      this.places=resp.features;
      this.mapService.createMarkersFromPlaces(this.places,this.userLocation!);
    });
  }

  deletePlaces(){
    this.places=[];
  }

}
