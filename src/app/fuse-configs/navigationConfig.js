import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'categories',
		title: '',
		translate: '',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'main-component',
				title: 'Main',
				translate: 'Главная',
				type: 'item',
				icon: 'local_offer',
				url: '/trades'
			},
			{
				id: 'airports-component',
				title: 'Airports',
				translate: 'Аэропорты',
				type: 'item',
				icon: 'people',
				url: '/users'
			},
			{
				id: 'events-component',
				title: 'Events',
				translate: 'События',
				type: 'item',
				icon: 'local_offer',
				url: '/trades'
			},
			{
				id: 'schemas-component',
				title: 'Schemas',
				translate: 'Схемы',
				type: 'item',
				icon: 'local_offer',
				url: '/trades'
			},
			{
				id: 'content-component',
				title: 'Content',
				translate: 'Контент',
				type: 'item',
				icon: 'local_offer',
				url: '/trades'
			},
			{
				id: 'companies-component',
				title: 'Companies',
				translate: 'Компании',
				type: 'item',
				icon: 'local_offer',
				url: '/trades'
			},
			{
				id: 'airlanes-component',
				title: 'Airlanes',
				translate: 'Авиакомпании',
				type: 'item',
				icon: 'local_offer',
				url: '/trades'
			},
			{
				id: 'users-component',
				title: 'Users',
				translate: 'Пользователи',
				type: 'item',
				icon: 'local_offer',
				url: '/trades'
			},
			{
				id: 'logs-component',
				title: 'Logs',
				translate: 'Логи',
				type: 'item',
				icon: 'local_offer',
				url: '/trades'
			}
		]
	}
];

export default navigationConfig;
