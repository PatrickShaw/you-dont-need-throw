// node_modules/third-party-contact-finder
import { validateContact, Contact } from 'contacts-2';

export { Contact };

const contactDatabase = [
  { firstName: 'Bob', lastName: 'Shaw' },
  { firstName: 'John', lastName: 'Hamesh' },
  { firstName: 'Elizabeth', lastName: 'Pond' },
  { firstName: 'X Æ A-12', lastName: 'Musk' },
];

export const findContact = (searchDetails: Contact) => { 
  const searchedKeys = Object.keys(searchDetails);

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
