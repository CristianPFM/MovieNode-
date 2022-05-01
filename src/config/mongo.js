const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("open", () => {
  console.log("Conexion a BD Exitosa");
});

mongoose.connection.on("error", () => {
  console.log("Conexion a BD Fallida");
});

module.exports = mongoose;