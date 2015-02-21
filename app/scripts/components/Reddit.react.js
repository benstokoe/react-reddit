var React = require('react'),
    RedditApi = require('../Reddit'),
    Subreddits = require('./Subreddits.react'),
    Router = require('react-router');

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
                <Subreddits currentSubreddit={this.state.currentSub} />
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