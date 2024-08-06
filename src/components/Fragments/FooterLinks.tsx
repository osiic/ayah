import Link from "next/link";

interface links {
  title: string;
  href: string;
}

interface FooterLinksProps {
  heading: string;
  links: links[];
}

const FooterLinks = ({ data }: { data: FooterLinksProps[] }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
      {data.map(({ heading, links }) => (
        <div key={heading}>
          <h3 className="text-xl font-bold">{heading}</h3>
          <ul>
            {links.map(({ title, href }) => (
              <li key={title}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export { FooterLinks };
export type { FooterLinksProps }
