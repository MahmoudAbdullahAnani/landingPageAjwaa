import { testimonialData } from "../Testimonials";
import SingleTestimonial from "../Testimonials/SingleTestimonial";
import SingleCustomer from "./SingleCustomer";

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
          <div className={`mt-[80px] flex w-full justify-center lg:mt-[130px]`}>
            <div className={`w-full max-w-[612px]`}>
              <SingleCustomer cartView={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
