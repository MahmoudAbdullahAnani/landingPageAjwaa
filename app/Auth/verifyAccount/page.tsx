import React, { Suspense } from "react";
import FormVerifyAccount from "./FormVerifyAccount";

export const metadata = {
  title: "تأكيد الحساب || Ajwaa || أجواء ",
};

function VerifyAccount() {
  return (
    <section
      className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28"
      dir="rtl"
    >
      <Suspense fallback={null}>
        <FormVerifyAccount />
      </Suspense>
    </section>
  );
}

export default VerifyAccount;
