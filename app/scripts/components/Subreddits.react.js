var React = require('react'),
    _ = require('underscore'),
    SubredditItem = require('./SubredditItem.react');

var Subreddit = React.createClass({
    getInitialState: function() {
        return {
            popularSubreddits: {}
        };
    },

    componentDidMount: function() {
        $.getJSON('http://www.reddit.com/subreddits/popular.json', function(subreddits) {
            if (this.isMounted()) {
                this.setState({
                    popularSubreddits: subreddits.data.children
                });
            }
        }.bind(this));
    },

    render: function() {
        var subreddits = [];

        if (!_.isEmpty(this.state.popularSubreddits)) {
            this.state.popularSubreddits.map(function(sub) {
                subreddits.push(<SubredditItem sub={sub.data.display_name} />);
            })
        } else {
            subreddits = 'Loading subreddits...';
        }

        return (
            <div id="subreddits">
                <h4>Top Subreddits</h4>
                { subreddits }
            </div>
        );
    }
});

module.exports = Subreddit;