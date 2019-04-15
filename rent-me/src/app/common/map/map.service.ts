import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MapService {

    private geoCoder;

    geocodeLocation(location: string): Observable<any> {
        this.geoCoder = new (window as any).google.maps.Geocoder();

        return new Observable((observer) => {
            this.geoCoder.geocode({address: location}, (result, status) => {
                if (status === (window as any).google.maps.GeocoderStatus.OK) {
                    const geometry = result[0].geometry.location;
                    observer.next({lat: geometry.lat(), lng: geometry.lng()});
                } else {
                    observer.error('Location could not be geocoded');
                }
            });
        });
    }
}
