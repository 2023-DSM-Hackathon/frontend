import { SubTitle } from "@/app/text";
import styled from "@emotion/styled";

export const Container = styled.div`
    box-sizing: border-box;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 18px 33px;
  width : 100%;
  gap: 10px;
  border-radius: 10px;
  box-shadow : 0 6px 14px -8px rgba(0, 0, 0, 1)
`;

export const H3 = styled(SubTitle)`

`
export const Div1 = styled.div `

`
export const P = styled.p `

`
export const P1 = styled.p `
width: 70%;
   text-overflow: ellipsis;
   overflow: hidden;
   word-break: break-word;
   display: -webkit-box;
   -webkit-line-clamp: 1; // 원하는 라인수
   -webkit-box-orient: vertical
`
export const Div2 = styled.div`
    text-align: right;
    font-size : 12px;
    padding: 0px 6px;
    color: gray;
`