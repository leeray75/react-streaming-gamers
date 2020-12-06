import React, { Component } from 'react';
import SearchChannels from '@leeray75/react-streaming-gamers/search/channels'
import SearchCategories from '@leeray75/react-streaming-gamers/search/categories'
import LoadCurrentUser from '@leeray75/react-streaming-gamers/apis/twitch/load-current-user.decorator';

@LoadCurrentUser 
class SearchPage extends Component {
    constructor(props) {
        super(props);
        console.log("[SearchPage] props:", props);

    }

    componentDidMount() {
        const { props } = this;
        if(props.access_token != null && props.user == null) {
            this.TwitchApi.getUsers().then( response => {
                this.props.updateUser(response.data[0]);
            })
        }
    }
    componentDidUpdate(prevProps) {
        console.log("[SearchPage] Updated:",this.props);
        const { props } = this;

    }
    render() {
        const { access_token, client_id } = this.props;
        return (
            <main>
                <SearchChannels access_token={access_token} client_id={client_id} />
                <hr />
                <SearchCategories access_token={access_token} client_id={client_id} />
            </main>
        )
    }

}

export default SearchPage;