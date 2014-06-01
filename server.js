
// @see https://github.com/chjj/tty.js/
const TTY = require("tty.js");


require("io.pinf.server.www").for(module, __dirname, null, null, function(HELPERS, options) {

	var app = TTY.createServer({
		shell: "bash",
		cwd: "/opt",
		port: process.env.PORT
	});

	return app;
});

