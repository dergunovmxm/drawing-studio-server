import * as galleryService from "../services/galleryServices.js";

export const getGallery = async (req, res) => {
  try {
    const images = await galleryService.getGallery();
    res.status(200).json(images);
  } catch (e) {
    console.error("Ошибка запроса галереи", e);
    res.status(500).json({ message: "Ошибка сервера" });
  }
};
