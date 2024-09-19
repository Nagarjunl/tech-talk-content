const express = require("express");
var cors = require("cors");

const app = express();

app.use(cors());

app.use("/", async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const result = {
    address: {
      location: {
        state: "Tamil Nadu",
      },
    },
  };
  res.send({ ...result, message: "Success" });

  // res.status(400).send({
  //   message: "This is an error!",
  //   ...result,
  // });
});

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

app.listen(3000, (err, res) => {
  console.log("listening on port 3000");
});
