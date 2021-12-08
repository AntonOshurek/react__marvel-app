class MarvelService {

  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=5af7a0d601852abb88e6ece45814a55f';

  getResource = async (url) => {
    let res = await fetch(url);

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }

  getAllCharacters = async () => {
    const resultat = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    return resultat.data.results.map(this._transformCharacter);
  }

  getCharacter = async (id) => {
    const resultat = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    return this._transformCharacter(resultat.data.results[0]);
  }

  _transformCharacter = (character) => {
    return {
      name: character.name,
      description: character.description,
      thumbnails: character.thumbnail.path + '.' + character.thumbnail.extension,
      homepage: character.urls[0].url,
      wiki: character.urls[1].url
    }
  }

}


export default MarvelService;
