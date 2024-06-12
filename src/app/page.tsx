import {Card} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {IconBrandDiscord, IconBrandTwitch, IconBrandGithub} from "@tabler/icons-react";
import {h1cn, pcn} from "@/components/ui/typography";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {ActionIcon, Button} from "@mantine/core";

export default function Home() {
	return (
		<div className="h-[100dvh] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.3] relative flex items-center justify-center">
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			<div className={`max-w-[850px] w-full grid grid-cols-12 gap-5 justify-items-center z-20`}>
				<div className={`col-span-7 md:col-span-4 md:block`}>
					<Image
						src={`/me.png`}
						alt={`me`}
						width={500}
						height={500}
						className={`rounded-xl shadow-lg`}
					/>
				</div>

				<div className={`col-span-5 md:col-span-5 flex flex-col h-full w-full space-y-5`}>
					<Card className={`flex flex-col h-full w-full space-y-5`}>
						<h1 className={cn(h1cn)}>Шаблон</h1>
						<Separator />
						<p className={cn(pcn)}>NextJS + MantineUI + Shadcn</p>
					</Card>

					<a
						target={`_blank`}
						href={`https://github.com/Jourloy/nextjs-template`}
						className={`w-full`}
					>
						<Button fullWidth>Огонь</Button>
					</a>
				</div>

				<Card
					className={`col-span-12 md:col-span-3 w-full flex flex-col justify-center space-y-5`}
				>
					<div className={`flex space-x-3 justify-center`}>
						<a href={`https://discord.gg/PB8rdcXyRR`}>
							<ActionIcon variant={`subtle`}>
								<IconBrandDiscord color={`#5865F2`} />
							</ActionIcon>
						</a>

						<a href={`https://twitch.tv/jourloy`}>
							<ActionIcon variant={`subtle`}>
								<IconBrandTwitch color={`#6441A4`} />
							</ActionIcon>
						</a>

						<a href={`https://github.com/jourloy`}>
							<ActionIcon variant={`subtle`}>
								<IconBrandGithub color={`#000000`} />
							</ActionIcon>
						</a>
					</div>

					<Separator />

					<p className={cn(pcn, `text-center`)}>jourloy@yandex.ru</p>
				</Card>
			</div>
		</div>
	);
}
