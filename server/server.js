const express = require("express");
const cors = require("cors");
const restaurantData = require("./restaurantData.json");

app = express();
app.use(cors());

const PORT = 8081;

app.get("/getRestaurant", (req, res) => {
    res.json(restaurantData);
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});