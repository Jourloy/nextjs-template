import {Button, NumberInput, Select, createTheme} from "@mantine/core";

export const theme = createTheme({
	defaultRadius: `md`,
	components: {
		Button: {
			defaultProps: {
				color: `black`,
			},
		},
		ActionIcon: {
			defaultProps: {
				color: `black`,
			},
		},
		Input: {
			classNames: {
				input: `outline-0 transition-all duration-200 hover:border-[black]/40 focus:border-black`,
			},
		},
	},
});
