import { color } from "@/app/color";
import styled from "@emotion/styled";

export const Container = styled.div`
    width: 350px;
    display: flex;
`
export const FixedContainer =styled.div`
    position: fixed;
    width: 270px;
    display: flex;
    flex-direction: column;
    gap: 11px;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid ${color.primary8};
    padding: 21px 16px;
    gap: 13px;
    background-color: white;
`

export const InfoEachContainer = styled.div`
    display: flex;
    flex-direction: column;
    > p:first-child {
        color: ${color.primary8};
        font-weight: bold;
    }
`
export const BookBtn = styled.button`
    padding: 8px 0px;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: ${color.primary6};
    color: white;
    font-size: 24px;
    font-weight: bold;
    transition: 0.2s all;
    :hover{
        background-color: ${color.primary5};
    }
    :active{
        background-color: ${color.primary8};
    }
    :disabled{
        background-color: ${color.grayBase};
    }
`

export const UserListContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
    gap: 13px;
    background-color: ${color.grayLight2};
    border-radius: 5px;
`
export const UserList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    > p{
        font-size: 14px;
    }
`