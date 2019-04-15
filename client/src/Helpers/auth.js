export const authHelper = () => {
  const token = localStorage.getItem('token');

  if (token) {
    return {
      'x-access-token': token,
      'content-type': 'application/json',
    };
  }
  return {};
};

export const isLoggedIn = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return false;
  }
  return true;
};
