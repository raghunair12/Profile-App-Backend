const Detail = require('../models/details');

const getAllDetails = async(req,res,next) => {
    let details;
    try{
        details = await Detail.find({}, '-__v');
    }catch(err){
        return res.status(404).json({message: 'Data not found'});
    }
    res.json({details: details.map(d=>d.toObject({getters:true}))});
}

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

const deleteDetail = async (req,res,next) =>{
    const detailId = req.params.id;
    let detail;
    try{
        detail = await Detail.findById(detailId);
    }catch(err){
        return res.status(400).json({message: 'Something went wrong, Could not delete'});
    }
    
    if(!detail){
        return res.status(404).json({message: 'Could find the Detail ID'});
    }

    try{
        await detail.remove();
    }catch(err){
        return res.status(400).json({message: 'Could not Delete'});
    }

    res.json({message:'Deleted..'});
}

exports.getAllDetails = getAllDetails;
exports.submit = submit;
exports.deleteDetail= deleteDetail;