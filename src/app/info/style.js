import styled from "@emotion/styled";
import { color } from "../color";
import { TitleLarge } from "../text";

export const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const FlexBox2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 70%;
    margin-bottom: 50px;
`

export const HeadContainer = styled.div`
    height: 100px;
    position: sticky;
    top: -30px;
    border-bottom: 1px solid ${color.grayBase};
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
    >p:nth-child(2){
        font-size: 30px;
        margin-top: 49px;
        color:${color.grayBase};
        cursor: pointer;
    }
`
export const Title = styled(TitleLarge)`
    margin-top: 40px;
`
export const Content = styled.div`
    padding: 0px 10px;
    display: flex;
    flex-direction: column;
    gap: 40px;
`
export const EachContent =styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${color.grayDark2};
    >h2{
        color:${color.primary8}
    }
    >div{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    >div p span{
        color:black;
        font-weight: bold;
    }
    >img{
        width: 500px;
        align-self: center;
    }

`