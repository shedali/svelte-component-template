import { configure } from "@storybook/svelte";

configure(require.context("../src", true, /\.stories\.ts$/), module);
