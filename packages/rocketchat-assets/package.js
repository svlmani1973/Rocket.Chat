Package.describe({
	name: 'rocketchat:assets',
	version: '0.0.1',
	summary: '',
	git: '',
});

Package.onUse(function(api) {
	api.use([
		'ecmascript',
		'webapp',
		'rocketchat:file',
		'rocketchat:authorization',
		'rocketchat:models',
		'rocketchat:settings',
		'rocketchat:utils',
		'webapp-hashing',
	]);

	api.mainModule('server/index.js', 'server');
});
