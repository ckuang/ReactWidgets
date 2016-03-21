var React = require('react');

var Clock = React.createClass({
	getInitialState: function() {
		return {time: new Date()};
	},
	tick: function () {
		this.setState({time: new Date()});
	},
	componentDidMount: function () {
		this.interval = setInterval(this.tick, 1000);
	},
	componentWillUnmount: function () {
		clearInterval(this.interval);
	},
	render: function () {
		return (
			<div>
				{this.state.time.toString()}
			</div>
		);}

});

module.exports = Clock;
