// components/footer/FooterLinks.tsx
const links = {
    Product: ["Features", "Pricing"],
    Resources: ["User guides", "Webinars", "Store Locator"],
    Company: ["About us", "Contact us", "Support"],
    Legal: ["Privacy Policy", "Terms and Conditions"],
  };
  
  export function FooterLinks() {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-20">
        {Object.entries(links).map(([section, items]) => (
          <div key={section}>
            <h4 className="text-base md:text-lg font-bold mb-4">{section}</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {items.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }