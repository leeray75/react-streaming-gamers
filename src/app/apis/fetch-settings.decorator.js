const Decorator =
    Target => {
        if (typeof Target.prototype.FETCH_SETTINGS == 'undefined') {
            Object.defineProperty(Target.prototype, 'FETCH_SETTINGS', {
                get: function() {
                    return {
                        "method": "GET",
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
                }
            })

        }
        return Target;
    };


export default Decorator;