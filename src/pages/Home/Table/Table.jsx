import React, { useState, useRef } from "react";
import './table.css';

function MyDataTable(props) {
  const [sortBy, setSortBy] = useState({ prop: "score", order: "descending" });
  const [pageLength, setPageLength] = useState(128);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const data = props.names.map((name, index) => {
    return {
      id: index,
      name: name,
      score: props.scores[index],
    };
  });

  const filteredData = data.filter(row => row.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const sortedData = filteredData.sort((a, b) => {
        return b[sortBy.prop] - a[sortBy.prop]
  });

  const displayedData = sortedData.slice(pageLength * (currentPage - 1), pageLength * currentPage);

  // create a reference to the container element
  const containerRef = useRef(null);

  // function to handle the onScroll event
  const handleScroll = () => {
    // check if the user has scrolled to the bottom of the container
    if (containerRef.current.scrollHeight - containerRef.current.scrollTop === containerRef.current.clientHeight) {
        if(pageLength*currentPage < filteredData.length){
            setCurrentPage(currentPage + 1)
        }
    }
  }

  return (
    <div style={{height: "100vh"}}>
      <input type="text" placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} />
      <div ref={containerRef} style={{height: "70vh", overflow: "auto"}} onScroll={handleScroll}>
        <table>
          <tbody>
          {displayedData.slice(0, pageLength).map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td className="d-flex justify-content-end">{row.score}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyDataTable;
