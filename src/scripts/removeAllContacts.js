import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log("✅ Всі контакти успішно видалені.");
  } catch (error) {
    console.error("❌ Помилка при видаленні контактів:", error);
  }
};

removeAllContacts();
