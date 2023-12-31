import { color } from "@/app/color";
import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 14px 20px;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 4px 0px gray;
    gap: 10px;

    >div{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`
export const Title = styled.p`
    font-size: 20px;
    font-weight: bold;
`
export const Link = styled.p`

`
export const EachContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 10px;
`

export const SubTitle = styled.p`
    font-size: 14px;
    font-weight: bold;
`
export const Content = styled.p`
    font-size: 14px;
    word-wrap: break-word;
`
export const NameContainer =styled.div`
    font-size: 12px;
    width: 100%;
    >p{
        text-align: end;
        color: ${color.grayBase};
    }
`