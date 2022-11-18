import styled from "styled-components";
import BgMobile from '../../images/bg-main-mobile.png'
import CardFront from '../../images/bg-card-front.png'
import CardBack from '../../images/bg-card-back.png'

export const Container = styled.div`
    background-image: url(${BgMobile});
    background-size: cover;
    width: 100%;
    height: 230px;
    margin-bottom: 14px;
`;


export const StyleFrontcardMob = styled.div`
    background-image: url(${CardFront});
    width: 288px;
    height: 159px;
    padding: 8px 24px;
    background-size: 288px 159px;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    color: white;
    position: relative;
    top: -31px;
    left: 10px;

    & div{
        display: flex;
        flex-direction: column;

        & span{
            font-size: 1.03em;
            padding: 0 0px;
            margin:  0;
        }

        & nav{
            display: flex;
            justify-content: space-between;
            margin: 0;

            & p{
                font-size: 0.8em;
                margin-right: 50px;

                @media (max-width: 375px){
                    font-size: 0.73em;
                }
            }
        }
    }

    & img{
        width: 48px;
        height: 27px;
    }
`;

export const StyleBackCardMob = styled.div`
    background-image: url(${CardBack});
    width: 288px;
    height: 159px;
    padding: 0px 24px;
    background-size: 288px 159px;
    background-repeat: no-repeat;
    position: relative;
    top: 38px;
    left: 62px;

    & p{
        position: relative;
        top: 70px;
        left: 198px;
        color: white;
        font-size: 0.65em;
    }
`;