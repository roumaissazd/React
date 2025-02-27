import axios from "axios";
const url = "http://localhost:3001/events";



export const getallEvents = async (id) => {
    try {
        const response = await axios.get(url);
        return response.data;  // Retourne les événements récupérés
      } catch (error) {
        console.error("Erreur lors de la récupération des événements:", error);
        return [];  // Retourne un tableau vide en cas d'erreur
      }
    };
export const addEvent = async (event) => {
return await axios.post(url, event);
};
export const editEvent = async (id, event) => {
return await axios.put(`${url}/${id}`, event);
};
export const deleteEvent = async (id) => {
return await axios.delete(`${url}/${id}`);
};
3