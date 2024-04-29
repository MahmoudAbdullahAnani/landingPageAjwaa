export default function Advantages() {
  return (
    <section className={`pt-16 text-center xl:pt-0 `}>
      <div
        className={`relative h-[840px] bg-[url('/images/Advantages/Advantages.png')] bg-cover bg-no-repeat `}
      >
        <div className={`container flex flex-col items-center justify-start`}>
          <h1 className={`text-3xl font-extrabold text-primary `}>
            بعض مزايا أجواء
          </h1>
          <div
            className={`mt-[80px] flex max-w-[400px] overflow-x-scroll lg:mt-[130px]`}
          >
            {/* {testimonialData.map((testimonial) => (
              <SingleTestimonial
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
}
