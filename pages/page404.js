import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function page404() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head('404', ['main', 'header'])}
        <body>
            ${header()}

            <main>
                <h1>404</h1>
                <h2>Norimas puslapis nerastas</h2>
                <p>Eiti i <a href="/">pagrindini puslapi</a></p>
            </main>

            ${footer()}
        </body>
        </html>`;
}

