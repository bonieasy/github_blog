import styled from "styled-components";

export const Container = styled.header`
    background: ${props => props.theme.profile};
    position: relative;
    z-index: 1;
    box-shadow: inset 0 0 5rem #14589C;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 2rem;

    img:nth-child(2) {
        width: 9.250rem;
        height: 6.125rem;
    }

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        height: 15rem;
        width: 100vh;

        img:nth-child(1) {
            display: none;
        }

        img:nth-child(2) {
        width: 9rem;
        height: 6rem;
        
    }

        img:nth-child(3) {
                display: none;
            }
        }

    
`;