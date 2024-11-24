'use client'

import React, { useState } from 'react';
import { ConnectionsContainer, QrCodeButton, Table, TableContainer } from '../styles';
import { CustomLabelPaginate } from '@/app/global/styles/style'
import { useAuth } from '@/app/contexts/AuthContext';
import { useQuery } from 'react-query';
import { routeListConnections } from '@/backend/connections';
import { ConnectionResponse } from '@/app/entities/Connection';
import { QrCode } from './QRCode';

interface ItemsProps {
  currentItems: ConnectionResponse['data'];
}

interface PaginatedItems {
  itemsPerPage: number
}

export default function Items({currentItems}: ItemsProps) {
  const [isOpenConnect, setIsOpenConnect] = useState(false)

    function handleOpenModalQRCode() {
      setIsOpenConnect(!isOpenConnect)
    }

  return (
    <ConnectionsContainer>
      <TableContainer>
        <Table>
            <thead>
                <tr>
                    <th>INSTÂNCIA</th>
                    <th>STATUS</th>
                    <th>ÚLTIMA ATUALIZAÇÃO</th>
                    <th style={{borderRight: 'none'}}>AÇÃO</th>
                </tr>
            </thead>
          {currentItems &&
            currentItems.map((item) => (
                <tbody key={item.id}>
                    <tr>
                        <td>{item.instance}</td>
                        <td>{item.token}</td>
                        <td>Ativa</td>
                        <td style={{display: 'flex', gap: '10px', flexDirection: 'row', justifyContent: 'center'}}>
                              <QrCodeButton onClick={() => {handleOpenModalQRCode}}>Qr Code</QrCodeButton>
                        </td>
                    </tr>
                </tbody>
            ))} 
          </Table>
        </TableContainer>
        {isOpenConnect && (
                <QrCode closeModal={handleOpenModalQRCode} />
            )}

      </ConnectionsContainer>
  );
}

export function PaginatedItems({itemsPerPage}: PaginatedItems) {
  const [itemOffset, setItemOffset] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {userId, token} = useAuth()

  const {data} = useQuery({
    queryKey: 'connectionsList',
    queryFn: async () => {
        setIsLoading(true)

        const result = await routeListConnections.request({
          instance: 'tcc',
          token: '4br3rn8ghtbw9ymkt8ucl'
        }).then((clients) => {return clients.data})
        if(result !== undefined) {
          setIsLoading(false)
          return result
        }
    },
    enabled: token != '' && userId != 0,
    refetchOnWindowFocus:false
  })
  data !== undefined && console.log(data.data)

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data !== undefined ? data!.data.slice(itemOffset, endOffset) : [];
  const pageCount = data !== undefined ? Math.ceil(data!.data.length / itemsPerPage) : 0;

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number; }) => {
    const newOffset = data !== undefined ? (event.selected * itemsPerPage) % data!.data.length : 0;
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