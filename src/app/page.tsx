import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
	return (
		<div>
			{/* -------------------------------------------------------------------------- */
			/*                                Hero Section                                */
			/* -------------------------------------------------------------------------- */}
			<section>
				<div className="h-full w-full relative flex items-center justify-center">
					<MaxWidthWrapper className="pb-20 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
						<div className="col-span-2 px-6 lg:px-0 lg:pt-4">
							<div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
								<div className="absolute w-40 -left-16 -top-32 hidden lg:block -rotate-12">
									<img
										src="/logo2.png"
										alt=""
										className="w-full"
									/>
								</div>
								<h1 className="relative w-fit tracking-tight text-balance mt-0 font-bold !leading-tight text-black text-5xl md:text-6xl lg:text-7xl">
									<span className=" text-[#006400] ">
										FarmMaxxing
									</span>{" "}
									<br />
									<span className="pr-4"> Maximizing</span>
									<span className="bg-light-purple px-2 text-slate-900">
										Farmers'
									</span>{" "}
									<span className="bg-[#FFA500] text-slate-900">
										{" "}
										Opportunities.
									</span>
								</h1>
							</div>
						</div>
					</MaxWidthWrapper>
				</div>
			</section>
		</div>
	);
}
