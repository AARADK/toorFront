// components/footer/Footer.tsx
import { NewsletterSignup } from "./NewsLetterSignup";
import { BrandInfo } from "./BrandInfo";
import { FooterLinks } from "./FooterLinks";
import { FooterBottom } from "./FooterBottom";
import { SocialIcons } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t py-12 px-6 md:px-20">
      <NewsletterSignup />
      <div className="flex flex-col md:flex-row mt-8 px-6">
        <BrandInfo />
        <FooterLinks />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-12 border-t pt-6">
        <FooterBottom />
        <SocialIcons />
      </div>
    </footer>
  );
}