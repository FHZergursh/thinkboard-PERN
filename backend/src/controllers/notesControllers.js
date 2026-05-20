import express from "express"

export const getAllNotes = async (req, res) => {
  try {
    return res.status(201).send("Controllers are working")

  } catch (error) {
    console.log(error)
    return res.status(404)
  }
}

export const getNote = async (req, res) => {
    try {
    return res.status(201).send("get one")

  } catch (error) {
    console.log(error)
    return res.status(404)
  }
}

export const createNote = async (req, res) => {
    try {
    return res.status(201).send("create one")

  } catch (error) {
    console.log(error)
    return res.status(404)
  }
}

export const updateNote = async (req, res) => {
    try {
    return res.status(201).send("update one")

  } catch (error) {
    console.log(error)
    return res.status(404)
  }
}


export const deleteNote = async (req, res) => {
    try {
    return res.status(201).send("delete one")

  } catch (error) {
    console.log(error)
    return res.status(404)
  }
}