import React, { Suspense } from "react";
import FormVerifyPassword from "./FormVerifyPassword";

export const metadata = {
  title: "تاكيد كود كلمة السر || Ajwaa || أجواء ",
};

function VerifyPassword() {
  return (
    <Suspense>
      <section
        className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28"
        dir="rtl"
      >
        <FormVerifyPassword />
      </section>
    </Suspense>
  );
}

export default VerifyPassword;
