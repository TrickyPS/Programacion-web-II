const express = require("express");
require("dotenv").config();
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
  newsRoutes
} = require("./routes");

const cors = require("cors");

//variables

app.set("port", process.env.PORT || 5000);

//middllewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/user", userRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/noti", notificationsRoutes);
app.use("/api/reactions", reactionsRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/acomments", acommentsRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use("/api/news", newsRoutes);

module.exports = app;
