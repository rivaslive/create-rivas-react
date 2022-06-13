import { ChangeEvent, useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

import {
  StyleButtonSearch,
  StyleInput,
  StyleLabel,
  StyleWrapper
} from './style';

let timer = null;

const Search = ({
  value,
  isRequired,
  id,
  style,
  className,
  onSearch,
  labelColor = '$text',
  bgColor = '$white',
  ...restInputProps
}) => {
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

  const handleChange = (e) => {
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
      $color={labelColor}
      $bgColor={bgColor}
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
        bgColor="warning"
        color="white"
      >
        Search <SearchOutlined />
      </StyleButtonSearch>
    </StyleWrapper>
  );
};

export default Search;
