const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
    title: { type: String, required: true, max: [25, 'Too long, the max length is 25 characters'] },
    city: { type: String, required: true, lowercase: true },
    street: { type: String, required: true, min: [4, 'Too short, the minimal length is 4 characters '] },
    category: { type: String, required: true, lowercase: true },
    image: { type: String, required: true },
    bedrooms: Number,
    shared: Boolean,
    description: { type: String, required: true },
    dailyRate: Number,
    createdAt: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }]
});

module.exports = mongoose.model('Rental', rentalSchema);