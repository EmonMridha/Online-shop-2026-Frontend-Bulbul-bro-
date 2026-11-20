import HeroBanner from './_components/Banner'
import CategoriesSection from './_components/Categories'
import FeaturedProducts from './_components/Featured'
import WhyChooseUs from './_components/WhyChoose'
import HowToOrder from './_components/HowToOrder'
import ContactSection from './_components/Contact'

const HomePage = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <CategoriesSection />
            <FeaturedProducts />
            <WhyChooseUs />
            <HowToOrder />
            <ContactSection />
        </div>
    )
}

export default HomePage