import express from "express";
import filmsService from "../services/filmsService.js";

const baseRouter = express.Router();

baseRouter.get("/films/:id", async (req, res) => {
  const id = req.params.id;
  const data = await filmsService.getClientById(id);
  if (!data) return res.status(404).send("Id no have result!");
  res.json(data);
});
 
baseRouter.get("/films", async (req, res) => {
    const { page = 1, search = "" } = req.query || {};
    const data = await filmsService.getAllClients(page, search);
    if (!data) return res.status(404).send("not results!!");
    res.json(data);
});

export default baseRouter;
