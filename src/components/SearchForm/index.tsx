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
    const { fetchPostData, postData } = useContext(PostsContext)

    const { register, handleSubmit } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    async function handleSearchIssue(data: SearchFormInputs) {
       await fetchPostData(data.query)
    }

    return(
    
        <SearchFormContainer onSubmit={handleSubmit(handleSearchIssue)}>
            {postData ?
                    <FormInfos>
                        <span>Publications</span>
                        <span>{postData.length}{' '}publications</span>
                    </FormInfos>
                    :
                    <span>No posts found</span>
            }
            
            <input
                type="text"
                placeholder="Search Posts"
                {...register('query')}
            />
        </SearchFormContainer>
    );
}