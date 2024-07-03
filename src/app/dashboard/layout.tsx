'use client'

import Dashboardheader from "./components/DashboardHeader"
import { useState } from "react"
import SideMenu from "./components/DashboardSideMenu"
import { withSSRAuth } from "@/utils/withSSRAuth"

export default function Register({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [isOpen, setModalIsOpen] = useState(false)
    const [screenMin, setScreenMin] = useState(false)

    function handleCloseModal() {
        setModalIsOpen(!isOpen)
        setScreenMin(!screenMin)
    }

    return (
        <div className="flex flex-row h-full w-full">
            <SideMenu isOpen={isOpen} minSize={screenMin} closeSideMenu={handleCloseModal}/>
            <section className="max-h-[100vh] overflow-y-auto grow p-3">
                <Dashboardheader closeModal={handleCloseModal} isOpen={isOpen}/>
                <hr />
                {children}
            </section>
        </div>
    )
}