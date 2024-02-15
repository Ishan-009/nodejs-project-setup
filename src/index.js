const { ServerConfig, Logger } = require("./config/index");
const express = require("express");
const apiRoutes = require("./routes/index");
const app = express();

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Server Listening on port ${ServerConfig.PORT}`);
  Logger.info("Successfully started the server");
});
