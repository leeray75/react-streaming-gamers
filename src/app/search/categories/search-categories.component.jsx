import React, { Component } from 'react';
import TwitchApi from '@leeray75/react-streaming-gamers/apis/twitch/twitch-api.decorator';
import FormInputChange from '@leeray75/react-streaming-gamers/common/form-input-change.decorator';
import Results from './results';

@TwitchApi
@FormInputChange
export default class SearchCategories extends Component {
    constructor(props) {
        super(props);
        require('./search-categories.scss');
        console.log("[SearchCategories] props:", props);
        this.state = {
            query: ''
        }

    }

    handleSubmit(e) {
        e.preventDefault();
        this.doSearch(this.state.query);
        //this.props.onSubmit(this.state.query);
    }
    doSearch(query) {
        if (query.trim() === "") {
            console.log("[SearchCategories] doSearch Blank:",query);
            this.props.updateCategories([]);
        } else {
            console.log("[SearchCategories] doSearch:",query);
            const params = {
                query,
                first: this.MAX_ITEMS
            }
            this.TwitchApi.searchCategories(query).then(response => {
                this.props.updateCategories(response.data);
            });
        }
    }
    componentDidUpdate(prevProps) {
        console.log("[SearchCategories] Updated:", this.props);

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