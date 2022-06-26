import { useState } from "react";
import { Transition } from "@headlessui/react";
import  Link  from "next/link";

function Mobile() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav className=" w-full z-50 xs:visible hidden xs:block md:invisible">
				<div className="w-full mt-4">
					<div className="flex justify-end items-center ">
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="inline-flex items-center justify-center p-2 rounded-md text-white  "
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div ref={ref} className=" px-2  pt-2 pb-3 space-y-1 sm:px-3">
								<div className="bg-white rounded-lg px-4 py-4 text-black">
                                    <Link href="/WhoWeAre">
                                        <h1 className="cursor-pointer hover:bg-blue-500 rounded-lg hover:text-white">Who We Are</h1>
                                    </Link>
                                    <Link href="/WhatWeDo">
                                        <h1 className="cursor-pointer hover:bg-blue-500 rounded-lg hover:text-white">What we do</h1>
                                    </Link>
                                    <Link href="/Products">
                                        <h1  className="cursor-pointer hover:bg-blue-500 rounded-lg hover:text-white">Products</h1>
                                    </Link>
                                    <Link href="/WorkWithUs">
                                        <h1  className="cursor-pointer hover:bg-blue-500 rounded-lg hover:text-white">Work with us</h1>
                                    </Link>
                                    <Link href="/Contact">
                                        <h1  className="cursor-pointer hover:bg-blue-500 rounded-lg hover:text-white">Contact</h1>
                                    </Link>
                                </div>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Mobile;