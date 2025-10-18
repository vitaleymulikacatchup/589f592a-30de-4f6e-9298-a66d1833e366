use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award } from "lucide-react";

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/27467329/pexels-photo-27467329.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Symmetrical brick residential buildings with intricate geometric facades in a suburban neighborhood."},
  {"id":"about-image","url":"https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Overhead view of a diverse team in a business meeting using laptops and tablets."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Joyful businesswoman with curly hair smiling at camera while using laptop indoors."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/34345272/pexels-photo-34345272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"smiling person portrait - Photo by Roman Biernacki"},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/34345272/pexels-photo-34345272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"professional person portrait - Photo by Roman Biernacki"},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Confident businessman in suit shaking hands at office desk, symbolizing successful partnership."},
  {"id":"partners-logo-1","url":"https://images.pexels.com/photos/16629368/pexels-photo-16629368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of hands holding a smartphone displaying the ChatGPT application interface on the screen."},
  {"id":"partners-logo-2","url":"https://images.pexels.com/photos/16029605/pexels-photo-16029605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Coca Cola sign atop a building against a clear blue sky, viewed from indoors."},
  {"id":"partners-logo-3","url":"https://images.pexels.com/photos/18512830/pexels-photo-18512830.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Wooden Scrabble tiles arranged to spell 'Tencent' on a green tile holder, scattered letters in the background."},
  {"id":"partners-logo-4","url":"https://images.pexels.com/photos/11744090/pexels-photo-11744090.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Contemporary buildings in Stuttgart city center showcasing modern design."},
  {"id":"partners-logo-5","url":"https://images.pexels.com/photos/7415036/pexels-photo-7415036.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Real estate agent in a black blazer using a tablet inside a furnished home."},
  {"id":"partners-logo-6","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"partners-logo-7","url":"https://images.pexels.com/photos/7979438/pexels-photo-7979438.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A couple reviewing documents with a professional in an office setting, focusing on financial planning."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Properties", id: "properties" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="RealEstatePro"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <HeroSplit
            title="Discover Your Dream Home"
            description="Explore top listings and find the perfect property with RealEstatePro."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
            buttons={[
              { text: "Browse Listings", href: "properties" },
              { text: "Contact Us", href: "contact" }
            ]}
            imagePosition="left"
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <SplitAbout
            title="About Us"
            description="RealEstatePro is dedicated to helping you find the perfect home. With over 20 years of experience, our team is committed to providing you with unparalleled service."
            imageSrc={assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"}
            bulletPoints={[
              { title: "Expert Agents", description: "Qualified professionals here to serve you", icon: Award },
              { title: "Great Locations", description: "Best neighborhoods with great amenities" },
              { title: "Trusted Partners", description: "Working with renowned real estate companies" }
            ]}
          />
        </div>
      </div>

      <div id="team" data-section="team" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <TeamCardOne
            title="Meet Our Team"
            description="Our experienced agents are ready to help with your real estate needs."
            members={[
              {
                id: "1",
                name: "John Doe",
                role: "Lead Agent",
                imageSrc: assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"
              }
            ]}
          />
        </div>
      </div>

      <div id="testimonial" data-section="testimonial" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <TestimonialCardOne
            title="What Our Clients Say"
            description="Hear from satisfied clients about their experiences."
            testimonials={[
              {
                id: "1",
                name: "Jane Smith",
                role: "Home Buyer",
                company: "TechCorp",
                rating: 5,
                imageSrc: assetMap.find(a => a.id === "testimonial-1")?.url ?? "/public/images/placeholder.webp"
              },
              {
                id: "2",
                name: "Alex Brown",
                role: "Investor",
                company: "InvestCo",
                rating: 5,
                imageSrc: assetMap.find(a => a.id === "testimonial-2")?.url ?? "/public/images/placeholder.webp"
              },
              {
                id: "3",
                name: "Sam Wilson",
                role: "Seller",
                company: "SellQuick",
                rating: 5,
                imageSrc: assetMap.find(a => a.id === "testimonial-3")?.url ?? "/public/images/placeholder.webp"
              },
              {
                id: "4",
                name: "Lisa White",
                role: "Renter",
                company: "LeaseNow",
                rating: 5,
                imageSrc: assetMap.find(a => a.id === "testimonial-4")?.url ?? "/public/images/placeholder.webp"
              }
            ]}
          />
        </div>
      </div>

      <div id="socialProof" data-section="socialProof" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <SocialProofOne
            title="Trusted by Industry Leaders"
            description="Our partners trust us to deliver high-quality services."
            logos={[
              assetMap.find(a => a.id === "partners-logo-1")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "partners-logo-2")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "partners-logo-3")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "partners-logo-4")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "partners-logo-5")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "partners-logo-6")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "partners-logo-7")?.url ?? "/public/images/placeholder.webp"
            ]}
          />
        </div>
      </div>

      <div id="faq" data-section="faq" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <FaqSplitText
            sideTitle="Frequently Asked Questions"
            faqs={[
              { id: "1", title: "What is your commission rate?", content: "Our commission rate is competitive and varies based on the service." },
              { id: "2", title: "How can I schedule a viewing?", content: "Contact us to schedule a viewing at your convenience." }
            ]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <ContactCenter
            tag="Contact Us"
            title="Get in Touch"
            description="Reach out to us for any inquiries or assistance."
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <FooterBase
            columns={[
              { title: "Explore", items: [{ label: "About Us", href: "about" }, { label: "Properties", href: "properties" }] },
              { title: "Resources", items: [{ label: "FAQ", href: "faq" }, { label: "Contact", href: "contact" }] }
            ]}
            copyrightText="© 2025 RealEstatePro"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
