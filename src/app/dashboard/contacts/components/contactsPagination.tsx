'use client'

import React, { useState } from 'react';
import { ContactContent, EditIcon, DeleteIcon, Table, TableContainer } from '../styles';
import { CustomLabelPaginate } from '@/app/global/styles/style';
import trashIcon from '../../../assets/svg/icons/trash.svg'
import editIcon from '../../../assets/svg/icons/edit.svg'
import ContactModal from './modalEditContact';

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

interface ItemsProps {
  currentItems: number[];
}

interface PaginatedItems {
  itemsPerPage: number
}

export default function Items({currentItems}: ItemsProps) {
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const [clientId, setClientId] = useState<number | undefined>(0)

    function handleOpenModalEdit(clientId?: number) {
        setClientId(clientId)
        setIsOpenEdit(!isOpenEdit)
    }

  return (
    <>
    <ContactContent>
      <TableContainer>
        <Table>
          <thead>
            <tr>
                  <th>NOME</th>
                  <th>EMAIL</th>
                  <th>WHATSAPP</th>
                  <th>DATA DE CADASTRO</th>
                  <th style={{borderRight: 'none'}}>AÇÕES</th>
              </tr>
          </thead>
          {currentItems &&
            currentItems.map((item) => (
                  <tbody key={item}>
                    <tr>
                        <td>Vinícius Donizeti dos Santos Ataliba</td>
                        <td>donizetevinicius250@gmail.com</td>
                        <td>(16) 994270955</td>
                        <td>30/01/2004</td>
                        <td style={{display: 'flex', gap: '10px', flexDirection: 'row', justifyContent: 'center'}}>
                            <EditIcon src={editIcon.src} onClick={() => {handleOpenModalEdit(item)}}/>
                            <DeleteIcon src={trashIcon.src} />
                        </td>
                    </tr>
                  </tbody>
            ))}
          </Table>
        </TableContainer>
        {isOpenEdit && (
            <ContactModal closeModal={handleOpenModalEdit} clientId={clientId}/>
        )}
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