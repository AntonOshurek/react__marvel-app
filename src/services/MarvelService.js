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

    getAllCharacters = (characters) => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    }

    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
}


export default MarvelService;