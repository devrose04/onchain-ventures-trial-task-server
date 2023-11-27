import { wei } from '@synthetixio/wei'

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

export async function getFuturesTrades(req, res) {
  try {
    console.log("[api/futures/getFuturesTrades] Requested");
    const futuresTrades = [
          {
              "id": "0xea2b720ee75b4fa80b96e62fe55ab927ca0cc99be8b947b717b3820e102e7ae2-11",
              "timestamp": "1700983937",
              "account": "0xcad906c66453bbd5f9398e83cd77fd4e6f12e1fc",
              "abstractAccount": "0xcad906c66453bbd5f9398e83cd77fd4e6f12e1fc",
              "accountType": "isolated_margin",
              "margin": "988566642071892563456",
              "size": "-10058511130609649906",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2087492475286172024609",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbd0e",
              "positionSize": "-10058511130609649906",
              "pnl": "0",
              "feesPaid": "14395270228008913292",
              "fundingAccrued": "0",
              "keeperFeesPaid": "1797030449371002791",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x706f6c796e6f6d69616c00000000000000000000000000000000000000000000"
          },
          {
              "id": "0xe2cfa39a81f987fc75e7cae11a47b59d8e08e83291f2e3c072a6b82006101889-11",
              "timestamp": "1700983171",
              "account": "0xdfeddc98ae6edcb5f63178a8589f41b6477f6c42",
              "abstractAccount": "0xca453de20fac2133d014b893cd09b3389d91a295",
              "accountType": "smart_margin",
              "margin": "186439612312808340059",
              "size": "4503100000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2090799021604904384050",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbd0d",
              "positionSize": "4503100000000000000",
              "pnl": "0",
              "feesPaid": "3693403102029468927",
              "fundingAccrued": "0",
              "keeperFeesPaid": "1810387687191659941",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0xd49127157bbe405a7cd05ce3526b043ccfceff8af31515e081e2fec1cd69cef9-16",
              "timestamp": "1700982461",
              "account": "0x7bb85b553c04cf2dfcbbdac998ea3621e17236c3",
              "abstractAccount": "0xd2d0841d67c5414ca8861aba4bc2603411db1c4c",
              "accountType": "smart_margin",
              "margin": "835244906341169318924",
              "size": "4236000000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2087410779314990631358",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbceb",
              "positionSize": "19599800000000000000",
              "pnl": "0",
              "feesPaid": "3587339943478274578",
              "fundingAccrued": "-1370215535423636",
              "keeperFeesPaid": "1818885531242614516",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0x64789e02709f2b701e3eee5cac5a3fad95e963f7d71e17f68a7651d38b6ad607-11",
              "timestamp": "1700982239",
              "account": "0xf9eab718ade5fc6ceb7642c7aee7f490c1980ae5",
              "abstractAccount": "0xf9eab718ade5fc6ceb7642c7aee7f490c1980ae5",
              "accountType": "isolated_margin",
              "margin": "101005939962930272949",
              "size": "527160574503847380",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2088677586520585942955",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbd0b",
              "positionSize": "0",
              "positionClosed": true,
              "pnl": "-4887220231511597991",
              "feesPaid": "2057668125727924037",
              "fundingAccrued": "47228388812317",
              "keeperFeesPaid": "1837454430435223742",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x706f6c796e6f6d69616c00000000000000000000000000000000000000000000"
          },
          {
              "id": "0x26547f76bd56ba6f87ad410335431b4ceb8d8ac6663d44829006f81013d9a358-21",
              "timestamp": "1700981295",
              "account": "0xa75e841b8740b8c41fdffd6ec2799543ba6cc9ec",
              "abstractAccount": "0xa75e841b8740b8c41fdffd6ec2799543ba6cc9ec",
              "accountType": "isolated_margin",
              "margin": "3489031153470297868620",
              "size": "-12000000000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2087946322209749718614",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbd0c",
              "positionSize": "-12000000000000000000",
              "pnl": "0",
              "feesPaid": "16823264637138695200",
              "fundingAccrued": "0",
              "keeperFeesPaid": "1790051117228497226",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x706f6c796e6f6d69616c00000000000000000000000000000000000000000000"
          },
          {
              "id": "0x79af0d634ece7425b491cbeb5702c028ed9dd688be493b9413e6945973e57e21-7",
              "timestamp": "1700980667",
              "account": "0xf9eab718ade5fc6ceb7642c7aee7f490c1980ae5",
              "abstractAccount": "0xf9eab718ade5fc6ceb7642c7aee7f490c1980ae5",
              "accountType": "isolated_margin",
              "margin": "108375802319215677112",
              "size": "-527160574503847380",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2079406748624350344336",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbd0b",
              "positionSize": "-527160574503847380",
              "pnl": "0",
              "feesPaid": "2384029144039930982",
              "fundingAccrued": "0",
              "keeperFeesPaid": "1726320390300737054",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x706f6c796e6f6d69616c00000000000000000000000000000000000000000000"
          },
          {
              "id": "0xfcba37c50b8afb956019bf9499059f4c9778718e89000131f700d94ec327ec4a-38",
              "timestamp": "1700980653",
              "account": "0xb3534f706ff197ddc3b4f7fbed335df5a267e938",
              "abstractAccount": "0xb3534f706ff197ddc3b4f7fbed335df5a267e938",
              "accountType": "isolated_margin",
              "margin": "48249193150080077080",
              "size": "240886606062096494",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2079122072735476651044",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbd0a",
              "positionSize": "240886606062096494",
              "pnl": "0",
              "feesPaid": "1850973381857930979",
              "fundingAccrued": "0",
              "keeperFeesPaid": "1750806849919922920",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x706f6c796e6f6d69616c00000000000000000000000000000000000000000000"
          },
          {
              "id": "0x6655d818ca988a15581d6070857fdb31130339abf8d955a6dbbccd66eb95fe12-11",
              "timestamp": "1700980045",
              "account": "0xbbf46514de004992d8dcbcec19f02f2e772ab51d",
              "abstractAccount": "0xdf156f05c67f574a9c41a709c8f8407b66348e33",
              "accountType": "smart_margin",
              "margin": "130516133244907769340",
              "size": "-3181600000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2079141397454641422371",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbd09",
              "positionSize": "-3181600000000000000",
              "pnl": "0",
              "feesPaid": "5782864517177242949",
              "fundingAccrued": "0",
              "keeperFeesPaid": "1813866755092230660",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0x9d4f6ecbe64bedec943ae1fce9ae959ac4dda8bb56b894977519e5117cc145ef-7",
              "timestamp": "1700979451",
              "account": "0x83592b80f1067c40cdf26a92328b5199e234f908",
              "abstractAccount": "0xdfeb4354e6230261d06026d20c6805fede020044",
              "accountType": "smart_margin",
              "margin": "54423161008960435513",
              "size": "667559710821542000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2080002768162175706255",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbd08",
              "positionSize": "667559710821542000",
              "pnl": "0",
              "feesPaid": "2116190145248830444",
              "fundingAccrued": "0",
              "keeperFeesPaid": "1838484935964360668",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0x0a2f53188b16b051f4aef71d1692a51cf943e279a3ca207b0eb410eea8d14803-11",
              "timestamp": "1700978317",
              "account": "0x775fac7f7e194223d059e9b9f33a621d020f9efb",
              "abstractAccount": "0x775fac7f7e194223d059e9b9f33a621d020f9efb",
              "accountType": "isolated_margin",
              "margin": "1190505447488608619638",
              "size": "-12483826029506968457",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2082342259195258526459",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbcfe",
              "positionSize": "0",
              "positionClosed": true,
              "pnl": "119866566232159253428",
              "feesPaid": "17361451790715344090",
              "fundingAccrued": "-789886381663422",
              "keeperFeesPaid": "1764092692104875194",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x706f6c796e6f6d69616c00000000000000000000000000000000000000000000"
          },
          {
              "id": "0xe2d6f0df1b0cfe09fb011f425c1b53fff127a4a8ae2ce30f1ef5d690c95542ae-11",
              "timestamp": "1700977341",
              "account": "0x1b9c8397544ac5175598137b4bd4a7990c5581f3",
              "abstractAccount": "0x32af89f1179fb3836e8050077aef4c4cbfe5b757",
              "accountType": "smart_margin",
              "margin": "1198210558388521188935",
              "size": "14407100000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2081857875878408069598",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbd07",
              "positionSize": "14407100000000000000",
              "pnl": "0",
              "feesPaid": "7788148532192373644",
              "fundingAccrued": "0",
              "keeperFeesPaid": "1789441611478811065",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0xcda6b6bcfabeeb02a6a746358ccba8064f3f026048849a07b26e19c2f2983bc0-11",
              "timestamp": "1700977283",
              "account": "0x1b9c8397544ac5175598137b4bd4a7990c5581f3",
              "abstractAccount": "0x32af89f1179fb3836e8050077aef4c4cbfe5b757",
              "accountType": "smart_margin",
              "margin": "1194207463172794550694",
              "size": "2880000000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2082410313428805986539",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbd05",
              "positionSize": "0",
              "positionClosed": true,
              "pnl": "1449927762737581958",
              "feesPaid": "2952963217638035721",
              "fundingAccrued": "276886964319704",
              "keeperFeesPaid": "1753494877103043473",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0xac1b0eef356afc1e9f22672e694a43f293056d2f1bb3004749b487b7a29930be-8",
              "timestamp": "1700976451",
              "account": "0xb040b498da8e9582eb66e7cc01f935ab2bfcd6d2",
              "abstractAccount": "0xf17dd6cfb7ea87f0c62481964f177461b9712016",
              "accountType": "smart_margin",
              "margin": "1198153958633695011334",
              "size": "2304500000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2082634327229434277685",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbd06",
              "positionSize": "2304500000000000000",
              "pnl": "0",
              "feesPaid": "2805927527725034924",
              "fundingAccrued": "0",
              "keeperFeesPaid": "1846041366304988666",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0xc05bcd45e7244fe9dba93cab7e75766d9e9c1c33b5acbc40ccda363441378da1-8",
              "timestamp": "1700976383",
              "account": "0xb040b498da8e9582eb66e7cc01f935ab2bfcd6d2",
              "abstractAccount": "0xf17dd6cfb7ea87f0c62481964f177461b9712016",
              "accountType": "smart_margin",
              "margin": "1399214198754214192857",
              "size": "-1853200000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2083034880646493609441",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xb2fd",
              "positionSize": "0",
              "positionClosed": true,
              "pnl": "293867178234303145136",
              "feesPaid": "4182890095044369757",
              "fundingAccrued": "-120411597237878",
              "keeperFeesPaid": "1866721950555920583",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0xd39eea267f9692b6166f4eef6e348cfe9e337444b3490f661384b60879945a97-11",
              "timestamp": "1700976207",
              "account": "0x1b9c8397544ac5175598137b4bd4a7990c5581f3",
              "abstractAccount": "0x32af89f1179fb3836e8050077aef4c4cbfe5b757",
              "accountType": "smart_margin",
              "margin": "1198060244864670418914",
              "size": "-2880000000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2082913760568645424719",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbd05",
              "positionSize": "-2880000000000000000",
              "pnl": "0",
              "feesPaid": "5539030113592200379",
              "fundingAccrued": "0",
              "keeperFeesPaid": "1939755135329581086",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0x5adeefe2e538e2a52a9dee9148589c83a9f5e8e8ef08a2fac36105d220e07eb8-11",
              "timestamp": "1700974817",
              "account": "0x30391a4f9d2f099d41888f811784281cba4097f0",
              "abstractAccount": "0xb527ab4b04c8da2d040a028226026ce6761503cd",
              "accountType": "smart_margin",
              "margin": "178934592417587652646695",
              "size": "-100000000000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2083745430561825572408",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbcd4",
              "positionSize": "800000000000000000000",
              "pnl": "1844849116263630523800",
              "feesPaid": "120763519833578658524",
              "fundingAccrued": "-89716208544450900",
              "keeperFeesPaid": "1769131747519623703",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0xa7baa4cc1549fcd369e99281aa34880ff390cf439bae5da2b80c48fa3eea4f59-15",
              "timestamp": "1700974807",
              "account": "0xeed09cc4ebf3fa599eb9ffd7a280e7b944b436b7",
              "abstractAccount": "0x1cbe471ef6d077e81d2540b3e8cff475a2d553cf",
              "accountType": "smart_margin",
              "margin": "504306923005956864231472",
              "size": "-144000000000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2083984746664977711940",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xb8e3",
              "positionSize": "1662526100000000000000",
              "pnl": "19226540138831525433312",
              "feesPaid": "61797803874383022798",
              "fundingAccrued": "-120048043248925095",
              "keeperFeesPaid": "1779043170431664695",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0xa01ddfd72fa792f8da2dd8e86a1bde27135983fbf7cfef08e1ab2cbcfd3c9cfb-12",
              "timestamp": "1700974327",
              "account": "0x3d44b39b94ba1069ab4a46224fe08ca34913d06e",
              "abstractAccount": "0x803844f41ff22e07bbc6b23939f1329be101125a",
              "accountType": "smart_margin",
              "margin": "1494943799265183258904",
              "size": "3594600000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2082111099350089258581",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbd04",
              "positionSize": "3594600000000000000",
              "pnl": "0",
              "feesPaid": "6276814669451039605",
              "fundingAccrued": "0",
              "keeperFeesPaid": "1786200734816741096",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0xbaaf315c9f1b38b5593234aca8ce3babb326f7cfeecdf7d0c1173579bd690c2c-11",
              "timestamp": "1700973999",
              "account": "0x6a2e646c5caf92820c00f501e04fe1a0ec9f37bd",
              "abstractAccount": "0x6a2e646c5caf92820c00f501e04fe1a0ec9f37bd",
              "accountType": "isolated_margin",
              "margin": "967093287616081103326361",
              "size": "-3065027706256263160",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2083122992124959037094",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0x594c",
              "positionSize": "733756116938449682875",
              "pnl": "164989534580119265234",
              "feesPaid": "3035906615080699606",
              "fundingAccrued": "-48044237590548756",
              "keeperFeesPaid": "1758940677800210218",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4c59524100000000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0xbc56e03bc6c217b3bc8f9734756204020fc86c4401f189353a046e9ec15e06b3-11",
              "timestamp": "1700972973",
              "account": "0xc2ecd777d06ffdf8b3179286beabf52b67e9d991",
              "abstractAccount": "0x7740859f2e8112e5a9ae04a954968611717879ab",
              "accountType": "smart_margin",
              "margin": "189552402388542356029",
              "size": "23200000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2077262983491809037465",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbc25",
              "positionSize": "-23100000000000000",
              "pnl": "-20264538432023802",
              "feesPaid": "1883600617696113155",
              "fundingAccrued": "4408059484961",
              "keeperFeesPaid": "1854685116965907174",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0xc88a216878ff71585f4a860a5279c005bdc70f72203f682bbc8ec4ae28113d1e-7",
              "timestamp": "1700972485",
              "account": "0x89d1eb17ba333a0ffbd8f33d2af9037566ad473a",
              "abstractAccount": "0x786154dcb8e99688416ddf411f9b0be49b63b574",
              "accountType": "smart_margin",
              "margin": "33094996960099405907",
              "size": "56500000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2072069618454706414637",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xaa96",
              "positionSize": "0",
              "positionClosed": true,
              "pnl": "-17362903948977322727",
              "feesPaid": "1901141888294701602",
              "fundingAccrued": "3535720759295",
              "keeperFeesPaid": "1830898728229087055",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0x6d934dcac81ade1fe41e31c3d57d101b7f46193e1c393fd7623a0bfba88f1b11-31",
              "timestamp": "1700970815",
              "account": "0xd1e4668f8acbcd3520c47558e50ba61f53b2892f",
              "abstractAccount": "0x4ec68c8c8079d3f35ec0ec8214d2ef54efc3bc29",
              "accountType": "smart_margin",
              "margin": "905106810590183517190",
              "size": "-3000000000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2076910903471889871027",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbc13",
              "positionSize": "0",
              "positionClosed": true,
              "pnl": "49617010736944829610",
              "feesPaid": "3051566038521582210",
              "fundingAccrued": "-361218178079280",
              "keeperFeesPaid": "1805419496438448288",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0x15e648977d54b79db7d0557b4ae1e548bd69443578049263bddb1421739d5a77-11",
              "timestamp": "1700970385",
              "account": "0x14e1d3093541a6576fdb7192af63f88ed524fe11",
              "abstractAccount": "0xbb55c70735d71b62949c977e3212ca128f60aa3a",
              "accountType": "smart_margin",
              "margin": "623688339904558040980",
              "size": "10545300000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2076432999479828738701",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbd03",
              "positionSize": "10545300000000000000",
              "pnl": "0",
              "feesPaid": "14879625441090741818",
              "fundingAccrued": "0",
              "keeperFeesPaid": "1741660095441959020",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0x387b01acdec4359d4a6472a2489d99b381d7ab76e3a2b6c91af6e3a1ffbe9062-11",
              "timestamp": "1700967467",
              "account": "0xc3f82a5ebb4612888eb37db3aa3b9464c139faae",
              "abstractAccount": "0xc3f82a5ebb4612888eb37db3aa3b9464c139faae",
              "accountType": "isolated_margin",
              "margin": "247613942958574597318",
              "size": "369697835524268596",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2077483348367468628647",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xb52e",
              "positionSize": "0",
              "positionClosed": true,
              "pnl": "-7846623306268724758",
              "feesPaid": "2384832069865421421",
              "fundingAccrued": "20473657177156",
              "keeperFeesPaid": "1924007411527923493",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x706f6c796e6f6d69616c00000000000000000000000000000000000000000000"
          },
          {
              "id": "0xad392c7951a484b6bb02b3c9b1a8622b9c4a6eba4579a34749dceb7543131002-26",
              "timestamp": "1700967025",
              "account": "0xab73d686716339ed1f96829e59a5960fa34ecd7a",
              "abstractAccount": "0x906be359b7914b70e0a77c53987e737288590462",
              "accountType": "smart_margin",
              "margin": "510973919380263988249",
              "size": "-2416600000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2075137552494330130558",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbd01",
              "positionSize": "0",
              "positionClosed": true,
              "pnl": "15901112936819958270",
              "feesPaid": "2872555833483474447",
              "fundingAccrued": "-198224711845213",
              "keeperFeesPaid": "1869600351611914809",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0xe97b52ebe761bc51867b7bd273111d8d207756648ca589ba5505551d36abb1b7-7",
              "timestamp": "1700966479",
              "account": "0xecee5497b9dbb82e1804e3224f67d00d8d891c69",
              "abstractAccount": "0x6f9d5e30cb143077c5d8a1019f65cf70fe67b15f",
              "accountType": "smart_margin",
              "margin": "4134646329684135957603",
              "size": "-4284000000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2076643280778580820312",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xb76b",
              "positionSize": "-11334000000000000000",
              "pnl": "0",
              "feesPaid": "3613515351433011103",
              "fundingAccrued": "380217847926630",
              "keeperFeesPaid": "1834247388461923057",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0xba45eecbb3c1ace0893831646f7bb476ba89e1355231841d3020937c8c2ca11f-11",
              "timestamp": "1700964735",
              "account": "0xdea3821e171d23ba1b4a0b8ce6801bedca1bcff5",
              "abstractAccount": "0x8cb9168fc7a778a4761bd5f11b2ceddcd9088422",
              "accountType": "smart_margin",
              "margin": "370005514335727278398339",
              "size": "200000000000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2074006154065274947931",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbd02",
              "positionSize": "496618300000000000000",
              "pnl": "0",
              "feesPaid": "208820245030618658338",
              "fundingAccrued": "-22809999662785443",
              "keeperFeesPaid": "1908013240190910915",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0xa7152dc481ec59c2c61fcae1df412d219e95f39399a025d5a9a2bda52b36e755-23",
              "timestamp": "1700964715",
              "account": "0xdea3821e171d23ba1b4a0b8ce6801bedca1bcff5",
              "abstractAccount": "0x8cb9168fc7a778a4761bd5f11b2ceddcd9088422",
              "accountType": "smart_margin",
              "margin": "369973535737432357790233",
              "size": "200000000000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2073612020919556965344",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbd02",
              "positionSize": "296618300000000000000",
              "pnl": "0",
              "feesPaid": "84923596514788521836",
              "fundingAccrued": "-4954674239251614",
              "keeperFeesPaid": "1979115678006243223",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0x5ef527a1a7985f9c741bc7881cb1e6e31124cd34a0da1a76f98d7641f11a464b-12",
              "timestamp": "1700964583",
              "account": "0xdea3821e171d23ba1b4a0b8ce6801bedca1bcff5",
              "abstractAccount": "0x8cb9168fc7a778a4761bd5f11b2ceddcd9088422",
              "accountType": "smart_margin",
              "margin": "369900014657143494033633",
              "size": "96618300000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2072414413841070079957",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbd02",
              "positionSize": "96618300000000000000",
              "pnl": "0",
              "feesPaid": "42031974368670098628",
              "fundingAccrued": "0",
              "keeperFeesPaid": "1985342856505966367",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0xd4703dbf3aa6fd1c10670b3a9323546e6b94ada44378f2d39ab5cab5b76ed4cb-11",
              "timestamp": "1700964447",
              "account": "0x22866c5c7f2b5475cff41465c53aa813b4c22b13",
              "abstractAccount": "0xfd1f244557b8a766d1129e4b27769f773a1fc74c",
              "accountType": "smart_margin",
              "margin": "14990033274020737539565",
              "size": "-127328100000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2071259864436707583652",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbcfd",
              "positionSize": "0",
              "positionClosed": true,
              "pnl": "-666277944958627879562",
              "feesPaid": "160209144823620887642",
              "fundingAccrued": "-6625038666756769",
              "keeperFeesPaid": "1971394936630759513",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0x6952f8eccaaaa235905ac12cca4b9d4453e7eb5362e5267dcf3595686e2ce0b3-11",
              "timestamp": "1700964331",
              "account": "0xab73d686716339ed1f96829e59a5960fa34ecd7a",
              "abstractAccount": "0x906be359b7914b70e0a77c53987e737288590462",
              "accountType": "smart_margin",
              "margin": "498028172344106029862",
              "size": "2416600000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2068557600107993973035",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbd01",
              "positionSize": "2416600000000000000",
              "pnl": "0",
              "feesPaid": "2971602915178165785",
              "fundingAccrued": "0",
              "keeperFeesPaid": "1971827655893970138",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          },
          {
              "id": "0x674154a2b7db440f059721daa8d49e24d685459b0003cf8500ea47ab68144159-42",
              "timestamp": "1700964277",
              "account": "0xdea3821e171d23ba1b4a0b8ce6801bedca1bcff5",
              "abstractAccount": "0x8cb9168fc7a778a4761bd5f11b2ceddcd9088422",
              "accountType": "smart_margin",
              "margin": "370312904506006510589772",
              "size": "-545837500000000000000",
              "asset": "0x7345544800000000000000000000000000000000000000000000000000000000",
              "marketKey": "0x7345544850455250000000000000000000000000000000000000000000000000",
              "price": "2069676857683629827272",
              "positionId": "0x2b3bb4c683bfc5239b029131eef3b1d214478d93-0xbcf4",
              "positionSize": "0",
              "positionClosed": true,
              "pnl": "-8034618533717244466567",
              "feesPaid": "411985134604778537800",
              "fundingAccrued": "-42849111364516690",
              "keeperFeesPaid": "2011748822776686453",
              "orderType": "DelayedOffchain",
              "trackingCode": "0x4b57454e54410000000000000000000000000000000000000000000000000000"
          }
      ]

    res.status(200).json({ data: futuresTrades });

  } catch(e) {
    console.error("[api/futures/getFuturesTrades] Error:", e);
    res.status(500).json({ error: e });
  }
}

