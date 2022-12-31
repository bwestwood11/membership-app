import { CheckIcon } from "@heroicons/react/20/solid";
import { useUserAuth, onAuthStateChanged } from "../context/UserAuthContext";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

const tiers = [
  {
    name: "Standard Package",
    href: "/profile",
    priceMonthly: 9.99,
    priceYearly: 99.99,
    description: "All benefits require an active subscription.",
    includedFeatures: [
      "Unlimited appliance diagnostics service calls for $49 per service call. Non-members pay $99.",
      "10% off labor for any appliance repair.",
      "25% off dryer vent cleaning service.",
      "Up to 36 months of product protection on new appliance purchases.",
      "Refrigerator water filter replacement with purchase of water filter.",
      "Access to dedicated phone and chat teams.",
      "Refrigerator, washer, dryer, or range loaner for $150.",
      "Monthly newsletter written by industry experts.",
    ],
  },
  {
    name: "Premium Package",
    href: "/profile",
    priceMonthly: 19.99,
    priceYearly: 199.99,
    description: "All benefits require an active subscription.",
    includedFeatures: [
      "Unlimited appliance diagnostics service calls at no additional costs. Non-member pay $99.",
      "10% off labor for any appliance repair.",
      "One dryer vent cleaning service per year.",
      "Up to 48 months of product protection on new appliance purchases.",
      "Refrigerator water filter replacement with purchase of water filter.",
      "Access to dedicated phone and chat teams.",
      "Refrigerator, washer, dryer or range loaner at no additional cost.",
      "Monthly newsletter written by industry experts.",
      "2-day delivery and standard installation including haul away.",
    ],
  },
  {
    name: "Global Entrepreneur Package",
    href: "/profile",
    priceMonthly: 49.99,
    priceYearly: 499.99,
    description: "All benefits require an active subscription.",
    includedFeatures: [
      "Member-only weekly love stream.",
      "Unlimited 1-on-1 chat.",
      "Extra entry into global giveaways.",
      "Private scheduled lunch with a tour of Tampa Bay.",
      "Unlimited industry related support",
      "Access to private content",
      "Access to national buying group information",
      "Help with appliance business start-up",
    ],
  },
];

export default function Example() {
  const [activeYear, setActiveYear] = useState(false);
  const { currentUser } = useUserAuth();
  const auth = useUserAuth();
  const router = useRouter();

  const handleYearlyPriceTrue = () => {
    setActiveYear(true);
  };
  const handleYearlyPriceFalse = () => {
    setActiveYear(false);
  };

  return (
    <div className="bg-gradient-to-t from-[#BF202F]">
      <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 text-center">
            Pricing Plans
          </h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Check out our three membership options we offer here. If you have
            any questions, please contact us.
          </p>
          <div className="relative mt-6 flex self-center rounded-lg bg-gray-100 p-0.5 sm:mt-8">
            <button
              onClick={handleYearlyPriceFalse}
              type="button"
              className="relative w-1/2 whitespace-nowrap rounded-md border-gray-200 bg-white py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8"
            >
              Monthly billing
            </button>
            <button
              onClick={handleYearlyPriceTrue}
              type="button"
              className={
                !activeYear
                  ? "relative ml-0.5 w-1/2 whitespace-nowrap rounded-md border border-transparent py-2 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8"
                  : "relative bg-white border-gray-200 ml-0.5 w-1/2 whitespace-nowrap rounded-md border border-transparent py-2 text-sm font-medium text-gray-900 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8"
              }
            >
              Yearly billing
            </button>
          </div>
        </div>
        <div className="bg-white mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm"
            >
              <div className="p-6">
                <h2 className="text-lg font-medium leading-6 text-gray-900">
                  {tier.name}
                </h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {!activeYear ? tier.priceMonthly : tier.priceYearly}
                  </span>{" "}
                  <span className="text-base font-medium text-gray-500">
                    {!activeYear ? "per month" : "per year"}
                  </span>
                </p>
                <a
                  href={tier.href}
                  className="mt-8 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900"
                >
                  Subscribe to {tier.name}
                </a>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h3 className="text-sm font-medium text-gray-900">
                  What is included
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon
                        className="h-5 w-5 flex-shrink-0 text-green-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
