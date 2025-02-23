import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error("Помилка при отриманні контактів:", error);
    return [];
  }
};

getAllContacts().then(console.log);
