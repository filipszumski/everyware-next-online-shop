import { cva, VariantProps } from "class-variance-authority";
import NextLink, { LinkProps as InternalNextLinkProps } from "next/link";
import { forwardRef } from "react";

import { ButtonIcon, ButtonIconProps } from "@/shared/types/buttonIcon";
import { twMerge } from "@/shared/utilities/twMerge";

const linkVariants = cva(
  `
  text-primary flex gap-2 items-center px-4 py-2 rounded-md outline-none
  focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-2`,
  {
    variants: {
      variant: {
        text: "hover:text-primaryActive",
        underlined: "underline hover:text-primaryActive",
        contained: "hover:bg-primaryLight",
      },
    },
    defaultVariants: {
      variant: "text",
    },
  },
);

type NextLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof InternalNextLinkProps
> &
  InternalNextLinkProps & {
    children?: React.ReactNode;
  } & React.RefAttributes<HTMLAnchorElement>;

export type LinkProps = NextLinkProps &
  VariantProps<typeof linkVariants> & {
    icon?: ButtonIcon;
    iconProps?: ButtonIconProps;
  };

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { icon: Icon, children, className, variant, iconProps = {}, ...props },
  ref,
) {
  const { className: iconClassName, ...restIconProps } = iconProps;

  return (
    <NextLink
      ref={ref}
      {...props}
      className={twMerge(linkVariants({ variant, className }), {
        "p-2 rounded-full": Icon && !children,
      })}
    >
      {Icon && (
        <Icon
          {...restIconProps}
          className={twMerge("h-5 w-5", iconClassName, {
            "h-6 w-6": !children,
          })}
        />
      )}
      {children}
    </NextLink>
  );
});
