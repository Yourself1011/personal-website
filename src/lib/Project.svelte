<script lang="ts">
    import type { ComponentType, SvelteComponent } from "svelte";

    interface Button {
        icon?: ComponentType<SvelteComponent>;
        text?: string;
        href: string;
        style?: string;
    }

    interface Tech {
        icon: string;
        name: string;
        url: string;
    }

    export let title: string;
    export let description: string;
    export let imgPaths: string[];
    export let buttons: Button[];
    export let locations: string[];
    export let techs: Tech[];
</script>

<div class="relative md:px-16 px-4 py-64 my-96 preserve-3d">
    <div class="absolute left-0 top-0 w-full h-full preserve-3d">
        {#each imgPaths as src, i}
            <div
                class="absolute {locations[
                    i
                ]} left-1/2 md:w-[33%] w-[95%] bgImgContainer preserve-3d"
            >
                <img
                    {src}
                    alt=""
                    class="rounded-sm bgImg {[
                        `perspective-[4.5rem]`,
                        `perspective-12`,
                        `perspective-6`,
                    ][i]}"
                    loading="lazy"
                />
            </div>
        {/each}
    </div>
    <div
        class="relative mx-auto max-w-4xl p-8 md:p-16 border-slate-800 border-[1px] rounded-3xl bg-gradient-to-t from-slate-950/80 to-black/80 grid grid-flow-row md:grid-rows-2 md:grid-cols-[1fr,2fr] grid-rows-auto grid-cols-1 md:gap-0 gap-4 z-10"
    >
        <div class="pr-8">
            <h3>{title}</h3>
            <div class="flex flex-row gap-2 mt-1">
                {#each techs as tech}
                    <a href={tech.url} title={tech.name} target="_blank">
                        <img
                            src={tech.icon}
                            alt={`${tech.name} logo`}
                            height="20px"
                            width="20px"
                            loading="lazy"
                        />
                    </a>
                {/each}
            </div>
        </div>
        <p class="md:row-span-2 md:border-l-[1px] border-slate-800 md:p-8">
            {description}
        </p>
        <div
            class="flex flex-wrap items-end content-end md:justify-start justify-evenly gap-2 md:pr-8"
        >
            {#each buttons as button}
                <a
                    class={`p-2 md:mr-auto flex-auto rounded-md text-center ${button.style}`}
                    href={button.href}
                    target="_blank"
                >
                    <svelte:component
                        this={button.icon ?? null}
                        class={`inline ${button.text ? "mr-1" : ""}`}
                    />
                    {button.text ?? ""}
                </a>
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    .bgImg {
        mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    }
    .bgImgContainer {
        @media (max-width: 768px) {
            transform: translateX(-50%);
        }
        &:nth-child(2) {
            transform: translate(-50%, -50%);
        }
    }
</style>
