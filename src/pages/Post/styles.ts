import styled from "styled-components";

export const PostPage = styled.div``;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    border-radius: 0.625rem;
    //width: 54rem;
    margin: 0 21rem;
    height: 13.250rem;
    background:${props => props.theme.profile};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    padding: 2rem;
    margin-top: -6rem;
    position: relative;
    z-index: 2;
`;

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: ${props => props.theme.blue};

    a {
        color: inherit;
    }

    a:hover :visited :active :link {
        text-decoration: none;
    }
`;

export const GitLink = styled.div`
    

    
`;


export const IssueTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    color: ${props => props.theme.title};
    font-size: 24px;
    font-weight: 700;
    min-width: 54rem;
`;

export const Box = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
    width: 100%;
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    gap: 0.535rem;
`;