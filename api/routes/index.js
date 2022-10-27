const router = require("express").Router();

const MainController = require("../controllers/");

router.post("/stream", MainController.CreateStream);
router.get("/streams", MainController.ReadStreams);
router.post("/student", MainController.CreateStudent);
router.get("/students",MainController.ReadStudents);
router.get("/student/:id", MainController.ReadStudent);
router.get("/stream/:id", MainController.ReadStream);
router.get("/stream-students/:id", MainController.ReadStreamStudents);
router.put("/students/:id", MainController.UpdateStudent);
router.delete("/students/:id", MainController.deleteStudent);


module.exports = router;
