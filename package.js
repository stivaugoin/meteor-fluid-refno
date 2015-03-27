Package.describe({
	name: 'stivaugoin:fluid-refno',
	version: '0.0.1',
	summary: 'Manage Reference Number',
	git: 'https://github.com/stivaugoin/meteor-fluid-refno.git',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');

	api.use(['mongo-livedata', 'stivaugoin:fluid-counter@0.0.1']);

	api.export('generateRefNo', 'server');
	api.export('setRefNo', 'server');
	api.export('resetRefNo', 'server');

	api.addFiles('refno.js', 'server');
});
