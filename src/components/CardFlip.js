import { render } from "react-dom"
import React, { useState } from "react"
import { useSpring, animated as a } from "react-spring"

function CardFlip({ front, back, klasaBack, klasaFront }) {
  // console.log(photo)

  // console.log(klasa)

  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg) `,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <div onClick={() => set(state => !state)}>
      <a.div
        className={` c back ${klasaFront}`}
        style={{
          opacity: opacity.interpolate(o => 1 - o),
          transform,
        }}
      >
        <h1 style={{ color: "white" }}>{front}</h1>{" "}
      </a.div>
      <a.div
        className={` c front ${klasaBack}`}
        style={{
          color: "white",
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
        }}
        dangerouslySetInnerHTML={{ __html: back }}
      ></a.div>
    </div>
  )
}

export default CardFlip
