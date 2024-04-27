import { testimonialData } from "../Testimonials";
import SingleTestimonial from "../Testimonials/SingleTestimonial";

export default function Customers() {
  return (
    <section className={`pt-16 text-center md:pt-20 lg:pt-28`}>
      <div
        className={`relative flex h-[844px] flex-col items-center justify-around bg-[url('/images/customers/MainCustomers.png')] bg-cover bg-no-repeat `}
      >
        <h1 className={`text-3xl font-extrabold text-primary `}>
          اراء العملاء
        </h1>
        <div className={`flex max-w-[400px] overflow-x-scroll`}>
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
