import styled from "@emotion/styled";
import { color } from "../color";
import { BodyLarge } from "../text";

export const Container = styled.div`
    
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const SubLink = styled.div`
    display: flex;
    gap: 10px;
    font-size: 14px;
`
export const LinkLogin = styled.p`
    color: ${color.grayDark1};
`
export const Loginbtn = styled.button`
    outline: none;
    border: none;
    padding: 14px 22px;
	border-radius: 8px;
	cursor: pointer;
    background-color: ${color.primary6};
    text-align: center;
    color: white;
    :hover {
		background-color: ${color.primary5};
	}
    :active {
        background-color: ${color.primary8};
    }
`

export const SelectContainer =styled.div`
    display: flex;
    flex-direction: column;
`
export const SelectBox = styled.select`
    outline: none;
    height: 48px;
    padding: 12px 14px;
    border-radius: 8px;
    border: none;
    font-size: 16px;

    background-color: ${color.grayLight2};
    &::placeholder{
        color: ${color.grayBase};
    }
`
export const SelectTitle = styled(BodyLarge)`
    color: ${color.black}
`