'use client'

import Dashboardheader from "./components/DashboardHeader"
import { useState } from "react"
import SideMenu from "./components/DashboardSideMenu"

export default function Register({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [isOpen, setModalIsOpen] = useState(false)

    function handleCloseModal() {
        setModalIsOpen(!isOpen)
    }

    return (
        <div className="flex flex-row h-full w-full">
            <SideMenu isOpen={isOpen} closeSideMenu={handleCloseModal}/>
            <section className="max-h-[100vh] overflow-y-auto overflow-x-hidden grow p-3">
                <Dashboardheader closeModal={handleCloseModal} isOpen={isOpen}/>
                <hr />
                {children}
            </section>
        </div>
    )
}