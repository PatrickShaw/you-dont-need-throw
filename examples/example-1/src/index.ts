// index.ts
import { findContact, Contact } from 'third-party-contact-finder-1';

const contacts: Contact[] = findContact({
  firstName: 'X Æ A-12',
  lastName: '',
});

console.log('Found', contacts);
