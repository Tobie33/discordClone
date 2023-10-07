import Navigation from "@/Components/Navbar"
import DiscordFooter from "@/Components/Footer"

import "@/css/index.scss"

export default function DiscordPage({Component, pageProps}) {
  return (
    <>
    <Navigation />
      <Component {...pageProps} />
    <DiscordFooter/>
    </>
  )
}
