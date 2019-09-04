import { ValidationError } from "yup";

interface Error {
  [key: string]: string[];
}

const formatYupErrors = (validationError: ValidationError) => {
  const error: Error = {};

  validationError.inner.forEach(elem => {
    const field = `${elem.path}Error`;

    if (!error[field]) {
      error[field] = [...elem.errors];
    } else {
      error[field] = [...error[field], ...elem.errors];
    }
  });

  return error;
};

export default formatYupErrors;
