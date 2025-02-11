import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className="container mx-auto flex justify-between py-4 md:py-5">
      <Logo />
    </header>
  );
};
