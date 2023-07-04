import { color } from "@/app/color";
import styled from "@emotion/styled";

export const Button = styled.div`
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