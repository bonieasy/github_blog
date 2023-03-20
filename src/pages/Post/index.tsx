import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { PostContent } from "../../components/PostContent";
import { PostInfo } from "../../components/PostInfo";
import { DataIssuePost, PostsProvider } from "../../contexts/PostContext";
import { api } from "../../lib/axios";
import { PostPage } from "./styles";

// const username = import.meta.env.VITE_GITHUB_USERNAME;
// const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Post() {
    const [postData, setPostData] = useState<DataIssuePost>();

    const { number } = useParams();

    const getPostDetails = useCallback(async () => {
        try {    
          const response = await api.get(
            `/repos/bonieasy/reactjs-github-blog-challenge/issues/${number}`
          );
          console.log(response);
    
          //setPostData(response.data);
       
        } 
        catch(error){
          console.log(error)
        }
       
      }, [postData]);
    
      useEffect(() => {
        getPostDetails();
      }, []);

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