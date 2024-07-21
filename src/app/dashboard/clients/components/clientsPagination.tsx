'use client'

import React, { useEffect, useState } from 'react';
import { ClientContainer, Table, TableContainer, ThreeDots } from '../styles';
import { CustomLabelPaginate } from '@/app/global/styles/style';
import Link from 'next/link';
import threeDots from '../../../assets/svg/icons/threeDots.svg'
import { Client } from '@/app/entities/Client';
import { routeListClient } from '@/backend/client';

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

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
                    <th>PLANO</th>
                    <th>DATA DE CADASTRO</th>
                    <th style={{borderRight: 'none'}}>AÇÕES</th>
                </tr>
            </thead>
          {currentItems &&
            currentItems.map((item) => (
                <tbody key={item.id}>
                    <tr>
                        <td>{item.nome}</td>
                        <td>{item.email}</td>
                        <td>{item.documento}</td>
                        <td>{item.telefone}</td>
                        <td style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRight: 'none'}}>
                            <Link href={'/dashboard/clients/details?id=' + item.id}>
                                <ThreeDots src={threeDots.src} />
                            </Link>
                        </td>
                    </tr>
                </tbody>
            ))}
          </Table>
        </TableContainer>
      </ClientContainer>
    </>
  );
}

export function PaginatedItems({itemsPerPage}: PaginatedItems) {
  const [itemOffset, setItemOffset] = useState(0);
  const [clients, setClients] = useState<Client[]>([])


  useEffect(() => {
    async function fetchData() {
        const {data} = await routeListClient.request({})
        data !== undefined && setClients(data)
    }

    fetchData()
  }, [])

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = clients.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(clients.length / itemsPerPage);

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