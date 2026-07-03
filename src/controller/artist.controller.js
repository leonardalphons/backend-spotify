const artistModel = require("../models/artist.model");
const { uploadFile } = require("../services/storage.services");
const albumModel = require("../models/album.model");
const jwt = require("jsonwebtoken");

async function createMusic(req, es) {
  const token = req.cookie.token;

  const { title } = req.body;

  const file = req.file;

  const result = await uploadFile(file.buffer.toString("base64"));

  const music = await artistModel.create({
    uri: result.url,
    title,
    artist: req.user.id,
  });

  res.status(200).json({
    message: "Music Created Sucessfully",
    music: {
      id: music._id,
      uri: music.uri,
      title: music.title,
      artist: music.artist,
    },
  });
}

async function createAlbum(req, res) {
  const { title, musicIds } = req.body;

  const album = await albumModel.create({
    title,
    artist: req.user.id,
    musics: musicIds,
  });

  res.status(201).json({
    message: "Album Created Successfully",
    album: {
      id: album._id,
      title: album.title,
      artist: album.artist,
      musics: album.musics,
    },
  });
}

async function getAllMusic(req, res) {
  const music = await artistModel
    .find()
    .limit(2)
    .populate("artist", "username email");

  res.status(200).json({
    message: "Music Fetched Successfully",
    musics: music,
  });
}

async function getAllAlbums(req, res) {
  const albums = await albumModel
    .find()
    .select("title artist")
    .populate("artist", "username email");

  res.status(200).json({
    message: "Albums Fetched Successfully",
    albums: albums,
  });
}

async function getAlbumById(req, res) {
  const albumId = req.params.albumId;

  const album = await albumModel
    .findById(albumId)
    .populate("artist", "username email")
    .populate("musics");

  res.status(200).json({
    message: "Album Fetched Successfully",
    album: album,
  });
}

module.exports = {
  createMusic,
  createAlbum,
  getAllMusic,
  getAllAlbums,
  getAlbumById,
};
