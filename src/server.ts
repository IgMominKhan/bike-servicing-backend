import app from "./app";
import * as process from "node:process";

const PORT = process.env.PORT || 3000;


const startServer = () => {
    const server = app.listen(PORT, () => console.log(`Listening on ${PORT}`));


    server.addListener("uncaughtException", (err) => {
        console.error(err);
        process.exit(1);
    })

    server.addListener("SIGINT", () => {
        process.exit(0);
    })

}


function main() {
    startServer();
}

main()


