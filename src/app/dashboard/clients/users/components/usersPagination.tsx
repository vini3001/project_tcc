'use client'

import React, { useEffect, useState } from 'react';
import { ClientContainer, DeleteIcon, EditIcon, Table, TableContainer } from '../../styles';
import { CustomLabelPaginate } from '@/app/global/styles/style';
import editIcon from '@/app/assets/svg/icons/edit.svg'
import trashIcon from '@/app/assets/svg/icons/trash.svg'
import UserModal from './modalEditUser'
import { routeListUser } from '@/backend/user';
import { User } from '@/app/entities/User';
import { useQuery, useQueryClient } from 'react-query';
import { useAuth } from '@/app/contexts/AuthContext';

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
            <tbody>
              {currentItems &&
                currentItems.map((item) => (
                    <tr key={item.id}>
                        <td>{item.nome}</td>
                        <td>{item.email}</td>
                        <td>{item.nivel}</td>
                        <td>sdsdsd</td>
                        <td style={{display: 'flex', gap: '10px', flexDirection: 'row', justifyContent: 'center'}}>
                            <EditIcon src={editIcon.src} onClick={() => {handleOpenModalEdit(item.id)}}/>
                            <DeleteIcon src={trashIcon.src} />
                        </td>
                    </tr>
                ))}
            </tbody>
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
  const {userId} = useAuth()

  useQueryClient()

  const {data} = useQuery({
    queryKey: 'usersList',
    queryFn: async () => {
        const result = await routeListUser.request({}).then((users) => {return users.data})

        if(result !== undefined) {
          return result
        }
    },
    enabled: userId != undefined
  })

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const usersList = await routeListUser.request({})

  //       if(usersList.success && usersList.data !== undefined) {
  //         setUsers(usersList.data)
  //       }
  //     } catch {
    
  //     }
  //   }

  //   fetchData()
  // }, [])
  

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data !== undefined ? data.slice(itemOffset, endOffset) : [];
  const pageCount = data !== undefined ? Math.ceil(data.length / itemsPerPage) : 0;

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number; }) => {
    const newOffset = data !== undefined ? (event.selected * itemsPerPage) % data.length : 0;
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