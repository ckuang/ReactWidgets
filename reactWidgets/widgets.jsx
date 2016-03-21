var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs');
var WeatherClock = require('./weatherClock');
var AutoComplete = require('./autocomplete');

var fakeUsers = ["thechuckmeista", "LJR5102", "hanSolo", "Pikachu"];

var Widgets = React.createClass({
	getInitialState: function() {
		return {tabData: [{title: "Weather Clock", content: <WeatherClock />}, {title: "Month", content: "March"}, {title: "Autcomplete", content: <AutoComplete users={fakeUsers}/>}]};
	},
	render: function() {
		return (
			<div>
				WIDGETS!!!
				<Tabs tabData={this.state.tabData}/>
			</div>
		);
	}
});



document.addEventListener("DOMContentLoaded", function () {
	ReactDOM.render(<Widgets/>, document.getElementById('root'));
});

module.exports = Widgets;
