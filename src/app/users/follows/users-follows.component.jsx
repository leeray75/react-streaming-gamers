import React, { Component } from 'react';
import TwitchApi from '@leeray75/react-streaming-gamers/apis/twitch-api';
import Results from './results';

export default class UsersFollows extends Component {
    constructor(props) {
        super(props);
        require('./users-follows.scss');
        console.log("[UsersFollows] props:", props);

        this.updated = false;

    }
    get api() {
        if (this._api == null) {
            const { client_id, access_token } = this.props;
            this._api = new TwitchApi(client_id, access_token);
        }
        return this._api;
    }

    getFollows() {
        if (this.upated === true) return;
        this.updated = true;
        this.api.getUsersFollowsFrom(this.props.user_id).then(response => {
            console.log("[UsersFollows] getFollows:", response.data);
            this.props.updateFollows(response.data);
        })
    }
    componentDidUpdate(prevProps) {
        const { props } = this;
        console.log("[UsersFollows] Updated:", this.props);
        if (props.user_id != null && props.follows.length === 0) {
            this.getFollows()
        } else if (props.follows.length > 0 && props.follows.length != prevProps.follows.length) {
            const user_ids = props.follows.map(follow => {
                return follow.to_id;
            })
            this.api.getStreams(user_ids).then(response => {
                props.updateStreams(response.data);

            });
        }
    }
    componentDidMount() {
        if (this.props.user_id != null && this.props.follows.length === 0) {
            this.getFollows()
        }
    }
    render() {
        return (
            <section className="users-follows">
                <h3>Get Users Follows</h3>
                <p>Gets information on follow relationships between two Twitch users. 
                This can return information like “who is qotrok following,” “who is following qotrok,” 
                or “is user X following user Y.” Information returned is sorted in order, most recent follow first..</p>

                <Results follows={this.props.follows} streams={this.props.streams}/>
            </section>
        )
    }

}