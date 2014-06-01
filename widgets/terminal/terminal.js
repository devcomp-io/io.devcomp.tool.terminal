
define(function() {

	return function() {
		var self = this;

		return self.hook(
			{
				"htm": "./" + self.widget.id + ".htm"
			},
			{},
			[
				{
					resources: [ "htm" ],
					handler: function(_htm) {

						var loaded = false;

						return self.setHTM(_htm, "replace").then(function(tag) {

							$("#button-show-terminal", tag).on("click", function() {

								if (!loaded) {
									$('DIV.modal-body', tag).html([
										'<iframe src="http://io-devcomp-tool-terminal.devcomp-i80fde72-2.vm.cadorn.github.pinf.me:8013/"></iframe>'
									].join(""));
									loaded = true;
								}

								$("#modal-terminal", tag).modal('show');
							});
						});
					}
				}
			]
		);
	};
});
