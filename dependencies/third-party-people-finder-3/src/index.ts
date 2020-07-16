// node_modules/third-party-contact-finder
import { validateContact, Contact } from 'contacts-2';
import * as resultful from 'resultful';

export { Contact };

const contactDatabase = [
  { firstName: 'Bob', lastName: 'Shaw' },
  { firstName: 'John', lastName: 'Hamesh' },
  { firstName: 'Elizabeth', lastName: 'Pond' },
  { firstName: 'X Æ A-12', lastName: 'Musk' },
];

export const findContacts = (searchDetails: Contact) => { 
  try {
    const validationResult = validateContact(searchDetails);
    if (resultful.isFailure(validationResult)) {
      return validationResult;
    }

    if (/\d/.test(searchDetails.firstName)) {
      return resultful.error(new Error('firstName cannot certain number'));
    }
  
    if (/\d/.test(searchDetails.lastName)) {
      return resultful.error(new Error('lastName cannot certain number'));
    }  

    const searchedKeys = Object.keys(searchDetails);

    const contacts = contactDatabase.filter(person => {
      for (const key of searchedKeys) {
        if (searchDetails[key] !== person[key]) {
          return false;
        }
      }
  
      return true;
    });
  
    return resultful.success(contacts);
  } catch(err) {
    return resultful.exception(err);
  }
};
