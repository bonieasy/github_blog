import { ArrowSquareOut, Buildings, CaretLeft, GithubLogo, Users } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { PostContent } from "../../components/PostContent";
import { Box, Container, Content, GitLink, Icon, IssueTitle, Links, PostPage } from "./styles";

export function Post() {
    return(
        <PostPage>
            <Header />

            <Container>
                
                <Content>
                    <Links>
                        <Link to="/">
                            <CaretLeft size={12} weight="bold" />
                            Back
                        </Link>

                        <GitLink>
                            <a href='https://github.com/bonieasy'>See on Github</a>
                            <ArrowSquareOut size={12} weight="bold" />
                        </GitLink>
                    </Links>

                    <IssueTitle>
                        JavaScript data types and data structures
                    </IssueTitle>

                    <Box>
                        <Icon>
                            <GithubLogo size={18} />
                            <span>bonieasy</span>
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
                
            </Container>

            <PostContent />
        </PostPage>
    );
}