import { useContext, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { PostsContext } from "../../contexts/PostContext"
import { Container } from "./styles";

export function PostContent() {
    const { postData } = useContext(PostsContext);
    
    return(
        <Container>
            {postData && postData.map(issue => {
                return(
                    <ReactMarkdown children={issue.body} />
                )
            })}
        </Container>
        
    );
}