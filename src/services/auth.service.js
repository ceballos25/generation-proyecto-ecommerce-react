const STORAGE_KEY = 'authUser';

export const authService = {
  login(user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  },

  logout() {
    localStorage.removeItem(STORAGE_KEY);
  },

  getUser() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  },
};
