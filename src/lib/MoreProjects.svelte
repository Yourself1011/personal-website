<script lang="ts">
    import { projects } from "./moreProjectsData";

    let index = 0;

    let p = projects[index];
    $: p = projects[index];
    let innerHeight: number, container: HTMLDivElement;
</script>

<svelte:window
    on:keydown={(e) => {
        let rect = container.getBoundingClientRect();

        if (rect.top < innerHeight && rect.bottom > 0) {
            switch (e.key) {
                case "ArrowUp":
                    index--;
                    if (index == -1) index = projects.length - 1;
                    e.preventDefault();
                    break;
                case "ArrowDown":
                    index++;
                    if (index == projects.length) index = 0;
                    e.preventDefault();
                    break;
                case "Enter":
                    window.open(p.link, "_blank");
                    break;
            }
        }
    }}
    bind:innerHeight
/>

<div class="grid md:grid-cols-2 grid-flow-row" bind:this={container}>
    <p>
        {#each projects as project, i}
            <button
                on:click={() => (index = i)}
                on:focus={() => (index = i)}
                class="block focus:outline-none"
            >
                {#if i == index}
                    <span class="font-bold">
                        {`▶ ${project.name} ◀`}
                    </span>
                {:else}
                    {@html "&nbsp;&nbsp;"}{project.name}
                {/if}
            </button>
        {/each}
    </p>
    <div>
        <p
            class="md:text-[min(1rem,calc((50svw-5rem)/27))] text-[calc((100svw-3rem)/27)]"
        >
            {@html p.image}
        </p>
        <br />
        <p>
            {p.description}
        </p>
        <br />
        <a class="block text-slate-400 underline" href={p.link} target="_blank">
            {"<"}Enter{">"} or click here for more
        </a>
    </div>
</div>
