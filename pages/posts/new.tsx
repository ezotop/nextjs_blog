import MainContainer from "../../components/MainContainer";
import { MyNewPost } from '../../interfaces/new';
import { postData } from '../../services/post-service';
import { connect } from 'react-redux';
import { loadingError, changedValue, clearInputs } from '../../actions/index';
import { PostBackBtn, PostSection } from '../posts/[id]';
import styled from 'styled-components';

const Form = styled.form`
    width: 100%;
    height: 500px;
    margin: 0 auto;
    margin-top: 30px;
`;
const Input = styled.input`
    display: block;
    width: 100%;
    height: 40px;
    border: none;
    padding: 5px 10px;
    margin-bottom: 30px;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
    outline: none;
    color: rgb(48, 58, 62);
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
`;
const BodyInput = styled(Input)`
    height: 100%;
    resize: none;
`;
const PostBtn = styled(PostBackBtn)`
    margin: 50px 0 0 auto;
`;

const New = ({postTitle, postBody, changedValue, clearInputs}) => {

    function onSubmit(e: { preventDefault: () => void }) {
        e.preventDefault();
        // console.log('NEW onSubmit')
        const newPost: MyNewPost = {
            title: postTitle,
            body: postBody
        }
        postData(newPost);
        clearInputs();
    }

    return (
        <MainContainer title={"Create post"} keywords={"create post"}>
            <PostSection>
                <Form onSubmit={onSubmit}>
                    <Input
                        required
                        type="text"
                        placeholder="Give a title to your post"
                        value={postTitle}
                        onChange={(e) => changedValue(e.target.value, true)} />
                    <BodyInput as="textarea"
                        required
                        name="text"
                        placeholder="Create your new post"
                        value={postBody}
                        onChange={(e) => changedValue(e.target.value)} />
                    <PostBtn type="submit">POST</PostBtn>
                </Form>
            </PostSection>
        </MainContainer>
    )
};

const mapStateToProps = (state) => {
    return {
        postTitle: state.postTitle,
        postBody: state.postBody
    }
};

const mapDispatchToProps = {
    loadingError,
    changedValue,
    clearInputs
};

export default connect(mapStateToProps, mapDispatchToProps)(New);