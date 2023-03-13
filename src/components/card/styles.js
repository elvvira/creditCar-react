import styled from 'styled-components';

const CardFrontContainer = styled.div`
	position: absolute;
	top: 120px;
	left: 20px;
	z-index: 10;
`;
const FrontInfo = styled.div`
	width: 87%;
	position: absolute;
	top: 10px;
	left: 19px;
	color: white;
`;
const FrontNumber = styled.p`
	padding-top: 1rem;
	font-size: 1.1rem;
	letter-spacing: 0.2px;
	margin-bottom: 0;
`;
const FrontBottomInfo = styled.div`
	display: flex;
	justify-content: space-between;
`;
const FrontName = styled.p`
	font-size: 0.8rem;
	font-weight: 100;
`;

const CardBackContainer = styled.div`
	position: absolute;
	top: 33px;
	right: 20px;
`;
const BackInfo = styled.div`
	position: absolute;
	top: 68px;
	right: 30px;
	color: white;
`;
const StyledImage = styled.img`
	width: 286px;
	height: 157px;
`;
export {
	CardFrontContainer,
	StyledImage,
	CardBackContainer,
	FrontInfo,
	BackInfo,
	FrontNumber,
	FrontBottomInfo,
	FrontName
};
