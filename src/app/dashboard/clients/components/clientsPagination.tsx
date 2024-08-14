'use client'

import React, { useEffect, useState } from 'react';
import { ClientContainer, Table, TableContainer, ThreeDots } from '../styles';
import { CustomLabelPaginate } from '@/app/global/styles/style';
import Link from 'next/link';
import threeDots from '../../../assets/svg/icons/threeDots.svg'
import { Client } from '@/app/entities/Client';
import { routeListClient } from '@/backend/client';
import { useQuery, useQueryClient } from 'react-query';
import { useAuth } from '@/app/contexts/AuthContext';

interface ItemsProps {
  currentItems: Client[];
}

interface PaginatedItems {
  itemsPerPage: number
}

export default function Items({currentItems}: ItemsProps) {
  return (
    <>
    <ClientContainer>
      <TableContainer>
        <Table>
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>EMAIL</th>
                    <th>DOCUMENTO</th>
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
                        <td>{item.documento}</td>
                        <td>{String(new Date(item.data_reg).toLocaleDateString())}</td>
                        <td style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRight: 'none'}}>
                            <Link href={'/dashboard/clients/details?id=' + item.id}>
                                <ThreeDots src={threeDots.src} />
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
          </Table>
        </TableContainer>
      </ClientContainer>
    </>
  );
}

export function PaginatedItems({itemsPerPage}: PaginatedItems) {
  const [itemOffset, setItemOffset] = useState(0);
  const [clients, setClients] = useState<Client[]>([])
  const {userId} = useAuth()

  useQueryClient()

  const {data} = useQuery({
    queryKey: 'clientList',
    queryFn: async () => {
        const result = await routeListClient.request({}).then((clients) => {return clients.data})

        if(result !== undefined) {
          return result
        }
    },
    enabled: userId != undefined
  })



  // useEffect(() => {
  //   async function fetchData() {
  //       const {data} = await routeListClient.request({})
  //       data !== undefined && setClients(data)
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
        previousLinkClassName='flex justify-center w-full'
        nextLinkClassName='flex justify-center w-full'
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