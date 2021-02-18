import { connect } from 'react-redux';
import Link from 'next/link';
import MainContainer from '../components/MainContainer';
import { MyPost } from '../interfaces/post';
import { getData } from '../services/post-service';
import styled from 'styled-components';
// import { useSelector, useDispath } from 'react-redux';
import { getPosts } from '../redux/actions/index';
import { useEffect } from 'react';

const ListGroup = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding-left: 0;
    list-style: none; 
`;
const ListItem = styled.li`
    background: #E5F0FF;
    border-radius: 5px;
    margin: 20px;
    display: block;
    width: 25%;
    height: 250px;
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
    serverPosts: MyPost[]
    posts: MyPost[]
    loading: boolean
    error: boolean
    getPosts: any
}

const Posts = ({serverPosts, posts, loading, error, getPosts}: PostsPageProps) => {

    return (
        <MainContainer title="Posts page" keywords="posts page">
                <>
                    {
                        loading ? (
                            <h2>Loading...</h2>
                        ) : (
                            <ListGroup>
                                {
                                   serverPosts.map(post => {
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
                        )
                    }
                </>
        </MainContainer>
    )
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = {
    getPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

export async function getStaticProps() {
    const posts = await getData(`${process.env.API_URL}`);
    console.log('StaticProps');
    return {
        props: {
            serverPosts: posts.reverse()
        }
    }
}