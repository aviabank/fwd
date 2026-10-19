# AviaForward (FWD) — Aircraft Forward Token

**Derivatives Layer of AviaTrust on Solana.**

Second derivative instrument of the AviaTrust ecosystem. On-chain aircraft forward contracts — lock the purchase price of a specific aircraft for a future date. Gated by three-layer audit (€AUDT → €PROOF → €CERT).

---

## 📜 Contract
Eddd5iW7RWhkNd4JWUjgK9TByeSkdWELgDg4rmimZkBA

**Pool (Meteora DAMM V2):**

4ivvUsgGixdoWasY8EYLcYENKZ1GuozBuaVXHBz4bDKf

**Pair:** €FWD / USDC
**Chain:** Solana
**Standard:** Token-2022 (with Transfer Fee + Transfer Hook)
**Transfer Fee:** 1%
**Decimals:** 9
**Mint Authority:** Disabled
**Freeze Authority:** Disabled
**Launch Price:** $0.01
**Target:** ×100 (community-stated)

---

## 📅 What is AviaForward?

AviaForward (€FWD) is an **Aircraft Forward Token** — an agreement to buy or sell a specific aircraft at a fixed price on a future date.

**How it works:**

1. Buyer and seller agree on price today
2. Delivery date locked in metadata
3. On expiry — deliver aircraft or cash-settle
4. Both sides are obligated (unlike options)

**Key point:** No €AUDT — no €FWD. Every forward is gated by on-chain audit.

---

## 🛡️ Three Audit Gates (Transfer Hook Enforced)

| Gate | Token | Function |
|------|-------|----------|
| 1 | €AUDT | Burn required before mint |
| 2 | €PROOF | Verify on every transfer |
| 3 | €CERT | Min stake required to trade |

Enforced by **Token-2022 Transfer Hook** — code, not policy.

---

## 📁 Repository Structure

| File | Description |
|------|-------------|
| `index.html` | Home page — hero, buy, about, ecosystem |
| `buy.html` | Buy page — 4 payment methods, amount selector |
| `trade.html` | Trade page — live chart, pool info, DEX links |
| `fintech1.html` | 4 forward models — Fixed-Date, Cash-Settled, Flexible, Portfolio |
| `fintech2.html` | Mechanics — Token-2022 specs, 3 gates, lifecycle |
| `staking.html` | Stake €CERT for access — 3 tiers |
| `governance.html` | Vote on forward parameters |
| `ecosystem.html` | Full AviaTrust stack — 17 tokens |
| `counter.js` | Live visitor/client counter |
| `ai-agent.css` | Styles for the Avia AI assistant |
| `ai-agent.js` | Scripted AI assistant with knowledge base |

---

## 🎨 Media Files (add to repository)

| File | Purpose |
|------|---------|
| `fwd_logo.png` | Logo, favicon, avatar |
| `fwd_hero_bg.png` | Hero background |
| `fwd_coin.png` | 3D coin in hero visual |
| `fwd_chart.png` | Forward mechanics chart |
| `fwd_fintech_diagram.png` | Forward flow diagram |
| `fwd_promo_video.mp4` | Promo video |

---

## 🔗 Links

| Platform | URL |
|----------|-----|
| OpenSea | https://opensea.io/token/solana/Eddd5iW7RWhkNd4JWUjgK9TByeSkdWELgDg4rmimZkBA |
| GeckoTerminal | https://www.geckoterminal.com/solana/pools/4ivvUsgGixdoWasY8EYLcYENKZ1GuozBuaVXHBz4bDKf |
| Uniswap | https://app.uniswap.org/explore/tokens/solana/Eddd5iW7RWhkNd4JWUjgK9TByeSkdWELgDg4rmimZkBA |
| Solscan | https://solscan.io/token/Eddd5iW7RWhkNd4JWUjgK9TByeSkdWELgDg4rmimZkBA |
| Birdeye | https://birdeye.so/token/Eddd5iW7RWhkNd4JWUjgK9TByeSkdWELgDg4rmimZkBA?chain=solana |
| DexScreener | https://dexscreener.com/solana/4ivvUsgGixdoWasY8EYLcYENKZ1GuozBuaVXHBz4bDKf |

---

## 🌍 AviaTrust Ecosystem (17 tokens)

**Audit Layer:**
- €AUDT — Audit Token
- €PROOF — Proof Token
- €CERT — Cert Audit Revenue

**Financial Layer:**
- €ESCR — Escrow
- €DLCT — Documentary LC
- €SBLCT — Standby LC
- €LUMP — Lump Sum

**Derivatives Layer:**
- €SWAP — AviaSwap
- **€FWD — AviaForward ← you are here**
- €RIGHT — Purchase Right
- €FLEET — Fleet Futures

**Aircraft Layer:**
- €B787, €A350, €C929, €A220, €E195, €IL96

---

## 🚀 Deploy

1. Create GitHub repository `fwd`
2. Upload all files listed above
3. Add media files (logo, coin, chart, diagrams, video)
4. Enable GitHub Pages: **Settings → Pages → Source: main / root**
5. Site goes live at `https://aviabank.github.io/fwd/`

---

## ⚠️ Legal Notice

€FWD is a derivative instrument. Forwards are binding obligations — both sides must perform.

In some jurisdictions, on-chain derivatives may require registration or licensing. Users are responsible for compliance.

Not financial advice. Only invest what you can afford to lose.

---

© 2026 AviaTrust. Built on Solana.
