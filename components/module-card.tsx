import Link from "next/link";

type ModuleCardProps = {
  href: string;
  title: string;
  description: string;
};

export function ModuleCard({ href, title, description }: ModuleCardProps) {
  return (
    <Link className="card" href={href}>
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  );
}
