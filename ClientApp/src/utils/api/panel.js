import axios from "axios";

const api = "https://localhost:7028/api";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json' 
}

export async function getSinglePanel(panelId) {
  return await axios.get(`${api}/Panel/${panelId}`)
}

export async function getPanels() {
  return await axios.get(`${api}/Panel`)
}

export async function getUserPanels() {
  return await axios.get(`${api}/panel/users`, {
    config: headers,
    withCredentials: true
  });
}

export async function addPanel(panel) {
  return await axios({
    method: 'post',
    url: `${api}/panel`,
    data: {
      title: panel
    },
    config: headers,
    withCredentials: true
  })
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
}

export async function editPanel(panel) {
  return await axios.put(`${api}/Panel/${panel.id}`, panel, {
    config: headers,
    withCredentials: true
  });
}

export async function deletePanel(panelId) {
  return await axios.delete(`${api}/Panel/${panelId}`)
}