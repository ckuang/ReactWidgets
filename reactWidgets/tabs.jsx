var React = require('react');

var Tabs = React.createClass({
	getInitialState: function() {
		return {selected: 2};
	},
	handleClick: function(idx) {
		this.setState({selected: idx});
	},
	render: function() {
		var tabz = this.props.tabData.map(function(el, idx) {
			if (idx === this.state.selected) {
				return <h1 onClick={this.handleClick.bind(this, idx)} key={idx}><strong>{el.title}</strong></h1>;
			} else {
				return <h2 onClick={this.handleClick.bind(this, idx)}key={idx}>{el.title}</h2>;
			}
		}.bind(this));

		var content = this.props.tabData[this.state.selected].content;

		return (
			<div>
				<ul>
					{tabz}
				</ul>
				<article>{content}</article>

			</div>
		);
	}
});


module.exports = Tabs;
