import React from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';

const HeaderSC = styled.header`

	display: flex;
	align-items: center;
	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
	}
	li {
		color: rgb(237, 20, 29);
		margin-left: 40px;
		font-size: 20px;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
`;
const Header = () => <HeaderSC>
	<Logo />
	<nav>
		<ul>
			<li>Departments</li>
			<li>My cart</li>
		</ul>
	</nav>
</HeaderSC>;

export { Header };