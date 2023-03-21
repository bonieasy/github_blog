import styled from "styled-components";

export const Container = styled.div`
    margin: 3rem 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;

`;

export const Content = styled.div`
    background: ${props => props.theme.post};
    border-radius: 10px;
    padding: 2rem;
    max-width: 26rem;
    min-height: 16.25rem;

    span {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%; 
        color: ${props => props.theme.text};
    }
`;

export const PostTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    padding-bottom: 1rem;

    h1 {
        font-size: 20px;
        color: ${props => props.theme.title};
    }

    span {
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
        color: ${props => props.theme.span};
    }
`;
export const TextContent = styled.div`
    width: 100%;
    height: 100%;

div {
    overflow: hidden;
    //white-space: nowrap;
    text-overflow: ellipsis;
    color: ${props => props.theme.span};
}
    
`;