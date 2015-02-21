var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link;

var SubredditItem = React.createClass({
    mixins: [ Router.Navigation ],

    render: function() {
        return (
            <div key={this.props.sub} className="subreddit">
                <Link to="subreddit" params={{subreddit: this.props.sub}}>{this.props.sub}</Link>
            </div>
        );
    }
});

module.exports = SubredditItem;