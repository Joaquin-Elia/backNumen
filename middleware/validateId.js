import {ProductModel} from "../models/products.model.js";

export const validateId = async(req, res, next) => {
    try {
        const search = await ProductModel.findById(req.params.id)
        if (search !== null) {
            next()
        } else {
            res.status(400).json({
                msg: `El id: ${req.params.id} es invalido`
            })
        }
    } catch (error) {
        res.status(400).json(error)
    }
}