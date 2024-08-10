"use client";
import { Mail, Instagram } from "lucide-react";
import Link from "next/link";

import { Card } from "@/components/ui/card";


const socials = [
	{
		icon: <Mail size={20} />,
		href: "mailto:samira.vignola@onepoint55.com",
		label: "Geschäfstführerin",
		handle: "samira.vignola @onepoint55.com",
	},
	{
		icon: <Instagram size={20} />,
		href: "https://instagram.com/onepoint55ventures",
		label: "Instagram",
		handle: "@onepoint55ventures",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:info@onepoint55.com",
		label: "Email",
		handle: "info@onepoint55.com",
	},
];

export default function ContactSection() {
	return (
		//bg-gradient-to-tl from-primary-foreground to-primary
		<div className=" bg-gradient-to-tl from-primary-foreground to-primary">
			
			<div id="contact" className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s, index) => (
						//"bg-gradient-to-tl from-primary-foreground to-primary"
						<Card key={index} className="bg-gradient-to-br from-background to-secondary-foreground">
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-accent via-primary to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-accent group-hover:text-white group-hover:bg-foreground border-zinc-500 bg-secondary group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display bg-black/60 backdrop-blur-sm rounded-lg">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-muted group-hover:text-secondary group-hover:text-xl">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>

				
			</div>


		</div>
	);
}
