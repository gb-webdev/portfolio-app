import Image from 'next/image'

import {
    Sheet,
    SheetTrigger,
    SheetTitle,
    SheetContent,
} from '@/components/ui/sheet'
import house from '@/1-assets/house.png'
import menu from '@/1-assets/menu-bar.png'
// import menuOpen from '@/1-assets/menu-open(1).png'

// TODO: Add links for navigation

const Header = () => {
    return (
        <div className="flex flex-row justify-between">
            <Image className="h-12 w-12 hidden md:block" alt="The home icon" src={house}/>
            <div className="hidden md:block">
                <div className="flex flex-row">
                    <h2>Experience</h2>
                    <h2>Toolkit</h2>
                    <h2>Projects</h2>
                    <h2>Contact</h2>
                </div>
            </div>
            <div className="min-md:hidden">
                <Sheet>
                    <SheetTrigger>
                        <Image className="h-12 w-12" alt="The menu icon" src={menu}/>
                    </SheetTrigger>
                    <SheetContent className="items-center text-center">
                        <SheetTitle>Menu</SheetTitle>
                        <div className="flex flex-col gap-2">
                            <h2>Experience</h2>
                            <h2>Toolkit</h2>
                            <h2>Projects</h2>
                            <h2>Contact</h2>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}

export default Header
