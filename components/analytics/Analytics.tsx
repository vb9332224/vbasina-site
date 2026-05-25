/**
 * Подключение трёх счётчиков аналитики через next/script.
 * Счётчики грузятся стратегией afterInteractive — не блокируют рендер.
 * Если соответствующая env-переменная не задана — счётчик не подгружается.
 *
 * Переменные:
 *   NEXT_PUBLIC_GA4_ID     — Google Analytics 4, формат G-XXXXXXXXXX
 *   NEXT_PUBLIC_YM_ID      — Яндекс.Метрика, формат 12345678 (число)
 *   NEXT_PUBLIC_CLARITY_ID — Microsoft Clarity, формат abc12defgh
 */
import Script from "next/script";

export function Analytics() {
  const ga4 = process.env.NEXT_PUBLIC_GA4_ID;
  const ym = process.env.NEXT_PUBLIC_YM_ID;
  const clarity = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <>
      {/* Google Analytics 4 */}
      {ga4 && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga4}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {/* Яндекс.Метрика */}
      {ym && (
        <>
          <Script id="ym-init" strategy="afterInteractive">
            {`
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(${ym}, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
              });
            `}
          </Script>
          <noscript>
            <div>
              <img
                src={`https://mc.yandex.ru/watch/${ym}`}
                style={{ position: "absolute", left: "-9999px" }}
                alt=""
              />
            </div>
          </noscript>
        </>
      )}

      {/* Microsoft Clarity */}
      {clarity && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarity}");
          `}
        </Script>
      )}
    </>
  );
}
