// utils.js

// Utility function to fetch and parse JSON
async function fetchJSON(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'An error occurred');
    }
    return response.json();
}

// Utility function to get JWT token from localStorage
function getToken() {
    return localStorage.getItem('token');
}

// Utility function to set JWT token in localStorage
function setToken(token) {
    localStorage.setItem('token', token);
}

// Utility function to remove JWT token from localStorage
function removeToken() {
    localStorage.removeItem('token');
}