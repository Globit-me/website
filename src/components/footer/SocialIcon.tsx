import Image from "next/image";
import { SocialIconProps } from "../../../types/Footer";

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => (
  <div className="p-3 bg-custom-blue rounded-full">
    <Image
      src={src}
      alt={alt}
      height={16}
      width={16}
      className="object-contain"
    />
  </div>
);

export default SocialIcon;
