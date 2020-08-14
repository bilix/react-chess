import styled from 'styled-components';

export const Button = styled.button`
    padding: 10px 20px;
    color: white;
    background-color: rgb(12, 138, 242);
    border-radius: 5px;
    cursor: pointer;
    border: 0;
    font-size: 20px;
`;

export const ActionsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: actions;
    height: 75px;
`;