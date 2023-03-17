import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from 'date-fns';
import { Container, Content, PostTitle, TextContent } from "./styles";
import { PostsContext } from "../../contexts/PostContext";


export function PostBox() {
    const { postData } = useContext(PostsContext);
    
    return(
        <Container>
            
                {postData && postData.map(issue => {
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