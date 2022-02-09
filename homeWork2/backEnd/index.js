// localhost/book/isbn_id
// localhost/search?title="js"
const express = require("express");
const app = express();
const port = 3004;
const adminRoutes = require("./routes/admin");
const apiRoutes = require("./routes/api");

app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", adminRoutes);

app.listen(port)