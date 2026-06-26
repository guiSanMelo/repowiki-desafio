import { ButtonContainer } from "./styles";

const Button = ({
  placeholder,
  onClick
}) => {
  return (
    <>
      <ButtonContainer onClick={onClick}>
       {placeholder}
      </ButtonContainer>
    </>
  )
}

export default Button