import React from "react";
import { Collapse, Input, Row, Space } from "antd";

interface Props {
  searchTerm: string;
  setSearchTerm: (value: React.SetStateAction<string>) => void;
}

const Search = (props: Props) => {
  const { searchTerm, setSearchTerm } = props;

  const { Panel } = Collapse;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  return (
    <Space direction="vertical">
      <Row className="search-input__wrapper">
        <Input
          addonBefore="🔍"
          size="large"
          className="searchbox"
          placeholder="start typing "
          value={searchTerm}
          onChange={(e) => handleChange(e)}
        />
      </Row>

      <Row className="advanced-search__wrapper">
        <Collapse>
          <Panel header="Advanced search" key="1">
            <div className="advanced-search">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
                voluptatibus.
              </p>
            </div>
          </Panel>
        </Collapse>
      </Row>
    </Space>
  );
};

export default Search;
