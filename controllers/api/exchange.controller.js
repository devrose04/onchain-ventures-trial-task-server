import Wei, { wei } from '@synthetixio/wei'

export async function getTokenBalances(req, res) {
  try {
    console.log("[api/exchange/getTokenBalances] Requested");
    const tokenBalances = {
      'sUSD': {
        token: {
          address: '0xa540D8224aa8f18AB2C59DE7FD35444F504D0675',
          chainId: 10,
          decimals: 18,
          logoURI: '',
          name: 'sUSD',
          symbol: 'sUSD',
          tags: []
        },
        balance: wei(342)
      },
      'wUSD': {
        token: {
          address: '0xa540D8224aa8f18AB2C59DE7FD35444F504D0675',
          chainId: 10,
          decimals: 18,
          logoURI: '',
          name: 'wUSD',
          symbol: 'wUSD',
          tags: []
        },
        balance: wei(21)
      }
    }
    res.status(200).json({ data: tokenBalances });

  } catch(e) {
    console.error("[api/exchange/getTokenBalances] Error:", e);
    res.status(500).json({ error: e });
  }
}
