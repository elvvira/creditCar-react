import {
	Button,
	FormBottom,
	FormField,
	InputContainer,
	StyledForm,
	StyledInput
} from './styles';

const Form = ({ info, setInfo }) => {
	return (
		<StyledForm onSubmit={e => e.preventDefault()}>
			<FormField>
				<label>Cardholder Name</label>
				<StyledInput
					onChange={e => {
						lengthName(e.target.value, info, setInfo);
					}}
					type='text'
					placeholder='e.g. Jane Appleseed'
				/>
			</FormField>
			<FormField>
				<label>Card Number</label>
				<StyledInput
					onChange={e => {
						lengthNumber(e.target.value, info, setInfo);
					}}
					type='text'
					placeholder='e.g. 1234 5678 9123 0000'
				/>
			</FormField>
			<FormBottom>
				<FormField>
					<label>Exp. Date (MM/YY)</label>
					<InputContainer>
						<StyledInput
							onChange={e => {
								lengthMonth(e.target.value, info, setInfo);
							}}
							type='text'
							placeholder='MM'
						/>
						<StyledInput
							onChange={e => {
								lengthYear(e.target.value, info, setInfo);
							}}
							type='text'
							placeholder='YY'
						/>
					</InputContainer>
				</FormField>
				<FormField>
					<label>CVC</label>
					<StyledInput
						onChange={e => {
							lengthCvc(e.target.value, info, setInfo);
						}}
						type='text'
						name=''
						id=''
						placeholder='e.g. 123'
					/>
				</FormField>
			</FormBottom>
			<Button>Confirm</Button>
		</StyledForm>
	);
};

const lengthNumber = (value, info, setInfo) => {
	let numberCard = value;

	if (value.length === 4) {
		console.log('espacio');

		numberCard = value += ' ';
		console.log(numberCard);
	}

	if (numberCard.length <= 20) {
		setInfo({ ...info, number: numberCard });
	}
};

const lengthName = (value, info, setInfo) => {
	if (value.length < 19) {
		setInfo({ ...info, name: value });
	}
};

const lengthMonth = (value, info, setInfo) => {
	if (value.length <= 2) {
		setInfo({ ...info, month: value });
	}
};
const lengthYear = (value, info, setInfo) => {
	if (value.length <= 2) {
		setInfo({ ...info, year: value });
	}
};
const lengthCvc = (value, info, setInfo) => {
	if (value.length <= 3) {
		setInfo({ ...info, cvc: value });
	}
};
export default Form;
