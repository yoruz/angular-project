import { Component, OnInit } from '@angular/core';
import { Rental } from '../shared/rental.model';
import { RentalService } from '../shared/rental.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';

@Component({
  selector: 'app-rental-create',
  templateUrl: './rental-create.component.html',
  styleUrls: ['./rental-create.component.scss']
})
export class RentalCreateComponent implements OnInit {

  newRental: Rental;
  rentalCategories = Rental.CATEGORIES;
  errors: any[] = [];

  constructor(private rentalService: RentalService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {
    this.newRental = new Rental();
    this.newRental.shared = false;
  }

  createRental() {
    this.rentalService.createRental(this.newRental).subscribe((rental: Rental) => {
      this.router.navigate([`/rentals/${rental._id}`]);
      this.toastr.success('Your rental has been successfully created!', 'Success!');
    },
    (errorResponse: HttpErrorResponse) => {
      this.errors = errorResponse.error.errors;
    });
  }

}
