import { ArrowSquareOut, Buildings, GithubLogo, Users } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import {Container, Avatar, NameTitle, InfoBio, Bio, BoxInfo, Content, Icon, HeaderProfile, GitLink} from './styles';

interface GitDatas {
    login: string;
    avatar_url: string;
    name: string;
    company: string;
    bio: string;
    html_url: string;
    followers: number;
}

export function Profile() {
    const [datas, setDatas] = useState<GitDatas>();

    async function fetchUserData() {
        const response = await api.get('/users/bonieasy')
        
        setDatas(response.data);
    }

    useEffect(() => {
        fetchUserData();
    }, [])

    return(
        <Container>
            {datas ? 
                    <Content>
                        <Avatar src={datas.avatar_url}/>
                        <InfoBio>
                            <HeaderProfile>
                                <NameTitle>{datas.name}</NameTitle>
                                <GitLink>
                                    <a href={datas.html_url}>GITHUB</a>
                                    <ArrowSquareOut size={12} weight="bold" />
                                </GitLink>
                            </HeaderProfile>
                            <Bio>{datas.bio}</Bio>
                            <BoxInfo>
                                <Icon>
                                    <GithubLogo size={18} />
                                    <span>{datas.login}</span>
                                </Icon>

                                <Icon>
                                    <Buildings size={18} />
                                    <span>{datas.company}</span>
                                </Icon>
                                
                                <Icon>
                                    <Users size={18} />
                                    <span>{datas.followers}{' '}seguidores</span>
                                </Icon>
                                
                            </BoxInfo>
                        </InfoBio>
                    </Content>
            : 
                <> 
                    <div>Loading ... </div>
                </>
            }
            
        </Container>
    );
}