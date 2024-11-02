import express from "express";
import peopleService from "../services/peopleService.js";

const baseRouter = express.Router();

baseRouter.get("/people/:id", async (req, res) => {
  const id = req.params.id;
  const data = await peopleService.getClientById(id);
  if (!data) return res.status(404).send("Id no have result!");
  res.json(data);
});
 
baseRouter.get("/people", async (req, res) => {
    const { page = 1, search = "" } = req.query || {};
    const data = await peopleService.getAllClients(page, search);
    if (!data) return res.status(404).send("not results!!");
    res.json(data);
});

export default baseRouter;
