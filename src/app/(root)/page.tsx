import HeaderBox from '@/src/components/ui/HeaderBox'
import React from 'react'
import FinanceChart from '@/src/components/FinanceChart'
import Inventory from '@/src/components/Inventory'
import Finances from '@/src/components/Finances'
import AddItem from '@/src/components/AddItem'
import ChatBox from '@/src/components/ChatBox'

const Home = async () => {
  return (
    <section className="home">
        <div className="home-content">
            <HeaderBox 
                type="greeting"
                title="Welcome"
                user={"kelvin"}
                subtext="Manage your business finances"
            />
            <FinanceChart />
            <div className="flex justify-center items-center gap-4 h-[200px]">
                <Inventory />
                <Finances />
                <AddItem />
            </div>
            <ChatBox/>
        </div>
    </section>
  )
}

export default Home