import styled from "styled-components";

export const Container = styled.div`
/* top | left and right | bottom */
    margin: 3rem 18rem;
    padding: 0 2rem 0;
    font-weight: 400;
    line-height: 160%;
    font-size: 16px;
    text-align: start;
    
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        margin: 2rem 2rem;        
    }
`;

