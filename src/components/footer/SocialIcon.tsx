import Image from "next/image";
import { SocialIconProps } from "../../../types/Footer";

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => (
  <div className="p-3 bg-custom-blue rounded-full">
    <div className="relative w-4 h-4">
      <Image src={src} alt={alt} fill className="object-contain" />
    </div>
  </div>
);

export default SocialIcon;