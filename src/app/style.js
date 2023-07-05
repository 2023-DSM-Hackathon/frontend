import styled from "@emotion/styled";

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
    gap: 30px;
    width: 70%;
    margin-top: 35px;
`

export const SelectContainer = styled.div`
    display: flex;
`
export const SelectButton = styled.div`
    display: flex;
    gap: 10px;
    padding: 3px 15px;
    border-bottom: ${props => props.color ? "" : `3px solid black`};
    >p {
        color: ${props => props.color }
    }
`

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
export const ReviewContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`