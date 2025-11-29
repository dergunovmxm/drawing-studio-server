import pool from "../db.js";

export const getGallery = async () => {
  try {
    const result = await pool.query("SELECT * FROM artpastushenko");
    return {
      data: result.rows,
      error: null,
    };
  } catch (error) {
    console.error("Ошибка запроса галереи:", error);
    return {
      data: null,
      error: error.message,
    };
  }
};
