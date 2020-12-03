import React, { Component } from 'react';
import TwitchApi from '@leeray75/react-streaming-gamers/apis/twitch-api';
import ChannelsGrid from '@leeray75/react-streaming-gamers/grids/channels';

export default class SearchChannels extends Component {
    constructor(props) {
        super(props);
        require('./search-channels.scss');
        console.log("[SearchChannels] props:", props);
        this.state = {
            query: '',
            live: false
        }

    }
    get api() {
        if (this._api == null) {
            const { client_id, access_token } = this.props;
            this._api = new TwitchApi(client_id, access_token);
        }
        return this._api;
    }
    handleInputChange(e) {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { query, live } = this.state;
        this.props.onSubmit(query,live);
    }

    componentDidUpdate(prevProps) {
        console.log("[SearchChannels] Updated:", this.props);
        const { props } = this;
        
        if (prevProps.query !== props.query || prevProps.live !== props.live) {
            if (props.query.trim() === "") {
                props.updateChannels([]);
            } else {
                const { query, live } = props;
                this.api.searchChannels(query,live).then( response => {
                    props.updateChannels(response.data);
                })

            }
        }
        else if( props.channels.length > 0 && props.users.length == 0) {
            const user_ids = props.channels.map(channel => {
                return channel.id
            })
            this.api.getStreams(user_ids).then(response => {
                props.updateStreams(response.data);

            });
            this.api.getUsers(user_ids).then(response => {
                props.updateUsers(response.data);
            })
        }
    }

    render() {
        return (
            <section className="search-channels">
                <h3>Search Channels</h3>
                <p>Returns a list of channels (users who have streamed within the past 6 months) 
                that match the query via channel name or description either entirely or partially. 
                Results include both live and offline channels. Online channels will have 
                additional metadata (e.g. started_at, tag_ids).</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label><input name="live" type="checkbox" checked={this.state.live} onChange={this.handleInputChange.bind(this)} /><span>LIVE ONLY</span></label>
                    </div>
                    <div>
                        <input name="query" type="text" value={this.state.query} onChange={this.handleInputChange.bind(this)} />
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
                <ChannelsGrid users={this.props.users} streams={this.props.streams}/>
            </section>
        )
    }

}