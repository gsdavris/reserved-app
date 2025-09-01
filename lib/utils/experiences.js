// ---- formatting ----
export const formatEUR = (n) =>
    new Intl.NumberFormat('el-GR', { style: 'currency', currency: 'EUR' })
        .format(Number(n || 0));

// ---- normalizers ----
export const normalizePricingOption = (opt = {}) => {
    if (Array.isArray(opt.availabilityWindows)) return opt;
    const from = opt.availableFrom || null;
    const to = opt.availableTo || null;
    const win = from || to ? [{ from: from || to, to: to || from }] : [];
    const { availableFrom, availableTo, ...rest } = opt;
    return { ...rest, availabilityWindows: win };
};

export const normalizePricingOptions = (options = []) =>
    (Array.isArray(options) ? options : []).map(normalizePricingOption);

export const normalizeAddons = (addons) => {
    if (addons && Array.isArray(addons.options)) return { options: [...addons.options] };
    if (Array.isArray(addons)) return { options: [...addons] };
    return { options: [] };
};

// ---- summaries for header-right badges ----
export const summarizePricing = (pricing) => {
    const options = Array.isArray(pricing?.options) ? pricing.options : [];
    const prices = options.map((o) => Number(o?.basePrice)).filter((n) => !Number.isNaN(n));
    const min = prices.length ? Math.min(...prices) : null;
    const activeCount = options.filter((o) => o?.isActive ?? true).length;
    return { count: options.length, activeCount, minPrice: min };
};

export const summarizeAddons = (addons) => {
    const options = Array.isArray(addons?.options) ? addons.options : [];
    const required = options.filter((a) => !!a.required).length;
    const paid = options.filter((a) => Number(a?.pricing?.price) > 0).length;
    return { count: options.length, required, paid };
};

export const summarizeLocation = (loc) => {
    if (!loc || !loc.type) return { label: '—' };
    if (loc.type === 'point') return { label: loc?.name ? `Σημείο: ${loc.name}` : 'Σημείο: επιλεγμένο' };
    if (loc.type === 'region') return { label: loc?.name ? `Περιοχή: ${loc.name}` : 'Περιοχή: ορισμένη' };
    return { label: '—' };
};

export const summarizeGallery = (images = []) => {
    const count = Array.isArray(images) ? images.length : 0;
    return { count, valid: count === 0 || count >= 2, maxExceeded: count > 10 };
};