/** @jsx React.DOM */

var React = require('react'),
    Reddit = require('./components/Reddit.react');

React.renderComponent(
    <Reddit />,
    document.getElementById("app")
);