import type { V2_MetaFunction } from "@remix-run/node";
import { Navbar } from "~/components/Navbar";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Quattor Adm" },
    { name: "Quattor Academia ADM", content: "Quattor Academia" },
  ];
};

export default function () {
  return (
    <div>
      <Navbar />
    </div>
  );
}
