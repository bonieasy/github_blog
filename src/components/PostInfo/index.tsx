import { ArrowSquareOut, Buildings, CaretLeft, GithubLogo, Users } from "@phosphor-icons/react";
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
                                    <span>{issue.login}</span>
                                </Icon>

                                <Icon>
                                    <Buildings size={18} />
                                    <span>Rocketseat</span>
                                </Icon>
                                
                                <Icon>
                                    <Users size={18} />
                                    <span>26 seguidores</span>
                                </Icon>
                                
                            </Box>
                            
                        </Content>
                    )
                })}
                </PostsProvider>
            </Container>
    );
}