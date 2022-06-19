const express = require("express");
require("./src/db/conn");
const cors = require("cors");
const usermodel = require("./src/model/Usermodel");
const blogsmodel = require("./src/model/Blogmodel");
const Offersmodel = require("./src/model/Offersmodel");
const predictionmodel = require("./src/model/Predictionmodel");
const videomodels = require("./src/model/videomodel");
const port = process.env.PORT || 7000;
const app = express();

app.use(cors());
app.use(express.json());

// users APIS

app.post("/addverifiedUsers", (req, res) => {
  const data = new usermodel(req.body);
  console.log(data);
  data
    .save()
    .then(() => {
      res.send(data);
    })
    .catch((e) => {
      res.send(e);
    });
});
app.get("/getallusers", async (req, res) => {
  try {
    const data = await usermodel.find({});
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
app.get("/getusers/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await usermodel.findOne({
      _id: id,
    });
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
app.patch("/users/update/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await usermodel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(data);
    console.log(data);
  } catch (error) {
    res.status(404).send(error);
  }
});
app.delete("/deleteUser/:id", async (req, res) => {
  const _id = req.params.id;
  const data = await usermodel.deleteOne({
    _id: _id,
  });
  res.send("deleted");
});

// blog APIS

app.post("/addblogs", (req, res) => {
  const data = new blogsmodel(req.body);
  console.log(data);
  data
    .save()
    .then(() => {
      res.send(data);
    })
    .catch((e) => {
      res.send(e);
    });
});
app.get("/getblogs", async (req, res) => {
  try {
    const data = await blogsmodel.find({});
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
app.patch("/blogs/update/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await blogsmodel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(data);
    console.log(data);
  } catch (error) {
    res.status(404).send(error);
  }
});
app.delete("/deleteBlog/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await blogsmodel.deleteOne({
      _id: _id,
    });
    res.send("deleted");
  } catch (e) {
    console.log(e);
  }
});

// offers APIs

app.post("/addoffers", (req, res) => {
  const data = new Offersmodel(req.body);
  console.log(data);
  data
    .save()
    .then(() => {
      res.send(data);
    })
    .catch((e) => {
      res.send(e);
    });
});
app.get("/getoffers", async (req, res) => {
  try {
    const data = await Offersmodel.find({});
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
app.patch("/offer/update/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await Offersmodel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(data);
    console.log(data);
  } catch (error) {
    res.status(404).send(error);
  }
});
app.delete("/deleteOffer/:id", async (req, res) => {
  const _id = req.params.id;
  const data = await Offersmodel.deleteOne({
    _id: _id,
  });
  res.send("deleted");
});

// prediction APIS

app.post("/addprediction", (req, res) => {
  const data = new predictionmodel(req.body);
  console.log(data);
  data
    .save()
    .then(() => {
      res.send(data);
    })
    .catch((e) => {
      res.send(e);
    });
});
app.get("/getpredictions", async (req, res) => {
  try {
    const data = await predictionmodel.find({});
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
app.patch("/prediction/update/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await predictionmodel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(data);
    console.log(data);
  } catch (error) {
    res.status(404).send(error);
  }
});
app.delete("/deletePrediction/:id", async (req, res) => {
  const _id = req.params.id;
  const data = await predictionmodel.deleteOne({
    _id: _id,
  });
  res.send("deleted");
});

// video APIS

app.post("/addvideos", (req, res) => {
  const data = new videomodels(req.body);
  console.log(data);
  data
    .save()
    .then(() => {
      res.send(data);
    })
    .catch((e) => {
      res.send(e);
    });
});
app.get("/getvideos", async (req, res) => {
  try {
    const data = await videomodels.find({});
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
app.patch("/videos/update/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await videomodels.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(data);
    console.log(data);
  } catch (error) {
    res.status(404).send(error);
  }
});
app.delete("/deleteVideos/:id", async (req, res) => {
  const _id = req.params.id;
  const data = await videomodels.deleteOne({
    _id: _id,
  });
  res.send("deleted");
});

app.get("/", (req, res) => {
  res.send("hellow");
});

app.listen(port, () => {
  console.log(`connection success ${port}`);
});
