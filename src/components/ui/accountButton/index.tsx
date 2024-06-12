"use client";

import {useUserStore} from "@/lib/storage/user";
import {Button} from "../button";
import {useEffect} from "react";
import {AccountAPI} from "@/app/auth/api";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {h3cn} from "../typography";

type TProps = {
	redirect?: string;
};

export default function AccountButton({redirect}: TProps) {
	if (!redirect) redirect = `+`;

	const api = new AccountAPI();
	const userStore = useUserStore();

	const user = userStore.user!;

	useEffect(() => {
		const source = api.getSource();

		if (!userStore.user) {
			api.getMe(source.token)
				.then(d => {
					userStore.setUser(d.data.account);
					return;
				})
				.catch(() => {});
		}

		return () => {
			source.cancel();
		};
	}, []);

	if (!user) {
		return (
			<Link href={`/auth/login?redirect=${redirect}`}>
				<Button variant={`link`} className={`p-0`}>
					<h3 className={cn(h3cn, `text-[20px]`)}>Войти</h3>
				</Button>
			</Link>
		);
	}

	return (
		<>
			<Link href={`/account`}>
				<Button variant={`link`} className={`p-0`}>
					<h3 className={cn(h3cn, `text-[20px]`)}>{user.username}</h3>
				</Button>
			</Link>
		</>
	);
}
