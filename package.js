Package.describe({
	name: 'stivaugoin:refno',
	version: '0.0.5',
	summary: 'Manage Reference Number',
	git: 'https://github.com/stivaugoin/meteor-refno.git',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');
	api.use(['mongo-livedata']);
	api.addFiles('refno.js');
	if (api.export) {
		api.export('generateRefNo');
		api.export('resetRefNo');
	}
});
