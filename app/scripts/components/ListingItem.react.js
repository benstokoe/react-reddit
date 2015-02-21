var React = require('react');

var ListingItem = React.createClass({

    render: function() {
        var listing = this.props.listing.data;

        return (
            <div className="listing">
                <p>{listing.title}</p>
            </div>
        );
    }

});

module.exports = ListingItem;