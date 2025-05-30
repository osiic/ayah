import Link from "next/link";
import Image from "next/image";
import { SocialMedia } from "@/components/Elements/SocialMedia";
import { SectionLayout } from "@/components/Layout/SectionLayout";
import { SectionContainer } from "@/components/Fragments/SectionContainer";

const Contact = () => {
  return (
    <SectionLayout id="contact" heading="CONTACT">
      <>
        <SectionContainer heading="Contact">
          <div className="flex flex-col gap-2">
            <div>
              <h4 className="font-bold -mb-1">Location</h4>
              <p>Jl.Banyuwangi No.45 Yosomulyo Gambiran Banyuwangi 68486</p>
            </div>
            <div>
              <h4 className="font-bold -mb-1">Email</h4>
              <p>ttcbanyuwangi2020@gmail.com</p>
            </div>
            <div>
              <h4 className="font-bold -mb-1">Phone</h4>
              <p>0823-3680-2981</p>
            </div>
            <div>
              <SocialMedia />
            </div>
          </div>

          <Link
            href="https://www.instagram.com/p/CsShYpoLa36/?img_index=1"
            className="bg-primary w-full justify-items-center lg:justify-items-end"
          >
            <Image
              className="border w-7/12 transition-all duration-300 ease-in-out transform hover:brightness-100 hover:scale-110 hover:z-20"
              src="/bg3.jpg"
              width={300}
              height={300}
              alt="Picture of the Partner Ship"
            />
          </Link>
        </SectionContainer>
        <SectionContainer col="grid-cols-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.878802963019!2d114.1764329!3d-8.4135624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd3ffe87ed45345%3A0x6035daee1b9aabe1!2sPT.%20Trans%20Putra%20Pratama!5e0!3m2!1sid!2sid!4v1734382521784!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </SectionContainer>
      </>
    </SectionLayout>
  );
};

export { Contact };
