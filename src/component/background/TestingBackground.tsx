import { memo } from "react";

import { BackgroundGlow } from "./BackgroundGlow";
import { BackgroundParticles } from "./BackgroundParticles";
import { BackFloatingCard } from "./BackFloatingCard";
import { FrontFloatingCard } from "./FrontFloatingCard";

export default memo(function TestingBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden bg-bi-background isolate">
            {/* Background */}
            <BackgroundGlow />
            <BackgroundParticles />
            <BackFloatingCard />
            <FrontFloatingCard />

            {/* Soft overlay */}
            <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-transparent to-bi-background/20" />
        </div>
    );
});