import React from "react";
import FormVerifyAccount from "./FormVerifyAccount";


export const metadata = {
  title: "تأكيد الحساب || Ajwaa || أجواء ",
};

function page() {

  return (
    <section
      className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28"
      dir="rtl"
    >
    <FormVerifyAccount />
    </section>
  );
}

export default page;
