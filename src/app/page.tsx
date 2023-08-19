import Image from "next/image";
import NavLayout from "./Layout/navLayout";
import Main from "./components/main/main";

export default function Home() {
  return (
    <NavLayout>
      <Main />
    </NavLayout>
  );
}
