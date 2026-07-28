const express = require("express");
const multer = require("multer"); //for file upload
const authMiddleware = require("../middleware/auth.middleware");
const musicController = require("../controller/artist.controller");

const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
});

router.post(
  "/upload",
  authMiddleware.authArtist,
  upload.single("music"),
  musicController.createMusic,
);
router.post("/album", authMiddleware.authArtist, musicController.createAlbum);

router.get("/", authMiddleware.authUser, musicController.getAllMusic);

router.get("/", authMiddleware.authUser, musicController.getAllAlbums);

router.get(
  "/albums/:abumId",
  authMiddleware.authUser,
  musicController.getAlbumById,
);

module.exports = router;
