import axios from "axios";
import process from "process";
import fs from "fs";


const main = async () => {
  const resp = await axios.get("https://img.eindex.me/pic/pic_list.json")
  await fs.writeFileSync("data/gallery/pic.json", JSON.stringify(resp.data, null, 2));
}


main()