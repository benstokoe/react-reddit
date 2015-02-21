/** @jsx React.DOM */

var React = require('react'),
    Reddit = require('./components/Reddit.react');

var Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    Route = Router.Route;
    RouteHandler = Router.RouteHandler;

var routes = (
    <Route name="app" path="/" handler={Reddit}>
        <Route name="subreddit" path=":subreddit" handler={Reddit} />
        <DefaultRoute handler={Reddit}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(
        <Handler />,
        document.getElementById("app")
    );
});