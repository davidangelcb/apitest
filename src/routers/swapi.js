import express from "express";
import swapiService from "../services/swapiService.js";

const baseRouter = express.Router();
 

 
baseRouter.get("/species/:id", async (req, res) => {
  const id = req.params.id;
  const data = await swapiService.getDataBymodel("species", id);
  if (!data) return res.status(404).send("Id no have result!");
  res.json(data);
});

baseRouter.get("/starships/:id", async (req, res) => {
  const id = req.params.id;
  const data = await swapiService.getDataBymodel("starships", id);
  if (!data) return res.status(404).send("Id no have result!");
  res.json(data);
});

baseRouter.get("/vehicles/:id", async (req, res) => {
  const id = req.params.id;
  const data = await swapiService.getDataBymodel("vehicles", id);
  if (!data) return res.status(404).send("Id no have result!");
  res.json(data);
});

export default baseRouter;
