import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v } from '@dojo/widget-core/d';
// we will apply a theme mixin to the Worker widget. 
// A mixin is not intended to be used on its own, but instead works with a class to add useful functionality.
import { theme, ThemedMixin } from '@dojo/widget-core/mixins/Themed';
import * as css from '../styles/worker.m.css';


// First, apply a decorator to the class to modify the widget’s constructor 
// and prepare its instances to work with CSS modules

export default class Worker extends WidgetBase<WorkerProperties> {
	protected render() {
		const {
			firstName = 'Surendrakumar' ,
			lastName = 'Paulraj'
		} = this.properties;

		// no w as it has no  child
		return v('div' , [
			v('img', { src: 'https://dojo.io/tutorials/resources/worker.svg' }),
			v('div', [
				v('strong', [ `${firstName}, ${lastName}` ])
		])
		]);
	}
}
// dd an interface with the custom properties that we need
export interface WorkerProperties {
	firstName?: string;
	lastName?: string;
}
