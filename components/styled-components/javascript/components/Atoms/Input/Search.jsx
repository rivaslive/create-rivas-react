import { forwardRef, useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

import {
  StyleButtonSearch,
  StyleInput,
  StyleLabel,
  StyleWrapper,
} from './style';

let timer = null;

const Search = forwardRef(
  (
    {
      value,
      isRequired,
      id,
      style,
      className,
      onSearch,
      labelColor = '$text',
      bgColor = '$white',
      ...restInputProps
    },
    _ref,
  ) => {
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
      const { value: val } = e.target;
      setInputValue(val);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        setSearchValue(val);
        if (onSearch) onSearch(val);
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
            ref={_ref}
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
  },
);

export default Search;
