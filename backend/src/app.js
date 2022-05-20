const express = require("express");
require("dotenv").config();
const api = process.env.API_VERSION;
const app = express();
const {
  userRoutes,
  postsRoutes,
  categoryRoutes,
  notificationsRoutes,
  reactionsRoutes,
  commentsRoutes,
  acommentsRoutes,
  favoriteRoutes,
  newsRoutes,
  authRoutes,
  reportsRoutes
} = require("./routes");

const cors = require("cors");

//variables

app.set("port", process.env.PORT || 5000);

//middllewares
app.use(express.json());
app.use(cors());

//routes
app.use(`/api/${api}/user`, userRoutes);
app.use(`/api/${api}/posts`, postsRoutes);
app.use(`/api/${api}/category`, categoryRoutes);
app.use(`/api/${api}/noti`, notificationsRoutes);
app.use(`/api/${api}/reactions`, reactionsRoutes);
app.use(`/api/${api}/comments`, commentsRoutes);
app.use(`/api/${api}/acomments`, acommentsRoutes);
app.use(`/api/${api}/favorites`, favoriteRoutes);
app.use(`/api/${api}/news`, newsRoutes);
app.use(`/api/${api}/auth`,authRoutes );
app.use(`/api/${api}/reportes`,reportsRoutes );

module.exports = app;
