import type { SVGProps } from "react";

export const PNPMIcon = ({
    width = 24,
    height = 24,
    className,
    ...props
}: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            viewBox="0 0 128 128"
            width={width}
            height={height}
            className={className}
            {...props}
        >
            <path fill="#f8ab00" d="M0 .004V40h39.996V.004Zm43.996 0V40h40V.004Zm44.008 0V40H128V.004Zm0 43.996v39.996H128V44Z"></path>
            <path fill="var(--color-on-bi-background)" d="M43.996 44v39.996h40V44ZM0 87.996v40h39.996v-40Zm43.996 0v40h40v-40Zm44.008 0v40H128v-40Z"></path>
        </svg>

    )
};
