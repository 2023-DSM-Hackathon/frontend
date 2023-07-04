import { color } from "@/app/color";
import { Title, TitleLarge } from "@/app/text";
import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`

export const AuthBg = styled.img`
`

export const Auth = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    gap: 60px;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const SubT = styled(Title)`
    color: ${color.main};

`

export const TitleT = styled(TitleLarge)`
    color: ${color.main2};
`