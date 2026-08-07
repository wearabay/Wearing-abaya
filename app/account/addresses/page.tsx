import Container from "@/components/ui/Container";

import AddressBook from "@/components/account/AddressBook";

export default function AddressesPage() {
  return (
    <>
      

      <Container className="py-24 max-w-5xl">

        <h1 className="mb-8 text-3xl font-bold">
          My Addresses
        </h1>

        <AddressBook />

      </Container>

      
    </>
  );
}