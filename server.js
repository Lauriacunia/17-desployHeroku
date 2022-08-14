import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(process.env.SECRET_KEY);
  res.send(
    ` <h1>Primer deploy en Heroku by Lau💫. App corriendo en puerto: ${PORT}.</h1><h1>Mi clave secreta es: ${process.env.SECRET_KEY}</h1>`
  );
});

// Recordá que Heroku asigna un puerto automáticamente a la aplicación.
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(
    `🚀 Server started on PORT ${PORT} at ${new Date().toLocaleString()}`
  )
);
server.on("error", (err) => console.log(err));
