import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { ThemedMixin, theme } from '@dojo/widget-core/mixins/Themed';
import * as css from '../styles/workerForm.m.css';
import { v, w } from '@dojo/widget-core/d';
import Button from '@dojo/widgets/button';
import TextInput from '@dojo/widgets/text-input';

export interface WorkerFormData {
	firstName: string;
	lastName: string;
	email: string;
}

export interface WorkerFormProperties {
	formData: Partial<WorkerFormData>;
	onFormInput: (data: Partial<WorkerFormData>) => void;
	onFormSave: () => void;
}

export const WorkerFormBase = ThemedMixin(WidgetBase);

@theme(css)
export default class WorkerForm extends WorkerFormBase<WorkerFormProperties> {

	private _onSubmit(event: Event) {
		event.preventDefault();
	}

	protected render() {
		const {
			formData: { firstName, lastName, email }
		} = this.properties;

		return v('form', {
			classes: this.theme(css.workerForm),
			onsubmit: this._onSubmit
		}, [
				v('fieldset', { classes: this.theme(css.nameField) }, [
					v('legend', { classes: this.theme(css.nameLabel) }, ['Name']),
					w(TextInput, {
						key: 'firstNameInput',
						label: 'First Name',
						labelHidden: true,
						placeholder: 'First name',
						value: firstName,
						required: true,
						onInput: this.onFirstNameInput
					}),
					w(TextInput, {
						key: 'lastNameInput',
						label: 'Last Name',
						labelHidden: true,
						placeholder: 'Last name',
						value: lastName,
						required: true,
						onInput: this.onLastNameInput
					})
				]),
				w(TextInput, {
					label: 'Email address',
					type: 'email',
					value: email,
					required: true,
					onInput: this.onEmailInput
				}),
				w(Button, {}, ['Save'])
			]);
	}
	protected onFirstNameInput(firstName: string) {
		this.properties.onFormInput({ firstName });
	}

	protected onLastNameInput(lastName: string) {
		this.properties.onFormInput({ lastName });
	}

	protected onEmailInput(email: string) {
		this.properties.onFormInput({ email });
	}
}
