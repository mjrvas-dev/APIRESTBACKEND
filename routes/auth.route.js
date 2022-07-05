import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import { body } from "express-validator";
import { validationResultExpress } from "../middlewares/validationResultExpress.js";
const router = Router();

router.post(
    "/register", 
    [
        body('email', "Formato de Email incorrecto")
            .trim()
            .isEmail()
            .normalizeEmail(),
        body('password', "Minimo 6 caracteres")
            .trim()
            .isLength({min : 6}),
        body('password', "Formato de Password incorrecto")
            .custom((value, {req}) => { 
                if(value !== req.body.repassword){ 
                    throw new Error('No coinciden las constrase;a')
                }
                return value
            })
    ], 
    validationResultExpress,
    register
);

router.post(
    '/login', 
    [ 
        body('email', "Formato de Email incorrecto")
            .trim()
            .isEmail()
            .normalizeEmail(),
        body('password', "Minimo 6 caracteres")
            .trim()
            .isLength({min : 6})
    ],
    validationResultExpress, 
    login
);

export default router;