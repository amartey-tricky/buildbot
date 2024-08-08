"use client";

import { CldImage as NextCldImage } from "next-cloudinary";

export function CldImage(props: React.ComponentProps<typeof NextCldImage>) {
  return <NextCldImage {...props} />;
}