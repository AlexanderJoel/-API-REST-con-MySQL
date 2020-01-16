const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const db = require("./app/models");

// ruta simple
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la aplicacion." });
});

db.sequelize.sync();

require("./app/routes/book.routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});