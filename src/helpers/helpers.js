const handleConfirmPassword = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return "password doesn't match";
  }
  return null;
};

export const validateUser = inputFields => {
  const errors = {};

  const { password, confirmPassword, ...newUser } = inputFields;

  const confirmPasswordError = handleConfirmPassword(password, confirmPassword);

  if (confirmPasswordError) {
    errors.confirmPassword = confirmPasswordError;
  }

  if (newUser.username.length < 4) {
    errors.username = "username must be more than four characters";
  }

  if (newUser.firstname.length < 3) {
    errors.firstname = "firstname must be more than three characters";
  }

  if (newUser.lastname.length < 4) {
    errors.lastname = "last must be more than four characters";
  }

  if (newUser.othernames.length < 4) {
    errors.othernames = "othernames must be more than four characters";
  }

  if (password.length < 4) {
    errors.password = "password must be more than four characters";
  }
  const validUser = { ...newUser, password };

  return { validUser, errors };
};

export const showInputError = (inputName, errors) => {
  if (errors[inputName]) {
    return errors[inputName];
  }
  return null;
};

export const getFormData = ({ image, location, title, comment, type }) => {
  const formData = new FormData();
  formData.set("image", image);
  formData.set("title", title);
  formData.set("comment", comment);
  formData.set("location", location);
  formData.set("type", type);
  return formData;
};
