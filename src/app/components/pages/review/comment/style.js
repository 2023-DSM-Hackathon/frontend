import { color } from "@/app/color";
import { BodyLarge } from "@/app/text";
import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const CountText = styled(BodyLarge)`

`

export const InputContainer = styled.div`
    display: flex;
    gap: 40px;
`

export const Input = styled.input`
    border-radius: 30px;
    flex:1;
    outline: none;
    padding: 0px 20px;
    border: 1px solid ${color.grayBase};
`

export const Submit = styled.button`
    background-color: ${color.main2};
    border-radius: 4px;
    color: white;
    outline: none;
    border: none;
    padding: 14px 46px;
`

export const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
    margin-bottom: 100px;
`

export const EachComment = styled.div`
    display: flex;
    gap: 22px;
    > p:first-child{
        font-weight: bold;
        width: max-content;
    }
    > p:nth-child(2){
        flex: 1;
    }
`