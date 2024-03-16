<script lang="ts">
    import Circle from "$lib/Circle.svelte";
    import MoreProjects from "$lib/MoreProjects.svelte";
    import Project from "$lib/Project.svelte";
    import Replit from "$lib/icons/Replit.svelte";
    import type { PageData } from "./$types";
    import BiGithub from "~icons/bi/github";
    import BiYoutube from "~icons/bi/youtube";

    export let data: PageData;
</script>

<main>
    <section class="relative h-dvh flex justify-center items-center z-10">
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

            {#each data.circles as { fill, cx, cy, r }}
                <Circle {fill} {cx} {cy} {r} />
            {/each}
        </svg>
        <div>
            <h1>Daniel Zhang</h1>
        </div>
    </section>
    <section
        class="bg-gradient-to-b from-black via-slate-950 to-black relative"
    >
        <h2 class="my-8">Highlights</h2>
        <Project
            title="Ultimate Fluid Sim"
            description="Ultimate Fluid Sim is a fluid simulation that makes use of the Smoothed Particle Hydrodynamics method. Built from scratch, it is capable of simulating multiple liquids with different viscosities and densities, gasses, and interactions with solids. It features many optimizations to speed up the simulation, such as positional hashing. It uses the Runge-Kutta 4th order integration method, rather than the Explicit Euler method, which allows for much greater simulation accuracy."
            imgPaths={[
                "/ultimateFluidSim/img1.png",
                "/ultimateFluidSim/img2.png",
                "/ultimateFluidSim/img3.png",
            ]}
            buttons={[
                {
                    icon: BiGithub,
                    href: "https://github.com/Yourself1011/Ultimate_Fluid_Sim",
                    style: "bg-[#21262d]",
                },
            ]}
            locations={[
                "top-1 -translate-x-[125%]",
                "top-1/2",
                "bottom-0 translate-x-[25%]",
            ]}
            techs={[
                {
                    name: "Processing",
                    icon: "/logos/processing.png",
                    url: "https://processing.org",
                },
            ]}
        />
        <Project
            title="Ant Colonies"
            description="An implementation of Kenneth Stanley's NeuroEvolution of Augmenting Topologies (NEAT). In this implementation, ant colonies compete against each other for food. The best colonies produce similar colonies, making the colonies progressively better. It is able to simulate fighting, food, pheromones, offspring, and nest raids."
            imgPaths={[
                "/antColonies/img1.png",
                "/antColonies/img2.png",
                "/antColonies/img3.png",
            ]}
            buttons={[
                {
                    icon: BiGithub,
                    href: "https://github.com/Yourself1011/Ant-Colonies",
                    style: "bg-[#21262d]",
                },
            ]}
            locations={[
                "top-0 translate-x-[25%]",
                "top-1/2",
                "bottom-0 -translate-x-[125%]",
            ]}
            techs={[
                {
                    name: "Processing",
                    icon: "/logos/processing.png",
                    url: "https://processing.org",
                },
            ]}
        />
        <Project
            title="motus."
            description="A wheelchair controlled with your eyes, submitted to Hack the North 2023. All circuitry, code, and construction was built in the span of 34 hours, from an office chair and provided eye-tracking glasses."
            imgPaths={[
                "/motus/img1.jpeg",
                "/motus/img2.jpeg",
                "/motus/img3.jpeg",
            ]}
            buttons={[
                {
                    icon: BiGithub,
                    href: "https://github.com/Yourself1011/Ant-Colonies",
                    style: "bg-[#21262d]",
                },
                {
                    icon: BiYoutube,
                    href: "https://youtu.be/Tf0Y2ini0Mw",
                    style: "bg-[#ED3833]",
                },
            ]}
            locations={[
                "top-0 -translate-x-[125%]",
                "top-1/2",
                "bottom-0 translate-x-[25%]",
            ]}
            techs={[
                {
                    name: "Python",
                    icon: "/logos/python.png",
                    url: "https://python.org",
                },
                {
                    name: "c++",
                    icon: "/logos/c++.png",
                    url: "https://python.org",
                },
            ]}
        />
        <Project
            title="Mr. V Simulator"
            description="Mr. V Simulator is a first person stamper game (because g*ns are not school appropriate). It uses a 3D engine built from scratch, which uses raycasting. Navigate through a maze, and make it to the next level, while stamping assignments with Mr. V's stamp of approval. Make sure not to let the assignments get too close! The maze generation algorithm is entirely original. Your score increases with every assignment stamped, based on your current level."
            imgPaths={[
                "/mrVSimulator/img1.png",
                "/mrVSimulator/img2.png",
                "/mrVSimulator/img3.png",
            ]}
            buttons={[
                {
                    icon: BiGithub,
                    href: "https://github.com/Yourself1011/Ant-Colonies",
                    style: "bg-[#21262d]",
                },
                {
                    icon: Replit,
                    href: "https://replit.com/@DanielZhang3/Mr-V-Simulator",
                    style: "bg-[#EF6236]",
                },
            ]}
            locations={[
                "top-0 -translate-x-[125%]",
                "top-1/2",
                "bottom-0 translate-x-[25%]",
            ]}
            techs={[
                {
                    name: "Python",
                    icon: "/logos/python.png",
                    url: "https://python.org",
                },
            ]}
        />
    </section>
    <section class="md:p-16 py-16 px-4">
        <h2 class="mb-8">More Projects</h2>
        <div
            class="max-w-4xl mx-auto rounded-lg border-[#4B4B4B] border-[1px] overflow-clip leading-none"
        >
            <div class="w-full p-2 bg-[#37333B] flex flex-row gap-2">
                <div class="rounded-full bg-red-500 h-3 w-3"></div>
                <div class="rounded-full bg-yellow-500 h-3 w-3"></div>
                <div class="rounded-full bg-green-500 h-3 w-3"></div>
            </div>
            <div
                class="w-full h-[48rem] bg-[#1E1E1E] p-2 font-mono text-lime-400"
            >
                <span class="text-slate-400">
                    danielzhang@Daniels-MacBook-Air ~/dev>
                </span>
                ls<br />
                Use arrow keys or click to navigate
                <MoreProjects />
            </div>
        </div>
    </section>
</main>
