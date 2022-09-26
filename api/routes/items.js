import express from "express";
import Item from "../models/Item.js";

const router = express.Router();


// CREATE
router.post('/', async (req, res) => {
    const newItem = new Item(req.body);
    try {
        const savedItem = await newItem.save();
        res.send(200).json(savedItem)
    } catch (err) {
        res.send(500).json(err)
    }
})
// UPDATE
// DELETE
// GET
// GET ALL

export default router;