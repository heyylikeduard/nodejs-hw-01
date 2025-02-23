import { promises as fs } from "fs";
import { PATH_DB } from "../constants/contacts.js";

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2); 
    await fs.writeFile(PATH_DB, data, "utf-8");
  } catch (error) {
    throw new Error("Error writing contacts: " + error.message);
  }
};
