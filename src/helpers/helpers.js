import jwt from 'jsonwebtoken';
import store from '../store/store';
import * as action from '../redux/actions/auth/auth-actions';

const handleConfirmPassword = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return 'password doesn\'t match';
  }
  return null;
};

export const validateIncident = inputFields => {
  const errors = {};
  const { title, type, comment, location } = inputFields;
  const string = new RegExp('^[a-zA-Z ]*$');
  if (title.length < 4 && !string.test(title)) {
    errors.title =
      'title must be more than four characters and must be a string';
  }

  if (type.length < 4 && !string.test(type)) {
    errors.type = 'type must be more than four characters and must be a string';
  }

  if (comment.length < 4 && !string.test(comment)) {
    errors.comment =
      'comment must be more than four characters and must be a string';
  }

  if (location.length < 4 && !string.test(title)) {
    errors.location =
      'location must be more than four characters and must be a string';
  }
  return { errors };
};

export const validateUser = inputFields => {
  const errors = {};

  const { password, confirmPassword, ...newUser } = inputFields;

  const confirmPasswordError = handleConfirmPassword(password, confirmPassword);
  const string = new RegExp('^[a-zA-Z ]*$');
  const num = new RegExp('^[0-9 ]*$');

  if (confirmPasswordError) {
    errors.confirmPassword = confirmPasswordError;
  }

  if (newUser.username.length < 4 && !string.test(newUser.username)) {
    errors.username =
      'username must be more than four characters and must be a string';
  }

  if (newUser.firstname.length < 3 && !string.test(newUser.firstname)) {
    errors.firstname =
      'firstname must be more than three characters and must be a string';
  }

  if (newUser.lastname.length < 4 && !string.test(newUser.lastname)) {
    errors.lastname =
      'last must be more than four characters and must be a string';
  }

  if (newUser.othernames.length < 4 && !string.test(newUser.othernames)) {
    errors.othernames =
      'othernames must be more than four characters and must be a string';
  }

  if (newUser.phonenumber.length > 10 > 11 && !num.test(newUser.phonenumber)) {
    errors.phonenumber = 'phonenumber must be more than 11';
  }

  if (password.length < 4) {
    errors.password = 'password must be more than four characters';
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
  formData.set('image', image);
  formData.set('title', title);
  formData.set('comment', comment);
  formData.set('location', location);
  formData.set('type', type);
  return formData;
};

/**
 * Verifies that a JWT token is valid
 * @param {string} token
 * @returns {boolean} validity
 */
export const verifyToken = token => {
  try {
    const decoded = jwt.decode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp >= currentTime;
  } catch (e) {
    return false;
  }
};

/**
 * @returns {undefined}
 */
export const checkAuth = async () => {
  const token = localStorage.getItem('token');
  const validToken = verifyToken(token);
  if (validToken) {
    const user = JSON.parse(localStorage.getItem('user'));
    store.dispatch(
      action.loginSuccess({
        message: 'authentication successful',
        data: [
          {
            user
          }
        ]
      })
    );
  } else {
    localStorage.removeItem('token');
    store.dispatch(action.logoutAction());
  }
};

export const logo =
  'https://res.cloudinary.com/do01bfhpw/image/upload/v1556721799/logo.png';
