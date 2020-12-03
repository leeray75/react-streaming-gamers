import React, { Component } from 'react';
import Authentication from '@leeray75/react-streaming-gamers/authentication'
import SearchChannels from '@leeray75/react-streaming-gamers/search/channels'
import SearchCategories from '@leeray75/react-streaming-gamers/search/categories'
import UsersFollows from '@leeray75/react-streaming-gamers/users/follows'
import TwitchApi from '@leeray75/react-streaming-gamers/apis/twitch-api';
class Main extends Component {
    constructor(props) {
        super(props);
        console.log("[Main] props:", props);

    }
    get api() {
        if (this._api == null) {
            const { client_id, access_token } = this.props;
            this._api = new TwitchApi(client_id, access_token);
        }
        return this._api;
    }

    componentDidMount() {
        const { props } = this;
        if(props.access_token != null && props.user == null) {
            this.api.getUsers().then( response => {
                this.props.updateUser(response.data[0]);
            })
        }
    }
    componentDidUpdate(prevProps) {
        console.log("[Main] Updated:",this.props);
        const { props } = this;

    }
    render() {
        const { props } = this;
        if (props.access_token != null) {
        	const { access_token, client_id } = props;
            return (
                <main>
				<h3>CONGRATULATIONS YOU ARE LOGGED IN</h3>

				<hr />
				<SearchCategories access_token={access_token} client_id={client_id} />
                <hr />
                <SearchChannels access_token={access_token} client_id={client_id} />
                <hr />
                <UsersFollows access_token={access_token} client_id={client_id} />
			</main>
            )
        } else {
            return (
                <main>
				<Authentication />
			</main>
            )
        }
    }

}

export default Main;