import Head from "next/head"
import Link from "next/link"
import styled from "styled-components";

const NavBar = styled.nav`
    display: flex;
    align-items: center;
    height: 60px;
    width: 100vw;
    padding: 0 170px;
    background: #0070f3;
`;

const NavLink = styled.a`
    color: #fff;
    font-size: 20px;
    padding: 0 15px;
`;

const MainDiv = styled.main`
    width: 1140px;
    margin: 0 auto;
`;

const MainContainer = ({children, title, keywords}) => {
    // console.log(children);
    return (
        <>
            <Head>
                <meta name="keywords" content={`blog, javascript, ${keywords}`}/>
                <meta name="description" content={"my blog on next.js"} />
                <title>Blog | {title}</title>
            </Head>
            <header>
                <NavBar>
                    <Link href={"/"}>
                        <NavLink>Wall</NavLink>
                    </Link>
                    <Link href={"/posts/new"}>
                        <NavLink>Create post</NavLink>
                    </Link>
                </NavBar>
            </header>
            <MainDiv>
                {children}
            </MainDiv>
        </>
    )
}

export default MainContainer;