'use client'

import React, { useState } from 'react';
import { ContactContent, EditIcon, DeleteIcon, Table, TableContainer } from '../styles';
import { CustomLabelPaginate } from '@/app/global/styles/style';
import trashIcon from '../../../assets/svg/icons/trash.svg'
import editIcon from '../../../assets/svg/icons/edit.svg'
import ContactModal from './modalEditContact';
import { routeDeleteContact, routeListContacts } from '@/backend/contact';
import { useQuery, useQueryClient } from 'react-query';
import { useAuth } from '@/app/contexts/AuthContext';
import { Loading } from '@/app/components/Loading';
import { Contact } from '@/app/entities/Contact';
import { toastSuccess } from '@/utils/toastify';

interface ItemsProps {
  currentItems: Contact[];
}

interface PaginatedItems {
  itemsPerPage: number
}

export default function Items({currentItems}: ItemsProps) {
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const [contact, setContact] = useState<Contact | undefined>()

    function handleOpenModalEdit(contact?: Contact) {
        setContact(contact)
        setIsOpenEdit(!isOpenEdit)
    }

    async function handleDeleteContact(contact?: Contact) {
       await routeDeleteContact.request({id: contact!.id}).then((data) => {
        toastSuccess('contato deletado com sucesso!')
        setInterval(() => {}, 1000)
        location.reload()
       })
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
          <tbody>
          {currentItems.length !== 0 &&
            currentItems.map((item) => (
                    <tr key={item.id}>
                        <td>{item.nome}</td>
                        <td>{item.email}</td>
                        <td>{item.celular}</td>
                        <td>{item.data_registro}</td>
                        <td style={{display: 'flex', gap: '10px', flexDirection: 'row', justifyContent: 'center'}}>
                            <EditIcon src={editIcon.src} onClick={() => {handleOpenModalEdit(item)}}/>
                            <DeleteIcon src={trashIcon.src} onClick={() => {handleDeleteContact(item)}}/>
                        </td>
                    </tr>
            ))}
          </tbody>
          </Table>
        </TableContainer>
        {isOpenEdit && (
            <ContactModal closeModal={handleOpenModalEdit} contact={contact}/>
        )}
      </ContactContent>
    </>
  );
}

export function PaginatedItems({itemsPerPage}: PaginatedItems) {
  const [itemOffset, setItemOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false)
  const {userId, token} = useAuth()

  useQueryClient()

  const {data} = useQuery({
    queryKey: 'contactList',
    queryFn: async () => {
        setIsLoading(true)

        const result = await routeListContacts.request({}).then((contacts) => {return contacts.data})
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
      {isLoading ? (
            <Loading isLoading={true} />
        ) : (
          <><Items currentItems={currentItems} /><CustomLabelPaginate
            activeClassName='bg-[#2a71be] text-white'
            className='mt-2'
            previousLinkClassName='flex justify-center w-full'
            nextLinkClassName='flex justify-center w-full'
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null} />
          </>
        )}
    </>
  );
}