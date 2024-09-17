const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "dirifcx5f",
  api_key: "453296349992379",
  api_secret: "5iz7AnuGkTAVdSiODT2f0vFFE8I",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });
module.exports = { upload, imageUploadUtil };
