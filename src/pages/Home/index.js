import { SideNav, LayoutSidebar } from "upkit"
import menus from "./menus"

export default function Home() {
    return (
        <>
            <LayoutSidebar 
                sidebar={<SideNav items={menus} verticalAlign="top" />} 
                content={
                    <div className="md:flex md:flex-row-reverse w-full mr-5 h-full min-h-screen">
                        <div className="w-full md:w-3/4 pl-5 pb-10">
                            Konten Utama di sini
                        </div>    

                        <div className="w-full md:w-1/4 h-full shadow-lg border-r border-white bg-gray-100">
                            Keranjang Belanja di sini
                        </div>   
                    </div>
                }
                sidebarSize={80}
            />
        </>
    )
}