export async function getPythCandles(req, res) {
  try {
    console.log("[api/futures/getPythCandles] Requested");
    // const pythCandles = {
		// 	"s": "ok",
		// 	"t": [
		// 		1700699400,
		// 		1700700300,
		// 		1700701200,
		// 		1700702100,
		// 		1700703000,
		// 		1700703900,
		// 		1700704800,
		// 		1700705700,
		// 		1700706600,
		// 		Math.floor(Date.now() / 1000)
		// 	],
		// 	"o": [
		// 		2059.975,
		// 		2055.40822791,
		// 		2054.52,
		// 		2058.84325793,
		// 		2069.625,
		// 		2070.79493755,
		// 		2067.6,
		// 		2062.07783702,
		// 		2059.77289646,
		// 		2062.31583699
		// 	],
		// 	"h": [
		// 		2060.50335438,
		// 		2057.92,
		// 		2059.36756023,
		// 		2071.40747514,
		// 		2070.795,
		// 		2071.8225,
		// 		2069.65,
		// 		2066.65813757,
		// 		2063.27470556,
		// 		2065.4830863
		// 	],
		// 	"l": [
		// 		2054.78991286,
		// 		2053.48321297,
		// 		2054.07396943,
		// 		2058.65045423,
		// 		2066.14,
		// 		2067.11817139,
		// 		2061.67,
		// 		2058.97253161,
		// 		2059.18561478,
		// 		2060.6125
		// 	],
		// 	"c": [
		// 		2055.40822791,
		// 		2054.51,
		// 		2058.83953165,
		// 		2069.58264266,
		// 		2070.76967583,
		// 		2067.63153292,
		// 		2062.055,
		// 		2059.78201687,
		// 		2062.32115927,
		// 		2063.44774167
		// 	],
		// 	"v": [
		// 		0,
		// 		0,
		// 		0,
		// 		0,
		// 		0,
		// 		0,
		// 		0,
		// 		0,
		// 		0,
		// 		0
		// 	]
		// }

    const pythCandles = [
      {
          "timestamp": 1700359200,
          "open": 1951.98804534,
          "high": 1953.295,
          "low": 1948.72749747,
          "close": 1949.11662631
      },
      {
          "timestamp": 1700360100,
          "open": 1949.11662631,
          "high": 1949.40689155,
          "low": 1944.63767023,
          "close": 1947.45172767
      },
      {
          "timestamp": 1700361000,
          "open": 1947.45172767,
          "high": 1950.805,
          "low": 1947.36818795,
          "close": 1949.22068537
      },
      {
          "timestamp": 1700361900,
          "open": 1949.21597958,
          "high": 1951.68748731,
          "low": 1948.72990576,
          "close": 1949.4
      },
      {
          "timestamp": 1700362800,
          "open": 1949.4,
          "high": 1951.67710295,
          "low": 1949.05767311,
          "close": 1951.48
      },
      {
          "timestamp": 1700363700,
          "open": 1951.45191993,
          "high": 1951.705,
          "low": 1947.065,
          "close": 1947.1
      },
      {
          "timestamp": 1700364600,
          "open": 1947.1405864,
          "high": 1956.66439933,
          "low": 1944.93918111,
          "close": 1952.85
      },
      {
          "timestamp": 1700365500,
          "open": 1952.85,
          "high": 1958.1501765,
          "low": 1948.66500488,
          "close": 1956.93135918
      },
      {
          "timestamp": 1700366400,
          "open": 1956.93135918,
          "high": 1957.93687535,
          "low": 1955.03685065,
          "close": 1956.27101853
      },
      {
          "timestamp": 1700367300,
          "open": 1956.24958433,
          "high": 1956.46,
          "low": 1954.3481164,
          "close": 1954.65016429
      },
      {
          "timestamp": 1700368200,
          "open": 1954.65016429,
          "high": 1956.80972698,
          "low": 1953.81052741,
          "close": 1954.45161274
      },
      {
          "timestamp": 1700369100,
          "open": 1954.45161274,
          "high": 1958.82671827,
          "low": 1954.11618298,
          "close": 1957.71240964
      },
      {
          "timestamp": 1700370000,
          "open": 1957.71240964,
          "high": 1960.85765657,
          "low": 1957.2051669,
          "close": 1959.61562943
      },
      {
          "timestamp": 1700370900,
          "open": 1959.68586121,
          "high": 1963.5334117,
          "low": 1958.24782957,
          "close": 1963.16675724
      },
      {
          "timestamp": 1700371800,
          "open": 1963.17366396,
          "high": 1963.17366396,
          "low": 1958.90393993,
          "close": 1960.83
      },
      {
          "timestamp": 1700372700,
          "open": 1960.83948189,
          "high": 1961.17109826,
          "low": 1957.59476636,
          "close": 1957.92874546
      },
      {
          "timestamp": 1700373600,
          "open": 1957.92874546,
          "high": 1962.99000001,
          "low": 1957.23124276,
          "close": 1961.11392691
      },
      {
          "timestamp": 1700374500,
          "open": 1961.11392691,
          "high": 1962.15827433,
          "low": 1959.74936488,
          "close": 1960.7
      },
      {
          "timestamp": 1700375400,
          "open": 1960.7,
          "high": 1964.07745649,
          "low": 1960.08007672,
          "close": 1963.76883923
      },
      {
          "timestamp": 1700376300,
          "open": 1963.76883923,
          "high": 1967.4,
          "low": 1961.93411683,
          "close": 1963.09215958
      },
      {
          "timestamp": 1700377200,
          "open": 1963.10665506,
          "high": 1965.75,
          "low": 1961.75,
          "close": 1965.4
      },
      {
          "timestamp": 1700378100,
          "open": 1965.41,
          "high": 1966.15,
          "low": 1963.03247302,
          "close": 1963.05977144
      },
      {
          "timestamp": 1700379000,
          "open": 1963.1,
          "high": 1964.8,
          "low": 1961.85284216,
          "close": 1964.25
      },
      {
          "timestamp": 1700379900,
          "open": 1964.23519055,
          "high": 1964.44620235,
          "low": 1961.88743878,
          "close": 1962.8345706
      },
      {
          "timestamp": 1700380800,
          "open": 1962.86247259,
          "high": 1965.3405076,
          "low": 1961.61588125,
          "close": 1965.15185039
      },
      {
          "timestamp": 1700381700,
          "open": 1965.15185039,
          "high": 1967.45769148,
          "low": 1963.621607,
          "close": 1965.44999999
      },
      {
          "timestamp": 1700382600,
          "open": 1965.44999999,
          "high": 1965.5,
          "low": 1961.18501531,
          "close": 1961.407725
      },
      {
          "timestamp": 1700383500,
          "open": 1961.37973721,
          "high": 1961.45595583,
          "low": 1959.08931942,
          "close": 1959.53113467
      },
      {
          "timestamp": 1700384400,
          "open": 1959.54113467,
          "high": 1960.275,
          "low": 1958.08270039,
          "close": 1958.51151416
      },
      {
          "timestamp": 1700385300,
          "open": 1958.5,
          "high": 1962.17960156,
          "low": 1958.16133678,
          "close": 1961.9986524
      },
      {
          "timestamp": 1700386200,
          "open": 1962.05,
          "high": 1965.45,
          "low": 1960.86827781,
          "close": 1965.38691681
      },
      {
          "timestamp": 1700387100,
          "open": 1965.38691681,
          "high": 1965.58637153,
          "low": 1961.83727802,
          "close": 1963.82921782
      },
      {
          "timestamp": 1700388000,
          "open": 1963.82884526,
          "high": 1964.1104587,
          "low": 1959.9277781,
          "close": 1960.41308785
      },
      {
          "timestamp": 1700388900,
          "open": 1960.385,
          "high": 1961.75,
          "low": 1958.9,
          "close": 1959.27337268
      },
      {
          "timestamp": 1700389800,
          "open": 1959.24864587,
          "high": 1961.03711578,
          "low": 1959.16258579,
          "close": 1961.00733079
      },
      {
          "timestamp": 1700390700,
          "open": 1961.00733079,
          "high": 1961.78896462,
          "low": 1958.65,
          "close": 1958.65249399
      },
      {
          "timestamp": 1700391600,
          "open": 1958.65,
          "high": 1958.73,
          "low": 1952.56398803,
          "close": 1953.00394431
      },
      {
          "timestamp": 1700392500,
          "open": 1953.07616135,
          "high": 1954.45,
          "low": 1947.52140425,
          "close": 1948.5467831
      },
      {
          "timestamp": 1700393400,
          "open": 1948.5467831,
          "high": 1952.56403038,
          "low": 1947.4827845,
          "close": 1952.42520685
      },
      {
          "timestamp": 1700394300,
          "open": 1952.42520685,
          "high": 1954.18999264,
          "low": 1950.91374077,
          "close": 1952.95
      },
      {
          "timestamp": 1700395200,
          "open": 1952.95,
          "high": 1954.2,
          "low": 1951.16094458,
          "close": 1952.87785555
      },
      {
          "timestamp": 1700396100,
          "open": 1952.86906886,
          "high": 1953.2,
          "low": 1946.27172718,
          "close": 1948.25789751
      },
      {
          "timestamp": 1700397000,
          "open": 1948.25789751,
          "high": 1951.72185017,
          "low": 1946.33115351,
          "close": 1950.70636722
      },
      {
          "timestamp": 1700397900,
          "open": 1950.68636529,
          "high": 1954.71733184,
          "low": 1950.2541473,
          "close": 1954.04635262
      },
      {
          "timestamp": 1700398800,
          "open": 1954.04635262,
          "high": 1956.4385264,
          "low": 1952.75,
          "close": 1953.34269461
      },
      {
          "timestamp": 1700399700,
          "open": 1953.34269461,
          "high": 1954.65,
          "low": 1951.61241963,
          "close": 1954.24556453
      },
      {
          "timestamp": 1700400600,
          "open": 1954.24556453,
          "high": 1956.19234166,
          "low": 1953.2825,
          "close": 1955.11127865
      },
      {
          "timestamp": 1700401500,
          "open": 1955.11127865,
          "high": 1955.11525952,
          "low": 1953.58488885,
          "close": 1953.79981202
      },
      {
          "timestamp": 1700402400,
          "open": 1953.77737581,
          "high": 1953.77737581,
          "low": 1948.45,
          "close": 1950.84292817
      },
      {
          "timestamp": 1700403300,
          "open": 1950.84292817,
          "high": 1956.80600464,
          "low": 1950.11960394,
          "close": 1955.58776699
      },
      {
          "timestamp": 1700404200,
          "open": 1955.48353854,
          "high": 1956.5375,
          "low": 1953.24111422,
          "close": 1956.40194857
      },
      {
          "timestamp": 1700405100,
          "open": 1956.40194857,
          "high": 1956.82419509,
          "low": 1953.79242238,
          "close": 1954.60423305
      },
      {
          "timestamp": 1700406000,
          "open": 1954.57994232,
          "high": 1954.84335848,
          "low": 1950.46020033,
          "close": 1952.50365188
      },
      {
          "timestamp": 1700406900,
          "open": 1952.5017577,
          "high": 1965.3975,
          "low": 1952.4,
          "close": 1962.88154219
      },
      {
          "timestamp": 1700407800,
          "open": 1962.88154219,
          "high": 1969.52016016,
          "low": 1960.96221639,
          "close": 1967.08684797
      },
      {
          "timestamp": 1700408700,
          "open": 1967.04272615,
          "high": 1968.99708423,
          "low": 1964.5802205,
          "close": 1967.79957156
      },
      {
          "timestamp": 1700409600,
          "open": 1967.7914918,
          "high": 1978.61690028,
          "low": 1967.55438057,
          "close": 1976.53749149
      },
      {
          "timestamp": 1700410500,
          "open": 1976.53749149,
          "high": 1977.06695239,
          "low": 1967.84,
          "close": 1968.66033518
      },
      {
          "timestamp": 1700411400,
          "open": 1968.69662761,
          "high": 1970.44542721,
          "low": 1966.9,
          "close": 1967.65
      },
      {
          "timestamp": 1700412300,
          "open": 1967.647515,
          "high": 1969.64,
          "low": 1967.10669562,
          "close": 1969.57134989
      },
      {
          "timestamp": 1700413200,
          "open": 1969.57134989,
          "high": 1974.397515,
          "low": 1968.89118173,
          "close": 1972.87439572
      },
      {
          "timestamp": 1700414100,
          "open": 1972.87440066,
          "high": 1976.63699861,
          "low": 1972.64620014,
          "close": 1976.55571599
      },
      {
          "timestamp": 1700415000,
          "open": 1976.51254338,
          "high": 1980.30467169,
          "low": 1974.55682712,
          "close": 1974.99595216
      },
      {
          "timestamp": 1700415900,
          "open": 1975.07976006,
          "high": 1975.48628581,
          "low": 1970.8220092,
          "close": 1974.49867814
      },
      {
          "timestamp": 1700416800,
          "open": 1974.49867814,
          "high": 1975.62576221,
          "low": 1972.35248179,
          "close": 1972.70390566
      },
      {
          "timestamp": 1700417700,
          "open": 1972.70390566,
          "high": 1979.8275,
          "low": 1972.3,
          "close": 1977.6472804
      },
      {
          "timestamp": 1700418600,
          "open": 1977.65005873,
          "high": 1980.59475674,
          "low": 1974.1925,
          "close": 1979.50103778
      },
      {
          "timestamp": 1700419500,
          "open": 1979.5,
          "high": 1982.90954648,
          "low": 1978.9388099,
          "close": 1979.82716786
      },
      {
          "timestamp": 1700420400,
          "open": 1979.95402083,
          "high": 1980.81648107,
          "low": 1975.55004087,
          "close": 1976.63263782
      },
      {
          "timestamp": 1700421300,
          "open": 1976.69050739,
          "high": 1980.32549619,
          "low": 1976.17644221,
          "close": 1980.26270433
      },
      {
          "timestamp": 1700422200,
          "open": 1980.25517357,
          "high": 1981.88363136,
          "low": 1978.1727358,
          "close": 1981.21506408
      },
      {
          "timestamp": 1700423100,
          "open": 1981.3,
          "high": 1986.05315346,
          "low": 1980.84435476,
          "close": 1984.40822765
      },
      {
          "timestamp": 1700424000,
          "open": 1984.4160889,
          "high": 1988.47346572,
          "low": 1981.598997,
          "close": 1982.56422288
      },
      {
          "timestamp": 1700424900,
          "open": 1982.56422288,
          "high": 1983.40434371,
          "low": 1978.23967544,
          "close": 1978.53164597
      },
      {
          "timestamp": 1700425800,
          "open": 1978.44999999,
          "high": 1987.2850907,
          "low": 1977.21270909,
          "close": 1984.3
      },
      {
          "timestamp": 1700426700,
          "open": 1984.315,
          "high": 1986.35710333,
          "low": 1984.25471586,
          "close": 1985.7543701
      },
      {
          "timestamp": 1700427600,
          "open": 1985.76503247,
          "high": 1986.92192571,
          "low": 1982.81755444,
          "close": 1982.93873619
      },
      {
          "timestamp": 1700428500,
          "open": 1982.93873619,
          "high": 1986.30338088,
          "low": 1982.90951538,
          "close": 1985.88375953
      },
      {
          "timestamp": 1700429400,
          "open": 1985.85375953,
          "high": 1987.36428553,
          "low": 1981.47850738,
          "close": 1981.85803733
      },
      {
          "timestamp": 1700430300,
          "open": 1981.85803733,
          "high": 1984.26314064,
          "low": 1979.78096962,
          "close": 1983.54131101
      },
      {
          "timestamp": 1700431200,
          "open": 1983.59177387,
          "high": 1985.53292494,
          "low": 1980.95158156,
          "close": 1981.59883633
      },
      {
          "timestamp": 1700432100,
          "open": 1981.61087102,
          "high": 1982.45316358,
          "low": 1979.57292739,
          "close": 1979.59899239
      },
      {
          "timestamp": 1700433000,
          "open": 1979.59899239,
          "high": 1981.63448878,
          "low": 1976.93508872,
          "close": 1979.9461941
      },
      {
          "timestamp": 1700433900,
          "open": 1979.9461941,
          "high": 1981.75532732,
          "low": 1977.527785,
          "close": 1981.71334464
      },
      {
          "timestamp": 1700434800,
          "open": 1981.71334464,
          "high": 2002.51136434,
          "low": 1980.71093705,
          "close": 2000.71278687
      },
      {
          "timestamp": 1700435700,
          "open": 2000.73285969,
          "high": 2008.26578616,
          "low": 1999.43912198,
          "close": 2000.83169826
      },
      {
          "timestamp": 1700436600,
          "open": 2000.91557524,
          "high": 2014.92979849,
          "low": 2000.91557524,
          "close": 2013.10229319
      },
      {
          "timestamp": 1700437500,
          "open": 2013.12,
          "high": 2016.36287999,
          "low": 2010.55992071,
          "close": 2012.3825
      },
      {
          "timestamp": 1700438400,
          "open": 2012.3825,
          "high": 2013.59637263,
          "low": 2005.38816111,
          "close": 2005.45694785
      },
      {
          "timestamp": 1700439300,
          "open": 2005.45695805,
          "high": 2007.005,
          "low": 2000.54598353,
          "close": 2000.7466626
      },
      {
          "timestamp": 1700440200,
          "open": 2000.62742569,
          "high": 2005.455,
          "low": 1996.44,
          "close": 2005.15301517
      },
      {
          "timestamp": 1700441100,
          "open": 2005.12054401,
          "high": 2007.58837594,
          "low": 2001.44838408,
          "close": 2006.70011632
      },
      {
          "timestamp": 1700442000,
          "open": 2006.76136965,
          "high": 2007.75675322,
          "low": 2002.44,
          "close": 2003.68054632
      },
      {
          "timestamp": 1700442900,
          "open": 2003.68054632,
          "high": 2006.96052359,
          "low": 2002.45450251,
          "close": 2006.35
      },
      {
          "timestamp": 1700443800,
          "open": 2006.34269764,
          "high": 2008.23278499,
          "low": 2005.2075,
          "close": 2007.65730962
      },
      {
          "timestamp": 1700444700,
          "open": 2007.61315707,
          "high": 2007.61315707,
          "low": 2004.07066779,
          "close": 2006.92777704
      },
      {
          "timestamp": 1700445600,
          "open": 2006.91017204,
          "high": 2008.20036986,
          "low": 2001.0823018,
          "close": 2001.1276554
      },
      {
          "timestamp": 1700446500,
          "open": 2001.08249286,
          "high": 2007.64464971,
          "low": 2000.79789445,
          "close": 2006.9
      },
      {
          "timestamp": 1700447400,
          "open": 2006.9,
          "high": 2008.28,
          "low": 2003.81863517,
          "close": 2008.23698042
      },
      {
          "timestamp": 1700448300,
          "open": 2008.25582663,
          "high": 2011.2075799,
          "low": 2006.37024,
          "close": 2009.9
      },
      {
          "timestamp": 1700449200,
          "open": 2009.9,
          "high": 2010.75228587,
          "low": 2005.36764776,
          "close": 2005.56730128
      },
      {
          "timestamp": 1700450100,
          "open": 2005.6025976,
          "high": 2005.67390972,
          "low": 2002.40588419,
          "close": 2004.485
      },
      {
          "timestamp": 1700451000,
          "open": 2004.5291195,
          "high": 2004.75672074,
          "low": 1997.0743688,
          "close": 1998.2
      },
      {
          "timestamp": 1700451900,
          "open": 1998.18361251,
          "high": 2000.83521499,
          "low": 1997.58335927,
          "close": 2000.67709534
      },
      {
          "timestamp": 1700452800,
          "open": 2000.67709534,
          "high": 2001.56197926,
          "low": 1997.42124947,
          "close": 1999.45858799
      },
      {
          "timestamp": 1700453700,
          "open": 1999.515,
          "high": 2002.91523129,
          "low": 1998.56376654,
          "close": 2002.74042839
      },
      {
          "timestamp": 1700454600,
          "open": 2002.73925647,
          "high": 2004.08103337,
          "low": 2002.35569042,
          "close": 2003.935
      },
      {
          "timestamp": 1700455500,
          "open": 2003.935,
          "high": 2005.12020589,
          "low": 2003.11256537,
          "close": 2004.76289419
      },
      {
          "timestamp": 1700456400,
          "open": 2004.76289419,
          "high": 2004.785,
          "low": 2001.00220087,
          "close": 2004.26395118
      },
      {
          "timestamp": 1700457300,
          "open": 2004.27044746,
          "high": 2005.72151657,
          "low": 2000.43562027,
          "close": 2001.66089458
      },
      {
          "timestamp": 1700458200,
          "open": 2001.66089458,
          "high": 2002.61,
          "low": 1997.61801856,
          "close": 1997.8881853
      },
      {
          "timestamp": 1700459100,
          "open": 1997.8881853,
          "high": 2000.53945072,
          "low": 1995.40665362,
          "close": 2000.46001799
      },
      {
          "timestamp": 1700460000,
          "open": 2000.495,
          "high": 2003.16598697,
          "low": 2000.495,
          "close": 2001.44019439
      },
      {
          "timestamp": 1700460900,
          "open": 2001.45270847,
          "high": 2003.5,
          "low": 1999.76412677,
          "close": 2000.48
      },
      {
          "timestamp": 1700461800,
          "open": 2000.5,
          "high": 2005.42739581,
          "low": 1998.3,
          "close": 2005.23255553
      },
      {
          "timestamp": 1700462700,
          "open": 2005.295,
          "high": 2007.8734378,
          "low": 2005.06,
          "close": 2007.56888608
      },
      {
          "timestamp": 1700463600,
          "open": 2007.56888608,
          "high": 2008.78602869,
          "low": 2005.32923766,
          "close": 2006.53201281
      },
      {
          "timestamp": 1700464500,
          "open": 2006.53201281,
          "high": 2007.57365404,
          "low": 2001.0925,
          "close": 2006.46782505
      },
      {
          "timestamp": 1700465400,
          "open": 2006.46782505,
          "high": 2013.305,
          "low": 2005.4583254,
          "close": 2010.9186594
      },
      {
          "timestamp": 1700466300,
          "open": 2010.89,
          "high": 2021.94499933,
          "low": 2009.82,
          "close": 2019.8
      },
      {
          "timestamp": 1700467200,
          "open": 2019.75732154,
          "high": 2022.45,
          "low": 2014.56204937,
          "close": 2015.085
      },
      {
          "timestamp": 1700468100,
          "open": 2015.085,
          "high": 2019.76483352,
          "low": 2013.24826388,
          "close": 2018.27836589
      },
      {
          "timestamp": 1700469000,
          "open": 2018.27372482,
          "high": 2020.215,
          "low": 2009.49557,
          "close": 2012.11
      },
      {
          "timestamp": 1700469900,
          "open": 2012.11,
          "high": 2018.39829571,
          "low": 2012.08009561,
          "close": 2018.30112323
      },
      {
          "timestamp": 1700470800,
          "open": 2018.28973417,
          "high": 2024,
          "low": 2016,
          "close": 2023.7710711
      },
      {
          "timestamp": 1700471700,
          "open": 2023.92369121,
          "high": 2026.7952014,
          "low": 2019.77016749,
          "close": 2026.68
      },
      {
          "timestamp": 1700472600,
          "open": 2026.68827911,
          "high": 2029.675,
          "low": 2023.22624348,
          "close": 2024.85612147
      },
      {
          "timestamp": 1700473500,
          "open": 2024.85612147,
          "high": 2038.57542851,
          "low": 2023.94754926,
          "close": 2037.88160018
      },
      {
          "timestamp": 1700474400,
          "open": 2037.90149214,
          "high": 2039.15530453,
          "low": 2035.75,
          "close": 2038.12311301
      },
      {
          "timestamp": 1700475300,
          "open": 2038.11555709,
          "high": 2038.33202615,
          "low": 2032.85335052,
          "close": 2033.44939068
      },
      {
          "timestamp": 1700476200,
          "open": 2033.34546909,
          "high": 2038.99808453,
          "low": 2031.56550543,
          "close": 2038.07
      },
      {
          "timestamp": 1700477100,
          "open": 2038.1,
          "high": 2042.2125,
          "low": 2033.25832731,
          "close": 2037.70709553
      },
      {
          "timestamp": 1700478000,
          "open": 2037.71,
          "high": 2043.04827942,
          "low": 2035.83358957,
          "close": 2037.21432787
      },
      {
          "timestamp": 1700478900,
          "open": 2037.21432787,
          "high": 2037.9900231,
          "low": 2033.44226518,
          "close": 2034.15918188
      },
      {
          "timestamp": 1700479800,
          "open": 2034.15918188,
          "high": 2035.00775782,
          "low": 2023.1,
          "close": 2028.51959581
      },
      {
          "timestamp": 1700480700,
          "open": 2028.515,
          "high": 2028.95,
          "low": 2021.41311448,
          "close": 2025.78870847
      },
      {
          "timestamp": 1700481600,
          "open": 2025.78870847,
          "high": 2026.33012799,
          "low": 2018.83078694,
          "close": 2023.28020498
      },
      {
          "timestamp": 1700482500,
          "open": 2023.28020498,
          "high": 2024.07293913,
          "low": 2017.4606,
          "close": 2019.21421157
      },
      {
          "timestamp": 1700483400,
          "open": 2019.3,
          "high": 2022.08390959,
          "low": 2018.0896629,
          "close": 2020.08354959
      },
      {
          "timestamp": 1700484300,
          "open": 2020.08354959,
          "high": 2022.4429431,
          "low": 2018.72179171,
          "close": 2020.49
      },
      {
          "timestamp": 1700485200,
          "open": 2020.49,
          "high": 2023.70248486,
          "low": 2015.10265319,
          "close": 2023.59975102
      },
      {
          "timestamp": 1700486100,
          "open": 2023.59975102,
          "high": 2027.56,
          "low": 2022.65,
          "close": 2026.21664815
      },
      {
          "timestamp": 1700487000,
          "open": 2026.21664815,
          "high": 2026.955,
          "low": 2018.55,
          "close": 2018.99783325
      },
      {
          "timestamp": 1700487900,
          "open": 2018.99783325,
          "high": 2021.34,
          "low": 2017.54,
          "close": 2017.54
      },
      {
          "timestamp": 1700488800,
          "open": 2017.65170579,
          "high": 2019.37342179,
          "low": 1999.33697966,
          "close": 2008.80591049
      },
      {
          "timestamp": 1700489700,
          "open": 2008.7936382,
          "high": 2024.15960909,
          "low": 2007.3775,
          "close": 2023.20128748
      },
      {
          "timestamp": 1700490600,
          "open": 2023.20128748,
          "high": 2032.16800135,
          "low": 2023.20128748,
          "close": 2030.23614934
      },
      {
          "timestamp": 1700491500,
          "open": 2030.31917696,
          "high": 2041.73573614,
          "low": 2028.9,
          "close": 2039.29635265
      },
      {
          "timestamp": 1700492400,
          "open": 2039.31579053,
          "high": 2049.32484397,
          "low": 2031.3273788,
          "close": 2046.74327149
      },
      {
          "timestamp": 1700493300,
          "open": 2046.75562572,
          "high": 2048.06100612,
          "low": 2037.27062294,
          "close": 2039.80173701
      },
      {
          "timestamp": 1700494200,
          "open": 2039.75,
          "high": 2041.3,
          "low": 2033.69294845,
          "close": 2036.39225655
      },
      {
          "timestamp": 1700495100,
          "open": 2036.39843186,
          "high": 2045.08131221,
          "low": 2036.39843186,
          "close": 2043.63
      },
      {
          "timestamp": 1700496000,
          "open": 2043.55802295,
          "high": 2052.635,
          "low": 2038.19328729,
          "close": 2039.1225
      },
      {
          "timestamp": 1700496900,
          "open": 2039.15724061,
          "high": 2040.0125,
          "low": 2032.39852032,
          "close": 2033.36
      },
      {
          "timestamp": 1700497800,
          "open": 2033.36,
          "high": 2033.8086473,
          "low": 2027.413167,
          "close": 2030.86931799
      },
      {
          "timestamp": 1700498700,
          "open": 2030.8473421,
          "high": 2031.26147024,
          "low": 2020.34873901,
          "close": 2020.88808421
      },
      {
          "timestamp": 1700499600,
          "open": 2020.89006623,
          "high": 2027.7709285,
          "low": 2020.53269737,
          "close": 2025.84696094
      },
      {
          "timestamp": 1700500500,
          "open": 2025.84696094,
          "high": 2027.04388391,
          "low": 2013.89,
          "close": 2022.70497121
      },
      {
          "timestamp": 1700501400,
          "open": 2022.70961606,
          "high": 2044.73070424,
          "low": 2014.66,
          "close": 2039.45502983
      },
      {
          "timestamp": 1700502300,
          "open": 2039.40009867,
          "high": 2067.2,
          "low": 2038.629132,
          "close": 2058.17889356
      },
      {
          "timestamp": 1700503200,
          "open": 2058.17889356,
          "high": 2063.15483624,
          "low": 2048.69999999,
          "close": 2051.39036
      },
      {
          "timestamp": 1700504100,
          "open": 2051.37290471,
          "high": 2051.51,
          "low": 2034.67272906,
          "close": 2045.31573825
      },
      {
          "timestamp": 1700505000,
          "open": 2045.47255765,
          "high": 2046.32249999,
          "low": 2036.22531223,
          "close": 2036.34816068
      },
      {
          "timestamp": 1700505900,
          "open": 2036.34816068,
          "high": 2054.73512267,
          "low": 2032.85519795,
          "close": 2046.16696713
      },
      {
          "timestamp": 1700506800,
          "open": 2046.18196983,
          "high": 2050.10013135,
          "low": 2036.2725,
          "close": 2038
      },
      {
          "timestamp": 1700507700,
          "open": 2038,
          "high": 2045.035,
          "low": 2035.16205115,
          "close": 2043.885
      },
      {
          "timestamp": 1700508600,
          "open": 2043.88787956,
          "high": 2048.61505258,
          "low": 2041.66974959,
          "close": 2044.8685865
      },
      {
          "timestamp": 1700509500,
          "open": 2044.97721244,
          "high": 2045.39817243,
          "low": 2037.30460154,
          "close": 2037.8
      },
      {
          "timestamp": 1700510400,
          "open": 2037.8,
          "high": 2040.06,
          "low": 2036.6,
          "close": 2037.3
      },
      {
          "timestamp": 1700511300,
          "open": 2037.26664199,
          "high": 2040.895,
          "low": 2036.50057525,
          "close": 2038.9
      },
      {
          "timestamp": 1700512200,
          "open": 2038.9,
          "high": 2039.72604149,
          "low": 2032.38131006,
          "close": 2034.73399158
      },
      {
          "timestamp": 1700513100,
          "open": 2034.77135922,
          "high": 2036.56651599,
          "low": 2031.40738329,
          "close": 2036.33840479
      },
      {
          "timestamp": 1700514000,
          "open": 2036.49774354,
          "high": 2036.95651441,
          "low": 2022.70824024,
          "close": 2025.04793516
      },
      {
          "timestamp": 1700514900,
          "open": 2025.04793516,
          "high": 2028.76770728,
          "low": 2017.38306359,
          "close": 2023.6
      },
      {
          "timestamp": 1700515800,
          "open": 2023.6,
          "high": 2027.30005331,
          "low": 2021.235,
          "close": 2024.405
      },
      {
          "timestamp": 1700516700,
          "open": 2024.375,
          "high": 2026.87,
          "low": 2022.6741332,
          "close": 2025.27955825
      },
      {
          "timestamp": 1700517600,
          "open": 2025.31419645,
          "high": 2030.58219111,
          "low": 2022.6278445,
          "close": 2028.71250079
      },
      {
          "timestamp": 1700518500,
          "open": 2028.83446091,
          "high": 2034.6455164,
          "low": 2028.78,
          "close": 2032.54705631
      },
      {
          "timestamp": 1700519400,
          "open": 2032.54705631,
          "high": 2032.63486089,
          "low": 2021.952665,
          "close": 2022.777515
      },
      {
          "timestamp": 1700520300,
          "open": 2022.777515,
          "high": 2025.94204681,
          "low": 2018.08077761,
          "close": 2025.4
      },
      {
          "timestamp": 1700521200,
          "open": 2025.4495365,
          "high": 2031.42530365,
          "low": 2024.99146826,
          "close": 2030.48671035
      },
      {
          "timestamp": 1700522100,
          "open": 2030.45507025,
          "high": 2031.31983886,
          "low": 2023.455,
          "close": 2024.44209536
      },
      {
          "timestamp": 1700523000,
          "open": 2024.50401665,
          "high": 2027.3034177,
          "low": 2021.51247874,
          "close": 2024.48024
      },
      {
          "timestamp": 1700523900,
          "open": 2024.49938198,
          "high": 2025.22734593,
          "low": 2022.11,
          "close": 2022.58681942
      },
      {
          "timestamp": 1700524800,
          "open": 2022.58681942,
          "high": 2026.345,
          "low": 2019.1957865,
          "close": 2025.74338534
      },
      {
          "timestamp": 1700525700,
          "open": 2025.74338534,
          "high": 2031.04874177,
          "low": 2024.74,
          "close": 2030.66655696
      },
      {
          "timestamp": 1700526600,
          "open": 2030.65011784,
          "high": 2031.61301158,
          "low": 2023.9,
          "close": 2024.1425
      },
      {
          "timestamp": 1700527500,
          "open": 2024.12930923,
          "high": 2025.82,
          "low": 2018.96720866,
          "close": 2024.9
      },
      {
          "timestamp": 1700528400,
          "open": 2024.88967948,
          "high": 2025.6980881,
          "low": 2021.00149023,
          "close": 2025
      },
      {
          "timestamp": 1700529300,
          "open": 2025,
          "high": 2026.70616045,
          "low": 2023.4,
          "close": 2026.5801125
      },
      {
          "timestamp": 1700530200,
          "open": 2026.60553643,
          "high": 2033.25038773,
          "low": 2026.590225,
          "close": 2033.2
      },
      {
          "timestamp": 1700531100,
          "open": 2033.2,
          "high": 2035.76499999,
          "low": 2030.6757938,
          "close": 2033.35
      },
      {
          "timestamp": 1700532000,
          "open": 2033.28193071,
          "high": 2033.9346245,
          "low": 2029.56740071,
          "close": 2029.75404265
      },
      {
          "timestamp": 1700532900,
          "open": 2029.75517302,
          "high": 2032.7938817,
          "low": 2021.09122669,
          "close": 2022.51012084
      },
      {
          "timestamp": 1700533800,
          "open": 2022.515,
          "high": 2026.08791675,
          "low": 2020.5,
          "close": 2021.45261422
      },
      {
          "timestamp": 1700534700,
          "open": 2021.5,
          "high": 2022.23780189,
          "low": 2008.96690607,
          "close": 2012.4517425
      },
      {
          "timestamp": 1700535600,
          "open": 2012.5,
          "high": 2016.7,
          "low": 2011.325,
          "close": 2014.7
      },
      {
          "timestamp": 1700536500,
          "open": 2014.6930865,
          "high": 2020.43911515,
          "low": 2014.01175269,
          "close": 2020.195
      },
      {
          "timestamp": 1700537400,
          "open": 2020.17858678,
          "high": 2021.25209256,
          "low": 2017.32531477,
          "close": 2018.53383556
      },
      {
          "timestamp": 1700538300,
          "open": 2018.51959756,
          "high": 2020.51258893,
          "low": 2017.02783951,
          "close": 2019.92862568
      },
      {
          "timestamp": 1700539200,
          "open": 2019.9233854,
          "high": 2020.11766062,
          "low": 2018.22373998,
          "close": 2018.32041006
      },
      {
          "timestamp": 1700540100,
          "open": 2018.32041006,
          "high": 2018.83067371,
          "low": 2016.08099621,
          "close": 2017.1
      },
      {
          "timestamp": 1700541000,
          "open": 2017.1,
          "high": 2020.42856961,
          "low": 2016.72,
          "close": 2017.0044725
      },
      {
          "timestamp": 1700541900,
          "open": 2017.0044725,
          "high": 2018.79311424,
          "low": 2014.41296378,
          "close": 2015.8303061
      },
      {
          "timestamp": 1700542800,
          "open": 2015.8303061,
          "high": 2018.69662145,
          "low": 2013.585,
          "close": 2018.67942687
      },
      {
          "timestamp": 1700543700,
          "open": 2018.65779601,
          "high": 2018.89072211,
          "low": 2014.85821248,
          "close": 2016.54244591
      },
      {
          "timestamp": 1700544600,
          "open": 2016.525,
          "high": 2016.71979256,
          "low": 2011.1525,
          "close": 2012.61509
      },
      {
          "timestamp": 1700545500,
          "open": 2012.60207265,
          "high": 2016.13232262,
          "low": 2012.18687695,
          "close": 2014.95663251
      },
      {
          "timestamp": 1700546400,
          "open": 2014.96061263,
          "high": 2015.42993772,
          "low": 2012.60053368,
          "close": 2015.17439106
      },
      {
          "timestamp": 1700547300,
          "open": 2015.16385469,
          "high": 2018.8283684,
          "low": 2014.94403995,
          "close": 2017.68052919
      },
      {
          "timestamp": 1700548200,
          "open": 2017.6675,
          "high": 2019.66063173,
          "low": 2017.44999999,
          "close": 2017.97433128
      },
      {
          "timestamp": 1700549100,
          "open": 2017.97433128,
          "high": 2018.0325,
          "low": 2015.21506866,
          "close": 2015.65916917
      },
      {
          "timestamp": 1700550000,
          "open": 2015.65916917,
          "high": 2015.7456262,
          "low": 2009.255,
          "close": 2011.70804365
      },
      {
          "timestamp": 1700550900,
          "open": 2011.71844673,
          "high": 2012.47741476,
          "low": 2006.55,
          "close": 2006.95191606
      },
      {
          "timestamp": 1700551800,
          "open": 2006.94724213,
          "high": 2010.5,
          "low": 2006.43137273,
          "close": 2009.17
      },
      {
          "timestamp": 1700552700,
          "open": 2009.17,
          "high": 2010.21243945,
          "low": 2004.25,
          "close": 2004.79
      },
      {
          "timestamp": 1700553600,
          "open": 2004.76473765,
          "high": 2008.57709848,
          "low": 2003.07598191,
          "close": 2007.685
      },
      {
          "timestamp": 1700554500,
          "open": 2007.65650798,
          "high": 2010.79393931,
          "low": 2007.57342112,
          "close": 2010.54391168
      },
      {
          "timestamp": 1700555400,
          "open": 2010.5,
          "high": 2010.61,
          "low": 2007.5,
          "close": 2009.25
      },
      {
          "timestamp": 1700556300,
          "open": 2009.25,
          "high": 2014.51925622,
          "low": 2006.44146977,
          "close": 2013.00261207
      },
      {
          "timestamp": 1700557200,
          "open": 2013.00261207,
          "high": 2014.59,
          "low": 2011.83827045,
          "close": 2013.69009451
      },
      {
          "timestamp": 1700558100,
          "open": 2013.7,
          "high": 2015.65058662,
          "low": 2013.6066161,
          "close": 2014.72037477
      },
      {
          "timestamp": 1700559000,
          "open": 2014.8052995,
          "high": 2014.89835,
          "low": 2011.31337234,
          "close": 2012.15216944
      },
      {
          "timestamp": 1700559900,
          "open": 2012.14216944,
          "high": 2012.14716944,
          "low": 2007.99085635,
          "close": 2008.68398831
      },
      {
          "timestamp": 1700560800,
          "open": 2008.68398831,
          "high": 2010.27503,
          "low": 2008.11381012,
          "close": 2009.29499999
      },
      {
          "timestamp": 1700561700,
          "open": 2009.2396887,
          "high": 2015.35,
          "low": 2009.2396887,
          "close": 2015.04450827
      },
      {
          "timestamp": 1700562600,
          "open": 2015.04450827,
          "high": 2017.78092257,
          "low": 2014.54952839,
          "close": 2017.04323327
      },
      {
          "timestamp": 1700563500,
          "open": 2017.0542441,
          "high": 2017.72877769,
          "low": 2013.21714128,
          "close": 2015.12266148
      },
      {
          "timestamp": 1700564400,
          "open": 2015.16480198,
          "high": 2016.88024,
          "low": 2012.9,
          "close": 2012.9527046
      },
      {
          "timestamp": 1700565300,
          "open": 2012.97801507,
          "high": 2012.98426977,
          "low": 2004.85,
          "close": 2006.05
      },
      {
          "timestamp": 1700566200,
          "open": 2006.06,
          "high": 2008.64,
          "low": 2003.553982,
          "close": 2005.76370638
      },
      {
          "timestamp": 1700567100,
          "open": 2005.765,
          "high": 2006.83431255,
          "low": 2003.9,
          "close": 2004.87019599
      },
      {
          "timestamp": 1700568000,
          "open": 2004.87019599,
          "high": 2009.1754885,
          "low": 2003.67966011,
          "close": 2008.3
      },
      {
          "timestamp": 1700568900,
          "open": 2008.32,
          "high": 2012.56574575,
          "low": 2007.225,
          "close": 2012.295
      },
      {
          "timestamp": 1700569800,
          "open": 2012.295,
          "high": 2013.29784782,
          "low": 2009.55132255,
          "close": 2012.38429382
      },
      {
          "timestamp": 1700570700,
          "open": 2012.38,
          "high": 2012.89,
          "low": 2008.04642481,
          "close": 2012.24512
      },
      {
          "timestamp": 1700571600,
          "open": 2012.2375,
          "high": 2013.44999999,
          "low": 2008.70468887,
          "close": 2011.815
      },
      {
          "timestamp": 1700572500,
          "open": 2011.79372717,
          "high": 2015.47426981,
          "low": 2009.2904,
          "close": 2013.8742965
      },
      {
          "timestamp": 1700573400,
          "open": 2013.87533,
          "high": 2015.555,
          "low": 2006.68703509,
          "close": 2006.71124925
      },
      {
          "timestamp": 1700574300,
          "open": 2006.7134861,
          "high": 2007.47,
          "low": 2003.16,
          "close": 2005.1
      },
      {
          "timestamp": 1700575200,
          "open": 2005.11,
          "high": 2005.586911,
          "low": 1992.80301943,
          "close": 1996.165
      },
      {
          "timestamp": 1700576100,
          "open": 1996.2,
          "high": 1999.84689068,
          "low": 1993.31291749,
          "close": 1994.06850563
      },
      {
          "timestamp": 1700577000,
          "open": 1994.09313446,
          "high": 1996.64728497,
          "low": 1989.013906,
          "close": 1989.1271903
      },
      {
          "timestamp": 1700577900,
          "open": 1989.055,
          "high": 1992.79623755,
          "low": 1984.42443099,
          "close": 1990.00605714
      },
      {
          "timestamp": 1700578800,
          "open": 1990.02605714,
          "high": 1990.31,
          "low": 1953.2,
          "close": 1962.47747697
      },
      {
          "timestamp": 1700579700,
          "open": 1962.325,
          "high": 1967.13956771,
          "low": 1956.05258154,
          "close": 1959.70421029
      },
      {
          "timestamp": 1700580600,
          "open": 1959.66123079,
          "high": 1967.9533465,
          "low": 1955.3,
          "close": 1966.4249962
      },
      {
          "timestamp": 1700581500,
          "open": 1966.40815541,
          "high": 1998.32963743,
          "low": 1965.53636119,
          "close": 1989.39228917
      },
      {
          "timestamp": 1700582400,
          "open": 1989.34593567,
          "high": 1998.99965765,
          "low": 1979.763195,
          "close": 1997
      },
      {
          "timestamp": 1700583300,
          "open": 1996.94496684,
          "high": 1999.34496444,
          "low": 1990.13489192,
          "close": 1991.77305928
      },
      {
          "timestamp": 1700584200,
          "open": 1991.77305928,
          "high": 1993.2025,
          "low": 1984.15,
          "close": 1988.96566813
      },
      {
          "timestamp": 1700585100,
          "open": 1989.03,
          "high": 2017.74549442,
          "low": 1988.19997715,
          "close": 2005.84246563
      },
      {
          "timestamp": 1700586000,
          "open": 2005.85113669,
          "high": 2010.8560202,
          "low": 2003.6014101,
          "close": 2010.74036962
      },
      {
          "timestamp": 1700586900,
          "open": 2010.74036962,
          "high": 2017.76,
          "low": 2003.4,
          "close": 2003.4
      },
      {
          "timestamp": 1700587800,
          "open": 2003.35400127,
          "high": 2005.56130628,
          "low": 1969.76705283,
          "close": 1969.79830185
      },
      {
          "timestamp": 1700588700,
          "open": 1969.59776726,
          "high": 1980.4334578,
          "low": 1963.41709954,
          "close": 1976.84829056
      },
      {
          "timestamp": 1700589600,
          "open": 1976.93,
          "high": 1976.93,
          "low": 1962.07999999,
          "close": 1965.67708625
      },
      {
          "timestamp": 1700590500,
          "open": 1965.76744446,
          "high": 1975.24888754,
          "low": 1963.20174942,
          "close": 1975.1244136
      },
      {
          "timestamp": 1700591400,
          "open": 1975.1244136,
          "high": 1980.6417064,
          "low": 1973.85,
          "close": 1974.105
      },
      {
          "timestamp": 1700592300,
          "open": 1974.085,
          "high": 1976.40195257,
          "low": 1967.99169216,
          "close": 1974.50765934
      },
      {
          "timestamp": 1700593200,
          "open": 1974.50797082,
          "high": 1975.9525,
          "low": 1969.89969041,
          "close": 1975.7546492
      },
      {
          "timestamp": 1700594100,
          "open": 1975.77464919,
          "high": 1992.8,
          "low": 1975.2925,
          "close": 1989.25
      },
      {
          "timestamp": 1700595000,
          "open": 1989.25,
          "high": 1995.74062345,
          "low": 1986.80635469,
          "close": 1994.8870033
      },
      {
          "timestamp": 1700595900,
          "open": 1994.8870033,
          "high": 1997.1,
          "low": 1985.21106,
          "close": 1986.02
      },
      {
          "timestamp": 1700596800,
          "open": 1986.02,
          "high": 1987.0025,
          "low": 1972.26242442,
          "close": 1978.22128123
      },
      {
          "timestamp": 1700597700,
          "open": 1978.2,
          "high": 1990.42,
          "low": 1978.05,
          "close": 1990.42
      },
      {
          "timestamp": 1700598600,
          "open": 1990.42,
          "high": 2006.32253505,
          "low": 1987.12,
          "close": 2002.74499999
      },
      {
          "timestamp": 1700599500,
          "open": 2002.6854375,
          "high": 2002.6854375,
          "low": 1991.12411246,
          "close": 1992.65599415
      },
      {
          "timestamp": 1700600400,
          "open": 1992.65,
          "high": 1997.275,
          "low": 1990.34107575,
          "close": 1995.41883614
      },
      {
          "timestamp": 1700601300,
          "open": 1995.41233778,
          "high": 1998.13051305,
          "low": 1990.35368489,
          "close": 1996.04
      },
      {
          "timestamp": 1700602200,
          "open": 1995.945,
          "high": 1997.957665,
          "low": 1990.45,
          "close": 1991.54156401
      },
      {
          "timestamp": 1700603100,
          "open": 1991.52405858,
          "high": 1991.56312803,
          "low": 1983.73134124,
          "close": 1986.14927969
      },
      {
          "timestamp": 1700604000,
          "open": 1986.14927969,
          "high": 1987.91,
          "low": 1980.61320265,
          "close": 1980.61320265
      },
      {
          "timestamp": 1700604900,
          "open": 1980.65594484,
          "high": 1980.852515,
          "low": 1957.24847402,
          "close": 1958.10933906
      },
      {
          "timestamp": 1700605800,
          "open": 1958.03960263,
          "high": 1963.5725,
          "low": 1947.1425,
          "close": 1955.45008979
      },
      {
          "timestamp": 1700606700,
          "open": 1955.33776111,
          "high": 1960,
          "low": 1933.98812466,
          "close": 1942.67827533
      },
      {
          "timestamp": 1700607600,
          "open": 1942.9025,
          "high": 1951.8258358,
          "low": 1938.5774445,
          "close": 1949.90535703
      },
      {
          "timestamp": 1700608500,
          "open": 1949.90535703,
          "high": 1954.15,
          "low": 1945.365,
          "close": 1948.665
      },
      {
          "timestamp": 1700609400,
          "open": 1948.665,
          "high": 1952,
          "low": 1945.02513003,
          "close": 1948.30590499
      },
      {
          "timestamp": 1700610300,
          "open": 1948.30892981,
          "high": 1949.66999999,
          "low": 1933.875339,
          "close": 1934.04884672
      },
      {
          "timestamp": 1700611200,
          "open": 1934.0603106,
          "high": 1948.905,
          "low": 1931.4937499,
          "close": 1947.55904183
      },
      {
          "timestamp": 1700612100,
          "open": 1947.55904183,
          "high": 1955.83749999,
          "low": 1945.16660212,
          "close": 1954.66181587
      },
      {
          "timestamp": 1700613000,
          "open": 1954.68,
          "high": 1955.35819852,
          "low": 1947.84327276,
          "close": 1948.14
      },
      {
          "timestamp": 1700613900,
          "open": 1948.085,
          "high": 1956.06067155,
          "low": 1947.54,
          "close": 1955.94999999
      },
      {
          "timestamp": 1700614800,
          "open": 1955.95916788,
          "high": 1959.4,
          "low": 1955.01,
          "close": 1959.37
      },
      {
          "timestamp": 1700615700,
          "open": 1959.4,
          "high": 1960.40510268,
          "low": 1956.43158218,
          "close": 1960.325
      },
      {
          "timestamp": 1700616600,
          "open": 1960.325,
          "high": 1966.175,
          "low": 1959.3825,
          "close": 1965.87467084
      },
      {
          "timestamp": 1700617500,
          "open": 1965.86553508,
          "high": 1968.04613757,
          "low": 1963.16622828,
          "close": 1963.69420894
      },
      {
          "timestamp": 1700618400,
          "open": 1963.69420894,
          "high": 1965.93851298,
          "low": 1961.2990727,
          "close": 1965.8
      },
      {
          "timestamp": 1700619300,
          "open": 1965.76,
          "high": 1967.56540175,
          "low": 1965.26554893,
          "close": 1967.28880872
      },
      {
          "timestamp": 1700620200,
          "open": 1967.29,
          "high": 1971.5,
          "low": 1967.277515,
          "close": 1970.47026752
      },
      {
          "timestamp": 1700621100,
          "open": 1970.47026752,
          "high": 1974.94999999,
          "low": 1968.30099439,
          "close": 1973.84588539
      },
      {
          "timestamp": 1700622000,
          "open": 1973.85088539,
          "high": 1974.68953292,
          "low": 1970.75503,
          "close": 1973.14042882
      },
      {
          "timestamp": 1700622900,
          "open": 1973.14042882,
          "high": 1979.005,
          "low": 1970.80581117,
          "close": 1977.0897391
      },
      {
          "timestamp": 1700623800,
          "open": 1977.0897391,
          "high": 1978.1575,
          "low": 1974.2,
          "close": 1977.32533428
      },
      {
          "timestamp": 1700624700,
          "open": 1977.31303312,
          "high": 1979.8,
          "low": 1976.17030215,
          "close": 1978.555105
      },
      {
          "timestamp": 1700625600,
          "open": 1978.555105,
          "high": 1983.08107172,
          "low": 1977.46,
          "close": 1982.97
      },
      {
          "timestamp": 1700626500,
          "open": 1982.97,
          "high": 1986.94940164,
          "low": 1981.32,
          "close": 1982.10579066
      },
      {
          "timestamp": 1700627400,
          "open": 1982.11912777,
          "high": 1987.47525605,
          "low": 1981.32387447,
          "close": 1987.40274554
      },
      {
          "timestamp": 1700628300,
          "open": 1987.4,
          "high": 1988.6,
          "low": 1984.9,
          "close": 1986.80187133
      },
      {
          "timestamp": 1700629200,
          "open": 1986.79925807,
          "high": 1991.35783026,
          "low": 1986.4529442,
          "close": 1989.88173537
      },
      {
          "timestamp": 1700630100,
          "open": 1989.88173537,
          "high": 1990.95,
          "low": 1986.23869458,
          "close": 1986.66623554
      },
      {
          "timestamp": 1700631000,
          "open": 1986.655,
          "high": 1987.15405516,
          "low": 1983.92891624,
          "close": 1986.575
      },
      {
          "timestamp": 1700631900,
          "open": 1986.57808682,
          "high": 1986.72,
          "low": 1982.91515,
          "close": 1984.97
      },
      {
          "timestamp": 1700632800,
          "open": 1985.00922984,
          "high": 1991.41295867,
          "low": 1984.99436385,
          "close": 1990.365
      },
      {
          "timestamp": 1700633700,
          "open": 1990.365,
          "high": 1991.69817624,
          "low": 1987.6825,
          "close": 1989.12630628
      },
      {
          "timestamp": 1700634600,
          "open": 1989.13380628,
          "high": 1995.7525,
          "low": 1988.5,
          "close": 1995.7
      },
      {
          "timestamp": 1700635500,
          "open": 1995.7,
          "high": 1997.57550093,
          "low": 1992.55991272,
          "close": 1994.76417196
      },
      {
          "timestamp": 1700636400,
          "open": 1994.76417196,
          "high": 1998.15902087,
          "low": 1992.25863185,
          "close": 1993.82
      },
      {
          "timestamp": 1700637300,
          "open": 1993.79,
          "high": 1999.85422939,
          "low": 1993.10898831,
          "close": 1999.78877794
      },
      {
          "timestamp": 1700638200,
          "open": 1999.78877794,
          "high": 2002.28132338,
          "low": 1995.1025,
          "close": 1996.30499999
      },
      {
          "timestamp": 1700639100,
          "open": 1996.35,
          "high": 1996.35,
          "low": 1992.37571971,
          "close": 1994.4925
      },
      {
          "timestamp": 1700640000,
          "open": 1994.4875,
          "high": 1998.38000724,
          "low": 1993.30816044,
          "close": 1997.35
      },
      {
          "timestamp": 1700640900,
          "open": 1997.35,
          "high": 2000.62676516,
          "low": 1994.772515,
          "close": 1996.0003
      },
      {
          "timestamp": 1700641800,
          "open": 1996,
          "high": 2003.455,
          "low": 1995.5,
          "close": 2002.52956482
      },
      {
          "timestamp": 1700642700,
          "open": 2002.52956482,
          "high": 2004.5945232,
          "low": 1999.81695542,
          "close": 2003.66916006
      },
      {
          "timestamp": 1700643600,
          "open": 2003.66155506,
          "high": 2008.24822557,
          "low": 2002.55690512,
          "close": 2007.09499999
      },
      {
          "timestamp": 1700644500,
          "open": 2007.09499999,
          "high": 2008.15619066,
          "low": 2003.24,
          "close": 2004.96766953
      },
      {
          "timestamp": 1700645400,
          "open": 2004.96766953,
          "high": 2011.32341765,
          "low": 2004.78,
          "close": 2009.25
      },
      {
          "timestamp": 1700646300,
          "open": 2009.22703232,
          "high": 2010.7,
          "low": 2006.73765756,
          "close": 2010.38086337
      },
      {
          "timestamp": 1700647200,
          "open": 2010.35906733,
          "high": 2013.04154628,
          "low": 2008.25894962,
          "close": 2008.9
      },
      {
          "timestamp": 1700648100,
          "open": 2008.9,
          "high": 2008.97,
          "low": 2004.66304633,
          "close": 2005.92765398
      },
      {
          "timestamp": 1700649000,
          "open": 2005.92765398,
          "high": 2019.75455348,
          "low": 2004.055,
          "close": 2018.27798853
      },
      {
          "timestamp": 1700649900,
          "open": 2018.3,
          "high": 2029.35484323,
          "low": 2015.42767794,
          "close": 2025.835
      },
      {
          "timestamp": 1700650800,
          "open": 2025.84,
          "high": 2027.3,
          "low": 2019.85,
          "close": 2022.13905729
      },
      {
          "timestamp": 1700651700,
          "open": 2022.1,
          "high": 2024.5525,
          "low": 2019.415,
          "close": 2023.94
      },
      {
          "timestamp": 1700652600,
          "open": 2023.94,
          "high": 2027.82836658,
          "low": 2020.855,
          "close": 2022.4475
      },
      {
          "timestamp": 1700653500,
          "open": 2022.4575,
          "high": 2023.7306979,
          "low": 2015.15,
          "close": 2016.08007521
      },
      {
          "timestamp": 1700654400,
          "open": 2015.95832895,
          "high": 2020.16287149,
          "low": 2015.48109688,
          "close": 2019.805
      },
      {
          "timestamp": 1700655300,
          "open": 2019.81,
          "high": 2020.68449712,
          "low": 2013.8,
          "close": 2014.07083419
      },
      {
          "timestamp": 1700656200,
          "open": 2014.05666034,
          "high": 2017.80919819,
          "low": 2011.91414412,
          "close": 2016.29
      },
      {
          "timestamp": 1700657100,
          "open": 2016.29074598,
          "high": 2024.99952362,
          "low": 2016.29074598,
          "close": 2022.91
      },
      {
          "timestamp": 1700658000,
          "open": 2022.91,
          "high": 2029.86759821,
          "low": 2019.30003,
          "close": 2019.58836178
      },
      {
          "timestamp": 1700658900,
          "open": 2019.67065842,
          "high": 2022.85995248,
          "low": 2017.0725,
          "close": 2021.71536024
      },
      {
          "timestamp": 1700659800,
          "open": 2021.70365654,
          "high": 2036.6626566,
          "low": 2020.15,
          "close": 2029.84278215
      },
      {
          "timestamp": 1700660700,
          "open": 2029.84278215,
          "high": 2036.31,
          "low": 2029.7,
          "close": 2030.87695847
      },
      {
          "timestamp": 1700661600,
          "open": 2031.07338862,
          "high": 2034.125,
          "low": 2026.51305104,
          "close": 2030.28497639
      },
      {
          "timestamp": 1700662500,
          "open": 2030.28497639,
          "high": 2032.06,
          "low": 2023.9055625,
          "close": 2025.20731464
      },
      {
          "timestamp": 1700663400,
          "open": 2025.175,
          "high": 2032.79690689,
          "low": 2024.26254563,
          "close": 2028.27503
      },
      {
          "timestamp": 1700664300,
          "open": 2028.27503,
          "high": 2029.91619974,
          "low": 2018.40923419,
          "close": 2024.81
      },
      {
          "timestamp": 1700665200,
          "open": 2024.83451306,
          "high": 2025.09920801,
          "low": 2016.12505845,
          "close": 2018.8481463
      },
      {
          "timestamp": 1700666100,
          "open": 2018.845,
          "high": 2035.5615868,
          "low": 2017.595,
          "close": 2030.655
      },
      {
          "timestamp": 1700667000,
          "open": 2030.64,
          "high": 2036.2,
          "low": 2028.72006,
          "close": 2032.41
      },
      {
          "timestamp": 1700667900,
          "open": 2032.41,
          "high": 2035.18,
          "low": 2028.46,
          "close": 2034.03999999
      },
      {
          "timestamp": 1700668800,
          "open": 2034.06270896,
          "high": 2052.25567252,
          "low": 2032.4975,
          "close": 2046.33428498
      },
      {
          "timestamp": 1700669700,
          "open": 2046.33646325,
          "high": 2047.43639334,
          "low": 2037.21617177,
          "close": 2037.30159373
      },
      {
          "timestamp": 1700670600,
          "open": 2037.25,
          "high": 2044.73182783,
          "low": 2036.59228848,
          "close": 2039.4153
      },
      {
          "timestamp": 1700671500,
          "open": 2039.45291904,
          "high": 2039.6,
          "low": 2028.20275187,
          "close": 2033.6
      },
      {
          "timestamp": 1700672400,
          "open": 2033.65,
          "high": 2038.42554742,
          "low": 2031.16583375,
          "close": 2032.21
      },
      {
          "timestamp": 1700673300,
          "open": 2032.18486396,
          "high": 2039.07701942,
          "low": 2030.15232248,
          "close": 2038.02017378
      },
      {
          "timestamp": 1700674200,
          "open": 2038.06460007,
          "high": 2041.69994886,
          "low": 2033.24213634,
          "close": 2033.3525
      },
      {
          "timestamp": 1700675100,
          "open": 2033.33428486,
          "high": 2035.30458455,
          "low": 2031.51193502,
          "close": 2034.43945811
      },
      {
          "timestamp": 1700676000,
          "open": 2034.43685967,
          "high": 2039.80580611,
          "low": 2033,
          "close": 2039.76554293
      },
      {
          "timestamp": 1700676900,
          "open": 2039.70681703,
          "high": 2055.66736485,
          "low": 2039.50522347,
          "close": 2052.53
      },
      {
          "timestamp": 1700677800,
          "open": 2052.55,
          "high": 2057.61239447,
          "low": 2049.69999999,
          "close": 2053.58897934
      },
      {
          "timestamp": 1700678700,
          "open": 2053.59352083,
          "high": 2065.19605316,
          "low": 2048.71621266,
          "close": 2062.51995509
      },
      {
          "timestamp": 1700679600,
          "open": 2062.59491857,
          "high": 2082.55333248,
          "low": 2062.59491857,
          "close": 2074.05000001
      },
      {
          "timestamp": 1700680500,
          "open": 2074.05000001,
          "high": 2077.25375004,
          "low": 2064.98748448,
          "close": 2065.08183345
      },
      {
          "timestamp": 1700681400,
          "open": 2065.04928723,
          "high": 2074.59180426,
          "low": 2059.38,
          "close": 2072.25719629
      },
      {
          "timestamp": 1700682300,
          "open": 2072.20469572,
          "high": 2077.68654139,
          "low": 2069.14,
          "close": 2077.16686717
      },
      {
          "timestamp": 1700683200,
          "open": 2077.19067505,
          "high": 2080.75146762,
          "low": 2072.15675849,
          "close": 2072.2630741
      },
      {
          "timestamp": 1700684100,
          "open": 2072.30939817,
          "high": 2078.885,
          "low": 2072.30939817,
          "close": 2077.21495119
      },
      {
          "timestamp": 1700685000,
          "open": 2077.21495119,
          "high": 2078.48332981,
          "low": 2073.94617512,
          "close": 2074.36496898
      },
      {
          "timestamp": 1700685900,
          "open": 2074.42027735,
          "high": 2078.49037544,
          "low": 2074.315,
          "close": 2076.19760867
      },
      {
          "timestamp": 1700686800,
          "open": 2076.24262504,
          "high": 2088.60164999,
          "low": 2072.27204208,
          "close": 2086.908447
      },
      {
          "timestamp": 1700687700,
          "open": 2086.83175853,
          "high": 2092.08394466,
          "low": 2076.9977346,
          "close": 2089.37613091
      },
      {
          "timestamp": 1700688600,
          "open": 2089.43,
          "high": 2091.96943287,
          "low": 2075.23499999,
          "close": 2075.51341478
      },
      {
          "timestamp": 1700689500,
          "open": 2075.4948805,
          "high": 2082.96249999,
          "low": 2073.01348327,
          "close": 2081.885
      },
      {
          "timestamp": 1700690400,
          "open": 2081.94999999,
          "high": 2087.93112073,
          "low": 2080.78,
          "close": 2082.98176891
      },
      {
          "timestamp": 1700691300,
          "open": 2082.99492704,
          "high": 2084.28817317,
          "low": 2076.79426227,
          "close": 2078.33
      },
      {
          "timestamp": 1700692200,
          "open": 2078.10520999,
          "high": 2079.25282001,
          "low": 2065.97244286,
          "close": 2070.7
      },
      {
          "timestamp": 1700693100,
          "open": 2070.69999999,
          "high": 2070.69999999,
          "low": 2064.13,
          "close": 2065.405
      },
      {
          "timestamp": 1700694000,
          "open": 2065.405,
          "high": 2068.51614287,
          "low": 2059.01,
          "close": 2059.82728071
      },
      {
          "timestamp": 1700694900,
          "open": 2059.82077321,
          "high": 2064.17158318,
          "low": 2058.91056718,
          "close": 2060.72473288
      },
      {
          "timestamp": 1700695800,
          "open": 2060.72664943,
          "high": 2066.96999999,
          "low": 2059.57226794,
          "close": 2065.67
      },
      {
          "timestamp": 1700696700,
          "open": 2065.67,
          "high": 2068.48810007,
          "low": 2063.605,
          "close": 2063.9
      },
      {
          "timestamp": 1700697600,
          "open": 2063.88,
          "high": 2066.545,
          "low": 2060.9578317,
          "close": 2063.51123529
      },
      {
          "timestamp": 1700698500,
          "open": 2063.49645415,
          "high": 2063.5800006,
          "low": 2057.51089546,
          "close": 2059.86256765
      },
      {
          "timestamp": 1700699400,
          "open": 2059.975,
          "high": 2060.50335438,
          "low": 2054.78991286,
          "close": 2055.40822791
      },
      {
          "timestamp": 1700700300,
          "open": 2055.40822791,
          "high": 2057.92,
          "low": 2053.48321297,
          "close": 2054.51
      },
      {
          "timestamp": 1700701200,
          "open": 2054.52,
          "high": 2059.36756023,
          "low": 2054.07396943,
          "close": 2058.83953165
      },
      {
          "timestamp": 1700702100,
          "open": 2058.84325793,
          "high": 2071.40747514,
          "low": 2058.65045423,
          "close": 2069.58264266
      },
      {
          "timestamp": 1700703000,
          "open": 2069.625,
          "high": 2070.795,
          "low": 2066.14,
          "close": 2070.76967583
      },
      {
          "timestamp": 1700703900,
          "open": 2070.79493755,
          "high": 2071.8225,
          "low": 2067.11817139,
          "close": 2067.63153292
      },
      {
          "timestamp": 1700704800,
          "open": 2067.6,
          "high": 2069.65,
          "low": 2061.67,
          "close": 2062.055
      },
      {
          "timestamp": 1700705700,
          "open": 2062.07783702,
          "high": 2066.65813757,
          "low": 2058.97253161,
          "close": 2059.78201687
      },
      {
          "timestamp": 1700706600,
          "open": 2059.77289646,
          "high": 2063.27470556,
          "low": 2059.18561478,
          "close": 2062.32115927
      },
      {
          "timestamp": 1700707500,
          "open": 2062.31583699,
          "high": 2065.4830863,
          "low": 2060.6125,
          "close": 2063.44774167
      },
      {
          "timestamp": 1700708400,
          "open": 2063.45210159,
          "high": 2065.16,
          "low": 2058.04802627,
          "close": 2058.65508999
      },
      {
          "timestamp": 1700709300,
          "open": 2058.63013037,
          "high": 2065.24004984,
          "low": 2056.17187932,
          "close": 2064.09569304
      },
      {
          "timestamp": 1700710200,
          "open": 2064.11581264,
          "high": 2065.73601,
          "low": 2062.58762865,
          "close": 2063.78945523
      },
      {
          "timestamp": 1700711100,
          "open": 2063.78945523,
          "high": 2063.85377781,
          "low": 2059.80451212,
          "close": 2059.80451212
      },
      {
          "timestamp": 1700712000,
          "open": 2059.80451212,
          "high": 2061.84544343,
          "low": 2058.21,
          "close": 2058.50157716
      },
      {
          "timestamp": 1700712900,
          "open": 2058.45,
          "high": 2060.7178179,
          "low": 2057.7,
          "close": 2059.35491291
      },
      {
          "timestamp": 1700713800,
          "open": 2059.35491291,
          "high": 2063.4590501,
          "low": 2059.21490103,
          "close": 2063.09669509
      },
      {
          "timestamp": 1700714700,
          "open": 2063.09669509,
          "high": 2066.74281696,
          "low": 2062.31233685,
          "close": 2062.68289385
      },
      {
          "timestamp": 1700715600,
          "open": 2062.68289385,
          "high": 2066.045,
          "low": 2061.86,
          "close": 2065.92
      },
      {
          "timestamp": 1700716500,
          "open": 2065.92,
          "high": 2069.09487609,
          "low": 2064.24450772,
          "close": 2069.05886386
      },
      {
          "timestamp": 1700717400,
          "open": 2069.0598967,
          "high": 2069.08748777,
          "low": 2063.07576685,
          "close": 2064.09749999
      },
      {
          "timestamp": 1700718300,
          "open": 2064.09749999,
          "high": 2064.40901139,
          "low": 2062.3076147,
          "close": 2064.10022446
      },
      {
          "timestamp": 1700719200,
          "open": 2064.10022446,
          "high": 2064.41799567,
          "low": 2060.8,
          "close": 2060.8
      },
      {
          "timestamp": 1700720100,
          "open": 2060.8,
          "high": 2062.32557003,
          "low": 2058.53092808,
          "close": 2062.13854693
      },
      {
          "timestamp": 1700721000,
          "open": 2062.13797619,
          "high": 2062.25759975,
          "low": 2059.10477561,
          "close": 2059.32
      },
      {
          "timestamp": 1700721900,
          "open": 2059.32,
          "high": 2062.18781879,
          "low": 2058.62,
          "close": 2061.78424297
      },
      {
          "timestamp": 1700722800,
          "open": 2061.78424297,
          "high": 2067.91528999,
          "low": 2061.58443139,
          "close": 2066.99161694
      },
      {
          "timestamp": 1700723700,
          "open": 2066.94999999,
          "high": 2069.56750075,
          "low": 2065.17053633,
          "close": 2066.03021999
      },
      {
          "timestamp": 1700724600,
          "open": 2066.03021999,
          "high": 2067.76,
          "low": 2063.52225603,
          "close": 2063.67
      },
      {
          "timestamp": 1700725500,
          "open": 2063.68503,
          "high": 2066.47459818,
          "low": 2063.52048,
          "close": 2065.97342534
      },
      {
          "timestamp": 1700726400,
          "open": 2065.97342534,
          "high": 2068.02,
          "low": 2064.5,
          "close": 2065.65
      },
      {
          "timestamp": 1700727300,
          "open": 2065.70015,
          "high": 2069.11536731,
          "low": 2065.46999999,
          "close": 2068.03
      },
      {
          "timestamp": 1700728200,
          "open": 2067.95798189,
          "high": 2081.99583015,
          "low": 2066.9,
          "close": 2080.02772495
      },
      {
          "timestamp": 1700729100,
          "open": 2080.00794841,
          "high": 2083.1,
          "low": 2075.405,
          "close": 2081.95729359
      },
      {
          "timestamp": 1700730000,
          "open": 2081.96999999,
          "high": 2084.97238279,
          "low": 2077.82512,
          "close": 2080.83979956
      },
      {
          "timestamp": 1700730900,
          "open": 2080.81580088,
          "high": 2080.93525,
          "low": 2076.19999999,
          "close": 2077.06
      },
      {
          "timestamp": 1700731800,
          "open": 2077.08721934,
          "high": 2080.53708056,
          "low": 2076.23499999,
          "close": 2080.45996442
      },
      {
          "timestamp": 1700732700,
          "open": 2080.4601242,
          "high": 2088.19996839,
          "low": 2077.72282656,
          "close": 2087.65498398
      },
      {
          "timestamp": 1700733600,
          "open": 2087.96,
          "high": 2088.72741642,
          "low": 2081.61541895,
          "close": 2082.10999999
      },
      {
          "timestamp": 1700734500,
          "open": 2082.19174548,
          "high": 2082.34876924,
          "low": 2074.0625,
          "close": 2076.45
      },
      {
          "timestamp": 1700735400,
          "open": 2076.42,
          "high": 2078.23610203,
          "low": 2071.37342775,
          "close": 2075.90499999
      },
      {
          "timestamp": 1700736300,
          "open": 2075.88,
          "high": 2075.94999999,
          "low": 2071.47756018,
          "close": 2072.4
      },
      {
          "timestamp": 1700737200,
          "open": 2072.40173991,
          "high": 2072.40173991,
          "low": 2056.28573,
          "close": 2060.36621294
      },
      {
          "timestamp": 1700738100,
          "open": 2060.24294771,
          "high": 2061.01,
          "low": 2045.89188378,
          "close": 2054.07387051
      },
      {
          "timestamp": 1700739000,
          "open": 2053.66433087,
          "high": 2058.67999999,
          "low": 2051.88,
          "close": 2057.05586999
      },
      {
          "timestamp": 1700739900,
          "open": 2056.9720671,
          "high": 2063.28884101,
          "low": 2054.2,
          "close": 2062.96
      },
      {
          "timestamp": 1700740800,
          "open": 2062.96,
          "high": 2066.85267948,
          "low": 2060.45,
          "close": 2066.23892135
      },
      {
          "timestamp": 1700741700,
          "open": 2066.23892135,
          "high": 2070.64471515,
          "low": 2065.31479722,
          "close": 2065.45520985
      },
      {
          "timestamp": Math.floor(Date.now() / 1000),
          "open": 2065.46141761,
          "high": 2065.48863669,
          "low": 2057.09835017,
          "close": 2061.08751278
      }
  ]

    res.status(200).json({ data: pythCandles });

  } catch(e) {
    console.error("[api/futures/getPythCandles] Error:", e);
    res.status(500).json({ error: e });
  }
}

