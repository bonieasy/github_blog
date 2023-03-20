import ReactMarkdown from "react-markdown";
import { Container} from "./styles";

interface PostContentProps {
    content: string;
}

export function PostContent({ content }: PostContentProps) {
    
    return(
        <Container>
           
            <ReactMarkdown children={content} />
                        
        </Container>
        
    );
}