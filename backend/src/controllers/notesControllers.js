import express from "express"
import { sql } from "../db/db.js"

export const getAllNotes = async (req, res) => {
  try {
    const notes = await sql.query(`SELECT * FROM notes`)
    return res.status(200).json({success: true, data: notes})

  } catch (error) {
    console.log(error)
    return res.status(404).send("Error in get all notes, ", error)
  }
}

export const getNote = async (req, res) => {
    try {
    const {id} = req.params;

    const note = await sql.query(`SELECT * FROM notes WHERE id = $1`, [id])
    return res.status(200).json({success: true, data: note[0]})


    return res.status(201).send("get one")

  } catch (error) {
    console.log(error)
    return res.status(404).send("Error in get note, ", error)
  }
}

export const createNote = async (req, res) => {
    try {
      const {title, content} = req.body
      
      if (!title || !content) {
        return res.status(401).json("Missing data, please provide all fields")
      }

    const created = await sql.query(`INSERT INTO notes (title, content) VALUES ($1, $2)`, [title, content])
    return res.status(201).json({success: true, data: created[0]})

  } catch (error) {
    console.log(error)
    return res.status(404).send("Error in create note, ", error)
  }
}

export const updateNote = async (req, res) => {
    try {
      const {title, content} = req.body
      const {id} = req.params

      if (!title || !content) {
        return res.status(401).json("Missing data, please provide all fields")
      }

      const updated = await sql.query(`UPDATE notes SET title = $1, content = $2 WHERE id = $3`, [title, content, id])

      return res.status(201).json({success: true, data: updated[0]})

  } catch (error) {
    console.log(error)
    return res.status(404).send("Error in update note, ", error)
  }
}


export const deleteNote = async (req, res) => {
    try {
      const {id} = req.params

      const deleted = await sql.query(`DELETE FROM notes WHERE id = $1`, [id])

      return res.status(201).json({success: true, data: deleted[0]})

  } catch (error) {
    console.log(error)
    return res.status(404).send("Error in delete note, ", error)
  }
}