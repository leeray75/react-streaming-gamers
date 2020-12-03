const { encodeURIComponent } = window;
export default class TwitchApi {
    constructor(CLIENT_ID, TOKEN) {
        this.CLIENT_ID = CLIENT_ID;
        this.TOKEN = TOKEN;
    }
    async getStreams(user_ids) {
        const ids = user_ids.map( id => {
            return `user_id=${id}`;
        })
        const url = `https://api.twitch.tv/helix/streams?first=100&${ids.join("&")}`;
        const settings = {
            "headers": {
                'Content-Type': 'application/json',
                'client-id': this.CLIENT_ID,
                'Authorization': `Bearer ${this.TOKEN}`
            },
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'include', // include, *same-origin, omit
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }
        try {
            const response = await fetch(url, settings);
            return response.json()
        }
        catch(e) {
            console.error("[Fetch] Error:",e)
            return Promise.reject(e);
        }
    }

    async getUsers(user_ids = []) {
        const ids = user_ids.map( id => {
            return `id=${id}`;
        })
        const url = `https://api.twitch.tv/helix/users?${ids.join("&")}`;
        const settings = {
            "headers": {
                'Content-Type': 'application/json',
                'client-id': this.CLIENT_ID,
                'Authorization': `Bearer ${this.TOKEN}`
            },
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'include', // include, *same-origin, omit
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }
        try {
            const response = await fetch(url, settings);
            return response.json()
        }
        catch(e) {
            console.error("[Fetch] Error:",e)
            return Promise.reject(e);
        }
    }
    async getUsersFollowsFrom(user_id) {
        const url = `https://api.twitch.tv/helix/users/follows?first=100&from_id=${user_id}`;
        const settings = {
            "headers": {
                'Content-Type': 'application/json',
                'client-id': this.CLIENT_ID,
                'Authorization': `Bearer ${this.TOKEN}`
            },
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'include', // include, *same-origin, omit
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }
        try {
            const response = await fetch(url, settings);
            return response.json()
        }
        catch(e) {
            console.error("[Fetch] Error:",e)
            return Promise.reject(e);
        }
    }
    async getUsersFollowsTo(user_id) {
        const url = `https://api.twitch.tv/helix/users/follows?first=100&to_id=${user_id}`;
        const settings = {
            "headers": {
                'Content-Type': 'application/json',
                'client-id': this.CLIENT_ID,
                'Authorization': `Bearer ${this.TOKEN}`
            },
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'include', // include, *same-origin, omit
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }
        try {
            const response = await fetch(url, settings);
            return response.json()
        }
        catch(e) {
            console.error("[Fetch] Error:",e)
            return Promise.reject(e);
        }
    }
    async searchCategories(query) {
        const url = `https://api.twitch.tv/helix/search/categories?first=100&query=${encodeURIComponent(query)}`;
        const settings = {
            "headers": {
                'Content-Type': 'application/json',
                'client-id': this.CLIENT_ID,
                'Authorization': `Bearer ${this.TOKEN}`
            },
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'include', // include, *same-origin, omit
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }
        try {
            const response = await fetch(url, settings);
            return response.json()
        }
        catch(e) {
            console.error("[Fetch] Error:",e)
            return Promise.reject(e);
        }
    }
    async searchChannels(query,live=false) {
        const url = `https://api.twitch.tv/helix/search/channels?first=100&live_only=${live}&query=${encodeURIComponent(query)}`;
        const settings = {
            "headers": {
            	'Content-Type': 'application/json',
                'client-id': this.CLIENT_ID,
                'Authorization': `Bearer ${this.TOKEN}`
            },
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'include', // include, *same-origin, omit
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }
        try {
            const response = await fetch(url, settings);
            return response.json()
        }
        catch(e) {
        	console.error("[Fetch] Error:",e)
        	return Promise.reject(e);
        }
    }
}