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
          ? "border border-brandPrimary hover:bg-brandPrimary dark:border-brandAccentLight dark:hover:bg-brandAccentLight text-brandPrimary hover:text-cardlight dark:text-brandAccentLight dark:hover:text-carddark transition"
          : "bg-brandPrimary hover:bg-marrslight active:bg-marrsdark dark:hover:bg-carrilight dark:active:bg-carridark dark:bg-brandAccentLight text-backgroundLight dark:text-backgroundDark",
        "py-2 px-3 rounded lg:text-xl",
        className,
        "outline-brandPrimary dark:outline-brandAccentLight focus-visible:outline-double outline-offset-2"
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
