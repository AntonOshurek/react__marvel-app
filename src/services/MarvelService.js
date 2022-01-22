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

  const getAllComics = async (offset = 0) => {
    const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`);
    return res.data.results.map(_transformComics);
  }

  const getComics = async (id) => {
      const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
      return _transformComics(res.data.results[0]);
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

  const _transformComics = (comics) => {
    return {
      id: comics.id,
      title: comics.title,
      description: comics.description || 'There is no description',
      pageCount: comics.pageCount ? `${comics.pageCount} p.` : 'No information about the number of pages',
      thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
      language: comics.textObjects.language || 'en-us',
      price: comics.prices.price ? `${comics.prices.price}$` : 'not available'
    }
  }

  return {loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComics};

}


export default useMarvelService;
