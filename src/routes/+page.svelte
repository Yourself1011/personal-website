<main>
    <div class="h-dvh w-dvw flex justify-center items-center">
        <svg width="100%" height="100%" class="absolute w-full h-full -z-10">
            <defs>
                <filter id="grainyBlur">
                    <feGaussianBlur stdDeviation="25" result="blur" />
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.5"
                        numOctaves="3"
                        stitchTiles="stitch"
                        result="noise"
                    />
                    <feColorMatrix
                        in="noise"
                        type="matrix"
                        result="colorNoise"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feComposite
                        operator="in"
                        in="colorNoise"
                        in2="blur"
                        result="masked"
                    />
                    <feBlend in="blur" in2="masked" mode="multiply" />
                </filter>
            </defs>

            <circle
                cx="25%"
                cy="45%"
                r="200"
                fill="blue"
                filter="url(#grainyBlur)"
            />
        </svg>
        <div>
            <h1>Daniel Zhang</h1>
        </div>
    </div>
</main>
