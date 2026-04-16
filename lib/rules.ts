export type RuleMatch = {
  label: string;
  meaning: string;
  explanation: string;
};

export type Finding = RuleMatch & {
  token: string;
};

export type RulesShape = {
  exact?: Record<string, RuleMatch>;
  phrases?: Array<{ phrase: string; label: string; meaning: string; explanation: string }>;
  amcNames?: string[];
};

export const defaultRules: RulesShape = {
  exact: {
    direct: {
      label: 'Plan Type',
      meaning: 'Direct Plan',
      explanation:
        'The investor is investing directly with the AMC. The underlying scheme portfolio is the same as the regular plan, but the expense ratio is typically lower because distributor costs are absent.'
    },
    regular: {
      label: 'Plan Type',
      meaning: 'Regular Plan',
      explanation:
        'The investor is investing through a distributor or intermediary. The portfolio mandate remains the same as the direct plan, but the expense ratio is typically higher.'
    },
    growth: {
      label: 'Option',
      meaning: 'Growth Option',
      explanation:
        'Returns remain within the scheme NAV and continue compounding inside the fund rather than being distributed out.'
    },
    idcw: {
      label: 'Option',
      meaning: 'IDCW Option',
      explanation:
        'Income Distribution cum Capital Withdrawal. This is a distribution option, not an extra layer of return on top of NAV.'
    },
    payout: {
      label: 'Distribution Variant',
      meaning: 'Payout variant',
      explanation: 'Cash distributions, when declared, are paid out rather than reinvested.'
    },
    reinvestment: {
      label: 'Distribution Variant',
      meaning: 'Reinvestment variant',
      explanation: 'Distributions, when declared, are reinvested into the scheme.'
    },
    large: {
      label: 'Equity Category Clue',
      meaning: 'Large-cap exposure clue',
      explanation:
        'The scheme likely has a large-cap orientation. Large-cap funds are generally more stable than mid- and small-cap categories, though still exposed to equity-market drawdowns.'
    },
    mid: {
      label: 'Equity Category Clue',
      meaning: 'Mid-cap exposure clue',
      explanation:
        'The scheme likely has a mid-cap orientation, implying higher growth potential but also higher volatility.'
    },
    small: {
      label: 'Equity Category Clue',
      meaning: 'Small-cap exposure clue',
      explanation:
        'The scheme likely has a small-cap orientation, which generally implies high volatility and a longer holding-period requirement.'
    },
    flexi: {
      label: 'Equity Category Clue',
      meaning: 'Flexi-cap clue',
      explanation:
        'The manager can move across market-cap buckets. This often works as a core equity category when process discipline is strong.'
    },
    multicap: {
      label: 'Equity Category Clue',
      meaning: 'Multi-cap clue',
      explanation:
        'The scheme is intended to invest across large-, mid-, and small-cap buckets.'
    },
    focused: {
      label: 'Strategy Label',
      meaning: 'Focused portfolio',
      explanation:
        'The scheme likely runs a more concentrated portfolio with fewer holdings, increasing stock-specific risk.'
    },
    value: {
      label: 'Strategy Label',
      meaning: 'Value style',
      explanation:
        'The scheme likely follows a valuation-driven approach, looking for relatively undervalued businesses.'
    },
    contra: {
      label: 'Strategy Label',
      meaning: 'Contrarian style',
      explanation:
        'The scheme likely takes contrarian positions and may hold unpopular sectors or stocks while waiting for mean reversion.'
    },
    opportunities: {
      label: 'Marketing / Naming Word',
      meaning: 'Broad opportunity-style label',
      explanation:
        'This is often a flexible or brand-oriented word rather than a tightly standardized category clue.'
    },
    banking: {
      label: 'Sector Clue',
      meaning: 'Banking / financials concentration clue',
      explanation:
        'This usually indicates sector concentration in banks or financial services and should not be mistaken for a diversified equity core holding.'
    },
    financial: {
      label: 'Sector Clue',
      meaning: 'Financial-services concentration clue',
      explanation:
        'This points to sector concentration in financial businesses rather than broad market diversification.'
    },
    elss: {
      label: 'Tax Wrapper',
      meaning: 'ELSS / tax-saving equity scheme',
      explanation:
        'This is an equity-linked savings scheme with tax-saving utility and a three-year lock-in.'
    },
    liquid: {
      label: 'Debt Category Clue',
      meaning: 'Liquid fund clue',
      explanation:
        'This usually signals very short-maturity debt instruments and a cash-management use case rather than return maximization.'
    },
    overnight: {
      label: 'Debt Category Clue',
      meaning: 'Overnight fund clue',
      explanation:
        'This usually signals one-day maturity exposure, typically used for capital parking rather than return chasing.'
    },
    bond: {
      label: 'Debt Category Clue',
      meaning: 'Bond-oriented debt strategy',
      explanation:
        'This signals a fixed-income strategy, but the name alone does not fully reveal the duration profile or credit risk.'
    },
    gilt: {
      label: 'Debt Category Clue',
      meaning: 'Gilt / government securities clue',
      explanation:
        'This indicates government-securities exposure. Corporate credit risk may be absent, but duration risk can still be high.'
    },
    hybrid: {
      label: 'Hybrid Category Clue',
      meaning: 'Hybrid allocation clue',
      explanation:
        'The scheme mixes more than one asset class, typically equity and debt.'
    },
    balanced: {
      label: 'Hybrid Naming Word',
      meaning: 'Balanced-style allocation word',
      explanation:
        'This often appears in balanced-advantage or hybrid names, but should not be treated as a guarantee of balanced outcomes.'
    },
    advantage: {
      label: 'Marketing / Hybrid Word',
      meaning: 'Advantage-style label',
      explanation:
        'Often used in balanced-advantage or tactical-allocation contexts.'
    },
    aggressive: {
      label: 'Hybrid Tilt Clue',
      meaning: 'Aggressive hybrid clue',
      explanation: 'This usually signals an equity-heavy hybrid orientation with some debt cushion.'
    },
    conservative: {
      label: 'Hybrid Tilt Clue',
      meaning: 'Conservative hybrid clue',
      explanation: 'This usually signals a debt-heavier hybrid orientation with limited equity exposure.'
    },
    arbitrage: {
      label: 'Hybrid / Low-volatility Strategy',
      meaning: 'Arbitrage strategy',
      explanation:
        'This usually refers to cash-futures arbitrage capture.'
    },
    asset: {
      label: 'Allocation Clue',
      meaning: 'Asset-allocation clue',
      explanation:
        'This often appears in dynamic asset allocation or multi-asset names.'
    },
    multi: {
      label: 'Allocation Breadth Clue',
      meaning: 'Multi-bucket / multi-asset clue',
      explanation:
        'This can signal multi-cap, multi-asset, or broad exposure.'
    },
    index: {
      label: 'Passive Wrapper',
      meaning: 'Index / passive clue',
      explanation:
        'This indicates passive exposure to a defined benchmark.'
    },
    nifty: {
      label: 'Benchmark Clue',
      meaning: 'Nifty-linked benchmark clue',
      explanation: 'This suggests the scheme is tracking or referencing an NSE Nifty-family benchmark.'
    },
    sensex: {
      label: 'Benchmark Clue',
      meaning: 'Sensex-linked benchmark clue',
      explanation: 'This suggests the scheme is tracking or referencing the BSE Sensex benchmark family.'
    },
    etf: {
      label: 'Wrapper Type',
      meaning: 'Exchange-traded fund wrapper',
      explanation:
        'This indicates an exchange-traded wrapper.'
    },
    fof: {
      label: 'Wrapper Type',
      meaning: 'Fund of Fund wrapper',
      explanation:
        'This scheme invests in other funds rather than directly holding underlying securities.'
    },
    fund: {
      label: 'Structure Word',
      meaning: 'Mutual fund scheme',
      explanation:
        'This simply confirms the product is a fund structure.'
    },
    retirement: {
      label: 'Solution-Oriented Clue',
      meaning: 'Retirement-oriented scheme',
      explanation:
        'This indicates a retirement-oriented wrapper or goal framing.'
    },
    children: {
      label: 'Solution-Oriented Clue',
      meaning: 'Children-oriented scheme',
      explanation:
        'This indicates a goal-oriented wrapper intended around children’s future needs.'
    },
    gold: {
      label: 'Asset Exposure Clue',
      meaning: 'Gold exposure clue',
      explanation:
        'This indicates gold-linked exposure.'
    },
    silver: {
      label: 'Asset Exposure Clue',
      meaning: 'Silver exposure clue',
      explanation:
        'This indicates silver-linked exposure.'
    },
    international: {
      label: 'Geographic Exposure Clue',
      meaning: 'International exposure clue',
      explanation:
        'This suggests non-Indian market exposure.'
    }
  },
  phrases: [
    {
      phrase: 'large and mid cap',
      label: 'Equity Category',
      meaning: 'Large & Mid Cap Fund',
      explanation:
        'This usually combines large-cap and mid-cap exposure, offering a middle ground between stability and growth.'
    },
    {
      phrase: 'large cap',
      label: 'Equity Category',
      meaning: 'Large Cap Fund',
      explanation:
        'This usually signals a large-cap equity mandate.'
    },
    {
      phrase: 'mid cap',
      label: 'Equity Category',
      meaning: 'Mid Cap Fund',
      explanation:
        'This usually signals a mid-cap equity mandate with higher volatility than large-cap funds.'
    },
    {
      phrase: 'small cap',
      label: 'Equity Category',
      meaning: 'Small Cap Fund',
      explanation:
        'This usually signals a small-cap equity mandate and therefore high volatility.'
    },
    {
      phrase: 'flexi cap',
      label: 'Equity Category',
      meaning: 'Flexi Cap Fund',
      explanation:
        'This indicates the manager can move across market-cap segments.'
    },
    {
      phrase: 'multi cap',
      label: 'Equity Category',
      meaning: 'Multi Cap Fund',
      explanation:
        'This indicates exposure across large-, mid-, and small-cap buckets.'
    },
    {
      phrase: 'banking and financial services',
      label: 'Sector / Thematic Category',
      meaning: 'Banking & Financial Services sector fund',
      explanation:
        'This is a concentrated sectoral equity exposure rather than a diversified core fund.'
    },
    {
      phrase: 'balanced advantage',
      label: 'Hybrid Category',
      meaning: 'Balanced Advantage / Dynamic Asset Allocation category',
      explanation:
        'This usually signals a dynamic equity-debt allocation process.'
    },
    {
      phrase: 'dynamic asset allocation',
      label: 'Hybrid Category',
      meaning: 'Dynamic Asset Allocation category',
      explanation:
        'This indicates allocation can shift based on a model or manager view.'
    },
    {
      phrase: 'multi asset allocation',
      label: 'Hybrid Category',
      meaning: 'Multi Asset Allocation Fund',
      explanation:
        'This indicates exposure across at least three asset classes in some mix.'
    },
    {
      phrase: 'equity savings',
      label: 'Hybrid Category',
      meaning: 'Equity Savings category',
      explanation:
        'This combines equity, arbitrage, and debt components.'
    },
    {
      phrase: 'aggressive hybrid',
      label: 'Hybrid Category',
      meaning: 'Aggressive Hybrid Fund',
      explanation:
        'This usually signals an equity-heavier hybrid structure with some debt cushion.'
    },
    {
      phrase: 'conservative hybrid',
      label: 'Hybrid Category',
      meaning: 'Conservative Hybrid Fund',
      explanation:
        'This usually signals a debt-heavier hybrid structure with limited equity exposure.'
    },
    {
      phrase: 'corporate bond',
      label: 'Debt Category',
      meaning: 'Corporate Bond Fund',
      explanation:
        'This usually signals high exposure to corporate bonds.'
    },
    {
      phrase: 'credit risk',
      label: 'Debt Category',
      meaning: 'Credit Risk Fund',
      explanation:
        'This indicates a willingness to take lower-rated exposures for yield pickup.'
    },
    {
      phrase: 'dynamic bond',
      label: 'Debt Category',
      meaning: 'Dynamic Bond Fund',
      explanation:
        'The manager may change duration based on the rate view or process.'
    },
    {
      phrase: 'target maturity',
      label: 'Debt Strategy',
      meaning: 'Target Maturity debt strategy',
      explanation:
        'This indicates a defined maturity path.'
    },
    {
      phrase: 'index fund',
      label: 'Passive Category',
      meaning: 'Index Fund',
      explanation:
        'This indicates a passive mutual fund structure designed to track a benchmark index.'
    },
    {
      phrase: 'fund of fund',
      label: 'Wrapper Type',
      meaning: 'Fund of Fund wrapper',
      explanation:
        'This indicates the scheme invests in other funds instead of directly holding securities.'
    },
    {
      phrase: 'tax saver',
      label: 'Tax Wrapper',
      meaning: 'Tax-saving / ELSS clue',
      explanation:
        'This usually points to an ELSS-style tax-saving wrapper.'
    },
    {
      phrase: 'retirement fund',
      label: 'Solution-Oriented Category',
      meaning: 'Retirement Fund',
      explanation:
        'This indicates a retirement-oriented wrapper.'
    }
  ],
  amcNames: [
    'SBI',
    'HDFC',
    'ICICI Prudential',
    'Nippon India',
    'UTI',
    'Kotak',
    'Aditya Birla Sun Life',
    'Axis',
    'Mirae Asset',
    'Bandhan',
    'Baroda BNP Paribas',
    'Canara Robeco',
    'Parag Parikh',
    'Motilal Oswal',
    'Templeton India',
    'Tata',
    'Bank of India',
    'Invesco India'
  ]
};

