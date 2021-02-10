import { NextPageContext } from 'next';
import Link from 'next/link';
import MainContainer from '../../components/MainContainer';
import { MyPost } from '../../interfaces/post';
import { getData } from '../../services/post-service';
import styled from 'styled-components';

export const PostSection = styled.section`
    padding: 0 170px;
`;
const PostHeader = styled.h1`
    color: rgb(10, 11, 12);
    font-size: 55px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
`;
const PostParag = styled.p`
    color: rgb(48, 58, 62);
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 60px;
`;
export const PostBackBtn = styled.button`
    color: #fff;
    background-color: #0070f3;
    border: none;
    border-radius: 4px;
    outline: none;
    display: block;
    height: 30px;
    min-width: 120px;
    cursor: pointer;
`;

interface PostPageProps {
    post: MyPost
}

const Post = ({post}: PostPageProps) => {
    return (
        <MainContainer title={"Post page"} keywords="post">
            <PostSection>
                <PostHeader>{post.title}</PostHeader>
                <PostParag>{post.body}</PostParag>
                <Link href={'/'}><a><PostBackBtn>&larr; Go back</PostBackBtn></a></Link>
            </PostSection>
        </MainContainer>
    )
};

export default Post;

interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

export async function getServerSideProps({query}: PostNextPageContext) {
    const post = await getData(`${process.env.API_URL}/`, query.id);

    return {
        props: {
            post
        }
    }
}