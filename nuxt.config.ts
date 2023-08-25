import path from "path";

export default defineNuxtConfig({
    app: {
        head: {
            meta: [{ charset: "utf-8" }],
            script: [
                `https://api-maps.yandex.ru/2.1/?apikey=4527957f-27ed-4acf-9782-2a4ed1c7ffd4&lang=ru_RU`,
            ],
        },
    },
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
