// index.ts
import { findContacts, Contact } from 'third-party-contact-finder-1';

const contacts: Contact[] = findContacts({
  firstName: 'X Æ A-12',
  lastName: '',
});

console.log('Found', contacts);
