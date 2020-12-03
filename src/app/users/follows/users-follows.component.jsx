import React, { Component } from 'react';
import TwitchApi from '@leeray75/react-streaming-gamers/apis/twitch-api';
//import Results from './results';
import ChannelsGrid from '@leeray75/react-streaming-gamers/grids/channels';
export default class UsersFollows extends Component {
    constructor(props) {
        super(props);
        require('./users-follows.scss');
        console.log("[UsersFollows] props:", props);

        this.updated = false;
        this.prevProps = props;

    }
    get api() {
        if (this._api == null) {
            const { client_id, access_token } = this.props;
            this._api = new TwitchApi(client_id, access_token);
        }
        return this._api;
    }

    getFollows() {

        this.api.getUsersFollowsFrom(this.props.user_id).then(response => {
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
            this.api.getStreams(user_ids).then(response => {
                props.updateStreams(response.data);

            });
            this.api.getUsers(user_ids).then(response => {
                props.updateUsers(response.data);
            })
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