import { useContext } from "react";
import { formatDistanceToNow } from 'date-fns';
import { Container, Content, PostTitle, TextContent, LinkStyle } from "./styles";
import { PostsContext } from "../../contexts/PostContext";

export function PostBox() {
const { postData } = useContext(PostsContext);

    
    return(
        <Container>
            {postData?.map(function(item, index) {
                return(
                    <LinkStyle to={`/post/${item.number}`} key={index} >
                        <Content>
                            <PostTitle>
                                <h1>{item.title}</h1>
                                <span>{formatDistanceToNow(new Date(item.created_at), {
                                    addSuffix: true,
                                })}
                                </span>
                            </PostTitle>
                            <TextContent>
                                <div>{item.body.slice(0, 150)}...</div>
                            </TextContent>
                        </Content>
                    </LinkStyle>
                )
            })}
        </Container>
        
    );
}