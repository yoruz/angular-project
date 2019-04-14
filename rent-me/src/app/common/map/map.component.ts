import { Component, OnInit, Input } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() location: string;

  lat = 42.666913;
  lng = 23.352256;

  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

  mapReadyHandler() {
    this.mapService.geocodeLocation(this.location).subscribe((coordinates) => {
      this.lat = coordinates.lat;
      this.lng = coordinates.lng;
    });
  }

}
