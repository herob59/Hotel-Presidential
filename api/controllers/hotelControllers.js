const Hotel = require('../models/hotelModel');
const Room = require('../models/roomModel');

exports.createHotel = async (req,res,next) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        next(error)
    }
}

exports.getHotels = async (req,res,next) => {
    const { min, max, ...others } = req.query;

    try {
        const hotels = await Hotel.find({
            ...others,
            cheapestPrice: { $gt: min| 1 , $lt: max || 999}
        }).limit(req.query.limit)

        res.status(200).json(hotels);
    } catch (error){

    }
}

exports.countByCity = async (req,res,next) => {
    const cities = req.query.cities.split(",");

    try {
        const list = await Promise.all(
            cities.map((city) => {
                return Hotel.countDocuments({ city: city })
            })
        )

        res.status(200).json(list);
    } catch (error){
        next(error)
    }
}

exports.countHotelByType = async (req,res,next) => {

    try {
       const hotelCount = await Hotel.countDocuments({ type: "hotel" })
       const apartmentCount = await Hotel.countDocuments({ type: "apartment" })
       const resortCount = await Hotel.countDocuments({ type: "resort" })
       const villaCount = await Hotel.countDocuments({ type: "villa" })
       const cabinCount = await Hotel.countDocuments({ type: "cabin" })

        res.status(200).json([
            { type: "hotel", hotelCount},
            { type: "apartment", apartmentCount},
            { type: "resort", resortCount},
            { type: "villa", villaCount},
            { type: "cabin", cabinCount}
        ]);
    } catch (error){
        next(error)
    }
}

exports.getHotelRooms = async (req,res,next) => {

    try {
      const hotel = await Hotel.findById(req.params.id)

      const roomList = await Promise.all(
          hotel.rooms.map((room) => {
              return Room.findById(room);
          })
      )
      res.status(200).json(roomlist);
    } catch (error){
        next(error)
    }
}