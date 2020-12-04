import TwitchApi from './twitch.api';
import _merge from 'lodash.merge';
const Decorator =
    Target => {
        if (typeof Target.prototype.MAX_ITEMS == 'undefined') {
            Object.defineProperty(Target.prototype, 'MAX_ITEMS', {
                get: function() {
                    return 20;
                }
            })

        }
        if (typeof Target.prototype.TwitchApi == 'undefined') {
            Object.defineProperty(Target.prototype, 'TwitchApi', {
                get: function() {
                    if (this._TwitchApi == null) {
                        const { client_id, access_token } = this.props;
                        this._TwitchApi = new TwitchApi(client_id, access_token);
                    }
                    return this._TwitchApi;
                }
            })

        }
        return Target;
    };

export default Decorator;