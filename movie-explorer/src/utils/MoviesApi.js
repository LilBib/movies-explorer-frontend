class MoviesApi {
    constructor(options) {
        this._baseURL = options.baseURL;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        else {
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        }
    }

    getInitialCards() {
        return fetch(`${this._baseURL}`, {
            headers: {
                'Content-Type': 'application/json',
              }
        }).then(this._checkResponse)
    }
}
export default new MoviesApi( {
    baseURL: 'https://api.nomoreparties.co/beatfilm-movies',
});