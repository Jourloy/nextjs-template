import {StoryObj} from "@storybook/react";
import {blockquotecn, codecn, h1cn, h2cn, h3cn, h4cn, largecn, leadcn, mutedcn, pcn, smallcn} from ".";

const meta = {
	title: "Typography",
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
	render: () => <h1 className={h1cn}>H1</h1>,
};

export const H2: Story = {
	render: () => <h2 className={h2cn}>H2</h2>,
};

export const H3: Story = {
	render: () => <h3 className={h3cn}>H3</h3>,
};

export const H4: Story = {
	render: () => <h4 className={h4cn}>H4</h4>,
};

export const P: Story = {
	render: () => <p className={pcn}>P</p>,
};

export const Blockquote: Story = {
	render: () => <blockquote className={blockquotecn}>Blockquote</blockquote>,
};

export const Code: Story = {
	render: () => <code className={codecn}>Code</code>,
};

export const Lead: Story = {
	render: () => <p className={leadcn}>Lead</p>,
};

export const Large: Story = {
	render: () => <div className={largecn}>Large</div>,
};

export const Small: Story = {
	render: () => <small className={smallcn}>Small</small>,
};

export const Muted: Story = {
	render: () => <p className={mutedcn}>Muted</p>,
};