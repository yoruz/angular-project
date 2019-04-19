import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RentalService {

  constructor(private http: HttpClient) {}

  getRentalById(rentalId: string): Observable<any> {
    return this.http.get('/api/v1/rentals/' + rentalId);
  }

  getRentals(): Observable<any> {
    return this.http.get('/api/v1/rentals');
  }

  getRentalsByCity(city: string): Observable<any> {
    return this.http.get(`/api/v1/rentals?city=${city}`);
  }

  createRental(rental: Rental): Observable<any> {
    return this.http.post('/api/v1/rentals', rental);
  }

  getUserRentals(): Observable<any> {
    return this.http.get('/api/v1/rentals/manage');
  }

  deleteRental(rentalId: string): Observable<any> {
    return this.http.delete(`/api/v1/rentals/${rentalId}`);
  }

}
