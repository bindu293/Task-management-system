import axios from "axios";

// Axios client for authentication service
const authApiClient = axios.create({
  baseURL: 'http://backend:9090/api/api/auth', // Update this to point to localhost instead of backend
});

// Function to combine username and password into a single object for login API
const loginCredentials = (username, password) => ({ username, password });

// Register API: Send the user details for registration
export const registerApi = (user) => authApiClient.post('/register', user);

// Login API: Send credentials and get a response with authentication data
export const loginApi = (username, password) =>
  authApiClient.post('/login', loginCredentials(username, password));

// Save logged-in user details to sessionStorage
export const saveLoggedUser = (userId, username, role) => {
  sessionStorage.setItem('activeUserId', userId);
  sessionStorage.setItem('authenticatedUser', username);
  sessionStorage.setItem('role', role);
};

// Store Basic Auth credentials in localStorage (for future API requests)
export const storeBasicAuth = (basicAuth) => localStorage.setItem('auth', basicAuth);

// Retrieve Basic Auth credentials from localStorage
export const getBasicAuth = () => localStorage.getItem('auth');

// Check if the user is logged in by checking sessionStorage for username
export const isUserLoggedIn = () => !!sessionStorage.getItem('authenticatedUser');

// Get logged-in user's ID from sessionStorage
export const getLoggedInUserId = () => sessionStorage.getItem('activeUserId');

// Get logged-in user's username from sessionStorage
export const getLoggedInUser = () => sessionStorage.getItem('authenticatedUser');

// Log out the user by clearing localStorage and sessionStorage
export const logout = () => {
  localStorage.clear();
  sessionStorage.clear();
};

// Check if the logged-in user has 'ROLE_ADMIN' (strict comparison)
export const isAdminUser = () => sessionStorage.getItem('role') === 'ROLE_ADMIN';
