
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

						var uri = JSON.parse(self.tagContent).uri;

						return self.setHTM(_htm, "replace").then(function(tag) {

							$("#button-show-terminal", tag).on("click", function() {

								if (!loaded) {
									$('DIV.modal-body', tag).html([
										'<iframe src="http://' + uri + '/"></iframe>'
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
