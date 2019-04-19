// tslint:disable: indent
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MapService {

	private geoCoder;

	constructor() {}

	private geocodeLocation(location: string): Observable<any> {
		if (!this.geoCoder) { this.geoCoder = new (window as any).google.maps.Geocoder(); }

		return new Observable((observer) => {
			this.geoCoder.geocode({address: location}, (result, status) => {
				if (status === 'OK') {

					const geometry = result[0].geometry.location;
					const coordinates = {lat: geometry.lat(), lng: geometry.lng()};

					observer.next(coordinates);
				} else {
					observer.error('Location could not be geocoded');
				}
			});
		});
	}

	getGeoLocation(location: string): Observable<any> {

		return this.geocodeLocation(location);
	}
}
