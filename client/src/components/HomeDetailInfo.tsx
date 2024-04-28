import Image from "next/image";

export const dynamic = "force-dynamic";

export default function HomeDetailInfo() {
  return (
    <div className="flex justify-center my-12 py-12 flex-col gap-10">
      <Image src="/company.png" width={1920} height={200} alt="company" />
      <div className="text-4xl font-semibold text-center">
        Cutting-Edge Solutions for Swift and Secure Healing
      </div>
      <div className="text-2xl font-semibold text-center">
        Empowering Everyone for a Healthier Life, Inside and Out.
      </div>
      <div className="px-10">
        Our vision for the Pharmacy industry, essential for public health, provides access to safe and effective medications and health products. Sidomuncul, a prominent Indonesian brand established in 1917, is recognized for its commitment to quality and innovation in pharmaceutical production. Offering a diverse range of products, including herbal remedies, supplements, and conventional medications, Sidomuncul addresses holistic health needs while actively participating in health education and social initiatives, ensuring the well-being of communities,
          Nice to have, 
        Our research team spends years studying and developing herbs or medicinal plants  with proven and long history of efficacies, solutions in a Container or sachet, we create modernized “JAMU” to meet the modern lifestyle of Indonesian consumers,
        Sido Muncul (SIDO) is the biggest and modern herbal manufacturer in Indonesia. It continues to be the market leader in herbal/traditional products category. Having more than 300 SKUs with strong brand image and become top of mind for Indonesian consumers. The brands such as Tolak Angin and Kuku Bima Ener-G! have been long-standing brands for decades. Our commitment is to grow responsibly with the tenets of People, Planet, and Profit to deliver sustainable and accountable business..

      </div>
      <ul className="px-10">Our JAMU means:</ul>
      <li className="px-10">Specific active components.</li>
      <li className="px-10">
      Swiftly alleviates health issues while deeply hydrating and comforting well-being.
      </li>
      <li className="px-10">Effectively safeguards and enhances well-being.</li>
    </div>
  );
}
