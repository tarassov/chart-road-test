import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import pluginRewriteAll from "vite-plugin-rewrite-all";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		pluginRewriteAll(), //Vite plugin that fix dev server not rewriting the path includes a dot. https://www.npmjs.com/package/vite-plugin-rewrite-all
		react(),
		tsconfigPaths(),
	],
	base: "/chart-road-test/",
});
