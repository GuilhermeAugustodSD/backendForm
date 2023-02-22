const  { Router } = require("express");

const formRoutes = require("./forms.routes");
const sectorsRoutes = require("./sectors.routes");


const routes = Router();


routes.use("/", formRoutes);
routes.use("/sectors", sectorsRoutes);

module.exports = routes;
