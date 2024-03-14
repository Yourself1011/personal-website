import { randRange } from "$lib/utils";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        circles: ["#FF0000", "#00FF00", "#0000FF"]
            .sort(() => Math.random() - 0.5)
            .map((fill) => {
                return {
                    fill,
                    r: randRange(100, 200),
                    cx: `${randRange(0, 100)}%`,
                    cy: `${randRange(0, 200 / 3)}%`,
                };
            }),
    };
};
