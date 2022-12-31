import {
  ArrowPathIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import { AiFillYoutube, AiFillFire } from "react-icons/ai";

const features = [
  {
    name: "Dryer Vent Cleaning Once a Year",
    description:
      "Clogged dryer vents are one of the leading causes of house fires. These fires cause an estimated $238 million in property damage yearly.",
    icon: AiFillFire,
  },
  {
    name: "Loaner Program",
    description:
      "Never be without a working appliance. We will repair your appliance or provide you with a loaner while we get your's up and running.",
    icon: AiFillYoutube,
  },
  {
    name: "Unlimited Appliance Diagnostic Calls!",
    description:
      "We are here for you when you need us and our committed that your appliances are always working!",
    icon: ArrowPathIcon,
  },
  {
    name: "Extended Product Protection",
    description:
      "Receive an extended warranty on any new appliance purchase.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Expedited Delivery Service",
    description:
      "We will provide an even faster delivery! Guaranteed 2 day delivery and standard installation including haul away.",
    icon: CogIcon,
  },
  {
    name: "We're Always Here For You",
    description:
      "Receive access to dedicated phone and chat teams.",
    icon: ServerIcon,
  },
];

export default function Example() {
  return (
    <div className="relative bg-gradient-to-b from-[#BF202F] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-semibold text-white">The Appliance Plug</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Some of the features you will experience
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-white">
          Below are some of the benefits you will receive when you become a
          monthly subscriber to one of our three subscription plans that is
          offered.
        </p>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl bg-[#BF202F] p-3 shadow-lg">
                        <feature.icon
                          className="h-8 w-8 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
