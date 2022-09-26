import express from "express";
import { createItem, updateItem, deleteItem, getItem, getItems } from "../controllers/item.js";

const router = express.Router();

// CREATE
router.post('/', createItem)
// UPDATE
router.put('/:id', updateItem)
// DELETE
router.delete('/:id', deleteItem)
// GET
router.get('/:id', getItem)
// GET ALL
router.get('/', getItems)

export default router;