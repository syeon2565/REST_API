import express from "express";
// const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
let next = 4;
let movies = [
  {
    id: 1,
    title: "Avengers",
  },
  {
    id: 2,
    title: "Spider-man",
  },
  {
    id: 3,
    title: "Harry Potter",
  },
];

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.get("/movies/:id", (req, res) => {
  res.json(movies.filter((movie) => movie.id === +req.params.id)[0]);
});
app.post("/movies", (req, res) => {
  movies.push({
    id: next++,
    title: req.body.title,
  });
  res.json(movies);
});

app.put("/movies/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const index = movies.findIndex((movie) => movie.id === +req.params.id);
  if (index === -1) {
    return res.json({
      error: "That movie does not exist",
    });
  }
  movies[index] = {
    id: req.params.id,
    title: req.body.title,
  };
});

app.delete("/movies/:id", (req, res) => {
  movies = movies.filter((movie) => movie.id !== +req.params.id);
  res.json(movies);
});
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
