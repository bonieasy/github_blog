import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from 'date-fns';
import { Container, Content, PostTitle, TextContent } from "./styles";
import { PostsContext } from "../../contexts/PostContext";

export function PostBox() {
const { postData } = useContext(PostsContext);

    
    return(
        <Container>
            
                {postData.map(function(item, index) {
                    return(
                        <Link to={`/post/${item.number}`} key={index} >
                            <Content>
                                <PostTitle>
                                    <h1>{item.title}</h1>
                                    <span>{formatDistanceToNow(new Date(item.created_at), {
                                        addSuffix: true,
                                    })}
                                    </span>
                                </PostTitle>
                                <TextContent>
                                    <div>{item.body}</div>
                                </TextContent>
                            </Content>
                        </Link>

                    )
                })}
                
                                      
            
        </Container>
        
    );
}