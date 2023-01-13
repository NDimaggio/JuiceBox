const express = require("express");
const apiRouter = express.Router();
const postsRouter = require("./posts");
const usersRouter = require("./users");
apiRouter.use("/users", usersRouter, "/posts", postsRouter);

module.exports = apiRouter;
