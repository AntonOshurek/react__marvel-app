import { useHttp } from '../hooks/http.hook';

const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
const _apiKey = 'apikey=5af7a0d601852abb88e6ece45814a55f';
const _baseOffset = 210;

const useMarvelService = () => {

  const {loading, request, error, clearError} = useHttp();

  const getAllCharacters = async (offset = _baseOffset) => {
    const resultat = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
    return resultat.data.results.map(_transformCharacter);
  }

  const getCharacter = async (id) => {
    const resultat = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transformCharacter(resultat.data.results[0]);
  }

  const _transformCharacter = (character) => {
    return {
      id: character.id,
      name: character.name,
      description: character.description,
      thumbnails: character.thumbnail.path + '.' + character.thumbnail.extension,
      homepage: character.urls[0].url,
      wiki: character.urls[1].url,
      comics: character.comics.items
    }
  }

  return {loading, error, getAllCharacters, getCharacter, clearError};

}


export default useMarvelService;
