import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log("⚠️ Список контактів вже порожній.");
      return;
    }

    contacts.pop();

    await writeContacts(contacts);

    console.log("✅ Останній контакт успішно видалений.");
  } catch (error) {
    console.error("❌ Помилка при видаленні останнього контакту:", error);
  }
};

removeLastContact();
