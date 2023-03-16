import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../lib/axios";
import { formatDistanceToNow } from 'date-fns';
import { Container, Content, PostTitle, TextContent } from "./styles";

interface DataIssue {
    created_at: string;
    body: string;
    id: number
    title: string
}

export function PostBox() {
    const [issues, setIssues] = useState<DataIssue[]>([]);

    async function fetchUserData() {
     const response = await api.get('/repos/bonieasy/reactjs-github-blog-challenge/issues')
        
         setIssues(response.data);
    }

    useEffect(() => {
        fetchUserData();
    }, [])
    
    return(
        <Container>
            {issues.map(issue => {
                    return(
            <Link to="/post">
                <Content>
                    <PostTitle>
                        <h1>{issue.title}</h1>
                        <span>{formatDistanceToNow(new Date(issue.created_at), {
                            addSuffix: true,
                        })}
                        </span>
                    </PostTitle>
                    <TextContent>
                        <div>{issue.body}</div>
                    </TextContent>
                </Content>
            </Link>
                    )
                })}                   

        </Container>
        
    );
}