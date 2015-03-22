Package.describe({
	name: 'stivaugoin:refno',
	version: '0.0.3',
	summary: 'Manage Reference Number',
	git: 'https://github.com/stivaugoin/meteor-refno.git',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');
	api.addFiles('refno.js', 'client');

	if (api.export) {
		api.export("RefNo");
	}

});
