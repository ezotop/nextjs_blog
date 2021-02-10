import Link from 'next/link';
import MainContainer from '../components/MainContainer';
import { MyPost } from '../interfaces/post';
import { getData } from '../services/post-service';
import styled from 'styled-components';

const ListGroup = styled.ul`
    list-style: none;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    background: #E5F0FF;
    border-radius: 5px;
    margin: 20px;
    display: block;
    width: 230px;
    height: 230px;
    padding: 20px;
    padding-top: 60px;
    text-align: center;
`;
const ListItemLink = styled.a`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: rgb(48, 58, 62);
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
`;

interface PostsPageProps {
    posts: MyPost[]
}

export default function Posts({posts}: PostsPageProps) {
    // console.log(posts)
    return (
            <MainContainer title="Posts page" keywords="posts page">
                    <ListGroup>
                        {
                            
                            posts.map(post => {
                                return (
                                    <ListItem key={post.id} >
                                        <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
                                            <ListItemLink>{post.title}</ListItemLink>
                                        </Link>
                                    </ListItem>
                                )
                            })
                        }
                    </ListGroup>
            </MainContainer>
    )
}

export async function getStaticProps() {
    const posts = await getData(`${process.env.API_URL}`);

    return {
        props: {
            posts
        }
    }
}