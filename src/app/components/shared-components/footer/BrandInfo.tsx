import Image from "next/image";
export function BrandInfo() {
  return (
    <div className="max-w-sm ml-20 px-6 md:px-26">
      <Image
        src="/logo.png"
        alt="Toorunta Logo"
        width={150}
        height={40}
        className="mb-2"
      />
      <p className="text-sm text-muted-foreground mt-2">
        Toorunta Marketplace Pvt. Ltd. is a platform for users to post and discover local ads.
      </p>
    </div>
  );
}
