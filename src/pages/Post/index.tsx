import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { PostContent } from "../../components/PostContent";
import { PostInfo } from "../../components/PostInfo";
import { DataIssuePost } from "../../contexts/PostContext";
import { api } from "../../lib/axios";
import { PostPage } from "./styles";

// const username = import.meta.env.VITE_GITHUB_USERNAME;
// const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Post() {
    const [postData, setPostData] = useState<DataIssuePost>();

    const { number } = useParams();

    useEffect(() => {
        api.get(`/repos/bonieasy/reactjs-github-blog-challenge/issues/${number}`)
        .then((response) => {
            setPostData(response.data)
        })
    })
    

    return(
        
        
        <PostPage>
            <Header />
            {postData && (
                <>
                    <PostInfo postData={postData} />
                    <PostContent content={postData.body}  />
                </>
            )}
                
            
        </PostPage>
        
    );
}