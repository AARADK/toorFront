import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function NewsletterSignup() {
  return (
    <div className="text-center space-y-2 mb-8">
      <h3 className="text-2xl font-bold">Subscribe to our newsletter</h3>
      <div className="flex justify-center mt-5 mb-10">
        <div className="flex rounded-md overflow-hidden border border-input bg-muted">
          <div className="relative flex items-center w-[300px]">
            <Mail className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Input your email"
              className="w-full pl-8 rounded-none border-none bg-muted focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <Button
            className="rounded-none bg-[#1D1E4C] hover:bg-[#16173d] text-white px-4"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
