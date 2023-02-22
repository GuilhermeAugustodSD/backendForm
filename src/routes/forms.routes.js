const { Router } = require("express");

const FormController = require("../controllers/FormController");
const formRoutes = Router();

const formController = new FormController();

formRoutes.get("/", formController.index)
formRoutes.post("/", formController.create)
formRoutes.put("/:id", formController.update)
formRoutes.delete("/:id", formController.delete)

module.exports = formRoutes;