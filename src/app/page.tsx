import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check } from "lucide-react";
import { FeaturesSectionDemo } from "@/components/FeaturesSectionDemo";
import { ProductReel } from "@/components/ui/ProductReel";

export default function Home() {
  return (
    <div>
      {/* -------------------------------------------------------------------------- */
      /*                                Hero Section                                */
      /* -------------------------------------------------------------------------- */}
      <section>
        <div className="h-full w-full relative flex items-center justify-center">
          <MaxWidthWrapper className="pb-20 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
            {/* ------------------------------ Heading Texts ----------------------------- */}
            <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
              <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className="absolute w-40 -left-20 -top-32 hidden lg:block -rotate-6">
                  <img src="/logo2.png" alt="" className="w-full" />
                </div>
                <h1 className="relative w-fit tracking-tight text-balance mt-0 font-bold !leading-tight text-black text-5xl md:text-6xl lg:text-7xl">
                  <span className=" text-[#006400] ">FarmMaxxing</span> <br />
                  <span className="pr-4"> Maximizing</span>
                  <span className="bg-light-purple px-2 text-slate-900">
                    Farmers'
                  </span>{" "}
                  <span className="bg-[#FFA500] text-slate-900">
                    {" "}
                    Opportunities.
                  </span>
                </h1>
                <p className="mt-8 lg:text-xl text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap text-[#4A3F35] font-medium">
                  A b2b digital marketplace where fair food trade is made easy,
                  fast and transparent!{" "}
                </p>
                <ul className="mt-8 space-y-2 text-xl text-left font-medium flex flex-col items-center sm:items-start">
                  <div className="space-y-2">
                    <li className="flex gap-1.5 items-center text-left text-green-700">
                      <Check
                        className="h-5
											w-5
											shrink-0
											text-green-700"
                      />{" "}
                      Buy directly from farmers
                    </li>
                    <li className="flex gap-1.5 items-center text-left text-green-700">
                      <Check
                        className="h-5
											w-5
											shrink-0
											text-green-700"
                      />{" "}
                      Agrofoods sellers and buyers from all over India
                    </li>
                    <li className="flex gap-1.5 items-center text-left text-green-700">
                      <Check
                        className="h-5
											w-5
											shrink-0
											text-green-700"
                      />{" "}
                      Request your desired supply
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            {/* ------------------------------- Hero Image ------------------------------- */}
            <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-24 lg:mx-0 lg:mt-12 h-fit">
              <div className=" md:max-w-xl z-20">
                <div className="pointer-events-none overflow-hidden xl:w-[32rem] mb-0">
                  <img
                    src="heroLogo.jpg"
                    alt=""
                    className="pointer-events-none select-none border border-black  rounded-md ml-10"
                  />
                </div>
              </div>
            </div>
            {/* ;ist of product on home page */}
            <ProductReel />
          </MaxWidthWrapper>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */
      /*                              Features Section                              */
      /* -------------------------------------------------------------------------- */}
      <FeaturesSectionDemo />
    </div>
  );
}
