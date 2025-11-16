const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
const dotenv = require("dotenv");
const connectDB = require("./config/DatabaseConncection");
dotenv.config();
connectDB();

const sessionRoutes = require("./routes/SessionRouter");
const userRoutes = require("./routes/UserRouter");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/session", sessionRoutes);


app.get('/', (req, res) => {
  res.send('the Current available routes are: \n/user\n/session');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});