import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { ContactCard, ContactContent } from '../styles';

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

interface ItemsProps {
  currentItems: number[];
}

interface PaginatedItems {
  itemsPerPage: number
}

function Items({currentItems}: ItemsProps) {
  return (
    <>
    <ContactContent>
      {currentItems &&
        currentItems.map((item) => (
                <ContactCard key={item}>
                    <div>
                        <h5>Nome</h5>
                        <a>{item}</a>
                    </div>
                    <div>
                        <h5>Email</h5>
                        <a>20 anos</a>
                    </div>
                    <div>
                        <h5>Telefone</h5>
                        <a>(16) 99427-0955</a>
                    </div>
                    <div>
                        <h5>Data de cadastro</h5>
                        <a>21/06/2024</a>
                    </div>
                </ContactCard>
        ))}
      </ContactContent>
    </>
  );
}

export function PaginatedItems({itemsPerPage}: PaginatedItems) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number; }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}