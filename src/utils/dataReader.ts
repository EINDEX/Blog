import fs from "fs";

export const getGalleryData = async () => {
  const data = await fs.readFileSync("data/gallery/pic.json", "utf8");
  return JSON.parse(data);
};
