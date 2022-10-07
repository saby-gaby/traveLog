import { Router } from "express";
import {
  getAllLogs,
  getLogById,
  postLog,
  patchLog,
  deleteLog,
  deleteAllLogs,
  getLogByLocation
} from "../controller/userLogs-controller.js";

const router = new Router();

router.route("/").get(getAllLogs).post(postLog).delete(deleteAllLogs);

router.route("/:id").get(getLogById).delete(deleteLog).patch(patchLog);

router.route("/search/:location").get(getLogByLocation);

export default router;
