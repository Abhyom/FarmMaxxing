import React from "react";
import { buttonVariants } from "@/components/ui/button";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import Cart from "@/components/Cart";
const Navbar = () => {
	const user = null;
	return (
		<div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
			<header className="relative bg-white ">
				<MaxWidthWrapper>
					<div className="border-b border-gray-200">
						<div className="flex h-16 items-center">
							{/* -------------------------- Link to the homepage -------------------------- */}
							<div className="ml-4 flex lg:ml-0">
								<Link href="/" className="text-black font-bold">
									Farm
									<span className="text-green-600">
										Maxxing
									</span>
								</Link>
							</div>

							{/* ---------------------------- Signin and Login ---------------------------- */}
							<div className="ml-auto flex items-center">
								<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
									{user ? null : (
										<Link
											href="/sign-in"
											className={buttonVariants({
												variant: "ghost",
												className:
													"rounded-[0.50rem] text-gray-900 ",
											})}
										>
											Sign in
										</Link>
									)}

									{user ? null : (
										<span
											className="h-6 w-px bg-gray-200"
											aria-hidden="true"
										/>
									)}

									<Link
										href="/sign-up"
										className={buttonVariants({
											variant: "ghost",
											className:
												"rounded-[0.50rem] text-gray-900 ",
										})}
									>
										Create account
									</Link>

									{user ? (
										<span
											className="h-6 w-px bg-gray-200"
											aria-hidden="true"
										/>
									) : null}

									{user ? null : (
										<div className="flex lg:ml-6">
											<span
												className="h-6 w-px bg-gray-200"
												aria-hidden="true"
											/>
										</div>
									)}

									<div className="ml-4 flow-root lg:ml-6">
										<Cart />
									</div>
								</div>
							</div>
						</div>
					</div>
				</MaxWidthWrapper>
			</header>
		</div>
	);
};

export default Navbar;
