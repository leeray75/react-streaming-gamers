import React, { Component } from 'react';
import ChannelsGrid from '@leeray75/react-streaming-gamers/grids/channels';
import LoadUsers from '@leeray75/react-streaming-gamers/apis/twitch/load-users.decorator';
import FormInputChange from '@leeray75/react-streaming-gamers/common/form-input-change.decorator';

@LoadUsers
@FormInputChange
class SearchChannels extends Component {
    constructor(props) {
        super(props);
        require('./search-channels.scss');
        console.log("[SearchChannels] props:", props);
        this.state = {
            query: props.query,
            live: props.live
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.updateChannels();
    }
    updateChannels() {
        console.log("[SearchChannels] Update Channels:", this.state);
        const { query, live } = this.state;
        if (query.trim().length > 0) {
            const params = {
                query,
                live_only: live,
                first: this.MAX_ITEMS
            }
            this.TwitchApi.searchChannels(params).then(response => {
                this.props.updateChannels(response.data, query, live);
            }).catch(e => {
                console.error("[SearchChannels] api error:", e);
            });
        }
    }

    componentDidUpdate(prevProps,prevState) {
        console.log("[SearchChannels] Updated:", this.props, " : ", prevProps);
        console.log("[SearchChannels] Compare query:",this.props.channels !== prevProps.channels && this.props.query != prevProps.query);
        const { props } = this;
        if (props.channels == null && this.state.query == prevState.query) {
            this.updateChannels();
        } else if (props.channels != null && props.channels !== prevProps.channels && this.props.query != prevProps.query) {
            const user_ids = props.channels.map(channel => {
                return channel.id
            })
            this.loadUsers(user_ids);
        }
    }
    componentWillUnmount() {

    }
    render() {
        let { users, streams } = this.props;
        if(this.state.query.trim() == "") {
            users = [];
            streams = [];
        }
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
                <ChannelsGrid users={users} streams={streams}/>
            </section>
        )
    }

}

export default SearchChannels;