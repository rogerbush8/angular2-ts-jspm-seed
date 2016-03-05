///<reference path="../typings/tsd.d.ts"/>

// import route definitions of all modules
import { coreRouteDefinitions } from './core/routes';
import { aboutRouteDefinitions }  from './about/routes';

export function routeDefinitions()  {

	// get routes of modules
	let coreRoutes	= coreRouteDefinitions();
	let aboutRoutes = aboutRouteDefinitions();

	// combine routes and return
	return coreRoutes.concat(
		aboutRoutes
	);

}