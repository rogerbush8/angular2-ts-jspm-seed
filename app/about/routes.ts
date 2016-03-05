///<reference path="../../typings/tsd.d.ts"/>

import { routeDefinition } from '../core/interfaces/IRouteDefinition'
import { about } from './components/about';

export function aboutRouteDefinitions() {

	// define about routes
	return [

		// we use routeDefinition class to avoid typescript errors in
		// app/routes.ts because of not matching component types
		new routeDefinition({
				path		: '/about/:id',
				component	: about,
				as			: 'about'
			}
		)

		// other definitions...

	];

}