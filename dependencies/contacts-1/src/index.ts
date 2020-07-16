// node_modules/contacts

export type Contact = {
  firstName?: string;
  lastName?: string;
};

export const validateContact = (contact: Contact) => {
  for (const nameKey of ['firstName', 'lastName']) {
    if (contact[nameKey] === undefined) {
      continue;
    }

    if (contact[nameKey] === '') {
      throw {
        code: `${nameKey}-empty`,
        error: {
          message: `${nameKey} cannot be an empty string`,
        },
      };  
    }
  }
};
