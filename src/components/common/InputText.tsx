import React, { ForwardedRef } from 'react';
import { styled } from 'styled-components';

// interface
interface IInputTextProps {
  placeholder?: string;
}
// focus 직접 주거나 target 직접 컨트롤 시 유용한 forwardRef 방식 컴포넌트 이용
const InputText = React.forwardRef(({placeholder}: IInputTextProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <InputTextStyle placeholder={placeholder} />
  )
})
// const InputText = () => {
//   return (
//     <InputTextStyle>InputText</InputTextStyle>
//   )
// }
const InputTextStyle = styled.input
  .attrs<Omit<IInputTextProps,'children'>>({type: "text"})`
    padding: 0.25rem 0.75rem;
    border: 1px solid ${({theme}) => theme.color.border};
    border-radius: ${({theme}) => theme.borderRadius.default};
    font-size: 1rem;
    line-height: 1.5;
    color: 1px solid ${({theme}) => theme.color.text};
  `;
export default InputText;