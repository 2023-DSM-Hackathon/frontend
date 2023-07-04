import { color } from "@/app/color";
import { TitleLarge } from "@/app/text";
import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    width: 100%;
    `

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    border-bottom: 1px solid ${color.grayBase};
    margin-bottom: 20px;
`
export const Name = styled.p`
    color: ${color.grayDark1};
    margin-bottom: 8px;
`

export const TextContainer = styled.div`
    display: flex;
    gap: 30px;
`
export const ContentImg = styled.img`
    min-width: 400px;
    max-width: 1000px;
    width: fit-content;

    height: fit-content;
    border-radius: 10px;
`
export const TexArea = styled.pre` 
    font-size: 20px;
    width: 100%;
    white-space: pre-wrap;
`