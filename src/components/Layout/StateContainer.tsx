import clsx from "clsx";
import Image, { ImageProps } from "next/image";

type Props = {
  imageProps: ImageProps;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
  digest?: string | null;
};

export function StateContainer({
  imageProps,
  title,
  description,
  action,
  className,
  fullHeight = false,
  digest,
}: Props) {
  return (
    <div
      className={clsx(
        "flex justify-center flex-col items-center gap-4",
        fullHeight && "h-screen",
        className,
      )}
    >
      <Image className="w-80 h-auto" {...imageProps} />
      <h1 className="text-3xl font-bold">{title}</h1>
      {description && <p className="text-md">{description}</p>}
      {digest && <p className="text-sm text-gray-500">Error ID: {digest}</p>}
      {action}
    </div>
  );
}
