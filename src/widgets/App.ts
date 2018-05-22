import { WidgetBase } from '@dojo/widget-core/WidgetBase';

// expose public interface of widgets
import { v, w } from '@dojo/widget-core/d';
// v and w are functions to render VDOM nodes.
// untimately generating DNode s. ( base type of all VDOM nodes)

import Banner from './Banner';
import WorkerContainer from './WorkerContainer';
import { WorkerProperties } from './Worker';
import WorkerForm from './workerForm';


// export followed by default followed by class is ES6 standard
export default class App extends WidgetBase {
	private _workerData: WorkerProperties[] = [
		{
			firstName: 'Tim',
			lastName: 'Jones',
			email: 'tim.jones@bizecorp.org',
			tasks: [
					'6267 - Untangle paperclips',
					'4384 - Shred documents',
					'9663 - Digitize 1985 archive'
			]
		},
		{
			firstName: 'Alicia',
			lastName: 'Fitzgerald'
		},
		{
			firstName: 'Hans',
			lastName: 'Mueller'
		},
		{
			firstName: 'John',
			lastName: 'Doe',
			email: 'john.doe@acme.com'
		}
	];
	protected render() {
	// To render the Banner as a child of the div
		return v('div' , [	w(Banner, { }),
							w(WorkerForm, {
							}),
							w(WorkerContainer, {
								workerData: this._workerData
							})
						]);
	}
}

export interface WidgetProperties {
	key?: string;
}
