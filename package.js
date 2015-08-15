Package.describe({
	name: 'stivaugoin:fluid-refno',
	version: '1.0.0',
	summary: 'Manage Reference Number',
	git: 'https://github.com/stivaugoin/meteor-fluid-refno.git',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');

	api.use(['mongo-livedata', 'stivaugoin:fluid-counter@1.0.0']);

	api.export('generateRefNo', 'server');
	api.export('setRefNo', 'server');
	api.export('resetRefNo', 'server');

	api.addFiles('refno.js', 'server');
});
