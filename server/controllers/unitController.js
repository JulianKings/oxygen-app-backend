import expressAsyncHandler from "express-async-handler";
import unitModel from "../models/unit";
import { body, validationResult } from 'express-validator';

const get_units = expressAsyncHandler(async (req, res, next) => {
    const allUnits = await unitModel.find({}).sort({ timestamp: -1 })
        .exec();

    const responseObject = {
        responseStatus: 'validRequest',
        units: allUnits
    }
    return res.json(responseObject);
        
});

const post_add_unit = [
    // Validate and sanitize fields.
    body("content", "unknown error.")
        .trim()
        .escape(),
    expressAsyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        if(errors.isEmpty())
        {
            // valid comment
            const newUnit = new unitModel({
                content: req.body.content,
                timestamp: new Date()
            });

            const result = await newUnit.save();
            const responseObject = {
                responseStatus: 'validUnit',
                unitResult: result
            }
            res.json(responseObject);
        }
    }),
];

const delete_unit = expressAsyncHandler(async (req, res, next) => {
    if(req.body.unit_id.length < 24)
    {
        // No results
        const responseObject = {
            responseStatus: 'invalidUnitId',
        }
        return res.json(responseObject);
    }
       
    await unitModel.findByIdAndDelete(req.body.unit_id);
    const responseObject = {
        responseStatus: 'unitDeleted',
    }
    return res.json(responseObject);
});

export { get_units, post_add_unit, delete_unit }