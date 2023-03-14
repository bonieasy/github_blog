import { ArrowSquareOut, Buildings, GithubLogo, Users } from '@phosphor-icons/react';
import {Container, Avatar, NameTitle, InfoBio, Bio, BoxInfo, Content, Icon, HeaderProfile, GitLink} from './styles';

export function Profile() {
    return(
        <Container>
            <Content>
                <Avatar src="https://avatars.githubusercontent.com/u/23294397?v=4"/>
                <InfoBio>
                    <HeaderProfile>
                        <NameTitle>Ariele Bonifacio</NameTitle>
                        <GitLink>
                            <a href='https://github.com/bonieasy'>GITHUB</a>
                            <ArrowSquareOut size={12} weight="bold" />
                        </GitLink>
                    </HeaderProfile>
                    <Bio>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit officiis quis amet, libero nulla porro eius! Suscipit sunt iste nobis maxime architecto ullam excepturi odit possimus error natus, rem consequatur!</Bio>
                    <BoxInfo>
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
                            <span>32 seguidores</span>
                        </Icon>
                        
                    </BoxInfo>
                </InfoBio>
            </Content>
        </Container>
    );
}