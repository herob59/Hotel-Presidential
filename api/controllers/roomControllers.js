const Hotel = require('../models/hotelModel');
const Room = require('../models/roomModel');

const createError = require("./utils/error");

exports.createRoom = async (req,res,next) => {
    const hotelId = req.params.hotelId
    const newRoom = new Room(req.body);
    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom._id }
            })
        } catch (error) {
            next(error)
        }
    } catch (error){
        next(error)
    }
}

exports.updateRoom = async (req, res, next) => {
    try {
      const updateRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      res.status(200).json(updateRoom)
    } catch (err) {
      res.status(500).json(err)
    }
  }
  
  exports.getRoom = async (req, res, next) => {
    try {
      const Room = await Room.findById(req.params.id)
      res.status(200).json(Room)
    } catch (err) {
      res.status(500).json(err)
    }
  }
  
  exports.deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid
  
    try {
      await Room.findByIdAndDelete(req.params.id)
      try {
        await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.id } })
      } catch (err) {
        next(err)
      }
      res.status(200).json("Room has be deleted")
    } catch (err) {
      res.status(500).json(err)
    }
  }
  
  exports.getAllRoom = async (req, res, next) => {
    try {
      const Rooms = await Room.find()
      res.status(200).json(Rooms)
    } catch (err) {
      next(err)
    }
  }
exports.updateRoomAvailabilty = async (req,res,next) => {
    try {
        await Room.updateOne(
            { "roomNumber._id": req.params.id },
            {
                $push : {
                    "roomNumber.$.unavailableDates": req.body.dates
                },
            }
        )
        res.status(200).json("Room Status has been updated")
    } catch (error){
        
    }
}