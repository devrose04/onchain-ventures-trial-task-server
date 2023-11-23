import { notNill } from '../../helpers/utils';
import Wei, { wei } from '@synthetixio/wei'
import { orderBy } from 'lodash'

export async function getSynthBalances(req, res) {
  try {  
    console.log("[api/synths/getSynthBalances] Requested");
    const balancesMap = {
      'sUSD': {
        currencyKey: 'sUSD',
        balance: wei(2323)
      },
      'wUSD': {
        currencyKey: 'wUSD',
        balance: wei(567)
      }
    }

    const balances = {
			balancesMap,
			balances: orderBy(
				Object.values(balancesMap).filter(notNill),
				(balance) => balance.usdBalance.toNumber(),
				'desc'
			),
			totalUSDBalance,
			susdWalletBalance: balancesMap['sUSD'].balance,
		}

    res.status(200).json({ data: balances });
    
  } catch(e) {
    console.error("[api/synths/getSynthBalances] Error:", e);
    res.status(500).json({ error: e });
  }
}

export async function getSynthV3BalancesAndAllowances(req, res) {
  try {
    console.log("[api/synths/getSynthV3BalancesAndAllowances] Requested");
    const data = {
      SNXUSD: {
        balance: wei(632),
        allowances: {}
      }
		}

    res.status(200).json({ data });

  } catch(e) {
    console.error("[api/synths/getSynthV3BalancesAndAllowances] Error:", e);
    res.status(500).json({ error: e });
  }
}
