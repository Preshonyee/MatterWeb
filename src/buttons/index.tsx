import * as React from 'react';
import styled from 'styled-components';

interface buttonDefinition {
	text: string;
	textColor?: string;
	radius?: number;
	size?: 48 | 40 | 32 | 28 | 24 | 20 | 16 | 14 | 12;
	weight?: 'mRegular' | 'mMedium' | 'mBold' | 'mSemi' | 'mExtra';
	buttonWidth?: number;
	center?: boolean;
}

const StyledButtonContainer = styled.div``;

const StyledButton: any = styled.button<buttonDefinition>`
	display: block;
	background-color: #008080;
	width: ${props => props.buttonWidth}%;
	border: none;
	border-radius: ${props => props.radius}rem;
	padding: 0.5rem 1rem;
	color: ${props => props.textColor};
	font-size: ${props => props.size}px;
	font-family: ${props => props.weight};
	margin: ${props => (props.center ? '0 auto' : 'none')};
`;

export const PrimaryButton: React.FC<buttonDefinition> = ({
	text,
	textColor = 'white',
	radius = 0.3,
	size,
	weight,
	buttonWidth,
	center,
}) => {
	return (
		<StyledButtonContainer>
			<StyledButton
				size={size}
				weight={weight}
				radius={radius}
				textColor={textColor}
				buttonWidth={buttonWidth}
				center={center}
			>
				{text}
			</StyledButton>
		</StyledButtonContainer>
	);
};
