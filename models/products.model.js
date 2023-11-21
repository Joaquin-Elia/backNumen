import { Schema, model } from "mongoose";

const productsSchema = new Schema({
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
   description: {
        type: String,
        required: true
    }
})

export const ProductModel = model('Product', productsSchema)