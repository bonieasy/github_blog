import { useForm } from "react-hook-form";
import { FormInfos, SearchFormContainer } from "./styles";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
    const { register, handleSubmit } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    function handleSearchIssue(data: SearchFormInputs) {
        console.log(data);
    }

    return(
    
        <SearchFormContainer onSubmit={handleSubmit(handleSearchIssue)}>
            <FormInfos>
                <span>Publicacoes</span>
                <span>6 publicacoes</span>
            </FormInfos>
            
            <input
                type="text"
                placeholder="Buscar conteudo"
                {...register('query')}
            />
        </SearchFormContainer>
    );
}