import axios from "axios";
import { getBasicAuth } from "./AuthApiService";

// Update the API base URL to the backend service name in Docker
const API_BASE_URL = "http://172.18.0.3:9090/api/v1/tasks";
// Update to backend service

axios.interceptors.response.use(
  response => response,
  error => {
    console.error('API request error:', error);
    return Promise.reject(error);
  }
);

export const retrieveAllTasks = (userId) =>
  axios.get(`${API_BASE_URL}/user/${userId}`, {
    headers: {
      'Authorization': getBasicAuth()
    }
  });

export const createTask = (task, userId) =>
  axios.post(`${API_BASE_URL}/user/${userId}`, task, {
    headers: {
      'Authorization': getBasicAuth()
    }
  });

export const retrieveTaskById = (taskId) =>
  axios.get(`${API_BASE_URL}/${taskId}`, {
    headers: {
      'Authorization': getBasicAuth()
    }
  });

export const updateTask = (task, id) =>
  axios.put(`${API_BASE_URL}/${id}`, task, {
    headers: {
      'Authorization': getBasicAuth()
    }
  });

export const deleteTask = (id) =>
  axios.delete(`${API_BASE_URL}/${id}`, {
    headers: {
      'Authorization': getBasicAuth()
    }
  });

export const markDone = (id) =>
  axios.patch(`${API_BASE_URL}/${id}/task-done`, null, {
    headers: {
      'Authorization': getBasicAuth()
    }
  });

export const markPending = (id) =>
  axios.patch(`${API_BASE_URL}/${id}/task-pending`, null, {
    headers: {
      'Authorization': getBasicAuth()
    }
  });
