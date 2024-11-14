import tourModel from '../models/tour.js'
import { v4 as uuidv4} from "uuid"

const getAllToursController = async(req,res) => {
    try {
        const tours = await tourModel.getAllToursModel()
        res.status(200).json(tours)
    } catch (error) {
        console.log(error)
    }
}

//CLASE 9(?)
const createTourController = async (req,res) => { 
    const newTourData = {
        id:uuidv4(), //uso de la dependencia uuid 
        ...req.body
    }
    try {
        const tour = await tourModel.createTourModel(newTourData)
        res.status(201).json(tour)
    } catch (error) {
        res.status(500).json(error)
    }
}
const updateTourController = async (req,res) => {
    
    const{id} = req.params

    try {
        const tour = await tourModel.updateTourModel(id, req.body)
        res.status(200).json(tour)
    } catch (error) {
        res.status(500).json(error)
    }
}
const deleteTourController = async (req,res) => {
    
    const{id} = req.params

    try {
        const tour = await tourModel.deleteTourModel(id)
        res.status(200).json({msg:"Tour Eliminado Bien "})
    } catch (error) {
        res.status(500).json(error)
    }
}
const getTourController = async (req,res) =>{
    const{id} = req.params
    try {
        const tour = await tourModel.getTourModel(id)
        res.status(200).json(tour)
    } catch (error) {
        res.status(500).json(error)
    }
}
//Exportacion nombrada: cuando se quiere exportar varias cosas
//Exportacion default: se exporta una sola cosa
export {
    getAllToursController,
    createTourController,
    updateTourController,
    deleteTourController,
    getTourController
}