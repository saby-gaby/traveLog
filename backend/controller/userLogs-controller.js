import userLogModel from "../models/userLog-model.js";

export const getAllLogs = async (_, res) => {
  try {
    const allLogs = await userLogModel.find({});
    res.send(allLogs);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getLogById = async (req, res) => {
  try {
    const log = await userLogModel.findById(req.params.id);
    res.send(log);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const postLog = async (req, res) => {
  try {
    const newLog = await userLogModel.create(req.body);

    console.debug("newLog", newLog);
    res.send({ msg: `successfully inserted with id ${newLog._id}` });
  } catch (e) {
    console.error(e.message);
    res.status(400).send({ error: e.message });
  }
};

export const deleteLog = async (req, res) => {
  const logId = req.params.id;

  try {
    const mongoResponse = await userLogModel.deleteOne({ _id: logId });

    res.send(mongoResponse);
  } catch (e) {
    console.error(e.message);
    res.status(500).send({ error: e.message });
  }
};

export const patchLog = async (req, res) => {
  const logId = req.params.id;

  try {
    const mongoResponse = await userLogModel.updateOne(
      { _id: logId },
      req.body,
      { runValidators: true }
    );

    console.debug("mongoResponse", mongoResponse);
    res.send(mongoResponse);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

export const deleteAllLogs = async (req, res) => {
  const password = req.body.password;
  console.log(req.body);
  try {
    if (password === "deleteAllLogs") {
      const mongoResponse = await userLogModel.deleteMany({});
      res.send(mongoResponse);
    } else {
      res.status(400).send({ error: "Wrong Password!" });
    }
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};
