import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface DataIssuePost {
    comments: number;
    html_url: string;
    created_at: string;
    login: string;
    body: string;
    number: number
    title: string
}

interface PostContextData {
    postData: DataIssuePost[];
    fetchPostData: (query?: string) => Promise<void>
}

interface PostsProviderProps {
    children: ReactNode;
}

export const PostsContext = createContext({} as PostContextData);

export function PostsProvider({ children }: PostsProviderProps) {

    const [postData, setPostData] = useState<DataIssuePost[]>([]);

    async function fetchPostData(query:string = "") {
        const response = await api.get('/search/issues', {
            params: {
              q: `${query}repo:bonieasy/reactjs-github-blog-challenge`,
            }
          })

        setPostData(response.data.items);
    }

    useEffect(() => {
        fetchPostData();
    }, [])
    
    return(
        <PostsContext.Provider value={{ postData, fetchPostData }}>
            { children }
        </PostsContext.Provider>
    )
}