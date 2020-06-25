// node_modules/third-party-contact-finder
import { validateContact, Contact } from 'contacts-1';

export { Contact };

const contactDatabase = [
  { firstName: 'Bob', lastName: 'Shaw' },
  { firstName: 'John', lastName: 'Hamesh' },
  { firstName: 'Elizabeth', lastName: 'Pond' },
  { firstName: 'X Æ A-12', lastName: 'Musk' },
];

export const findContacts = (searchDetails: Contact) => { 
  const searchedKeys = Object.keys(searchDetails);

  if (/\d/.test(searchDetails.firstName)) {
    throw new Error('firstName cannot contain number');
  }

  if (/\d/.test(searchDetails.lastName)) {
    throw new Error('nameKey cannot contain number');
  }

  validateContact(searchDetails);
  
  return contactDatabase.filter(person => {
    for (const key of searchedKeys) {
      if (searchDetails[key] !== person[key]) {
        return false;
      }
    }

    return true;
  });
};