export async function getFuturesMarkets(req, res) {
    try {
      console.log("[api/futures/getFuturesMarkets] Requested");
      const options = [
        {
            marketKey: "sBTCPERP",
            marketName: "sBTC",
            asset: "sBTC",
            assetHex: "123",
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
                short: wei(123),
            },
            marketDebt: wei(123),
            marketSkew: wei(123),
            marketSize: wei(123),
            contractMaxLeverage: wei(123),
            appMaxLeverage: wei(123),
            settings: {
                maxMarketValue: wei(123),
                skewScale: wei(123),
                delayedOrderConfirmWindow: 123,
                offchainDelayedOrderMinAge: 123,
                offchainDelayedOrderMaxAge: 123,
                minDelayTimeDelta: 123,
                maxDelayTimeDelta: 123,
            },
            isSuspended: false,
            marketClosureReason: "system-upgrade",
            minInitialMargin: wei(123),
            keeperDeposit: wei(123),
            marketLimitUsd: wei(123),
            marketLimitNative : wei(123)
    
        },
            {
                marketKey: "sETHPERP",
                marketName: "sETH",
                asset: "sETH",
                assetHex: "123",
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
                    short: wei(123),
                },
                marketDebt: wei(123),
                marketSkew: wei(123),
                marketSize: wei(123),
                contractMaxLeverage: wei(123),
                appMaxLeverage: wei(123),
                settings: {
                    maxMarketValue: wei(123),
                    skewScale: wei(123),
                    delayedOrderConfirmWindow: 123,
                    offchainDelayedOrderMinAge: 123,
                    offchainDelayedOrderMaxAge: 123,
                    minDelayTimeDelta: 123,
                    maxDelayTimeDelta: 123,
                },
                isSuspended: false,
                marketClosureReason: "system-upgrade",
                minInitialMargin: wei(123),
                keeperDeposit: wei(123),
                marketLimitUsd: wei(123),
                marketLimitNative : wei(123)
        
            }
        ]
        res.status(200).json({ data: options });
  
    } catch(e) {
      console.error("[api/futures/getFuturesMarkets] Error:", e);
      res.status(500).json({ error: e });
    }
}
