<script>
    import MoreProjects from "./MoreProjects.svelte";
    import { languages } from "./languageData";

    let tab = 0;
    let focus = true;
</script>

<svelte:window
    on:focus={() => (focus = true)}
    on:blur={() => (focus = false)}
/>

<div
    class="max-w-4xl mx-auto rounded-lg border-[#4B4B4B] border-[1px] overflow-clip leading-none font-mono"
>
    <div class="w-full p-2 bg-[#37333B] flex flex-row gap-2">
        <div
            class="rounded-full {focus ? 'bg-red-500' : 'bg-[#4F4955]'} h-3 w-3"
        ></div>
        <div
            class="rounded-full {focus
                ? 'bg-yellow-500'
                : 'bg-[#4F4955]'} h-3 w-3"
        ></div>
        <div
            class="rounded-full {focus
                ? 'bg-green-500'
                : 'bg-[#4F4955]'} h-3 w-3"
        ></div>
    </div>
    <div class="flex flex-row">
        <button
            class="{tab == 0
                ? 'bg-[#37333B]'
                : 'bg-[#1E1C21]'} p-2 flex-auto focus:outline-none"
            on:click={() => (tab = 0)}
            on:focus={() => (tab = 0)}
        >
            More Projects
        </button>
        <button
            class="{tab == 1
                ? 'bg-[#37333B]'
                : 'bg-[#1E1C21]'} p-2 flex-auto focus:outline-none border-l-[1px] border-[#48444C]"
            on:click={() => (tab = 1)}
            on:focus={() => (tab = 1)}
        >
            My Tech Stack
        </button>
        <button
            class="{tab == 2
                ? 'bg-[#37333B]'
                : 'bg-[#1E1C21]'} p-2 flex-auto focus:outline-none border-l-[1px] border-[#48444C]"
            on:click={() => (tab = 2)}
            on:focus={() => (tab = 2)}
        >
            About me
        </button>
    </div>
    <div class="w-full min-h-[48rem] bg-[#1E1E1E] p-2 text-lime-400">
        {#if tab == 0}
            <span class="text-slate-400">
                danielzhang@Daniels-MacBook-Air ~/dev>
            </span>
            ls<br />
            Use arrow keys or click to navigate
            <MoreProjects />
        {:else if tab == 1}
            <span class="text-slate-400">
                danielzhang@Daniels-MacBook-Air ~/dev>
            </span>
            list-languages<br /><br />

            <div class="flex flex-row flex-wrap gap-4 items-end">
                {#each languages as language}
                    <div class="text-center">
                        <div>
                            {@html language.image}
                        </div>
                        <a
                            href={language.link}
                            class="text-slate-400 underline"
                        >
                            {language.name}
                        </a>
                    </div>
                {/each}
            </div>

            <br />
            <span class="text-slate-400">
                danielzhang@Daniels-MacBook-Air ~/dev>
            </span>
            list-tools<br />
            Node.js, React.js, Next.js, Svelte, Git, Processing, SASS, Tailwind.css,
            MongoDB, PostgreSQL, Discord.js
        {:else if tab == 2}
            <span class="text-slate-400">
                danielzhang@Daniels-MacBook-Air ~/dev>
            </span>
            cat aboutme.txt<br />
            <p>
                I'm a high school student based in Waterloo, Ontario that loves
                to code. More specifically, I love breaking down seemingly
                complex things in detail, figuring out how they work, then
                recreating them from scratch. I'm always looking to learn or do
                something new, and I always try to use a new technology or
                concept in every project I do.
                <br /><br />
                Apart from coding, I also enjoy playing piano (working towards my
                LRCM) and watching hockey (go Leafs go)
            </p>
        {/if}
    </div>
</div>
