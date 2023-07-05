import { color } from "@/app/color";
import { SubTitle } from "@/app/text";
import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const Title = styled(SubTitle)`

`
export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`
export const PostContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
`
export const Link = styled.p`
    font-size: 14px;
    color:${color.grayBase}
`