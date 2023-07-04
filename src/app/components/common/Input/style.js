import { color } from "@/app/color";
import { BodyLarge } from "@/app/text";
import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
    outline: none;
    height: 24px;
    padding: 12px 14px;
    border-radius: 8px;
    border: none;
    font-size: 16px;

    background-color: ${color.grayLight2};
    &::placeholder{
        color: ${color.grayBase};
    }
`;  

export const Title = styled(BodyLarge)`
    color:black;
`;