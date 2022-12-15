import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom";
import db from "../firebase"
import { doc, getDoc } from "firebase/firestore";

function Detail() {

    const [currMovieDes, setCurrMovieDes] = useState({});
    const { id } = useParams();

    useEffect(() => {
        // Grab the movie info from database
        (async () => {
            const docRef = doc(db, "Movies", id);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
                setCurrMovieDes(docSnap.data());
            } else {
                // redirect to home page
                console.log("No such document!");
            }
        })();
        
    }, [id])

    return (
        <Container>
            {
                currMovieDes &&
                <>
                    <Background>
                        <img src={currMovieDes.backgroundImg} alt={currMovieDes.title} />
                    </Background>
                    <Controls>
                        <PlayButton>
                            <img src="/images/play-icon-black.png" alt="play" />
                            <span>PLAY</span>
                        </PlayButton>
                        <TrailerButton>
                            <img src="/images/play-icon-white.png" alt="trailer" />
                            <span>TRAILER</span>
                        </TrailerButton>
                        <AddButton>
                            <span>+</span>
                        </AddButton>
                        <GroupWatchButton>
                            <img src="/images/group-icon.png" alt="group" />
                        </GroupWatchButton>
                    </Controls>
                    <SubTitle>
                        {currMovieDes.subTitle}
                    </SubTitle>
                    <Description>
                        {currMovieDes.description}
                    </Description>
                </>
            }
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    margin-top: 350px;

`
const PlayButton = styled.button`

    border-radius: 4px;
    font-size: 15px;
    letter-spacing: 1.8px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249, 249, 249);
    border: none;
    cursor: pointer;

    &:hover {
        background-color: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgba(249, 249, 249);
`

const AddButton = styled.button`
    width: 44px;
    height: 44px;
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    cursor: pointer;

    span {
        font-size: 30px;
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    max-width: 700px;
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
`