// node_modules/contacts

export type Contact = {
  firstName?: string;
  lastName?: string;
};

export const validateContact = (contact) => {
  for (const nameKey of ['firstName', 'lastName']) {
    if (contact[nameKey] === undefined) {
      continue;
    }

    if (contact[nameKey] === '') {
      return {
        code: `${nameKey}-empty`,
        error: {
          message: `${nameKey} cannot be an empty string`,
        },
      };  
    } else if (/d/.test(contact[nameKey])) {
      return {
        code: `${nameKey}-no-numbers`,
        error: {
          message: `${nameKey} cannot contain number`,
        },
      };        
    }
  }
};
