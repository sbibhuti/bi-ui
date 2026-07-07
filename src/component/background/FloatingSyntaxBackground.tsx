import { memo, type ReactNode } from "react";

export const FloatingSyntaxBackground = memo(function FloatingSyntaxBackground({ children }: { children: ReactNode }) {
    return (
        <div className="fixed inset-0 overflow-hidden bg-bi-background isolate">
            {/* Background */}
            {children}
            {/* Soft overlay */}
            <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-transparent to-bi-background/20" />
        </div>
    );
});