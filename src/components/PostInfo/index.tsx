import { ArrowSquareOut, Buildings, CalendarBlank, CaretLeft, ChatCircle, GithubLogo, Users } from "@phosphor-icons/react";
import { formatDistanceToNow } from "date-fns";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { PostsContext, PostsProvider } from "../../contexts/PostContext";
import { Box, Container, Content, GitLink, Icon, IssueTitle, Links } from "./styles";

export function PostInfo() {
    const { postData } = useContext(PostsContext);

    return(
        <Container>
            <PostsProvider>
            
                {postData && postData.map(issue => {
                    return(
                        <Content>
                            <Links>
                                <Link to="/">
                                    <CaretLeft size={12} weight="bold" />
                                    Back
                                </Link>

                                <GitLink>
                                    <a href={issue.html_url}>See on Github</a>
                                    <ArrowSquareOut size={12} weight="bold" />
                                </GitLink>
                            </Links>

                            <IssueTitle>
                                {issue.title}
                            </IssueTitle>

                            <Box>
                                <Icon>
                                    <GithubLogo size={18} />
                                    <span>{issue.user.login}</span>
                                </Icon>

                                <Icon>
                                <CalendarBlank size={18} />
                                    <span>{formatDistanceToNow(new Date(issue.created_at), {
                                addSuffix: true,
                            })}</span>
                                </Icon>
                                
                                <Icon>
                                <ChatCircle size={18} />
                                    <span>{issue.comments}comments</span>
                                </Icon>
                                
                            </Box>
                            
                        </Content>
                    )
                })}
                </PostsProvider>
            </Container>
    );
}