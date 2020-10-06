export function getFromDateRange(coinId: string, start: Date, end: Date) {
    // TODO 1 month or 1 week default...
}

export async function getCoinToday(coinId: string) {
    // TODO get today price of coin.
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=eur&include_24hr_vol=false&include_24hr_change=true&include_last_updated_at=true`
    return fetch(url).then(s => s.json())
}
