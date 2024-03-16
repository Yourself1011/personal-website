<script>
    import "../app.scss";
</script>

<svg class="hidden">
    <defs>
        <filter id="grainyBlur" x="-50%" y="-50%" width="200%" height="200%">
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
</svg>
<slot />
