import { promises as fs } from "fs";
import { PATH_DB } from "../constants/contacts.js";

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, "utf-8");
    return JSON.parse(data) || [];
  } catch (error) {
    if (error.code === "ENOENT") {
      return []; 
    }
    throw new Error("Error reading contacts: " + error.message);
  }
};
