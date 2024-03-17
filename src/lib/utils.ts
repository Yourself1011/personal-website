export function randRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

export function randAtEdge(
    xMin: number,
    yMin: number,
    xMax: number,
    yMax: number,
    r: number
): number[] {
    switch (Math.floor(randRange(0, 4))) {
        case 0:
            return [xMin - r, randRange(yMin, yMax)];
        case 1:
            return [randRange(xMin, xMax), yMin - r];
        case 2:
            return [xMax + r, randRange(yMin, yMax)];
        case 3:
            return [randRange(xMin, xMax), yMax + r];
        default:
            return [];
    }
}

const CHAR_RANGE = {
    emoticons: [0x1f600, 0x1f64f],
    food: [0x1f32d, 0x1f37f],
    animals: [0x1f400, 0x1f4d3],
    expressions: [0x1f910, 0x1f92f],
};

export const randomEmoji = function (): string {
    let max = 0;
    for (const range of Object.values(CHAR_RANGE)) {
        max += range[1] - range[0];
    }

    let n = Math.floor(Math.random() * max);

    for (const range of Object.values(CHAR_RANGE)) {
        if (range[1] - range[0] > n) {
            return String.fromCodePoint(range[0] + n);
        }
        n -= range[1] - range[0];
    }

    return "";
};
