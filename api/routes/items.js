import express from "express";
import Item from "../models/Item.js";

const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
    const newItem = new Item(req.body);
    try {
        const savedItem = await newItem.save();
        res.status(200).json(savedItem)
    } catch (err) {
        next(err)
    }
})
// UPDATE
router.put('/:id', async (req, res) => {
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
})
// DELETE
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await Item.findByIdAndDelete(id);
        res.status(200).json(`Your item was deleted successfully`);
    } catch (err) {
        next(err)
    }
})
// GET
router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id)
        res.status(200).json(item);
    } catch (err) {
        next(err)
    }
})
// GET ALL
router.get('/', async (req, res) => {
    try {
        const items = await Item.find()
        res.status(200).json(items);
    } catch (err) {
        next(err)
    }
})

export default router;