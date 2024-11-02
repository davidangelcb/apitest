import peopleRepository from "../repositories/peopleRepository.js"; // Asegúrate de incluir la extensión .js

import { translateObject } from "./../utils/misc.js";

const peopleService = {
  getAllClients: async (page, search) => {
    const responseData = {
      cantidad_total: 0,
      cantidad_mostrada: 0,
      siguiente: null,
      anterior: null,
      datos: 0,
    };

    try {
      let searchLink = "";
      if (search != "") {
        searchLink = `?search=${search}`;
      }

      let pagination = "";
      if (page > 1) {
        pagination = search == "" ? `?page=${page}` : `&page=${page}`;
      }

      let response = await peopleRepository.getAll(pagination, searchLink);

      if (response.data.count == 0) {
        return responseData;
      }
      let next = null;
      let previous = null;
      if (response.data.next != null) {
        const words = response.data.next.split("?");
        next = words[1];
      }
      if (response.data.previous != null) {
        const words = response.data.previous.split("?");
        previous = words[1];
      }
      //Modificar los items
      let items = response.data.results;
      for (let i = 0; i < items.length; i++) {
        items[i] = translateObject(items[i]); // Imprime cada elemento
      }

      responseData.cantidad_total = response.data.count;
      responseData.cantidad_mostrada = response.data.results.length;
      responseData.siguiente = next;
      responseData.anterior = previous;
      responseData.datos = items;
      
    } catch (error) {
      // manejo de logs
      console.log(error);
    }

    return responseData;
  },
  getClientById: async (id) => {
    try {
      let people = await peopleRepository.getById(id);

      return translateObject(people.data);
    } catch (error) {
      // manejo de logs
      console.log(error);
      return null;
    }
  },
};

export default peopleService;
