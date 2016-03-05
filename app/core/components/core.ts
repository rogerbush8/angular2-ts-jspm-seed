///<reference path="../../../typings/tsd.d.ts"/>

//import deps
import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';

import {Component, View} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';

@Component({
	selector: 'home'
})
@View({
	template: `
		Welcome on home
	`
})
export class core {

	constructor() {}

}