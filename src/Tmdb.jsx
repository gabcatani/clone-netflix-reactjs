const API_KEY = '7bd58be38f5b488985a52b78282e3e65';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFeatch = async (endpoint) => {
    const req = await fetch (`${API_BASE}${endpoint}`);
    const json = await req.json()
    return json
}

// Requests API - Retorno JSON Filmes

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFeatch(`/discover/tv?with_networks=213&laguange=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFeatch(`/treading/all/week?laguange=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'topratead',
                title: 'Em Alta',
                items: await basicFeatch(`/movie/top_rated?laguange=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFeatch(`/discover/movie?with_genres=28?laguange=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFeatch(`/discover/movie?with_genres=35?laguange=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: await basicFeatch(`/discover/movie?with_genres=27?laguange=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFeatch(`/discover/movie?with_genres=10749?laguange=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFeatch(`/discover/movie?with_genres=99?laguange=pt-BR&api_key=${API_KEY}`)
            },
        ];
    },
    
    getMovieInfo: async (movieId, type) => {
        let info = {};

            if(movieId) {
                switch(type) {
                    case 'movie':
                        info = await basicFeatch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                    case 'tv':
                        info = await basicFeatch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                    default:
                        info = null;
                    break;
                }
            }

        return info;
    }
}