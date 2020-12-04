import React, { Component } from 'react';
import UsersFollows from '@leeray75/react-streaming-gamers/users/follows'
import LoadCurrentUser from '@leeray75/react-streaming-gamers/apis/twitch/load-current-user.decorator';

@LoadCurrentUser 
class Home extends Component {
    constructor(props) {
        super(props);
        console.log("[Main] props:", props);

    }

    componentDidMount() {
        const { props } = this;
        if(props.access_token != null && props.user == null) {
            this.loadCurrentUser();
        }
    }
    componentDidUpdate(prevProps) {
        console.log("[Main] Updated:",this.props);
        const { props } = this;

    }
    render() {
        const { access_token, client_id } = this.props;
        return (
            <main>
                <UsersFollows access_token={access_token} client_id={client_id} />
            </main>
        )
    }

}

export default Home;