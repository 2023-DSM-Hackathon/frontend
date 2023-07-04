import * as S from "./style";


const Button = ({value,disabled}) => {
    return (
        <S.Button disabled={disabled}>
            {value}
        </S.Button>
    )
}

export default Button;