
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

						return self.setHTM(_htm, {
							uri: JSON.parse(self.tagContent).uri
						});

						// TODO: Resize height as needed.
					}
				}
			]
		);
	};
});
