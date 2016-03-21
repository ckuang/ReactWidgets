var React = require('react');
var Clock = require('./clock');
var Weather = require('./weather');

var WeatherClock = React.createClass({
	render: function() {
		return (
			<div>
				WEATHER CLOCK!
				<Weather />
				<Clock />
			</div>
		);
	}
});

module.exports = WeatherClock;
