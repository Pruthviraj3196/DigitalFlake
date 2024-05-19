const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const mongoose = require("mongoose");

app.use(express.json());

// Routes
app.use(authRoutes);

mongoose
.connect("mongodb+srv://pruthvi1212:pruthvi1212@cluster0.h90chxe.mongodb.net/")

.then(()=>console.log("Connection done"))
.catch((err)=>console.log("Error in connection"+err))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});