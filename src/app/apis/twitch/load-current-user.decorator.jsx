import TwitchApiDecorator from './twitch-api.decorator';
const Decorator =
    Target => {
        TwitchApiDecorator(Target);
        if (typeof Target.prototype.loadCurrentUser == 'undefined') {
            Target.prototype.loadCurrentUser = function() {
                return this.TwitchApi.getUsers().then(response => {
                    this.props.updateUser(response.data[0]);
                })
            }

        }
        return Target;
    };

export default Decorator;