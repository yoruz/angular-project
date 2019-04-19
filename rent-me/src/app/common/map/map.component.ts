import { Component, Input, ChangeDetectorRef, OnInit} from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() location: string;

  isPositionError = false;

  lat: number;
  lng: number;

  constructor(private mapService: MapService,
              private ref: ChangeDetectorRef) { }

  ngOnInit() {

  }

  getLocation(location) {
    this.mapService.getGeoLocation(location).subscribe(
      (coordinates) => {
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;

        this.ref.detectChanges();
      }, () => {
        this.isPositionError = true;
        this.ref.detectChanges();
      });
  }

  mapReadyHandler() {
    this.getLocation(this.location);
  }
}
