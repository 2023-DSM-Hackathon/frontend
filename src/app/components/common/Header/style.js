import { color } from "@/app/color";
import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 60px;
    height: 64px;
`
export const Logo = styled.img`
    height: 50px;
    margin-top: -10px;
`
export const RightBar = styled.div`
    display: flex;
    gap: 24px;
`
export const WriteBtn = styled.div`
    padding: 10px 15px;
    /* border: 1px solid #B6BEC1; */
    border-radius: 25px 25px;
`
export const User = styled.div`
    border-radius: 50%;
    border: 1px solid #B6BEC1;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const UserImg = styled.img`
    width: 28px;
    height: 28px;
`
export const ButtonContainer = styled.div`
    display: flex;
    gap: 5px;
`