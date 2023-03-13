import {
	BackInfo,
	CardBackContainer,
	CardFrontContainer,
	FrontBottomInfo,
	FrontInfo,
	FrontName,
	FrontNumber,
	StyledImage
} from './styles';

const Card = ({ info }) => {
	return (
		<div>
			<CardFrontContainer>
				<StyledImage src='/public/bg-card-front.png' alt='' />
				<FrontInfo>
					<div>
						<img src='/public/card-logo.svg' alt='' />
					</div>
					<FrontNumber>{info.number}</FrontNumber>
					<FrontBottomInfo>
						<FrontName>{info.name}</FrontName>
						<FrontName>
							{info.month}/{info.year}
						</FrontName>
					</FrontBottomInfo>
				</FrontInfo>
			</CardFrontContainer>
			<CardBackContainer>
				<StyledImage src='/public/bg-card-back.png' alt='' />
				<BackInfo>{info.cvc}</BackInfo>
			</CardBackContainer>
		</div>
	);
};
export default Card;
