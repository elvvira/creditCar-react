import styled from 'styled-components';

const StyledForm = styled.form`
	width: 90%;
	margin-right: auto;
	margin-left: auto;
	position: relative;
	top: 50px;
	text-transform: uppercase;
	font-size: 0.9rem;
	letter-spacing: 2px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
const StyledInput = styled.input`
	height: 45px;
	width: 95%;
	border: 1px solid #dfdee0;
	border-radius: 0.8rem;
	padding-left: 0.8rem;
`;
const InputContainer = styled.div`
	width: 90%;
	display: flex;
	gap: 0.6rem;
`;

const FormField = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
const FormBottom = styled.div`
	display: flex;
`;

const Button = styled.button`
	height: 53px;
	background-color: #21092f;
	border: transparent;
	border-radius: 0.5rem;
	color: white;
	font-size: 1.2rem;
	letter-spacing: 2px;
`;

export {
	StyledForm,
	FormField,
	FormBottom,
	StyledInput,
	InputContainer,
	Button
};
