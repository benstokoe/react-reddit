var React = require('react');

var ListingItem = React.createClass({

    render: function() {
        var listing = this.props.listing.data,
            image;

        if (listing.thumbail !== "self") {
            image = <img src={listing.thumbnail} />;
        }

        var link = "http://reddit.com" + listing.permalink;

        return (
            <div className="listing">
                {image}
                <a href={link} className="title">{listing.title}</a>
            </div>
        );
    }

});

module.exports = ListingItem;
