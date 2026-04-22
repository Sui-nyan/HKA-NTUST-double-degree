type Locale = "en" | "de";

/**
 * Dynamically import locale files
 * Usage: const locale = await getLocale('banking', 'en')
 */
export async function getLocale(
  page: string,
  locale: Locale
): Promise<Record<string, unknown>> {
  try {
    const data = await import(`@/app/${page}/locales/${locale}.json`);
    return data.default;
  } catch (error) {
    console.warn(`Failed to load locale: ${page}/${locale}.json`, error);
    // Fallback to English
    if (locale !== "en") {
      return getLocale(page, "en");
    }
    return {};
  }
}
