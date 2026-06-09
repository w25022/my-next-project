import Hero from "@/app/components/Hero";
import Sheet from "../components/sheet";

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function NewsLayout({ children }: Props) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet> {children} </Sheet>
    </>
  );
}
