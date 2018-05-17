import { WidgetBase } from '@dojo/widget-core/WidgetBase';

import Worker from './Worker';
// expose public interface of widgets

import { v, w } from '@dojo/widget-core/d';
// v and w are functions to render VDOM nodes.
// untimately generating DNode s. ( base type of all VDOM nodes)

import Banner from './Banner';

// export followed by default followed by class is ES6 standard
export default class App extends WidgetBase {
	protected render() {
	// To render the Banner as a child of the div
		return v('div' , [	w(Banner, { }),
							w(Worker, { firstName: 'Ranga' , lastName: 'Rajan' })
						]);
	}
}

export interface WidgetProperties {
	key?: string;
}
