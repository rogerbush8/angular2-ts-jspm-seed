///<reference path="../../typings/tsd.d.ts"/>

import { routeDefinition } from './interfaces/IRouteDefinition'
import { core } from './components/core';

export function coreRouteDefinitions() {

	// define core routes
	return [

		// we use routeDefinition class to avoid typescript errors in
		// app/routes.ts because of not matching component types
		new routeDefinition({
				path		: '/',
				component	: core,
				as			: 'home'
			}
		)

		// other definitions...

	];

}