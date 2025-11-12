const express = require('express');
const app = express();

const PORT = 3000;
const dotenv = require("dotenv");
const connectDB = require("./config/DatabaseConncection");
dotenv.config();
connectDB();

const userRoutes = require("./routes/UserRouter");

app.use(express.json());
app.use("/api/users", userRoutes);

app.get('/', (req, res) => {
  res.send('the Current available routers are: /user');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});