import { useForm } from "react-hook-form";
import { FormInfos, SearchFormContainer } from "./styles";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from "react";
import { PostsContext } from "../../contexts/PostContext";

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
    const { fetchPostData } = useContext(PostsContext)

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    async function handleSearchIssue(data: SearchFormInputs) {
       await fetchPostData(data.query)
    }

    return(
    
        <SearchFormContainer onSubmit={handleSubmit(handleSearchIssue)}>
            <FormInfos>
                <span>Publicacoes</span>
                <span>6 publicacoes</span>
            </FormInfos>
            
            <input
                type="text"
                placeholder="Search content"
                {...register('query')}
            />
        </SearchFormContainer>
    );
}