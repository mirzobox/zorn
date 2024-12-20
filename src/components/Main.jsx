import Actions from "./Actions";
import Contact from "./Contact";
import CTA from "./CTA";
import Offers from "./Offers";

export default function Main() {
  return (
    <main style={{ display: "none" }}>
      <Actions />
      <CTA />
      <Offers />
      <Contact />
    </main>
  );
}
