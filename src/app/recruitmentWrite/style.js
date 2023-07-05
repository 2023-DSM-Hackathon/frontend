import styled from "@emotion/styled";
import { color } from "../color";

export const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const FlexBox2 = styled.div`
    display: flex;
    justify-content: center;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-top: 50px;
    margin-bottom: 100px;
    gap: 30px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const SmallInput = styled.div`
    display: flex;
    gap: 15px;
`

export const TextAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const InputTitle = styled.p`

`
export const TextArea = styled.textarea`
    outline: none;
    height: 300px;
    padding: 12px 14px;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    resize: vertical;

    background-color: ${color.grayLight2};
    &::placeholder{
        color: ${color.grayBase};
    }
`

export const Submit = styled.button`
    border-radius: 8px;
    background-color: ${color.primary6};
    color: white;
    font-size: 15px;
    font-weight: bold;
    padding: 14px 0px;
    border: none;
    :hover {
		background-color: ${color.primary5};
	}
    :active {
        background-color: ${color.primary8};
    }
`