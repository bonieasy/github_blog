import { FormInfos, SearchFormContainer } from "./styles";

export function SearchForm() {
    return(
        <SearchFormContainer>
            <FormInfos>
                <span>Publicacoes</span>
                <span>6 publicacoes</span>
            </FormInfos>
            
            <input placeholder="Buscar conteudo"/>
        </SearchFormContainer>
    );
}