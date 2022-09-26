import Item from "../models/Item.js";

// CREATE
export const createItem = async (req, res, next) => {
    const newItem = new Item(req.body);
    try {
        const savedItem = await newItem.save();
        res.status(200).json(savedItem)
    } catch (err) {
        next(err)
    }
}
// UPDATE
export const updateItem = async (req, res, next) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedItem);
    } catch (err) {
        next(err)
    }
}
// DELETE
export const deleteItem = async (req, res, next) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.status(200).json(`Your item was deleted successfully`);
    } catch (err) {
        next(err)
    }
}
// GET ONE
export const getItem = async (req, res, next) => {
    try {
        const item = await Item.findById(req.params.id)
        res.status(200).json(item);
    } catch (err) {
        next(err)
    }
}
// GET ALL
export const getItems = async (req, res, next) => {
    try {
        const items = await Item.find()
        res.status(200).json(items);
    } catch (err) {
        next(err)
    }
}