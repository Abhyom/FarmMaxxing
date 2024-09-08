"use client";
import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

export function FeaturesSectionDemo() {
	const features = [
		{
			title: "Secure Payment Processes",
			description:
				"Seamless and secure transactions within the platform.",
			skeleton: <SkeletonOne />,
			className:
				"col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
		},
		{
			title: "Trustworthy Transactions",
			description: "A market with only verified buyers and sellers.",
			skeleton: <SkeletonTwo />,
			className:
				"border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
		},
		{
			title: "Watch our Platform Demo on YouTube",
			description:
				"Whether you are a seller or a buyer, you can get to know about our product on YouTube",
			skeleton: <SkeletonThree />,
			className:
				"col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
		},
		{
			title: "Global Market Access",
			description:
				"Connect to a global market from anywhere, at any time.",
			skeleton: <SkeletonFour />,
			className: "col-span-1 lg:col-span-3 border-b lg:border-none",
		},
	];

	return (
		<div className="relative z-20 py-10  max-w-7xl mx-auto">
			<div className="px-8">
				<h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
					Packed with Essential Features
				</h4>
				<p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
					From Verified Buyers to Secure Payments, We’ve Got You
					Covered.
				</p>
			</div>

			<div className="relative">
				<div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
					{features.map((feature) => (
						<FeatureCard
							key={feature.title}
							className={feature.className}
						>
							<FeatureTitle>{feature.title}</FeatureTitle>
							<FeatureDescription>
								{feature.description}
							</FeatureDescription>
							<div className="h-full w-full">
								{feature.skeleton}
							</div>
						</FeatureCard>
					))}
				</div>
			</div>
		</div>
	);
}

const FeatureCard = ({
	children,
	className,
}: {
	children?: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
			{children}
		</div>
	);
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
	return (
		<p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
			{children}
		</p>
	);
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
	return (
		<p
			className={cn(
				"text-sm md:text-base max-w-4xl text-left mx-auto",
				"text-neutral-500 text-center font-normal dark:text-neutral-300",
				"text-left max-w-sm mx-0 md:text-sm my-2"
			)}
		>
			{children}
		</p>
	);
};

export const SkeletonOne = () => {
	return (
		<div className="relative flex py-8 px-2 gap-10 h-[50%]">
			<div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full ">
				<div className="flex flex-1 w-full h-full flex-col space-y-2">
					<Image
						src="/paymentDashboard.jpg"
						alt="header"
						className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
						width={800}
						height={800}
					/>
				</div>
			</div>
			<div className="absolute bottom-0 z-40 inset-x-0 h-36 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
			<div className="absolute top-0 z-40 inset-x-0 h-36 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
		</div>
	);
};

export const SkeletonThree = () => {
	return (
		<Link
			href="https://www.youtube.com"
			target="__blank"
			className="relative flex gap-10 h-full group/image"
		>
			<div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
				<div className="flex flex-1 w-full h-[50%] flex-col space-y-2 relative">
					<IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto" />
					<Image
						src="/logo4.png"
						alt="header"
						className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
						width={800}
						height={800}
					/>
				</div>
			</div>
		</Link>
	);
};

export const SkeletonTwo = () => {
	const images = [
		"/farmer1.jpg",
		"/farmer2.jpg",
		"/farmer3.jpg",
		"/farmer4.jpg",
		"/farmer5.jpg",
		"/farmer6.jpg",
	];

	const imageVariants = {
		whileHover: {
			scale: 1.1,
			rotate: 0,
			zIndex: 100,
		},
		whileTap: {
			scale: 1.1,
			rotate: 0,
			zIndex: 100,
		},
	};

	return (
		<div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
			<div className="flex flex-row -ml-20">
				{images.slice(0, 3).map((image, idx) => (
					<motion.div
						variants={imageVariants}
						key={"images-first" + idx}
						style={{
							rotate: Math.random() * 20 - 10,
						}}
						whileHover="whileHover"
						whileTap="whileTap"
						className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
					>
						<Image
							src={image}
							alt={`farmer image ${idx + 1}`}
							className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
							width="500"
							height="500"
						/>
					</motion.div>
				))}
			</div>

			<div className="flex flex-row">
				{images.slice(3, 6).map((image, idx) => (
					<motion.div
						key={"images-second" + idx}
						style={{
							rotate: Math.random() * 20 - 10,
						}}
						variants={imageVariants}
						whileHover="whileHover"
						whileTap="whileTap"
						className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
					>
						<Image
							src={image}
							alt={`farmer image ${idx + 1}`}
							className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
							width="500"
							height="500"
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export const SkeletonFour = () => {
	return (
		<div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
			<Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
		</div>
	);
};

export const Globe = ({ className }: { className?: string }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		let phi = 0;

		if (!canvasRef.current) return;

		const globe = createGlobe(canvasRef.current, {
			devicePixelRatio: 2,
			width: 600 * 2,
			height: 600 * 2,
			phi: 0,
			theta: 0,
			dark: 1,
			diffuse: 1.2,
			mapSamples: 16000,
			mapBrightness: 6,
			baseColor: [0.3, 0.3, 0.3],
			markerColor: [0.1, 0.8, 1],
			glowColor: [1, 1, 1],
			markers: [
				{ location: [37.7595, -122.4367], size: 0.03 },
				{ location: [40.7128, -74.006], size: 0.1 },
			],
			onRender: (state) => {
				// Called on every animation frame.
				// `state` will be an empty object, return updated params.
				state.phi = phi;
				phi += 0.01;
			},
		});

		return () => {
			globe.destroy();
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			style={{
				width: 600,
				height: 600,
				maxWidth: "100%",
				aspectRatio: 1,
			}}
			className={className}
		/>
	);
};
