import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined,
  );

  React.useEffect(() => {
    // Pastikan kod ini hanya berjalan dalam persekitaran pelayar
    if (typeof window !== 'undefined') {
      const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
      const onChange = () => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      };
      mql.addEventListener("change", onChange);
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      return () => mql.removeEventListener("change", onChange);
    }
  }, []);

  // Jika tidak dalam pelayar, anggap bukan mudah alih secara lalai atau kembalikan undefined
  // Anda boleh menyesuaikan nilai lalai ini mengikut keperluan aplikasi anda
  return !!isMobile;
}