///<reference path="../../../typings/tsd.d.ts"/>

export interface IRouteDefinition {
	path		:	string,
	component	:	any,
	as?			:	string
}

export class routeDefinition implements IRouteDefinition {

	path		:	string;
	component	:	any;
	as			:	string;

	constructor(options) {

		this.path 		= ('path' in options)		?	options.path		:	null;
		this.component	= ('component' in options)	?	options.component	:	null;
		this.as	 		= ('as' in options)			?	options.as			:	null;

	}

}