import React, { Component } from 'react';
import TwitchApi from '@leeray75/react-streaming-gamers/apis/twitch-api';
import Results from './results';

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
    async doSearch(query,live) {
        if (this.props.access_token != null) {
            try {
                const response = await this.api.searchChannels(query,live);
                console.log("[SearchChannels] searchChannels:", response);
                return response;
            } catch (e) {
                console.error("[SearchChannels] Error:", e);
                return Promise.reject(e);
            }
        }
    }
    componentDidUpdate(prevProps) {
        console.log("[SearchChannels] Updated:", this.props);

        if (prevProps.query !== this.props.query || prevProps.live !== this.props.live) {
            if (this.props.query.trim() === "") {
                this.props.updateChannels([]);
            } else {
                this.doSearch(this.props.query, this.props.live).then(response => {
                    this.props.updateChannels(response.data);
                });
            }
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
                <Results channels={this.props.channels} />
            </section>
        )
    }

}