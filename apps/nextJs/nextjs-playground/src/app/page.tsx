import Image from "next/image";
import homeImage from "../../public/home.jpg";

export default function Home() {
  return (
    <div>
      Home Page
      <div className="absolute -z-10 inset-0">
        <Image
          alt="car factory"
          src={homeImage}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
