import React, { Suspense } from "react";
import FormUpdatePassword from "./FormUpdatePassword";

function updatePassword() {
  return (
    <Suspense fallback={null}>
      <section
        className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28"
        dir="rtl"
      >
        <FormUpdatePassword />
      </section>
    </Suspense>
  );
}

export default updatePassword;
