import BGmain from '../../images/bg-main-desktop.png'
import CardFront from '../../images/bg-card-front.png'
import CardBack from '../../images/bg-card-back.png'
import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    background-image: url(${BGmain});
    background-size: cover;
    max-width: 380px;
    width: 100%;
    height: 100%vh;
`;

export const Frontcard = styled.div`
    background-image: url(${CardFront});
    max-width: 408px;
    width: 100%;
    max-height: 249px;
    height: 100%;
    padding: 0px 24px;
    background-size: 428px 249px;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    color: white;
    position: absolute;
    top: 150px;
    left: 80px;

    & div{
        display: flex;
        flex-direction: column;

        & span{
            font-size: 1.8em;
            padding: 0;
            margin: 4px 0;
        }

        & nav{
            display: flex;
            justify-content: space-between;
            /* gap: -12px;
            padding: 0 2px; */
        }
    }

    & img{
        width: 84px;
        height: 47px;
    }


`;

export const BackCard = styled.div`
    background-image: url(${CardBack});
    max-width: 408px;
    width: 100%;
    max-height: 249px;
    height: 100%;
    padding: 0px 24px;
    background-size: 428px 249px;
    background-repeat: no-repeat;
    position: absolute;
    top: 430px;
    left: 150px;

    & p{
        position: relative;
        top: 99px;
        left: 330px;
        color: white;
        font-size: 0.86em;
    }
`;