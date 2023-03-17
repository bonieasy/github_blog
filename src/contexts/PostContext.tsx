import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface DataIssuePost {
    comments: number;
    html_url: string;
    created_at: string;
    login: string;
    body: string;
    id: number
    title: string
}

interface PostContextData {
    postData: DataIssuePost[];
}

interface PostsProviderProps {
    children: ReactNode;
}

export const PostsContext = createContext({} as PostContextData);

export function PostsProvider({ children }: PostsProviderProps) {

    const [postData, setPostData] = useState<DataIssuePost[]>([]);

    async function fetchPostData() {
     const response = await api.get('/repos/bonieasy/reactjs-github-blog-challenge/issues')
        
     setPostData(response.data);
    }

    useEffect(() => {
        fetchPostData();
    }, [])
    
    return(
        <PostsContext.Provider value={{ postData }}>
            { children }
        </PostsContext.Provider>
    )
}