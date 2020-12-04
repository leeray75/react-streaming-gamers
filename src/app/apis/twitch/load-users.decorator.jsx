import TwitchApiDecorator from './twitch-api.decorator';
const Decorator =
    Target => {
        TwitchApiDecorator(Target);
        if (typeof Target.prototype.loadUsers == 'undefined') {
            Target.prototype.loadUsers = function(user_ids = []) {

                const { props } = this;
                const usersParams = {
                    "ids": user_ids
                }
                const streamParams = {
                    user_ids,
                    first: this.MAX_ITEMS
                }
                const users = this.TwitchApi.getUsers(usersParams);
                const streams = this.TwitchApi.getStreams(streamParams);
                const promises = [users, streams];
                return Promise.all(promises).then(responses => {
                    const usersResponse = responses[0];
                    const streamsResponse = responses[1];
                    props.updateUsers(usersResponse.data);
                    props.updateStreams(streamsResponse.data);
                })

            }

        }
        return Target;
    };

export default Decorator;