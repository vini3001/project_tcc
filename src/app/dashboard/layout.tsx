'use client'

import Dashboardheader from "./components/DashboardHeader"
import { Suspense, useEffect, useState } from "react"
import SideMenu from "./components/DashboardSideMenu"
import { Loading } from "../components/Loading"

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
        <section className="flex flex-row h-full w-full">
            <SideMenu isOpen={isOpen} minSize={screenMin} closeSideMenu={handleCloseModal}/>
            <section className="max-h-[100vh] overflow-y-auto grow p-3">
                <Dashboardheader closeModal={handleCloseModal} isOpen={isOpen}/>
                <hr />
                <Suspense fallback={<Loading isLoading={true} />}>
                    {children}
                </Suspense>
            </section>
        </section>
    )
}