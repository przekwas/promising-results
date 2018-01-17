async function newVersion(x, y) {
    try {
        const a = await slowMath.add(x, y);
        const b = await slowMath.multiply(a, 2);
        const c = await slowMath.divide(b, 4);
        const d = await slowMath.subtract(c, 3);
        const e = await slowMath.add(d, 98);
        const f = await slowMath.remainder(e, 2);
        const g = await slowMath.multiply(f, 50);
        const h = await slowMath.remainder(g, 40);
        const i = await slowMath.add(h, 32);
        return console.log(`Getting ${i} was so much easier in ES2017!`);
    }
    catch (err) {
        console.log(`Error: ${err}`);
    }
}

newVersion(6, 2);