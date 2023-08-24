import path from "path";

export default defineNuxtConfig({
    devtools: { enabled: false },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/main.scss";',
                },
            },
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./"),
                "~": path.resolve(__dirname, "./"),
            },
        },
        optimizeDeps: {
            exclude: ["js-big-decimal"],
        },
    },
});
