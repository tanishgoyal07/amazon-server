const express = require("express");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");
const productRouter = require("./routes/product");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");

const PORT = 3000;
const app = express();
const DB = "mongodb+srv://tanish:tanish1234@cluster0.m9o6los.mongodb.net/?retryWrites=true&w=majority";

//middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

//Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0" , () => {
  console.log(`connected at port ${PORT}`);
});
