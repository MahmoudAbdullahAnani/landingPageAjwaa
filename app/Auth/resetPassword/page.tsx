import React, { Suspense } from "react";
import FormRestPassword from "./FormRestPassword";

export const metadata = {
  title: "تغيير كلمة السر || Ajwaa || أجواء ",
};

function ResetPassword() {
  return (
    <Suspense fallback={null}>
      <section
        className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28"
        dir="rtl"
      >
        <FormRestPassword />
      </section>
    </Suspense>
  );
}
export default ResetPassword;
