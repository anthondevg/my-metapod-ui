const validateInputs = async (email: string, password: string) => {
  let errors = [];

  if (!email) {
    errors.push("missing email");
  } else if (validateEmail(email)) {
    errors.push("invalid email");
  }

  if (!password) {
    errors.push("missing password");
  }

  return await errors;
};

const validateEmail = (email: string) => {
  return !String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export { validateInputs, validateEmail };
