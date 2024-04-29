import Typewriter from "./TypewriterText";

// <Typewriter textArray={["سفر", "طيران", "فنادق"]} />

export default function TopText() {
  return (
    <div className={``}>
      <h1 className={`text-start text-5xl font-extrabold leading-[60px] text-white`}>
        مع أجواء استمتع بأفضل تجربة{" "}
        {<Typewriter textArray={["سفر", "طيران", "فنادق"]} />} في مصر
      </h1>
    </div>
  );
}
