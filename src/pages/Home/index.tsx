import { Header } from "../../components/Header";
import { PostBox } from "../../components/PostBox";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";

export function Home() {
    return(
    <>
        <Header />
        <Profile />
        <SearchForm />
        <PostBox />
    </>
    );
}