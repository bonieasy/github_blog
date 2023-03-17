import { ArrowSquareOut, Buildings, CaretLeft, GithubLogo, Users } from "@phosphor-icons/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { PostContent } from "../../components/PostContent";
import { PostInfo } from "../../components/PostInfo";
import { PostsContext, PostsProvider } from "../../contexts/PostContext";
import { PostPage } from "./styles";

export function Post() {
    const { postData } = useContext(PostsContext);
    
    return(
        
        <PostPage>
            <Header />
            <PostsProvider>
                <PostInfo />
                <PostContent />
            </PostsProvider>
            
        </PostPage>
        
    );
}