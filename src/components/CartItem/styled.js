import styled from 'styled-components';

const StyledCartItem = styled.li`
	display: grid;
	grid-auto-rows: min-content;
	grid-template-areas:
		'image name name name'
		'image price price price'
		'image plus-counter quantity minus-counter';
	grid-template-columns: 1.5fr 1fr 1fr 1fr;
	align-items: center;
	width: 97%;
	margin: 0.35rem;
	padding: 0.5rem;
	border-radius: 10px;
	box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
	text-align: center;
	img {
		border-radius: 10px;
	}
`;

export default StyledCartItem;