export const exampleCases = [
  'HDFC Large and Mid Cap Fund Direct Growth',
  'ICICI Prudential Nifty 50 Index Fund Direct Growth',
  'Bank of India Banking & Financial Services Fund Regular IDCW',
  'SBI CRISIL-IBX 10:90 Gilt + SDL Index Dec 2029 Fund Direct Growth'
];

export function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function decodeSchemeName(name: string, rules: RulesShape) {
  const normalized = normalize(name);
  const findings: Finding[] = [];
  const consumedTokens = new Set<string>();

  let detectedAMC: string | null = null;

  for (const amc of rules.amcNames || []) {
    if (normalized.startsWith(normalize(amc))) {
      detectedAMC = amc;
      findings.push({
        token: amc,
        label: 'AMC / Fund House',
        meaning: `${amc} is the asset management company`,
        explanation:
          'This identifies the institution running the scheme. It matters for process, governance, disclosure quality, and investment-culture context, but does not by itself prove the scheme is good.'
      });

      normalize(amc)
        .split(' ')
        .forEach((w) => consumedTokens.add(w));
      break;
    }
  }

  for (const item of rules.phrases || []) {
    if (normalized.includes(item.phrase)) {
      findings.push({
        token: item.phrase,
        label: item.label,
        meaning: item.meaning,
        explanation: item.explanation
      });

      item.phrase.split(' ').forEach((w) => consumedTokens.add(w));
    }
  }

  const parts = normalized.split(' ').filter(Boolean);

  for (const part of parts) {
    if (consumedTokens.has(part)) continue;
    const match = rules.exact?.[part];
    if (match) {
      findings.push({
        token: part,
        label: match.label,
        meaning: match.meaning,
        explanation: match.explanation
      });
    }
  }

  const immediateTells: string[] = [];
  const limits: string[] = [];
  const text = findings.map((f) => `${f.label} ${f.meaning}`.toLowerCase()).join(' | ');

  if (/equity category|equity style|sector \/ thematic category|tax wrapper/.test(text)) {
    immediateTells.push('The name strongly suggests an equity-oriented scheme or equity-linked wrapper.');
  }
  if (/debt category|debt strategy|debt risk clue|debt issuer clue/.test(text)) {
    immediateTells.push('The name gives debt-side clues such as maturity profile, issuer type, or credit or duration risk orientation.');
  }
  if (/hybrid category|hybrid category clue|allocation clue/.test(text)) {
    immediateTells.push('The name suggests a blended allocation product rather than pure equity or pure debt.');
  }
  if (/passive category|passive wrapper|benchmark clue|wrapper type/.test(text)) {
    immediateTells.push('The name suggests a passive or wrapper-led structure such as Index, ETF, or FoF.');
  }
  if (/plan type/.test(text)) {
    immediateTells.push('The name reveals whether the investor is in Direct Plan or Regular Plan, which affects cost but not the underlying mandate.');
  }
  if (/option|distribution variant/.test(text)) {
    immediateTells.push('The name reveals whether returns are retained in NAV or distributed through an IDCW-style variant.');
  }
  if (/sector clue|concentration clue|strategy label/.test(text)) {
    immediateTells.push('The name gives clues about concentration risk, style exposure, or whether the portfolio is likely narrow rather than broad.');
  }

  limits.push('The name does not tell you exact current portfolio holdings, overlap with existing funds, or manager skill.');
  limits.push('The name does not tell you valuation attractiveness, exact expense ratio, or downside behaviour in the next market stress period.');
  limits.push('The name does not replace factsheet, SID, benchmark-fit, portfolio, or suitability analysis.');

  const unmatched = parts.filter((p) => !consumedTokens.has(p) && !rules.exact?.[p]);

  return {
    normalized,
    detectedAMC,
    findings,
    unmatched,
    immediateTells,
    limits,
    summary: findings.length
      ? `Reading left to right, this name tells us ${findings.map((f) => f.meaning).join('; ')}.`
      : 'No decoding rules matched yet. Expand the decoder dictionary with more naming patterns.'
  };
}
