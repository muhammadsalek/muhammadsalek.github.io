---
title: "Statistics for ML #3 — Measures of Dispersion"
date: 2026-01-03
permalink: /posts/2026/01/dispersion/
tags: [statistics, foundations, variance, standard-deviation]
---

Two datasets can have identical means but completely different spreads. **Dispersion measures** capture how spread out values are around the center.

## Range
$$\text{Range} = x_{\max} - x_{\min}$$
Simple but highly sensitive to outliers. Only uses two data points.

## Variance
$$\sigma^2 = \frac{1}{N}\sum_{i=1}^{N}(x_i - \mu)^2 \quad \text{(population)}$$
$$s^2 = \frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2 \quad \text{(sample, Bessel's correction)}$$

**Why n−1?** The sample mean already uses the data, so we lose one degree of freedom. This makes s² an unbiased estimator of σ².

## Standard Deviation
$$\sigma = \sqrt{\sigma^2}$$
Same units as the original data — interpretable. The most widely used dispersion measure.

**Empirical Rule (Normal distribution):**
- ~68% of data within μ ± 1σ
- ~95% within μ ± 2σ  
- ~99.7% within μ ± 3σ

## Interquartile Range (IQR)
$$\text{IQR} = Q_3 - Q_1$$
**Robust to outliers.** Used for outlier detection: values beyond Q1 − 1.5×IQR or Q3 + 1.5×IQR are flagged as outliers.

## Coefficient of Variation (CV)
$$CV = \frac{\sigma}{\mu} \times 100\%$$
**Dimensionless** — allows comparison across datasets with different units or scales.

Example: Comparing variability of ANC visits (mean=4, SD=1.5) vs. birth weight (mean=3000g, SD=500g):
- CV(ANC) = 37.5%
- CV(birth weight) = 16.7%
→ ANC visits are relatively more variable.

---

## ML Relevance

| Concept | ML Application |
|---------|---------------|
| Variance | Bias-variance tradeoff; PCA (maximises variance) |
| Standard deviation | Feature standardisation (Z-score normalisation) |
| IQR | Robust scaling: `RobustScaler` in scikit-learn |
| CV | Comparing feature variability before selection |

```python
from sklearn.preprocessing import StandardScaler, RobustScaler

# Z-score (mean=0, std=1) — sensitive to outliers
scaler = StandardScaler()

# IQR-based — robust to outliers, better for health data
robust = RobustScaler()  # subtracts median, divides by IQR

X_scaled = robust.fit_transform(X)
```

---
*Previous: [#2 Central Tendency](/posts/2026/01/central-tendency/) | Next: [#4 Skewness & Kurtosis](/posts/2026/01/skewness-kurtosis/)*
