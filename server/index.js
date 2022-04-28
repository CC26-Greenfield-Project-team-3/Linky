const path = require("path");
const express = require("express");
const res = require("express/lib/response");
const PORT = process.env.PORT || 9000;
const router = require("./routes");
const cors = require("cors");
const app = express();
// app.use(express.static(path.join(__dirname, "/index")));

app.use(express.json());
app.use("/", router);
// app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is ready and listening on port ${PORT}`);
  //
});
