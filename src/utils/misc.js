import Persona from "../models/people.js";
import Pelicula from "../models/films.js";
import Planeta from "../models/planets.js";

function translateObject(objectData) {
  return new Persona(
    objectData.name,
    objectData.height,
    objectData.mass,
    objectData.hair_color,
    objectData.skin_color,
    objectData.eye_color,
    objectData.birth_year,
    objectData.gender,
    objectData.homeworld,
    objectData.films,
    objectData.species,
    objectData.vehicles,
    objectData.starships,
    objectData.created,
    objectData.edited,
    objectData.url
  );
}
function translateObjectFilm(objectData) {
  return new Pelicula(
    objectData.title,
    objectData.episode_id,
    objectData.opening_crawl,
    objectData.director,
    objectData.producer,
    objectData.release_date,
    objectData.characters,
    objectData.planets,
    objectData.starships,
    objectData.vehicles,
    objectData.species,
    objectData.created,
    objectData.edited,
    objectData.url
  );
}
function translateObjectPlanet(objectData) {
  return new Planeta(
    objectData.name,
    objectData.rotation_period,
    objectData.orbital_period,
    objectData.diameter,
    objectData.climate,
    objectData.gravity,
    objectData.terrain,
    objectData.surface_water,
    objectData.population,
    objectData.residents,
    objectData.films,
    objectData.created,
    objectData.edited,
    objectData.url
  );
}
export { translateObject, translateObjectFilm, translateObjectPlanet };
