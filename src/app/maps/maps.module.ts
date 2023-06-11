import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { CounterAloneComponent } from '../alone/components/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { AngularLogoComponent } from './components/angular-logo/angular-logo.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

(mapboxgl as any).accessToken = 'pk.eyJ1IjoiaGdkczMiLCJhIjoiY2xpamk4YWlhMDJvdzNsb2Iyanc2NXJ5MSJ9.epmBdHjA2Syt3y3FrZ0HQQ';


@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent,
    MapScreenComponent,
    MapViewComponent,
    LoadingComponent,
    BtnMyLocationComponent,
    AngularLogoComponent,
    SearchBarComponent,
    SearchResultsComponent,
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    CounterAloneComponent,
    SideMenuComponent
  ]
})
export class MapsModule { }
