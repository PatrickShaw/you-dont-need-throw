// index.ts
import { findContacts, Contact } from 'third-party-contact-finder-2';

try {
  const contacts: Contact[] = findContacts({
    firstName: 'X Æ A-12',
  });
  
  console.log('Found', contacts);
} catch (err) {
  if (err instanceof Error) {
    console.error(`Failed to search for a contact: `, err);
  } else {
    console.error(`Failed to search for a contact: `, err.error.message);
  }
}
