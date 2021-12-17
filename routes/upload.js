const multer = require("multer");
const path = require("path");

const starageEngine = multer.diskStorage({
  destination: "./public/files",
  filename: (req, file, fn) => {
    fn(
      null,
      new Date().getTime().toString() +
        "-" +
        file.fieldname +
        path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: starageEngine,
  limits: { fileSize: 2000000 },
  fileFilter: (req, file, callback) => {
    validateFile(file, callback);
  },
}).single("photo");

const validateFile = (file, cb) => {
  allowedFileTypes = /jpeg|jpg|png/;
  const extension = allowedFileTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimeType = allowedFileTypes.test(file.mimetype);
  if (extension && mimeType) {
    return cb(null, true);
  } else {
    cb("Invalid file type. Only JPEG, PNG file are allowed.");
  }
};

module.exports = upload
