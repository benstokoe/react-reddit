var React = require('react');

var SubredditItem = React.createClass({

    render: function() {
        return (
            <div className="subreddit">
                <a>{this.props.sub}</a>
            </div>
        );
    }
});

module.exports = SubredditItem;