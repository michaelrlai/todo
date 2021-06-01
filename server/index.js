require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");

app.use(cors());
app.use(express.json());

// get all todos
app.get("/api/v1/todo", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM todo_list ORDER BY id ASC");
    res.json(results.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// get one todo
app.get("/api/v1/todo/:id", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM todo_list where id = $1", [
      req.params.id,
    ]);
    res.json(results.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// create a todo
app.post("/api/v1/todo", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO todo_list (description) VALUES ($1) RETURNING *",
      [req.body.description]
    );
    res.json(results.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// update a todo
app.put("/api/v1/todo/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE todo_list SET description = $1 WHERE id = $2 RETURNING *",
      [req.body.description, req.params.id]
    );
    res.json(results.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// delete a todo
app.delete("/api/v1/todo/:id", async (req, res) => {
  try {
    const results = await db.query("DELETE FROM todo_list where id = $1", [
      req.params.id,
    ]);
    res.json("Successfully deleted");
  } catch (err) {
    console.log(err.message);
  }
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
