'use client'

import React, { useState } from 'react';
import { ConnectionsContainer, EditIcon, DeleteIcon, Table, TableContainer } from '../styles';
import { CustomLabelPaginate } from '@/app/global/styles/style'
import trashIcon from '../../../assets/svg/icons/trash.svg'
import editIcon from '../../../assets/svg/icons/edit.svg'
import { ConnectionModal } from './modalEditConnection';
import { useAuth } from '@/app/contexts/AuthContext';
import { useQuery } from 'react-query';
import { routeListConnections } from '@/backend/connections';

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
  const [connectionId, setConnectionId] = useState<number | undefined>(0)

    function handleOpenModalEdit(connectionId?: number) {
        setConnectionId(connectionId)
        setIsOpenEdit(!isOpenEdit)
    }

  return (
    <ConnectionsContainer>
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
                        <td>Disponível</td>
                        <td style={{display: 'flex', gap: '10px', flexDirection: 'row', justifyContent: 'center'}}>
                              <EditIcon src={editIcon.src} onClick={() => {handleOpenModalEdit(item)}} />
                              <DeleteIcon src={trashIcon.src} />
                        </td>
                    </tr>
                </tbody>
            ))}
          </Table>
        </TableContainer>
        {isOpenEdit && (
            <ConnectionModal closeModal={handleOpenModalEdit} connectionId={connectionId}/>
        )}
      </ConnectionsContainer>
  );
}

export function PaginatedItems({itemsPerPage}: PaginatedItems) {
  const [itemOffset, setItemOffset] = useState(0);
  const [changeColor, setChangeColor] = useState(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {userId, token} = useAuth()

  const {data} = useQuery({
    queryKey: 'connectionsList',
    queryFn: async () => {
        setIsLoading(true)

        const result = await routeListConnections.request({}).then((clients) => {return clients.data})
        if(result !== undefined) {
          setIsLoading(false)
          return result
        }
    },
    enabled: token != '' && userId != 0,
    refetchOnWindowFocus:false
  })

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