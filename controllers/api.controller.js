import {ProductModel} from '../models/products.model.js'
import axios from 'axios'

export const apiController = {
    async apiGet (req, res) {
        const productsList = await ProductModel.find()
        res.json(productsList)
    },
    async apiPost (req, res) {
        const newproducts = new ProductModel(req.body);
        await newproducts.save();
        res.status(201).json(newproducts);
    },
    async apiPut (req, res) {
        await ProductModel.findByIdAndUpdate(req.params.id, req.body)
        const edited = await ProductModel.findById(req.params.id)
        res.status(201).json(edited)
    },
    async apiDelete (req, res) {
        await ProductModel.findByIdAndDelete(req.params.id)
        res.status(200).send('Se borro el Producto')
    },
    async apiGetPokemons (req, res) {
        const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
        res.json(data)
    }
}