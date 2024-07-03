'use client'

import React, { useState } from 'react';
import { SettingsContainer, EditIcon, Table, TableContainer } from '../styles';
import { CustomLabelPaginate } from './styles'
import Link from 'next/link';
import editIcon from '../../../assets/svg/icons/edit.svg'

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

interface ItemsProps {
  currentItems: number[];
}

interface PaginatedItems {
  itemsPerPage: number
}

export default function Items({currentItems}: ItemsProps) {

  return (
    <>
    <SettingsContainer>
      <TableContainer>
        <Table>
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>STATUS</th>
                    <th>SESSÃO</th>
                    <th>ÚLTIMA ATUALIZAÇÃO</th>
                    <th>PADRÃO</th>
                    <th style={{borderRight: 'none'}}>AÇÕES</th>
                </tr>
            </thead>
          {currentItems &&
            currentItems.map((item) => (
                <tbody key={item}>
                    <tr>
                        <td>Vinícius Donizeti dos Santos Ataliba</td>
                        <td>Inativo</td>
                        <td>Ativa</td>
                        <td>30/01/2004</td>
                        <td>Friboi</td>
                        <td style={{borderRight: 'none'}}>
                            <Link href={'/dashboard/settings/details'}>
                                <EditIcon src={editIcon.src} />
                            </Link>
                        </td>
                    </tr>
                </tbody>
            ))}
          </Table>
        </TableContainer>
      </SettingsContainer>
    </>
  );
}

export function PaginatedItems({itemsPerPage}: PaginatedItems) {
  const [itemOffset, setItemOffset] = useState(0);
  const [changeColor, setChangeColor] = useState(false)

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  function handleChangeColor() {
    setChangeColor(!changeColor)
  }

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
      <CustomLabelPaginate
        activeClassName='bg-[#2a71be] text-white'
        className='mt-2'
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}