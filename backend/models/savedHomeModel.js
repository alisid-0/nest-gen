const { Schema, Types } = require('mongoose');

const savedHomeSchema = new Schema(
  {
    home_id: { type: String, default: '' },
    price: { type: Number, required: true },
    beds: { type: Number, required: true },
    baths: { type: Number, required: true },
    size_sqft: { type: Number, required: true },
    address_line: { type: String, required: true },
    city: { type: String, required: true },
    state_code: { type: String, required: true },
    postal_code: { type: String, required: true },
    prop_type: { type: String, required: true },
    prop_status: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = savedHomeSchema;
