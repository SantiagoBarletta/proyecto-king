
import React, { useState, useEffect } from 'react';


function Pagination() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]); // Se vuelve a llamar a fetchData() cada vez que cambia la página actual

  async function fetchData(page) {
    try {
      const response = await fetch(`/api/data?page=${page}`);
      const jsonData = await response.json();
      setData(jsonData.data);
      setTotalPages(jsonData.totalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function goToPage(page) {
    setCurrentPage(page);
  }

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => goToPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
