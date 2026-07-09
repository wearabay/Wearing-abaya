"use client";

import AccountSidebar from "./AccountSidebar";
import AccountOverview from "./AccountOverview";

export default function AccountDashboard() {

  return (

    <div className="grid gap-16 lg:grid-cols-[260px_1fr]">

      <AccountSidebar />

      <AccountOverview />

    </div>

  );

}