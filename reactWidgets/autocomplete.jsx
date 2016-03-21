var React = require('react');

var AutoComplete = React.createClass({
	getInitialState: function() {
		return {match: []};
	},
	handleInput: function(event) {
		var matches = [];
		var target = event.target.value;
		var fakeUsers = this.props.users.forEach (function (user) {
			if (user.includes(target) && target !== "") {
				matches.push(user);
			}
		});
		this.setState({match: matches});
	},
	render: function () {
		var fakeUsers = this.state.match.map (function (el, idx){
			return <li key={idx}>{el}</li>;
		});
		return (
			<div>
				<input type="text" onChange={this.handleInput} />
				<ul>
					{fakeUsers}
				</ul>
			</div>
		);
	}
});


module.exports = AutoComplete;
