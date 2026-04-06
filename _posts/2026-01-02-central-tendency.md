---
title: "Statistics for ML #2 — Measures of Central Tendency"
date: 2026-01-02
permalink: /posts/2026/01/central-tendency/
tags: [statistics, foundations, descriptive-statistics, machine-learning]
---

A **measure of central tendency** summarises an entire distribution with a single representative value. Choosing the wrong one can completely mislead your analysis.

## The Three Core Measures

### Mean (Arithmetic Average)
$$\bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i$$

- **Use when:** Data is continuous, roughly symmetric, no extreme outliers
- **Sensitive to outliers** — one extreme value pulls it significantly
- **Example:** Mean income is misleading when Bill Gates is in the room

### Median
The **middle value** when data is sorted. For even n: average of two middle values.

- **Use when:** Data is skewed, ordinal, or has outliers
- **Robust to outliers** — unaffected by extreme values
- **Example:** Median household income is more representative than mean

### Mode
The **most frequently occurring** value.

- **Use when:** Data is nominal/categorical, or for finding peaks in multimodal distributions
- A distribution can have zero modes (uniform), one mode (unimodal), or many

---

## When to Use Which

| Situation | Best Measure |
|-----------|-------------|
| Symmetric continuous data | Mean |
| Skewed data (income, counts) | Median |
| Categorical/nominal data | Mode |
| Bimodal distribution | Report both modes |
| Ordinal scale (Likert) | Median |

---

## Special Means

**Geometric Mean** — for multiplicative processes (growth rates, ratios):
$$G = \left(\prod_{i=1}^{n} x_i\right)^{1/n} = \exp\left(\frac{1}{n}\sum \ln x_i\right)$$

**Harmonic Mean** — for rates and speeds:
$$H = \frac{n}{\sum_{i=1}^{n} \frac{1}{x_i}}$$

**Weighted Mean** — critical for complex survey data (DHS):
$$\bar{x}_w = \frac{\sum w_i x_i}{\sum w_i}$$

> In DHS surveys, always use **survey-weighted means** — unweighted estimates are biased due to complex sampling design.

---

## Impact on ML

- **Mean imputation** for missing data assumes symmetry — dangerous for skewed health data
- **Median imputation** is more robust for income, BMI, number of children
- Loss functions: **MSE minimises mean**, **MAE minimises median** — choose accordingly

```r
library(survey)
# Weighted mean using DHS survey design
svymean(~anc_visits, design = dhs_design)
svyquantile(~anc_visits, design = dhs_design, quantiles = 0.5)  # weighted median
```

---
*Previous: [#1 Types of Data](/posts/2026/01/types-of-data/) | Next: [#3 Measures of Dispersion](/posts/2026/01/dispersion/)*
