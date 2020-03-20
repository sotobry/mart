import React from 'react';
import hmartLogoUrl from '../images/hmart-h-logo.png';
import styled from 'styled-components';

const LogoSC = styled.img`
	width: 250px;
	padding: 20px;
`;
const Logo = () => <LogoSC src={hmartLogoUrl} />;

export { Logo };

