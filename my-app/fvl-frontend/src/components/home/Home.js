import React, { useState, useEffect } from 'react';
import Banner from '../Banner';
import NavigationBar from '../Navigator';
import ItemsList from '../Item';
import ReactPaginate from "react-paginate";
import { combo } from '../../data/combo';

export default function Home2() {
  const [listItems, setListItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter and paginate combo items
  useEffect(() => {
    filterAndPaginateItems();
  }, [currentPage, searchTerm]);

  const filterAndPaginateItems = () => {
    // Filter by search term only
    const filteredItems = combo.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Paginate filtered items
    const startIndex = (currentPage - 1) * limit;
    const paginatedItems = filteredItems.slice(startIndex, startIndex + limit);

    setListItems(paginatedItems);
    setTotalPages(Math.ceil(filteredItems.length / limit));
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <div>
      <Banner />
      <NavigationBar />
      <div className='grid grid-cols-4 gap-4 p-4'>
        {listItems && listItems.length > 0 ? (
          listItems.map((item, index) => (
            <ItemsList key={index} {...item} />
          ))
        ) : (
          <div className="col-span-4 text-center text-md">No items found</div>
        )}
      </div>
      <ReactPaginate
        previousLabel={<span className="text-gray-500">← Previous</span>}
        nextLabel={<span className="text-gray-500">Next →</span>}
        breakLabel="..."
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="flex justify-center mt-4 space-x-2 pb-5"
        pageClassName="text-white-700 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
        activeClassName="bg-black text-white rounded-full"
      />
    </div>
  );
}
