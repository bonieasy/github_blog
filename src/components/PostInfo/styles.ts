import styled from "styled-components";

export const Container = styled.div`
    /* display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        min-width: 18rem;
        min-height: 20rem;        
    } */
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;

    border-radius: 0.625rem;
    height: 13.250rem;
    background:${props => props.theme.profile};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    padding: 2rem;
    margin-top: -6rem;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
        //min-width: 18rem;
        min-height: 20rem;
        padding:1rem;
        gap: 1rem;
    }
`;

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: ${props => props.theme.blue};
    text-transform: uppercase;

    a {
        color: inherit;
    }

    a:hover :visited :active :link {
        text-decoration: none;
    }
`;

export const GitLink = styled.div`
 
`;

export const IssueTitle = styled.h1`
    /* display: flex;
    justify-content: flex-start; */
    /* width: 100%;
    color: ${props => props.theme.title};
    font-size: 24px;
    font-weight: 700;
    min-width: 54rem; */
`;

export const Box = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
    width: 100%;

    @media (max-width: 768px) {
        display:flex;
        flex-direction: column;
        gap: 0.5rem;
    }
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    gap: 0.535rem;
`;