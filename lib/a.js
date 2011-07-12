var	sys = require('sys');

module.exports = {
	sayHello: function (text) {
		text = text || 'there.';
		sys.puts('Hello ' + text);
	}
}