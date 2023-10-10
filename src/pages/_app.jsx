import DiscordFooter from "@/Components/Footer"

import "@/css/index.scss"

export default function DiscordPage({Component, pageProps}) {
  return (
    <>
    <Component {...pageProps} />
    <DiscordFooter/>
    </>
  )
}
