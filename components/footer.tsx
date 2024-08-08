import Link from "next/link";
import { CldImage } from "./cldimage";
import { Suspense } from "react";

export function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Suspense
              fallback={
                <div className="rounded-md bg-gray-200 w-full h-full">
                  {" "}
                  Loading Image
                </div>
              }
            >
              <CldImage
                src="Logos/lsgf9lciieblf3jemxy5"
                alt="Buildbot Logo"
                width={100}
                height={76.5999999999998}
              />
            </Suspense>
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              BUILDBOT
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2024
          <Link href="https://buildbotgh.com/" className="hover:underline">
            BuildBot GH™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
