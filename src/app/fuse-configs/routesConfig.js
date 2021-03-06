import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import LoginConfig from 'app/main/login/LoginPageConfig';
import UsersConfig from 'app/main/pages/users/UsersConfig';
import TradesConfig from 'app/main/pages/trades/TradesConfig';

const authConfigs = [LoginConfig];
const routeConfigs = [UsersConfig, TradesConfig];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin']),
	...FuseUtils.generateRoutesFromConfigs(authConfigs, null),
	{
		path: '/',
		component: () => <Redirect to="/users" />
	}
];

export default routes;
