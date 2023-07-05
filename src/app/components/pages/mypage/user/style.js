import { color } from "@/app/color";
import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    gap: 30px;
`

export const UserInfoContainer = styled.div`
    border-radius: 10px;
    border: 1px solid ${color.grayBase};
    padding: 18px 30px;
    display: flex;
    gap: 20px;
    align-items: center;
    &:first-child{
        flex: 1;
    }
    >div{
        display: flex;
        flex-direction: column;
        gap: 6px;
        >div{
            display: flex;
            gap: 20px;
            &:first-child{
                >p{
                    font-weight: bold;
                }
            }
        }
    }
`

export const UserImg = styled.img`
    width: 50px;
    height: 50px;
`

export const CrownContainer = styled.div`
    display: flex;
    flex-direction: column;
    >p{
        font-size: 12px;
        text-align: center;
    }
`