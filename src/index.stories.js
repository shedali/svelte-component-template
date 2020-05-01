import { action } from "@storybook/addon-actions";

import App from "./components/Component.svelte";

export default {
	title: "App"
};

export const text = () => ({
	Component: App,
	props: { text: "Hello App" },
	on: { click: action("clicked") }
});

