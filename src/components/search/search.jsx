import { Input } from 'antd';
import './search.css';

const { Search } = Input;

const SearchContainer = ({
  handleSearch,
  style
}) => {
  return (
    <Search
      placeholder="Please input search text!"
      size="large"
      enterButton
      onSearch={handleSearch}
      style={{
        fontSize: 16,
        color: '#1890ff',
        ...style
      }}
    />
  );
};
export default SearchContainer;