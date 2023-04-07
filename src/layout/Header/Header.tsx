import logo from "../../assets/logo.png";
import { HomeIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import { FolderIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";

const Header = () => {
    const menuItems = [
        {
            id: 1,
            name: "Home",
            link: "/",
        },
        {
            id: 2,
            name: "About",
            link: "/about",
        },
        {
            id: 3,
            name: "Portfolio",
            link: "/portfolio",
        },
        {
            id: 4,
            name: "Contact",
            link: "/contact",
        },
    ];
    return (
        <header>
            <div className="hidden container h-[75px] md:flex items-center justify-between py-[10px]">
                <ul className="flex items-center justify-between gap-2">
                    {menuItems.map((item) => (
                        <>
                            <li
                                className="flex items-center justify-between font-normal uppercase md:text-[14px] lg:text-[12px] py-[13px] px-[20px] cursor-pointer hover:text-skin-primary hover:scale-125 transition duration-300"
                                key={item.id}
                            >
                                {item.name}
                            </li>
                            <span key={item.name}>|</span>
                        </>
                    ))}
                </ul>
                <div>
                    <img src={logo} alt="hamid asadi" className="w-[188px]" />
                </div>
            </div>
            <div className="fixed w-[400px] p-5 -translate-x-1/2 mobileMenu bottom-4 left-1/2 md:hidden">
                <div className="relative flex items-center justify-between text-skin-primary">
                    <div>
                        <HomeIcon className="w-7 h-7" />
                    </div>
                    <div>
                        <UserIcon className="w-7 h-7" />
                    </div>
                    <div>
                        <Bars3Icon className="absolute flex items-center justify-center w-12 h-12 p-1 -translate-x-1/2 bg-white rounded-full -top-9 left-1/2" />
                    </div>
                    <div>
                        <FolderIcon className="w-7 h-7" />
                    </div>
                    <div>
                        <PhoneIcon className="w-7 h-7" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
