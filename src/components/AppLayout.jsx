import { Header } from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./Footer";
import WhatsAppFloatingButton from "./WhatsAppFloatingButton";

export const AppLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation);

  if (navigation.state === "loading") return <h1>Loading...</h1>;

  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <Outlet />
        <Footer />
        <WhatsAppFloatingButton />
      </div>
    </>
  );
};
