import { useContext, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { PostsContext } from "../../contexts/PostContext"
import { Container, Content } from "./styles";

export function PostContent() {
    const { postData } = useContext(PostsContext);
    
    return(
        <Container>
            {postData.map(issue => {
                return(
                    <Content key={issue.number}>
                        <ReactMarkdown children={issue.body} />
                    </Content>
                )
            })}
        </Container>
        
    );
}