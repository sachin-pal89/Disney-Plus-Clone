import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from "../features/user/userSlice"
import { useSelector, useDispatch } from "react-redux"
import { auth, provider } from "../firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

function Header() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        const currentUser = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
            }
        });
        return currentUser();
    }, [dispatch])

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                dispatch(setUserLogin({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                }))
            })
            .catch((error) => {
                console.log(error.message);
            });
        navigate("/");
    }

    const signOutUser = () => {
        signOut(auth)
            .then(() => {
                dispatch(setSignOut());
                navigate("/login");
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <Nav>
            <Logo src="/images/disney-hotstar-logo-dark.svg" />
            {!userName ? (
                <LoginContainer>
                    <Login onClick={signIn}>LOGIN</Login>
                </LoginContainer>
            ) :
                <>
                    <NavMenu>
                        <a href="/#">
                            <img src="/images/home-icon.svg" alt="Home Icon" />
                            <span>HOME</span>
                        </a>
                        <a href="/#">
                            <img src="/images/search-icon.svg" alt="Home Icon" />
                            <span>SEARCH</span>
                        </a>
                        <a href="/#">
                            <img src="/images/watchlist-icon.svg" alt="Home Icon" />
                            <span>WATCHLIST</span>
                        </a>
                        <a href="/#">
                            <img src="/images/original-icon.svg" alt="Home Icon" />
                            <span>ORIGINALS</span>
                        </a>
                        <a href="/#">
                            <img src="/images/movie-icon.svg" alt="Home Icon" />
                            <span>MOVIES</span>
                        </a>
                        <a href="/#">
                            <img src="/images/series-icon.svg" alt="Home Icon" />
                            <span>SERIES</span>
                        </a>
                    </NavMenu>
                    <UserImg onClick={signOutUser} src={userPhoto} alt="user Photo" />
                </>
            }


        </Nav>
    );
}

export default Header;

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    overflow-x: hidden;
    position: relative;

`
const Logo = styled.img`
    width: 120px;
`

const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`

const Login = styled.div`
    padding: 8px 16px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    letter-spacing: 1.5px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease 0s;

    &:hover {
        background-color: #f9f9f9;
        color: black;
        border-color: transparent;
        transform: scale(1.05);
    }
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    margin-left: 25px;

    @media screen and (max-width: 900px){
        display: none;
    }

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        text-decoration: none;
        color: inherit;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background-color: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }

`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`


