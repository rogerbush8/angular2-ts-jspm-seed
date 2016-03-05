///<reference path="../typings/tsd.d.ts"/>


//import deps
import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';

import {Component, View, bootstrap, bind} from 'angular2/angular2';
import {ROUTER_BINDINGS, RouterOutlet, RouteConfig, RouterLink} from 'angular2/router'
import {LocationStrategy, HashLocationStrategy} from 'angular2/router'

import { routeDefinitions } from './routes';

@Component({
	selector: 'app'
})
@View({
	templateUrl: './app/core/templates/layout.html',
	directives: [RouterOutlet, RouterLink]
})
@RouteConfig(
	routeDefinitions()
)
class AppComponent {

}

bootstrap(AppComponent, [
	ROUTER_BINDINGS,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);
