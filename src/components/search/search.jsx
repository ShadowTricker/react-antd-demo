import { Input } from 'antd';
import './search.css';

const { Search } = Input;

const SearchContainer = ({
  value,
  handleSearch,
  handleInput,
  style
}) => {
  return (
    <Search
      placeholder="Please input search text!"
      size="large"
      enterButton
      onSearch={handleSearch}
      onChange={handleInput}
      value={value}
      style={{
        fontSize: 16,
        color: '#1890ff',
        ...style
      }}
    />
  );
};
export default SearchContainer;