import Wei, { wei } from '@synthetixio/wei'

export async function getMarkets(req, res) {
  try {
    console.log("[api/futures/getMarkets] Requested");
    const markets = [
      {
        marketKey: 'sUSDTPERP',
        marketName: 'sUSD Market',
        asset: 'USDT',
        assetHex: 'USDT',
        currentFundingRate: wei(123),
        currentFundingVelocity: wei(123),
        feeRates: {
          makerFee: wei(123),
          takerFee: wei(123),
          makerFeeDelayedOrder: wei(123),
          takerFeeDelayedOrder: wei(123),
          makerFeeOffchainDelayedOrder: wei(123),
          takerFeeOffchainDelayedOrder: wei(123),
        },
        openInterest: {
          shortPct: 123,
          longPct: 123,
          shortUSD: wei(123),
          longUSD: wei(123),
          long: wei(123),
          short: wei(123)
        },
        marketDebt: wei(123),
        marketSkew: wei(123),
        marketSize: wei(123),
        contractMaxLeverage: wei(123),
        appMaxLeverage: wei(123),
        minInitialMargin: wei(123),
        keeperDeposit: wei(123),
        isSuspended: false,
        marketClosureReason: 'system-upgrade',
        marketLimitUsd: wei(123),
        marketLimitNative: wei(123),
        settings: {
          maxMarketValue: wei(123),
          skewScale: wei(123),
          delayedOrderConfirmWindow: 123,
          offchainDelayedOrderMinAge: 123,
          offchainDelayedOrderMaxAge: 123,
          minDelayTimeDelta: 123,
          maxDelayTimeDelta: 123
        }
      }
    ];
    res.status(200).json({ data: markets });

  } catch(e) {
    console.error("[api/futures/getMarkets] Error:", e);
    res.status(500).json({ error: e });
  }
}
