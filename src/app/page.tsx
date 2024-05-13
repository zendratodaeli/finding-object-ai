import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        src="/logo.svg"
        alt="logo"
        width={20}
        height={20}
      />
    </main>
  );
}
