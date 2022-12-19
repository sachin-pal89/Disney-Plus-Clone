import React from "react";
import styled from "styled-components";
function Header() {

    return (
        <Nav>
            <Logo src="/images/disney-hotstar-logo-dark.svg" />
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


