import * as React from "react";
import ParticleImage, {
    Vector,
    forces,
} from "react-particle-image";

export default function Particles({ srcData }) {
    const particleOptions = {
        filter: ({ x, y, image }) => {
            // Get pixel
            const pixel = image.get(x, y);
            // Make a particle for this pixel if blue > 50 (range 0-255)
            return pixel.b > 50;
        },
        color: ({ x, y, image }) => "#1A9CDF",
        radius: () => Math.random() * 0.5 + 0.5,
        mass: () => 40,
        friction: () => 0.15,
        initialPosition: ({ canvasDimensions }) => {
            return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
        }
    };

    const motionForce = (x, y) => {
        return forces.disturbance(x, y, 5);
    };

    return (
        <>
            <ParticleImage
                className="absolute top-24 lg:-top-10 xl:-top-20 left-0 w-full"
                src={srcData}
                scale={0.6}
                entropy={35}
                maxParticles={15000}
                particleOptions={particleOptions}
                mouseMoveForce={motionForce}
                touchMoveForce={motionForce}
                backgroundColor="transparent"
            />
        </>
    )
}