import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/dates/styles.css";
import type {Metadata} from "next";
import {Inter as FontSans} from "next/font/google";
import {cn} from "@/lib/utils";
import {Toaster} from "@/components/ui/toaster";
import {MantineProvider} from "@mantine/core";
import {theme} from "@/lib/theme";
import {DatesProvider} from "@mantine/dates";
import ru from "dayjs/locale/ru";
import dayjs from "dayjs";

dayjs.locale(`ru`, {
	...ru,
	weekStart: 1,
});

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "NextJS Шаблон",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang={`ru`}>
			<body className={cn(`min-h-screen bg-background font-sans antialiased`, fontSans.variable)}>
				<DatesProvider
					settings={{locale: `ru`, firstDayOfWeek: 1, weekendDays: [0, 6], timezone: `UTC`}}
				>
					<MantineProvider theme={theme}>{children}</MantineProvider>
				</DatesProvider>
				<Toaster />
			</body>
		</html>
	);
}
