import express from "express";
import planetsService from "../services/planetsService.js";

const baseRouter = express.Router();

baseRouter.get("/planets/:id", async (req, res) => {
  const id = req.params.id;
  const data = await planetsService.getClientById(id);
  if (!data) return res.status(404).send("Id no have result!");
  res.json(data);
});
 
baseRouter.get("/planets", async (req, res) => {
    const { page = 1, search = "" } = req.query || {};
    const data = await planetsService.getAllClients(page, search);
    if (!data) return res.status(404).send("not results!!");
    res.json(data);
});

export default baseRouter;
