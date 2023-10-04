import Navigation from "@/Components/Navbar"

import "@/css/index.scss"

export default function DiscordPage({Component, pageProps}) {
  return (
    <>
    <Navigation />
      <Component {...pageProps} />
    </>
  )
}
