import React, { InputHTMLAttributes, useMemo } from 'react';

import { Container } from './styles';
import searchImg from '../../assets/search.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeHolder: string;
  name: string;
}

const InputSearch: React.FC<InputProps> = ({ placeHolder, name, ...rest }) => {
  const hasValue = useMemo(() => {
    return !!rest.value;
  }, [rest.value]);

  return (
    <Container>
      <img src={searchImg} alt="Search" />
      <span>
        {placeHolder && hasValue && <label htmlFor={name}>{placeHolder}</label>}
        <input placeholder={placeHolder} type="text" id={name} {...rest} />
      </span>
    </Container>
  );
};

export default InputSearch;
