---
title: "Statistics for ML #4 — Skewness & Kurtosis"
date: 2026-01-04
permalink: /posts/2026/01/skewness-kurtosis/
tags: [statistics, foundations, distribution-shape, EDA]
---

Mean and variance describe *location* and *spread*. **Skewness** and **kurtosis** describe the *shape* of a distribution — critical for choosing the right model.

## Skewness — Asymmetry

$$\text{Skewness} = \frac{1}{n}\sum\left(\frac{x_i - \bar{x}}{s}\right)^3$$

| Value | Shape | Tail | Example |
|-------|-------|------|---------|
| Skew = 0 | Symmetric | Equal both sides | Normal distribution |
| Skew > 0 | Right/Positive skew | Long right tail | Income, Hospital costs, ANC visits |
| Skew < 0 | Left/Negative skew | Long left tail | Age at retirement, Test scores near ceiling |

**Rule of thumb:** \|Skew\| < 0.5 = fairly symmetric; 0.5–1 = moderately skewed; > 1 = highly skewed.

> In public health data, **positive skew is ubiquitous**: number of pregnancies, time to treatment, out-of-pocket health spending. Assuming normality here leads to wrong inference.

## Kurtosis — Tail Heaviness

$$\text{Kurtosis} = \frac{1}{n}\sum\left(\frac{x_i - \bar{x}}{s}\right)^4$$

**Excess Kurtosis** = Kurtosis − 3 (so Normal = 0)

| Excess Kurtosis | Type | Shape | Meaning |
|-----------------|------|-------|---------|
| = 0 | Mesokurtic | Normal tails | Normal distribution |
| > 0 | Leptokurtic | Heavy tails, sharp peak | More outliers than normal; financial returns |
| < 0 | Platykurtic | Light tails, flat peak | Fewer outliers; uniform-like |

---

## Fixing Skewness for ML

```python
import numpy as np
import pandas as pd
from scipy import stats

# Check skewness
print(df['income'].skew())   # e.g., 3.2 → highly right-skewed

# Transformations for right-skewed data
df['income_log']  = np.log1p(df['income'])      # log(x+1), handles zeros
df['income_sqrt'] = np.sqrt(df['income'])        # square root
df['income_cbrt'] = np.cbrt(df['income'])        # cube root (handles negatives)

# Box-Cox (requires positive values)
df['income_bc'], lambda_ = stats.boxcox(df['income'] + 1)

# Yeo-Johnson (handles zeros and negatives)
from sklearn.preprocessing import PowerTransformer
pt = PowerTransformer(method='yeo-johnson')
df['income_yj'] = pt.fit_transform(df[['income']])
```

## Why It Matters for ML

- **Linear regression** assumes normally distributed residuals — skewed features violate this
- **Neural networks** train faster with normalized, symmetric inputs
- **Tree-based models** (XGBoost, Random Forest) are invariant to monotonic transformations — skewness matters less here
- **K-means clustering** uses Euclidean distance — heavily skewed features dominate the distance

```r
# R: Test for normality
shapiro.test(df$birth_weight)    # n < 5000
nortest::ad.test(df$income)      # Anderson-Darling for larger n

# Visual check
library(ggplot2)
ggplot(df, aes(x = income)) +
  geom_histogram(aes(y = ..density..), bins = 50, fill = "steelblue") +
  stat_function(fun = dnorm,
                args = list(mean = mean(df$income), sd = sd(df$income)),
                color = "red", linewidth = 1) +
  labs(title = "Income Distribution vs Normal Fit")
```

---
*Previous: [#3 Dispersion](/posts/2026/01/dispersion/) | Next: [#5 Covariance & Correlation](/posts/2026/01/covariance-correlation/)*
