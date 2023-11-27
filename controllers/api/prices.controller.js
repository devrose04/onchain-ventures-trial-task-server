import Wei, { wei } from '@synthetixio/wei'

export async function getPreviousDayPrices(req, res) {
  try {
    console.log("[api/prices/getPreviousDayPrices] Requested");
    const stats = [
      {
				trader: '0xa540D8224aa8f18AB2C59DE7FD35444F504D0675',
				traderShort: truncateAddress('0xa540D8224aa8f18AB2C59DE7FD35444F504D0675'),
				pnl: 123.123,
				totalVolume: 123123.123123,
				totalTrades: 123,
				liquidations: 123,
				rank: 1,
				rankText: '1',
			}
    ]
    res.status(200).json({ data: stats });

  } catch(e) {
    console.error("[api/prices/getPreviousDayPrices] Error:", e);
    res.status(500).json({ error: e });
  }
}

export async function getUpdatedPrices(req, res) {
  try {
    console.log("[api/prices/getUpdatedPrices] Requested");
    const min = 1;
    const max = 2;
    const randomPrice = (Math.random() * (max - min)) + min;
    const prices = {
        "sETH": randomPrice.toString(),
        "sBTC": "37713.202121620000000000",
        "LINK": "14.832686480000000000",
        "SOL": "57.950533330000000000",
        "AVAX": "21.209505460000000000",
        "AAVE": "98.119341770000000000",
        "UNI": "6.162432470000000000",
        "MATIC": "0.765363070000000000",
        "XAU": "2002.630000000000000000",
        "XAG": "24.329000000000000000",
        "EUR": "1.094540000000000000",
        "APE": "1.667814800000000000",
        "DYDX": "3.433503490000000000",
        "BNB": "232.500220000000000000",
        "DOGE": "0.077688000000000000",
        "OP": "1.812011520000000000",
        "ARB": "1.043332580000000000",
        "ATOM": "9.884690280000000000",
        "FTM": "0.313369410000000000",
        "NEAR": "1.838000000000000000",
        "FLOW": "0.678692020000000000",
        "AXS": "6.629447800000000000",
        "AUD": "0.658490000000000000",
        "GBP": "1.260020000000000000",
        "APT": "7.282596200000000000",
        "LDO": "2.529200000000000000",
        "ADA": "0.391879940000000000",
        "GMX": "51.365000750000000000",
        "FIL": "4.603111440000000000",
        "LTC": "70.171854900000000000",
        "BCH": "226.880000000000000000",
        "SHIB": "0.000008295200000000",
        "CRV": "0.585436250000000000",
        "SUI": "0.640683790000000000",
        "PEPE": "0.000001124900000000",
        "BLUR": "0.569151280000000000",
        "XRP": "0.618705280000000000",
        "DOT": "5.323532120000000000",
        "TRX": "0.108172000000000000",
        "FLOKI": "0.000032390800000000",
        "INJ": "16.941216610000000000",
        "STETH": "2076.980082620000000000",
        "ETHBTC": "0.055125000000000000",
        "XMR": "169.927712730000000000",
        "MAV": "0.302084870000000000",
        "ETC": "19.218563460000000000",
        "COMP": "52.909365670000000000",
        "YFI": "8561.317198080000000000",
        "MKR": "1487.761810520000000000",
        "RPL": "27.557151880000000000",
        "WLD": "2.691151200000000000",
        "USDT": "1.000330320000000000",
        "SEI": "0.230298910000000000",
        "RUNE": "5.352073860000000000",
        "SUSHI": "1.196896250000000000",
        "ZEC": "29.667699630000000000",
        "XTZ": "0.845656870000000000",
        "UMA": "1.844601950000000000",
        "ENJ": "0.306484660000000000",
        "ICP": "4.650756280000000000",
        "XLM": "0.120791830000000000",
        "1INCH": "0.357040930000000000",
        "EOS": "0.699660500000000000",
        "CELO": "0.540452240000000000",
        "ALGO": "0.137300000000000000",
        "ZRX": "0.404150300000000000",
        "BAL": "3.820725620000000000",
        "FXS": "7.298800000000000000",
        "KNC": "0.737571620000000000",
        "RNDR": "3.330257280000000000",
        "ONE": "0.013574530000000000",
        "PERP": "0.670221100000000000",
        "ZIL": "0.021292020000000000",
        "STETHETH": "0.999688310000000000"
    };
    const type =  'off_chain';
    const source = 'stream';
    res.status(200).json({ data: {
      prices: prices,
      type: type,
      source: source
    } });

  } catch(e) {
    console.error("[api/prices/getUpdatedPrices] Error:", e);
    res.status(500).json({ error: e });
  }
}

export async function getPortfolioPrices(req, res) {
  try {
    console.log("[api/prices/getPortfolioPrices] Requested");
    const portfolioPrices = {
      hoverValue: wei(555),
      upnl: wei(111)
    }
    
    res.status(200).json({ data: portfolioPrices });

  } catch(e) {
    console.error("[api/prices/getPortfolioPrices] Error:", e);
    res.status(500).json({ error: e });
  }
}