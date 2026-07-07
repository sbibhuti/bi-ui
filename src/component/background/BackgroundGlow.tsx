export default function BackgroundGlow() {
    return (
        <>
            {/* Base Background */}
            <div className={`absolute inset-0 bg-background`} />

            {/* primary Glow */}
            <div
                className="
                    absolute 
                    -left-64 
                    -top-64 
                    h-150 
                    w-150 
                    rounded-full 
                    blur-[140px]
                    bg-[radial-gradient(circle_at_center,rgb(from_var(--color-on-tertiary)_r_g_b/12%),transparent_70%)]
                "
            />

            {/* secondary Glow */}
            <div
                className="
                    absolute 
                    -right-62.5 
                    top-[20%] 
                    h-150 
                    w-150 
                    rounded-full 
                    blur-[150px]
                    bg-[radial-gradient(circle_at_center,rgb(from_var(--color-on-secondary)_r_g_b/10%),transparent_70%)]
                "
            />

            {/* ttertiary Glow */}
            <div
                className="
                    absolute 
                    -bottom-75 
                    left-[80%] 
                    h-150 
                    w-150 
                    -translate-x-1/2 
                    rounded-full 
                    blur-[160px]
                    bg-[radial-gradient(circle_at_center,rgb(from_var(--color-on-primary)_r_g_b/10%),transparent_70%)]
                "
            />

            {/* Center Highlight */}
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(from_var(--color-on-background)_r_g_b/3%),transparent_55%)]"
            />

            {/* from wide*/}
            <div
                className="absolute inset-0 bg-[radial-gradient(circle,transparent_15%,rgb(from_var(--color-background)_r_g_b/85%)_100%)]"
            />

            {/* Noise Overlay */}
            <div
                className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(circle,rgb(from_var(--color-on-background)_r_g_b/50%)_1px,transparent_1px)] bg-size-[14px_14px]"
            />
        </>
    );
}