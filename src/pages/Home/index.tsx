import { useContext } from "react";
import { Header } from "../../components/Header";
import { PostBox } from "../../components/PostBox";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import { PostsContext, PostsProvider } from "../../contexts/PostContext";
import { PostList } from "./styles";

export function Home() {
    const { postData } = useContext(PostsContext);

    return(
    <>
        <Header />
        <Profile />
        <PostsProvider>
        <SearchForm />
        <PostList>
            <PostBox />
                
        </PostList>
        </PostsProvider>
    </>
    );
} 