const User = require('../models/userModel');

exports.updateUser = async (req,res,next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updateUser)
    } catch (error) {
        next(error)
    }
}

exports.deleteUser = async (req,res,next) => {
    try {
        const updateUser= await User.findByIdAndDelete(
            req.params.id,
        );
        res.status(200).json("User Has Been Deleted Successfully!")
    } catch (error) {
        next(error)
    }
}

exports.getUser = async (req,res,next) => {
    try {
        const user = await User.findById(req.params.id);
       
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

exports.getAllUsers = async (req,res,next) => {
    try {
        const users = await User.find();

        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}