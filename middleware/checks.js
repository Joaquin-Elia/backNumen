import {check} from 'express-validator'

export const checks = [
    check('img')
        .notEmpty().withMessage('El campo img es requerido')
        .isString().withMessage('El campo img tiene que ser un string'),
    check('name')
        .notEmpty().withMessage('El campo nombre es requerido')
        .isString().withMessage('El campo nombre tiene que ser un string'),
    check('price')
        .notEmpty().withMessage('El campo precio es requerido')
        .isNumeric().withMessage('El campo precio debe ser numerico'),
    check('stock')
        .notEmpty().withMessage('El campo cantidad es requerido')
        .isNumeric().withMessage('El campo cantidad tiene que ser numerico'),
    check('description')
        .notEmpty().withMessage('El campo descripcion es requerido')
        .isString().withMessage('El campo descripcion tiene que ser un string')
]