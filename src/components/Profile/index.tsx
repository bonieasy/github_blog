import { ArrowSquareOut, Buildings, GithubLogo, Users } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import {Container, Avatar, NameTitle, InfoBio, Bio, BoxInfo, Content, Icon, HeaderProfile, GitLink} from './styles';

interface GitDatas {
    login: string;
    avatar_url: string;
    name: string;
    company: string;
    bio: string;
    followers: number;
}

export function Profile() {
    const [datas, setDatas] = useState<GitDatas>();

    async function loadData() {
        const response = await fetch('https://api.github.com/users/bonieasy')
        const data = await response.json();
        setDatas(data);
            //console.log(data)
    }

    useEffect(() => {
       loadData();
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
                                    <a href='https://github.com/bonieasy'>GITHUB</a>
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
                                    <span>{datas.followers}seguidores</span>
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