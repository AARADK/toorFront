import Header from "../components/shared-components/Header";
import Hero from "./herosection/Hero";
import CategorySection from "./category-section/CategoryIndex";
import { AboutSection } from "./about-section/AboutSection";
import NewAndTrending from "./trending-section/TrendingIndex";
import Footer from "../components/shared-components/footer/Footer";
import FlashDeals from "./flashdeals/FlashDeals";
import { CustomerFeedback } from "./customer-reviews/CustomerFeedback";

export default function HomePage() {
    return (
        <div>
            <Header />
            <Hero />
            <CategorySection />
            <AboutSection />
            <NewAndTrending />
            <FlashDeals />
            <CustomerFeedback />
            <Footer />
            </div>

    );
}