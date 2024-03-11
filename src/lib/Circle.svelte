<script lang="ts">
    import { fade } from "svelte/transition";
    import { randRange } from "./utils";
    import { cubicIn, cubicOut } from "svelte/easing";

    export let fill: string;
    let r = randRange(100, 200);
    let innerHeight: number, innerWidth: number;
    let cx: number | null = null,
        cy: number | null = null;
    $: {
        // [cx, cy] = randAtEdge(0, 0, innerWidth, innerHeight, r + 25);
        if (innerWidth && innerHeight) {
            console.log(innerWidth, innerHeight);
            [cx, cy] = [randRange(0, innerWidth), randRange(0, innerHeight)];
        }
    }
</script>

<svelte:window bind:innerHeight bind:innerWidth />
{#if cx != null && cy != null}
    <circle
        in:fade={{ duration: 5000, easing: cubicOut }}
        {cx}
        {cy}
        {r}
        {fill}
        fill-opacity="0.5"
        filter="url(#grainyBlur)"
    />
{/if}
