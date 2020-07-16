// node_modules/contacts
import * as resultful from 'resultful';

export type Contact = {
  firstName?: string;
  lastName?: string;
};

type CustomError = {
  code: string,
  message: string
};

export const validateContact = (contact: Contact): resultful.Result<undefined, CustomError>  => {
  try {
    for (const nameKey of ['firstName', 'lastName']) {
      if (contact[nameKey] === undefined) {
        continue;
      }
  
      if (contact[nameKey] === '') {
        return resultful.error({
          code: `${nameKey}-empty`,
          message: `${nameKey} cannot be an empty string`,
        });
      }
      
      return resultful.success(undefined);
    }  
  } catch(err) {
    return resultful.exception(err);
  }
};
