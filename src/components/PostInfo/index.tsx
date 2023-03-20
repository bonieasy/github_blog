import { ArrowSquareOut, Buildings, CalendarBlank, CaretLeft, ChatCircle, GithubLogo, Users } from "@phosphor-icons/react";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { DataIssuePost } from "../../contexts/PostContext";
import { Box, Container, Content, GitLink, Icon, IssueTitle, Links } from "./styles";

interface PostHeaderProps {
    postData: DataIssuePost;
}

export function PostInfo({ postData }: PostHeaderProps) {

    return(
        <Container>
               
            <Content>
                <Links>
                    <Link to="/">
                        <CaretLeft size={12} weight="bold" />
                        Back
                    </Link>

                    <GitLink>
                        <a href={postData.html_url} target="_blank" rel="noreferrer">See on Github</a>
                        <ArrowSquareOut size={18} weight="bold" />
                    </GitLink>
                </Links>

                <IssueTitle>
                    {postData.title}
                </IssueTitle>

                <Box>
                    <Icon>
                        <GithubLogo size={18} />
                        <span>{postData.user.login}</span>
                    </Icon>

                    <Icon>
                    <CalendarBlank size={18} />
                        <span>{formatDistanceToNow(new Date(postData.created_at), {
                    addSuffix: true,
                })}</span>
                    </Icon>
                    
                    <Icon>
                    <ChatCircle size={18} />
                        <span>{postData.comments}{' '}comments</span>
                    </Icon>
                    
                </Box>
                
            </Content>
                
            </Container>
    );
}