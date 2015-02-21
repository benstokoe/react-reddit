var React = require('react'),
    RedditApi = require('../Reddit'),
    Subreddits = require('./Subreddits.react');

var Reddit = React.createClass({
    getInitialState: function() {
        return {
            currentSub: ''
        };
    },

    render: function() {
        return (
            <div>
                <h1>Reddit</h1>
                <Subreddits />
            </div>
        );
    }
});

module.exports = Reddit;