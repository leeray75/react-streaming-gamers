import React, { Component } from 'react';

//import Results from './results';
import ChannelsGrid from '@leeray75/react-streaming-gamers/grids/channels';
import LoadUsers from '@leeray75/react-streaming-gamers/apis/twitch/load-users.decorator';

@LoadUsers
class UsersFollows extends Component {
    constructor(props) {
        super(props);
        require('./users-follows.scss');
        console.log("[UsersFollows] props:", props);
    }

    get MAX_ITEMS() {
        return 100;
    }
    getFollows() {
        console.log("[UsersFollows] api:", this.props.api);
        const params = {
            "from_ids": [this.props.user_id],
            "first": this.MAX_ITEMS
        }
        this.TwitchApi.getUsersFollows(params).then(response => {
            this.props.updateFollows(response.data);
        })
    }
    componentDidUpdate(prevProps) {
        const { props } = this;
        console.log("[UsersFollows] Updated:", this.props);
        if (props.user_id != null && props.follows == null) {
            this.getFollows()
        } else if (props.follows != null && props.follows.length > 0 && prevProps.follows == null) {
            const user_ids = props.follows.map(follow => {
                return follow.to_id;
            })
            this.loadUsers(user_ids);
        }

    }
    componentDidMount() {

        if (this.props.user_id != null) {
            this.getFollows()
        }
    }
    render() {
        let { users, streams } = this.props;

        return (
            <section className="users-follows">
                <h3>Get Users Follows</h3>
                <p>Gets information on follow relationships between two Twitch users. 
                This can return information like “who is qotrok following,” “who is following qotrok,” 
                or “is user X following user Y.” Information returned is sorted in order, most recent follow first..</p>
                <ChannelsGrid users={users} streams={streams}/>
            </section>
        )
    }

}
export default UsersFollows;