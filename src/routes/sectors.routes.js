const { Router } = require("express");

const SectorsController = require("../controllers/SectorsController");
const sectorsRoutes = Router();

const sectorsController = new SectorsController();

sectorsRoutes.post("/", sectorsController.create)
sectorsRoutes.get("/", sectorsController.index)
sectorsRoutes.get("/:value", sectorsController.show)

module.exports = sectorsRoutes;