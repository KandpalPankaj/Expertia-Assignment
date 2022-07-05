import "./App.css";
import data from "./data/data.json";
import Jobs from "./components/jobs";
import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [filterKeywords, setfilterKeywords] = useState([]);
  const [text, setText] = useState("");
  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords, data]);
    }
  };

  const deleteKeyword = (data) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setfilterKeywords(newKeywords);
  };

  const clearAll = () => {
    setfilterKeywords([]);
  };
  const setSearchKeyword = (text) => {
    setText(text);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (!filterKeywords.includes(text)) {
        setfilterKeywords([...filterKeywords, text]);
        setText("");
      }
    }
  };
  return (
    <div className="App">
      <div className="header">Welcome To Job Board</div>
      <div>
        {/* {filterKeywords.length > 0 && (
        <Header
          keywords={filterKeywords}
          removeKeywords={deleteKeyword}
          clearAll={clearAll}
        />
      )} */}
        <Search
          setSearchKeyword={setSearchKeyword}
          handleKeyDown={handleKeyDown}
          text={text}
          filterKeywords={filterKeywords}
          deleteKeyword={deleteKeyword}
          clearAll={clearAll}
        />
      </div>

      <Jobs
        keywords={filterKeywords}
        data={data}
        setKeywords={addFilterKeywords}
      />
    </div>
  );
}

export default App;
