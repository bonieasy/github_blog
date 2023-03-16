import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Container } from "./styles";

interface DataIssuePost {
    body: string;
    id: number
}

export function PostContent() {
    const [post, setPost] = useState<DataIssuePost[]>([]);

    async function fetchPostContent() {
     const response = await api.get('/repos/bonieasy/reactjs-github-blog-challenge/issues')
        
     setPost(response.data);
    }

    useEffect(() => {
        fetchPostContent();
    }, [])
    
    return(
        <Container>
            {post.map(issue => {
                return(
                    <p>{issue.body}</p>
                )
            })}
            
        </Container>
        
    );
}