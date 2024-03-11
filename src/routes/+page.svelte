<script>
    import Circle from "$lib/Circle.svelte";
</script>

<main>
    <section class="h-dvh w-dvw flex justify-center items-center">
        <svg
            width="100%"
            height="150%"
            class="absolute w-full h-[150%] top-0 -z-10"
        >
            <defs>
                <filter
                    id="grainyBlur"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                >
                    <feGaussianBlur stdDeviation="25" result="blur" />
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.25"
                        numOctaves="3"
                        stitchTiles="stitch"
                        result="noise"
                    />
                    <feComposite
                        operator="in"
                        in="blur"
                        in2="fractalNoise"
                        result="masked"
                    />
                    <feBlend in="blur" in2="masked" mode="multiply" />
                </filter>
            </defs>

            {#each ["#FF0000", "#00FF00", "#0000FF"] as n}
                <Circle fill={n} />
            {/each}
        </svg>
        <div>
            <h1>Daniel Zhang</h1>
        </div>
    </section>
    <section class="p-16">
        <h2>Highlights</h2>
    </section>
</main>
