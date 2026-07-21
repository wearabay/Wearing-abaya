import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Container from "@/components/ui/Container";

import AddressBook from "@/components/account/AddressBook";


export default function AddressesPage() {

  return (
    <>
      <Navbar />

      <main>
        <Container className="py-24">

          <AddressBook />

        </Container>
      </main>

      <Footer />
    </>
  );
}