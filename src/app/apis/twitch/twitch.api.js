import FetchSettings from '@leeray75/react-streaming-gamers/apis/fetch-settings.decorator';
const { encodeURIComponent, URL, URLSearchParams } = window;

@FetchSettings
class TwitchApi {
    constructor(CLIENT_ID, TOKEN) {
        this.CLIENT_ID = CLIENT_ID;
        this.TOKEN = TOKEN;
    }

    // https://dev.twitch.tv/docs/api/reference#get-streams
    async getStreams(params = {}) {
        const {FETCH_SETTINGS} = this;
        let url = new URL(TwitchApi.EndPoints.GET_STREAMS);
        const keys = Object.keys(params);
        let searchParams = [];
        keys.forEach(key => {
            switch (key) {
                case 'game_ids':
                    const game_ids = params[key];
                    game_ids.forEach(id => {
                        searchParams.push(['game_id', id]);

                    })
                    break;
                case 'user_ids':
                    const user_ids = params[key];
                    user_ids.forEach(id => {
                        searchParams.push(['user_id', id]);
                    })
                    break;
                case 'user_logins':
                    const user_logins = params[key];
                    user_logins.forEach(login => {
                        searchParams.push(['user_login', login]);
                    })
                    break;
                case 'after':
                case 'before':
                case 'first':
                case 'langauge':
                    const value = params[key];
                    searchParams.push([key, value]);
                    break;
                default:
            }

        })
        url.search = new URLSearchParams(searchParams).toString()

        try {
            const response = await fetch(url, FETCH_SETTINGS);
            return response.json()
        } catch (e) {
            console.error("[Fetch] Error:", e)
            return Promise.reject(e);
        }
    }
    //https://dev.twitch.tv/docs/api/reference#get-users
    async getUsers(params={}) {
        const {FETCH_SETTINGS} = this;
        let url = new URL(TwitchApi.EndPoints.GET_USERS);
        const keys = Object.keys(params);
        let searchParams = [];
        keys.forEach(key => {
            switch (key) {
                case 'ids':
                    const ids = params[key];
                    ids.forEach(id => {
                        searchParams.push(['id', id]);

                    })
                    break;
                case 'logins':
                    const logins = params[key];
                    logins.forEach(login => {
                        searchParams.push(['login', login]);
                    })
                    break;
                default:
            }

        })
        url.search = new URLSearchParams(searchParams).toString()

        try {
            const response = await fetch(url, FETCH_SETTINGS);
            return response.json()
        } catch (e) {
            console.error("[Fetch] Error:", e)
            return Promise.reject(e);
        }
    }
    // https://dev.twitch.tv/docs/api/reference#get-users-follows
    async getUsersFollows(params={}) {
        
        const {FETCH_SETTINGS} = this;
        let url = new URL(TwitchApi.EndPoints.GET_USERS_FOLLOWS);
        const keys = Object.keys(params);
        let searchParams = [];
        keys.forEach(key => {
            switch (key) {
                case 'to_ids':
                    const to_ids = params[key];
                    to_ids.forEach(id => {
                        searchParams.push(['to_id', id]);

                    })
                    break;
                case 'from_ids':
                    const from_ids = params[key];
                    from_ids.forEach(id => {
                        searchParams.push(['from_id', id]);
                    })
                    break;
                case 'after':
                case 'first':
                    const value = params[key];
                    searchParams.push([key, value]);
                    break;
                default:
            }

        })
        url.search = new URLSearchParams(searchParams).toString()

        try {
            const response = await fetch(url, FETCH_SETTINGS);
            return response.json()
        } catch (e) {
            console.error("[Fetch] Error:", e)
            return Promise.reject(e);
        }
    }
    
    async searchCategories(query) {
        const {FETCH_SETTINGS} = this;
        let url = new URL(TwitchApi.EndPoints.SEARCH_CATEGORIES);
        const keys = Object.keys(params);
        let searchParams = [];
        keys.forEach(key => {
            switch (key) {
                case 'query':
                case 'after':
                case 'first':
                    const value = params[key];
                    searchParams.push([key, value]);
                    break;
                default:
            }

        })
        url.search = new URLSearchParams(searchParams).toString()
        try {
            const response = await fetch(url, FETCH_SETTINGS);
            return response.json()
        } catch (e) {
            console.error("[Fetch] Error:", e)
            return Promise.reject(e);
        }
    }
    async searchChannels(params={}) {
        const {FETCH_SETTINGS} = this;
        let url = new URL(TwitchApi.EndPoints.SEARCH_CHANNELS);
        const keys = Object.keys(params);
        let searchParams = [];
        let value = "";
        keys.forEach(key => {
            switch (key) {
                case 'live_only':
                case 'query':
                case 'after':
                case 'first':
                    value = params[key];
                    searchParams.push([key, value]);
                    break;
                default:
            }

        })
        url.search = new URLSearchParams(searchParams).toString()
        try {
            const response = await fetch(url, FETCH_SETTINGS);
            return response.json()
        } catch (e) {
            console.error("[Fetch] Error:", e)
            return Promise.reject(e);
        }
    }
    static get EndPoints() {
        return require('./api.endpoints');
    }
}
export default TwitchApi;