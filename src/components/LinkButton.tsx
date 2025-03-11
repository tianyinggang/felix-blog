import { FC } from "react";

type Props = {
  href: string;
  targetBlank?: boolean;
  outline?: boolean;
  className?: string;
  children: React.ReactNode;
};

const LinkButton: FC<Props> = ({
  href,
  targetBlank = false,
  outline = false,
  className = "",
  children,
}) => {
  return (
    <a
      role="button"
      className={[
        outline
          ? "border border-brandprimary hover:bg-brandprimary dark:border-funcaccent dark:hover:bg-funcaccent text-brandprimary hover:text-cardLight dark:text-funcaccent dark:hover:text-carddark transition"
          : "bg-brandprimary hover:bg-marrslight active:bg-brandaccentdark dark:hover:bg-funclight dark:active:bg-carridark dark:bg-funcaccent text-bglight dark:text-bgdark",
        "py-2 px-3 rounded lg:text-xl",
        className,
        "outline-brandprimary dark:outline-funcaccent focus-visible:outline-double outline-offset-2"
      ].filter(Boolean).join(" ")}      
      href={href}
      target={targetBlank ? "_blank" : "_self"}
      rel={targetBlank ? "noopener noreferrer" : undefined} // Security measure
    >
      {children}
    </a>
  );
};

export default LinkButton;
