// index.ts
import { findContacts } from 'third-party-contact-finder-3';
import * as resultful from 'resultful';

const contactsResult = findContacts({
  firstName: 'X Æ A-12',
})

resultful.handle(contactsResult, {
  payload: (contacts) => console.log('Found', contacts),
  error: (err) => console.error('Failed to search for a contact: ', err),
  exception: (ex) => console.error('Something super unexpected went wrong in findContacts', ex),
});
