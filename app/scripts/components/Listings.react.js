var React = require('react'),
    _ = require('underscore'),
    Router = require('react-router'),
    ListingItem = require('./ListingItem.react');

var Listings = React.createClass({
    mixins: [ Router.State ],

    getInitialState: function() {
        return {
            listings: ''
        };
    },

    componentDidMount: function() {
        var url = "http://www.reddit.com";

        if (_.isEmpty(this.getParams().subreddit)) {
            url += '/hot.json';
        } else {
            url += '/r/' + this.getParams().subreddit + '/hot.json';
        }

        $.getJSON(url, function(listing) {
            if (this.isMounted()) {
                this.setState({
                    listings: listing.data.children
                });
            }
        }.bind(this));
    },

    render: function() {
        var listings = [];

        if (!_.isEmpty(this.state.listings)) {
            this.state.listings.map(function(listing) {
                listings.push(<ListingItem listing={listing} />)
            });
        } else {
            listings = 'Loading listing';
        }

        return (
            <div id="listings">
                {listings}
            </div>
        );
    }

});

module.exports = Listings;