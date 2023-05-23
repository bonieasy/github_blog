import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    border-radius: 0.625rem;
    //min-width: 54rem;
    //margin: 0 18rem;
    min-height: 13.250rem;
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

export const Avatar = styled.img`
    border-radius: 8px;
    width: 9.250rem;
    height: 9.250rem;

    @media (max-width: 768px) {
        width: 8rem;
        height: 8rem;
        
    }
`;

export const NameTitle = styled.h1`

`;

export const InfoBio = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Bio = styled.span`
width: 100%;
`;

export const BoxInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
    gap: 1.5rem;

    @media (max-width: 768px) {
        display:flex;
        flex-direction: column;
        gap: 0.5rem;
    }
`;

export const HeaderProfile = styled.header`
    display: flex;
    justify-content: space-between;
`;

export const GitLink = styled.div`
    display: flex;
    gap: 0.5rem;
    text-transform: uppercase;
    color: ${props => props.theme.blue};
    font-size: 12px;

    a {
        color: inherit;
    }

    a:hover :visited :active :link {
        text-decoration: none;
    }
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    gap: 0.535rem;
`;