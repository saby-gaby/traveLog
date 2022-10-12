import { Router } from "express";
import {
  getAllLogs,
  getLogById,
  postLog,
  patchLog,
  deleteLog,
  deleteAllLogs,
  getLogByLocation,
  // saveImageInDb
} from "../controller/userLogs-controller.js";


// import multer from 'multer';

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//       cb(null, 'uploads')
//   },
//   filename: (req, file, cb) => {
//       cb(null, file.fieldname + '-' + Date.now())
//   }
// });

// const upload = multer({ storage: storage });



const router = new Router();

router.route("/")
  .get(getAllLogs)
  // .post(upload.single('image'), saveImageInDb, postLog)
  .post(postLog)
  .delete(deleteAllLogs);

router.route("/:id").get(getLogById).delete(deleteLog).patch(patchLog);

router.route("/search/:location").get(getLogByLocation);

export default router;
