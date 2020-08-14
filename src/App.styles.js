import styled from 'styled-components';

export const AppContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 75px auto 100px;
    grid-template-areas: "....  header  ...."
                         "player1  board  player2"
                         "....  actions  ....";
    grid-auto-columns: min-content;
`;