import { Rental } from '../../rental/shared/rental.model';


export class Booking {

    static readonly DATE_FORMAT = 'YYYY-MM-DD';

    // tslint:disable-next-line: variable-name
    _id: string;
    startAt: string;
    endAt: string;
    totalPrice: number;
    guests: number;
    days: number;
    createdAt: string;
    rental: Rental;
}
