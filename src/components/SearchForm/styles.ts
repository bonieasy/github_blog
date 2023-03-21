import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 0.75rem;
    margin-top: 4.5rem;
    min-width: 54rem;
    
    input {
        height: 3.125rem;
        background: ${props => props.theme.input};
        color: ${props => props.theme.label};
        border: 0;
        border: 1px solid ${props => props.theme.border};
        border-radius: 6px;
        padding: 0.75rem 1rem;
    }
`;
export const FormInfos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;