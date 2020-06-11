// index.ts
import { findContact, Contact } from 'third-party-contact-finder-2';

try {
  const contacts: Contact[] = findContact({
    firstName: 'X Æ A-12',
  });
  
  console.log('Found', contacts);
} catch (err) {
  console.error(`Failed to search for a contact: "${err.error.message}"`);
}
