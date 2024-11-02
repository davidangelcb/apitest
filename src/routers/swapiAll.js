import express from "express";
import swapiService from "../services/swapiService.js";

const baseRouter = express.Router();

baseRouter.get("/species", async (req, res) => {
  const { page = 1, search = "" } = req.query || {};
  const data = await swapiService.getData("species", page, search);
  if (!data) return res.status(404).send("not results!!");
  res.json(data);
});

baseRouter.get("/starships", async (req, res) => {
  const { page = 1, search = "" } = req.query || {};
  const data = await swapiService.getData("starships", page, search);
  if (!data) return res.status(404).send("not results!!");
  res.json(data);
});

baseRouter.get("/vehicles", async (req, res) => {
  const { page = 1, search = "" } = req.query || {};
  const data = await swapiService.getData("vehicles", page, search);
  if (!data) return res.status(404).send("not results!!");
  res.json(data);
});

export default baseRouter;
