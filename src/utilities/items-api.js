// Every CRUD-ed data source gets an API module
// Only need a service module if there's add'l biz. logic


import sendRequest from "./send-request";
const BASE_URL = '/api/items';

// Sends an AJAX request to the server
export function getAll() {
  return sendRequest(BASE_URL);
}

// Example for RESTful routing
export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}