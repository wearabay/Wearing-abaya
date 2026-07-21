import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Container from "@/components/ui/Container";

import ProfileForm from "@/components/account/ProfileForm";


export default function ProfilePage() {

  return (
    <>
      <Navbar />

      <main>
        <Container className="py-24">

          <ProfileForm />

        </Container>
      </main>

      <Footer />
    </>
  );
}