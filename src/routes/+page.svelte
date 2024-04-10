<script lang="ts">
    import Circle from "$lib/Circle.svelte";
    import Project from "$lib/Project.svelte";
    import Replit from "$lib/icons/Replit.svelte";
    import type { PageData } from "./$types";
    import SvelteIcon from "~icons/logos/svelte-icon";
    import BiGithub from "~icons/bi/github";
    import BiYoutube from "~icons/bi/youtube";
    import BiLinkedin from "~icons/bi/linkedin";
    import BiFileEarmarkTextFill from "~icons/bi/file-earmark-text-fill";
    import BiEnvelopeFill from "~icons/bi/envelope-fill";
    import { randomEmoji } from "$lib/utils";
    import Terminal from "$lib/Terminal.svelte";

    export let data: PageData;

    let scrolled = false;
</script>

<svelte:head>
    <title>Daniel Zhang</title>
    <meta
        name="description"
        content="The software development portfolio website for Daniel Zhang"
    />
</svelte:head>

<main on:scroll={() => (scrolled = true)}>
    <section class="relative h-dvh flex justify-center items-center z-10" id="splash">
        {#each data.circles as { fill, cx, cy, r }}
            <svg
                width="100%"
                height="150%"
                class="absolute w-full h-[150%] top-0 left-0 right-0 bottom-0"
            >
                <Circle {fill} {cx} {cy} {r} />
            </svg>
        {/each}
        <div>
            <h1>Daniel Zhang</h1>
            <div
                class="flex justify-center md:text-5xl text-2xl {scrolled
                    ? 'opacity-100'
                    : 'opacity-0'} transition-opacity duration-1000 ease-in-out"
            >
                <div class="px-8">
                    <a href="https://github.com/Yourself1011" target="_blank">
                        <BiGithub />
                    </a>
                </div>
                <div class="px-8 border-l-[1px] border-l-slate-800">
                    <a href="https://www.linkedin.com/in/daniel-zhang-0770a0249/" target="_blank">
                        <BiLinkedin />
                    </a>
                </div>
                <div class="px-8 border-l-[1px] border-l-slate-800">
                    <a
                        href="https://drive.google.com/file/d/1KUxfa9MNOW0ZjcVuMHvlZE1-GJHGwcQt/view"
                        target="_blank"
                    >
                        <BiFileEarmarkTextFill />
                    </a>
                </div>
                <div class="px-8 border-l-[1px] border-l-slate-800">
                    <a href="mailto:hi@danielzh.dev" target="_blank">
                        <BiEnvelopeFill />
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="relative">
        <div
            class="absolute left-0 top-[200svh] h-[60%] w-full bg-gradient-to-b from-black via-slate-950 to-black perspective-24"
        />
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
            locations={["top-1 -translate-x-[125%]", "top-1/2", "bottom-0 translate-x-[25%]"]}
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
            imgPaths={["/antColonies/img1.png", "/antColonies/img2.png", "/antColonies/img3.png"]}
            buttons={[
                {
                    icon: BiGithub,
                    href: "https://github.com/Yourself1011/Ant-Colonies",
                    style: "bg-[#21262d]",
                },
            ]}
            locations={["top-0 translate-x-[25%]", "top-1/2", "bottom-0 -translate-x-[125%]"]}
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
            imgPaths={["/motus/img1.jpeg", "/motus/img2.jpeg", "/motus/img3.jpeg"]}
            buttons={[
                {
                    icon: BiGithub,
                    href: "https://github.com/jeffrey-zang/motus",
                    style: "bg-[#21262d]",
                },
                {
                    icon: BiYoutube,
                    href: "https://youtu.be/Tf0Y2ini0Mw",
                    style: "bg-[#ED3833]",
                },
            ]}
            locations={["top-0 -translate-x-[125%]", "top-1/2", "bottom-0 translate-x-[25%]"]}
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
                    href: "https://github.com/Yourself1011/Mr-V-Simulator",
                    style: "bg-[#21262d]",
                },
                {
                    icon: Replit,
                    href: "https://replit.com/@DanielZhang3/Mr-V-Simulator",
                    style: "bg-[#EF6236]",
                },
            ]}
            locations={["top-0 -translate-x-[125%]", "top-1/2", "bottom-0 translate-x-[25%]"]}
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
        <Terminal />
    </section>
    <footer
        class="mt-32 p-16 grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-3 gap-16 place-content-center border-t-[1px] border-t-slate-800 bg-gradient-to-b from-black to-slate-950"
    >
        <div class="flex flex-row items-center justify-center gap-4">
            <img
                src="/favicon.svg"
                alt="Daniel Zhang logo"
                class="invert h-12 w-12 inline"
                loading="lazy"
            />
            <span>© Daniel Zhang 2024</span>
        </div>
        <div class="flex flex-row flex-wrap items-center justify-center gap-8">
            <a href="https://github.com/Yourself1011" target="_blank"> Github </a>
            <a href="https://www.linkedin.com/in/daniel-zhang-0770a0249/" target="_blank">
                Linkedin
            </a>
            <a
                href="https://drive.google.com/file/d/1KUxfa9MNOW0ZjcVuMHvlZE1-GJHGwcQt/view"
                target="_blank"
            >
                Resume
            </a>
            <a href="mailto:hi@danielzh.dev" target="_blank"> Email </a>
            <a href="https://github.com/Yourself1011/personal-website" target="_blank"> Source </a>
        </div>
        <div class="md:col-span-2 flex justify-center items-end">
            <span
                >Made with {randomEmoji()} and {randomEmoji()} (and <SvelteIcon
                    class="inline"
                />)</span
            >
        </div>
    </footer>
</main>

<style lang="scss">
    main {
        height: 100svh;
        perspective: 8rem;
        overflow-x: hidden;
        overflow-y: auto;
        transform-style: preserve-3d;

        section {
            transform-style: preserve-3d;
            // transform: translate3d(700px, 0, -200px) rotateY(15deg);
        }

        #splash {
            svg:nth-child(1) {
                transform: translateZ(-6rem) scale(1.75);
            }
            svg:nth-child(2) {
                transform: translateZ(-4rem) scale(1.5);
            }
            svg:nth-child(3) {
                transform: translateZ(-2rem) scale(1.25);
            }
        }
    }
</style>
