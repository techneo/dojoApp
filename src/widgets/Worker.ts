import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v } from '@dojo/widget-core/d';
// we will apply a theme mixin to the Worker widget.
// A mixin is not intended to be used on its own, but instead works with a class to add useful functionality.
import { theme, ThemedMixin } from '@dojo/widget-core/mixins/Themed';
import * as css from '../styles/worker.m.css';

const WorkerBase = ThemedMixin(WidgetBase);

// First, apply a decorator to the class to modify the widget’s constructor
// and prepare its instances to work with CSS modules
// decorator to apply css theme
@theme(css)
export default class Worker extends WorkerBase<WorkerProperties> {
	protected render() {
		const {
			firstName = 'firstName',
			lastName = 'lastName'
		} = this.properties;
		console.log(v);
		return v('div', {
				classes: this.theme(css.worker)
			}, [
				v('img', {
					classes: this.theme(css.image),
					src: 'https://dojo.io/tutorials/resources/worker.svg' }),
				v('div', [
					v('strong', {
					classes: this.theme(css.strong) },
					[ `${lastName}, ${firstName}` ])
				])
			]
		);
	}
}
// dd an interface with the custom properties that we need
export interface WorkerProperties {
	firstName?: string;
	lastName?: string;
}
