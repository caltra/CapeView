import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";


export default function Home() {
  return (
    <>
      <Header />

      <main className="grow border border-primary-txt/30 rounded-2xl m-2 mt-0 p-4">
        Main content.
      </main>

      <Footer />
    </>
  );
}
