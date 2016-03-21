var React = require('react');

var Weather = React.createClass({
	getInitialState: function() {
		return ({weather: []});
	},
	getWeather: function (position) {
		var resp;
		var request = new XMLHttpRequest();
		request.open('GET', "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=645c5d39c7603f17e23fcaffcea1a3c1", true);

		request.onload = function() {
  		if (request.status >= 200 && request.status < 400) {
				var weatherz = JSON.parse(request.responseText);
    		this.setState({weather: [(((parseInt(weatherz.main.temp) - 273)*(9 / 5)) + 32), weatherz.weather[0].description]});
  		} else {
			}
		}.bind(this);

		request.onerror = function() {
		};



	request.send();
	},
	componentDidMount: function () {
		this.getLocation();
	},
	getLocation: function() {
		return (
			navigator.geolocation.getCurrentPosition(function(pos){
				this.getWeather(pos);
			}.bind(this))
		);
	},
	render: function() {
		var weatherStats = this.state.weather.map (function (el, idx) {
			return (
				<li key={idx}>{el}</li>
			);
		});
		return (
				<div>
					WEATHER
					<ul>
						{weatherStats}
					</ul>
				</div>
		);
	}
});

module.exports = Weather;
