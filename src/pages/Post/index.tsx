import { ArrowSquareOut, Buildings, CaretLeft, GithubLogo, Users } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { PostContent } from "../../components/PostContent";
import { api } from "../../lib/axios";
import { Box, Container, Content, GitLink, Icon, IssueTitle, Links, PostPage } from "./styles";

interface DataIssuePost {
    comments: number;
    html_url: string;
    created_at: string;
    login: string;
    body: string;
    id: number
    title: string
}

export function Post() {
    const [postData, setPostData] = useState<DataIssuePost[]>([]);

    async function fetchPostData() {
     const response = await api.get('/repos/bonieasy/reactjs-github-blog-challenge/issues')
        
     setPostData(response.data);
    }

    useEffect(() => {
        fetchPostData();
    }, [])
    

    return(
        <PostPage>
            <Header />

            <Container>
                {postData.map(issue => {
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
                
                
            </Container>

            <PostContent />
        </PostPage>
    );
}