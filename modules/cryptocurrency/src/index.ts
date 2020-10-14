export async function getAvailableCoinIds() {
    // ! Dit zijn echt 6000 coins..?
    const url = 'https://api.coingecko.com/api/v3/coins/list';
    return fetch(url)
        .then(s => s.json())
        .then(response => {
            return response
                .filter((coin: any) => !(
                    coin.name.startsWith('0.5X') ||
                    coin.name.startsWith('1X') ||
                    coin.name.startsWith('3X')
                ))
                .map((coin: any) => ({
                id: coin.id,
                name: coin.name
            }))
        })
}

export function getFromDateRange(coinId: string, start: Date, end: Date) {
    // TODO 1 month or 1 week default...
}

export async function getCoinToday(coinId: string) {
    // TODO get today price of coin.
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=eur&include_24hr_vol=false&include_24hr_change=true&include_last_updated_at=true`
    return fetch(url).then(s => s.json())
}

export async function getCoinsToday(coins: string[]) {
    const tmp = []
    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        const response = await getCoinToday(coin);
        tmp.push({
          name: coin,
          ...response[coin]
        });
    }
    return tmp;
}
