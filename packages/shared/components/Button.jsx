import React from "react";
import styled from 'styled-components';

const StyledBtn = styled.button`
    background-color: greenyellow;
`;
const Button = () => {
    return <StyledBtn>This is a button from shared</StyledBtn>
}

export default Button;