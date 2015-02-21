var React = require('react'),
    Router = require('react-router'),
    RedditApi = require('../Reddit'),
    Subreddits = require('./Subreddits.react'),
    Listings = require('./Listings.react');

var Reddit = React.createClass({
    mixins: [ Router.State ],

    getInitialState: function() {
        return {
            currentSub: ''
        };
    },

    componentDidMount: function() {
        this.updateCurrentSub();
    },

    componentWillReceiveProps: function() {
        this.updateCurrentSub();
    },

    render: function() {
        return (
            <div>
                <h1>Reddit {this.state.currentSub }</h1>
                <Subreddits />
                <Listings currentSub={this.state.currentSub} key={this.state.currentSub} />
            </div>
        );
    },

    updateCurrentSub: function() {
        this.setState({
            currentSub: this.getParams().subreddit
        });
    }
});

module.exports = Reddit;