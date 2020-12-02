import React, { Component } from 'react';
import TwitchApi from '@leeray75/react-streaming-gamers/apis/twitch-api';
import Results from './results';

export default class SearchCategories extends Component {
    constructor(props) {
        super(props);
        require('./search-categories.scss');
        console.log("[SearchCategories] props:", props);
        this.state = {
            query: ''
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
        this.props.onSubmit(this.state.query);
    }
    async doSearch(query) {
        if (this.props.access_token != null) {
            try {
                const response = await this.api.searchCategories(query);
                console.log("[SearchCategories] searchChannels:", response);
                return response;
            } catch (e) {
                console.error("[SearchCategories] Error:", e);
                return Promise.reject(e);
            }
        }
    }
    componentDidUpdate(prevProps) {
        console.log("[SearchCategories] Updated:", this.props);

        if (prevProps.query != this.props.query) {
            if (this.props.query.trim() === "") {
                this.props.updateCategories([]);
            } else {
                this.doSearch(this.props.query).then(response => {
                    this.props.updateCategories(response.data);
                });
            }
        }
    }

    render() {
        return (
            <section className="search-categories">
                <h3>Search Categories</h3>
                <p>Returns a list of games or categories that match the query via name either entirely or partially.</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <input name="query" type="text" value={this.state.query} onChange={this.handleInputChange.bind(this)} />
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
                <Results categories={this.props.categories} />
            </section>
        )
    }

}