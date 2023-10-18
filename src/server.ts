import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.json({ message: "zzzzz" }));

app.listen(3333, () => console.log("http://localhost:3333"));

//29
