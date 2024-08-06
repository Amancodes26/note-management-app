import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import stickyNoteIcon from "../../utils/icons/sticky-note.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import userProfile from "../../utils/icons/user-profile.svg";

export default function Navbar() {
    const [loggedIn, setLoggedIn] = useState(true);

    useEffect(() => {
        setLoggedIn(localStorage.getItem("loggedIn"));
    }, [])

    return (
        <Disclosure as="nav" className="bg-gray-800 max-h-[64px]">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            aria-hidden="true"
                                            className="block h-6 w-6"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            aria-hidden="true"
                                            className="block h-6 w-6"
                                        />
                                    )}
                                </DisclosureButton>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link to="/">
                                        <img
                                            alt="Your Company"
                                            src={stickyNoteIcon}
                                            className="h-10 w-auto"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        <Link
                                            to="/"
                                            aria-current="page"
                                            className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">
                                            Dashboard
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">
                                                Open user menu
                                            </span>
                                            <img
                                                src={
                                                    loggedIn
                                                        ? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                        : userProfile
                                                }
                                                alt={
                                                    loggedIn
                                                        ? ""
                                                        : "user-profile"
                                                }
                                                className="h-8 w-8 rounded-full bg-white"
                                            />
                                        </MenuButton>
                                    </div>
                                    {loggedIn ? (
                                        <MenuItems
                                            transition
                                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition-transform transform-gpu duration-200 ease-out">
                                            <MenuItem>
                                                <a
                                                    href="/"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200 last:border-b-0">
                                                    Your Profile
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    href="/"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200 last:border-b-0">
                                                    Settings
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    href="/"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200 last:border-b-0">
                                                    Sign out
                                                </a>
                                            </MenuItem>
                                        </MenuItems>
                                    ) : (
                                        <MenuItems
                                            transition
                                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition-transform transform-gpu duration-200 ease-out">
                                            <MenuItem>
                                                <Link
                                                    to="/login"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200 last:border-b-0">
                                                    Login
                                                </Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link
                                                    to="/signup"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200 last:border-b-0">
                                                    Signup
                                                </Link>
                                            </MenuItem>
                                        </MenuItems>
                                    )}
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel
                        className={`sm:hidden transition-transform transform-gpu duration-200 ease-out ${
                            open
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-full opacity-0"
                        }`}>
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <Link
                                to="/dashboard"
                                aria-current="page"
                                className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium">
                                Dashboard
                            </Link>
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}
