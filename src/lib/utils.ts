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
