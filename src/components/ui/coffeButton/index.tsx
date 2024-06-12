import {useState} from "react";
import {Button} from "../button";
import {Divider, Modal} from "@mantine/core";
import {h3cn} from "../typography";
import {cn} from "@/lib/utils";

type TProps = {
	target?: `general` | `money` | `periods` | `party`;
};

export default function CoffeButton({target}: TProps) {
	const [showModal, setShowModal] = useState(false);

	if (!target) target = `general`;

	const targetURL = {
		general: `https://pay.cloudtips.ru/p/6daac858`,
		money: `https://pay.cloudtips.ru/p/2c86c755`,
		periods: `https://pay.cloudtips.ru/p/cbe536c6`,
		party: `https://pay.cloudtips.ru/p/291fee3e`,
	};

	return (
		<>
			<Modal opened={showModal} onClose={() => setShowModal(false)} withCloseButton={false}>
				<div className={`flex flex-col space-y-5 justify-center items-center`}>
					<h3 className={cn(h3cn, `self-center`)}>Поддержать проект</h3>

					<Divider className={`w-full`} />

					<p className={`text-center`}>
						Весь проект абсолютно бесплатный, а потому я буду рад, если ты поддержишь меня
						материально
					</p>
					
					<a  className={`w-full`} href={targetURL[target]} target={`_blank`}>
						<Button variant={`default`} className={`w-full`}>
							Поддержать
						</Button>
					</a>
				</div>
			</Modal>

			<Button variant={`link`} className={`w-full`} onClick={() => setShowModal(true)}>
				Поддержать
			</Button>
		</>
	);
}
