import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AccountDashboard from "@/components/account/AccountDashboard";

export default function AccountPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-20">

        <AccountDashboard />

      </main>

      <Footer />
    </>
  );
}