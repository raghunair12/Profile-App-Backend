const Detail = require('../models/details');

const submit = async (req,res,next) => {
    const {firstName, lastName, company, residingState, gender, favMovie, phoneNo, favApp, weight} = req.body;
    const createdDetails = new Detail({
        firstName,
        lastName,
        company,
        residingState,
        gender,
        favMovie,
        phoneNo,
        favApp,
        weight
    });
    try{
        await createdDetails.save();
    }catch(err){
        return res.status(400).json({message: 'Creation failed'});
    }
    res.status(201).json({detail: createdDetails.toObject({getters:true})});
};

exports.submit = submit;