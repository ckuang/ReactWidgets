var React = require('react');
var Minesweeper = require('../game.js');

var Game = React.createClass({
	getInitialState: function () {
		return {board: new Minesweeper.Board(9, 10)};
	},
	render: function () {
		var tiles = this.state.board.grid.map (function (row, idx) {
			return <li key={idx}>{tile.pos}</li>;
		}.bind(this));
		return (
			<ul>
				{tiles}
			</ul>
		);
	}
});

module.exports = Game;
