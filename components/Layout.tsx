import React, { Fragment, ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
export default function Layout(props: {
  children: ReactNode;
  deviceType: string;
}) {
  // const UA = context.req.headers["user-agent"];
  // const isMobile = Boolean(
  //   UA.match(
  //     /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  //   )
  // );
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}

// export async function getStaticProps(context: any) {
//   console.log("a");
//   const UA = context.req.headers["user-agent"];
//   const isMobile = Boolean(
//     UA.match(
//       /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
//     )
//   );
//   return {
//     props: {
//       deviceType: isMobile ? "mobile" : "desktop",
//     },
//   };
// }
