class MainApi {
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

    getSavedMovies(token) {
        return fetch(`${this._baseURL}/movies`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
              }
        }).then(this._checkResponse)
    }
    getUserInfo(token) {
        return fetch(`${this._baseURL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
              }
        }).then(this._checkResponse)
    }
    patchUserInfo(userName, userEmail, token) {
        return fetch(`${this._baseURL}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
              },
            body: JSON.stringify({
                name: userName,
                email: userEmail
            })
        }).then(this._checkResponse)
    }

    saveMovie(nameRU, nameEN, country, director, duration, year, description, image, trailer, thumbnail, movieId, token) {
        return fetch(`${this._baseURL}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
              },
            body: JSON.stringify({
                nameRU: nameRU,
                nameEN: nameEN,
                country: country,
                director: director,
                duration: duration,
                year: year,
                description: description,
                image: image,
                trailer: trailer,
                thumbnail: thumbnail,
                movieId: movieId
            })
        }).then(this._checkResponse)
    }

    unsaveMovie(id, token) {
        return fetch(`${this._baseURL}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
              }
        })
    }

    signup(name, email, password) {
        return fetch(`${this._baseURL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        }).then(this._checkResponse)
    }
    signin(email, password) {
        return fetch(`${this._baseURL}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                "password": `${password}`,
                "email": `${email}`
            })
        }).then(this._checkResponse)
    }

    checkToken(token) {
        return fetch(`${this._baseURL}/users/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
              }
        }).then(this._checkResponse)
    }

}
export default new MainApi( {
    baseURL: 'https://api.lilbib.movieexplorer.nomoredomains.sbs',
  });