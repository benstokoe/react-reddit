var React = require('react'),
    _ = require('underscore'),
    ListingItem = require('./ListingItem.react');

var Listings = React.createClass({

    getInitialState: function() {
        return {
            listings: ''
        };
    },

    componentDidMount: function() {
        $.getJSON('http://www.reddit.com/hot.json', function(listing) {
            if (this.isMounted()) {
                console.log(listing.data.children);
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