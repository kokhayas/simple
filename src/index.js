const express = require("express");
const app = express();

app.use("/", (request, response) => {
	response.send("hello world");
})

const PORT = process.env.PORT || 3000

app.listen(PORT);