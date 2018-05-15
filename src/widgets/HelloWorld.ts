import { v } from '@dojo/widget-core/d';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';

export default class HelloWorld extends WidgetBase {
	protected render() {
		return v('H1', [ 'Biz-E-Bodies' ]);
	}
}
