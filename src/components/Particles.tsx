import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { MoveDirection, OutMode } from "@tsparticles/engine";

const ParticlesComponent = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(() => {
        const isMobile = window.innerWidth < 768;

        return {
            background: {
                color: {
                    value: "#000717",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: !isMobile,
                        mode: "repulse",
                    },
                    onHover: {
                        enable: !isMobile,
                        mode: "grab",
                    },
                },
                modes: {
                    push: {
                        distance: 150,
                        duration: 15,
                    },
                    grab: {
                        distance: 150,
                    },
                },
            },
            particles: {
                color: {
                    value: "#FFFFFF",
                },
                links: {
                    color: "#FFFFFF",
                    distance: 150,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                move: {
                    direction: MoveDirection.none,
                    enable: true,
                    outModes: {
                        default: OutMode.bounce,
                    },
                    random: true,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 200,
                },
                opacity: {
                    value: 0.4,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        };
    }, []);

    if (!init) {
        return null;
    }


    return (
        <Particles
            id="tsparticles"
            options={options}
            style={{
                position: "fixed",
                inset: 0,  // Dit vervangt top: 0, left: 0
                width: "100%",
                height: "100%",
                objectFit: "cover",
                backgroundAttachment: "fixed",
                zIndex: -10,
            }}
        />
    );

};

export default ParticlesComponent;