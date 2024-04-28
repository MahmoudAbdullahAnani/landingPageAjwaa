import { testimonialData } from "../Testimonials";
import SingleTestimonial from "../Testimonials/SingleTestimonial";

export default function Customers() {
  return (
    <section className={`pt-16 text-center md:pt-20 lg:pt-28`}>
      <div
        className={`relative bg-[url('/images/customers/MainCustomers.png')] bg-cover bg-no-repeat `}
      >
        <div
          className={`container flex h-[844px] flex-col items-center justify-start`}
        >
          <h1 className={`text-3xl font-extrabold text-primary `}>
            اراء العملاء
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
