var React = require('react');

var ListingItem = React.createClass({

    render: function() {
        var listing = this.props.listing.data,
            image;

        if (listing.thumbail !== "self") {
            image = <img src={listing.thumbnail} />;
        }

        return (
            <div className="listing">
                {image}
                <p className="title">{listing.title}</p>
            </div>
        );
    }

});

module.exports = ListingItem;