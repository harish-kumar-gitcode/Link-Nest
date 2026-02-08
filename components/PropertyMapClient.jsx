"use client";

import dynamic from "next/dynamic";

const PropertyMap = dynamic(() => import("./PropertyMap"), { ssr: false });

export default function PropertyMapClient({ lat, lng }) {
  return <PropertyMap lat={lat} lng={lng} />;
}
