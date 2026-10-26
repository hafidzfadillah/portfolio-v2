import Script from "next/script"

const id = process.env.NEXT_PUBLIC_GA_ID

// Google Analytics loads only when NEXT_PUBLIC_GA_ID is set (e.g. in Vercel env vars).
export function Analytics() {
  if (!id) return null
  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`}
      </Script>
    </>
  )
}
