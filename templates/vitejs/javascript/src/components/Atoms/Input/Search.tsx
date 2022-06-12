import { ChangeEvent, useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { ColorType, CSS } from 'styles/stitches.config';

import { InputBaseProps } from './BaseType';
import {
  StyleButtonSearch,
  StyleInput,
  StyleLabel,
  StyleWrapper,
} from './style';

export interface SearchInputProps extends InputBaseProps {
  isRequired?: boolean;
  labelColor?: ColorType;
  bgColor?: ColorType;
  css?: CSS;
  onSearch?: (value: string) => void;
}

let timer: null | NodeJS.Timeout = null;

const Search = ({
  value,
  isRequired,
  id,
  style,
  className,
  onSearch,
  css = {},
  labelColor = '$text',
  bgColor = '$white',
  ...restInputProps
}: SearchInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (typeof value === 'string') {
      setInputValue((prev) => {
        if (prev !== value) return value;
        return prev;
      });
    }
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      setSearchValue(value);
      if (onSearch) onSearch(value);
    }, 500);
  };

  const handleSearch = () => {
    if (onSearch) onSearch(searchValue);
  };

  return (
    <StyleWrapper
      css={{
        border: 'none',
        color: labelColor,
        backgroundColor: bgColor,
        ...css,
      }}
      id={id}
      style={style}
      className={className}
    >
      <StyleLabel>
        <StyleInput
          value={inputValue}
          onChange={handleChange}
          // override props
          {...restInputProps}
        />
      </StyleLabel>

      <StyleButtonSearch
        onClick={handleSearch}
        variant="link"
        bgColor="$warning"
        color="$white"
      >
        Buscar <SearchOutlined />
      </StyleButtonSearch>
    </StyleWrapper>
  );
};

export default Search;
