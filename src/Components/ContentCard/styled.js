import styled from "styled-components";
import BGmain from '../../images/bg-main-desktop.png'
import CardFront from '../../images/bg-card-front.png'
import CardBack from '../../images/bg-card-back.png'

export const Container = styled.div`
    position: relative;
    background-image: url(${BGmain});
    max-width: 480px;
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
    background-size: 448px 249px;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    color: white;
    position: absolute;
    top: 150px;
    left: 140px;

    & div{
        display: flex;
        flex-direction: column;

        & span{
            font-size: 2.05em;
            padding: 0;
            margin: 4px 0;
        }

        & nav{
            display: flex;
            justify-content: space-between;
            padding: 0 6px;
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
    background-size: 448px 249px;
    background-repeat: no-repeat;
    position: absolute;
    top: 430px;
    left: 260px;

    & p{
        position: relative;
        top: 96px;
        left: 350px;
        color: white;
        font-size: 0.86em;
    }
`;