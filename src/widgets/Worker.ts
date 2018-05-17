import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v } from '@dojo/widget-core/d';

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
