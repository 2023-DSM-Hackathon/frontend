import styled from "@emotion/styled";
import { color } from "./color";

export const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const FlexBox2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const InfoContainer = styled.div`
    display: flex;
    width: 70%;
    height:400px;
    justify-content: space-between;
    >button{
        background-color: red;
    }
`
export const BgImg = styled.div`
    height: 400px;
    width: 520px;
    background-image: url("assets/mainBg.png");
    background-size: auto 400px;
    background-repeat: no-repeat;
    background-position: left top;
    transition: 2s all;
    :hover{
        background-position: right top;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: end;
    gap: 4px;
`
export const Title = styled.div`
    display: flex;
    align-items: end;
    gap: 8px;
    >p{
        font-size: 25px;
    }
`
export const LogoImg = styled.img`
    width: 120px;
`
export const SubTitleContainer = styled.div`
    display: flex;
    padding-right: 30px;
    font-size: 30px;
    >p:nth-child(2){
        margin-right: 10px;
    }
    >p:nth-child(odd){
        color: ${color.main};
        font-weight: bold;
        background-color: white;
        transition: all 0.1s ease-in-out;
        :hover{
            color: ${color.main2};
        }
    }
`
export const InfoBtn = styled.button`
    border: 1px solid ${color.main};
    padding: 10px 13px;
    border-radius: 20px;
    background-color: white;
    margin-right: 30px;
    margin-top: 10px;
    color:${color.primary8};
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    :hover{
        background-color: ${color.primary8};
        color:white;
    }
    :active{
        scale: 1.1;
    }
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 70%;
    margin-top: 35px;
    margin-bottom: 50px;
`



export const SelectContainer = styled.div`
    display: flex;
`
export const SelectButton = styled.div`
    display: flex;
    gap: 10px;
    padding: 3px 15px;
    border-bottom: ${props => props.color ? "" : `3px solid black`};
    >p {
        color: ${props => props.color }
    }
`

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
export const ReviewContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`