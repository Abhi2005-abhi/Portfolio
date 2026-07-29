import { build } from 'vite';
import fs from 'fs';

async function runBuild() {
    try {
        await build();
        console.log("BUILD SUCCESS");
    } catch (e) {
        console.error("BUILD FAILED");
        fs.writeFileSync('error.json', JSON.stringify({
            message: e.message,
            code: e.code,
            frame: e.frame,
            id: e.id,
            loc: e.loc,
            errors: e.errors || []
        }, null, 2));
    }
}

runBuild();
