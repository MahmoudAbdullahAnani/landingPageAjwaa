import Image from "next/image";

export default function SingleBenefit({ item }: any) {
  return (
    <div className={`z-1 relative h-full max-w-[200px]`}>
      <div className={`mx-auto flex flex-col items-center justify-center`}>
        <img
          src={item.image}
          alt={item.title}
          className={`h-full w-full`}
          width={100}
          height={100}
        />
        <p
          className={`mt-[13px] text-center text-2xl font-extrabold text-[#117C99]`}
        >
          {item.text}
        </p>
      </div>
      <div className={`absolute bottom-0 -left-5 z-[-1] h-[238px] w-[232px]`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="232"
          height="238"
          viewBox="0 0 232 238"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M115.08 0.0226046C147.956 -0.883594 173.809 25.6196 195.735 50.2122C216.162 73.123 232.812 100.4 231.969 131.127C231.146 161.166 213.564 187.478 191.418 207.711C170.394 226.92 143.493 239.091 115.08 237.923C87.706 236.797 64.8603 220.35 44.7526 201.681C23.5594 182.005 1.23501 160.072 0.0519584 131.127C-1.16308 101.4 19.1438 76.8729 38.7385 54.5396C60.1931 30.0866 82.6207 0.917312 115.08 0.0226046Z"
            fill="#C6E9F7"
          />
        </svg>
      </div>
    </div>
  );
}
