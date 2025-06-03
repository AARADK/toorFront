// components/footer/SocialIcons.tsx
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

export function SocialIcons() {
  return (
    <div className="flex gap-4 mt-6 md:mt-0 mr-30">
      <a href="#"><FaTwitter className="text-blue-500" /></a>
      <a href="#"><FaFacebook className="text-blue-700" /></a>
      <a href="#"><FaLinkedin className="text-blue-600" /></a>
      <a href="#"><FaYoutube className="text-red-600" /></a>
    </div>
  );
}
