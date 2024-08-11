'use client'

import React, { useEffect, useState } from 'react';
import { ClientContainer, DeleteIcon, EditIcon, Table, TableContainer } from '../../styles';
import { CustomLabelPaginate } from '@/app/global/styles/style';
import editIcon from '@/app/assets/svg/icons/edit.svg'
import trashIcon from '@/app/assets/svg/icons/trash.svg'
import UserModal from './modalEditUser'
import { routeListUser } from '@/backend/user';
import { User } from '@/app/entities/User';

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

interface ItemsProps {
  currentItems: User[];
}

interface PaginatedItems {
  itemsPerPage: number
}

export default function Items({currentItems}: ItemsProps) {
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const [userId, setUserId] = useState<number | undefined>(0)

  function handleOpenModalEdit(userId?: number) {
      setUserId(userId)
      setIsOpenEdit(!isOpenEdit)
  }

  return (
    <>
    <ClientContainer>
      <TableContainer>
        <Table>
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>EMAIL</th>
                    <th>PLANO</th>
                    <th>DATA DE CADASTRO</th>
                    <th style={{borderRight: 'none'}}>AÇÕES</th>
                </tr>
            </thead>
          {currentItems &&
            currentItems.map((item) => (
                <tbody key={item.id}>
                    <tr>
                        <td>Vinícius Donizeti dos Santos Ataliba</td>
                        <td>donizetevinicius250@gmail.com</td>
                        <td>Anual</td>
                        <td>30/01/2004</td>
                        <td style={{display: 'flex', gap: '10px', flexDirection: 'row', justifyContent: 'center'}}>
                            <EditIcon src={editIcon.src} onClick={() => {handleOpenModalEdit(item.id)}}/>
                            <DeleteIcon src={trashIcon.src} />
                        </td>
                    </tr>
                </tbody>
            ))}
          </Table>
        </TableContainer>
        {isOpenEdit && (
            <UserModal closeModal={handleOpenModalEdit} userId={userId}/>
        )}
      </ClientContainer>
    </>
  );
}

export function PaginatedItems({itemsPerPage}: PaginatedItems) {
  const [itemOffset, setItemOffset] = useState(0);
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const usersList = await routeListUser.request({})

        if(usersList.success && usersList.data !== undefined) {
          setUsers(usersList.data)
        }
      } catch {
    
      }
    }

    fetchData()
  }, [])
  

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = users.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(users.length / itemsPerPage);

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
        previousLinkClassName='flex justify-center w-full'
        nextLinkClassName='flex justify-center w-full'
        nextLabel=">"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}