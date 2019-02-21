import { Migrations } from '/app/rocketchat-migrations';
import { Settings } from '/app/rocketchat-models';

Migrations.add({
	version: 114,
	up() {
		if (Settings) {
			const setting = Settings.findOne({ _id: 'Message_GlobalSearch' });
			if (setting && setting.value) {
				Settings.upsert(
					{ _id: 'Search.defaultProvider.GlobalSearchEnabled' },
					{ $set: { value: setting.value } }
				);

				Settings.removeById('Message_GlobalSearch');
			}
		}
	},
});
