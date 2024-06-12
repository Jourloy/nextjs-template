import {Meta, StoryObj} from "@storybook/react";
import {Card} from ".";

const meta = {
	title: "layout/Card",
	component: Card,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => <Card className={`p-5`}>Это карточка</Card>,
};

export const Dark: Story = {
	render: () => <Card className={`dark p-5`}>Это карточка</Card>,
};
