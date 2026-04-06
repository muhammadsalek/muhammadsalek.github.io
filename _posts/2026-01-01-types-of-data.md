---
title: "Statistics for ML #1 — Types of Data: Nominal, Ordinal, Interval, Ratio"
date: 2026-01-01
permalink: /posts/2026/01/types-of-data/
tags: [statistics, foundations, data-types, machine-learning]
---

Understanding **data types** is the most fundamental step before any analysis. Choosing the wrong statistical test or ML algorithm because you misidentified your data type is one of the most common mistakes in practice.

## The Four Levels of Measurement (Stevens, 1946)

### 🔵 Nominal (Categorical, No Order)
Names or labels only. No ranking, no distance.

- **Examples:** Blood type (A, B, AB, O), Religion, Country, Gender, Disease category
- **Operations allowed:** = and ≠ only
- **Central tendency:** Mode
- **In ML:** One-hot encoding, label encoding

```python
import pandas as pd
df['gender'] = pd.Categorical(df['gender'])
# One-hot encode
pd.get_dummies(df['gender'], prefix='gender')
```

### 🟢 Ordinal (Ordered, No Equal Spacing)
Categories with a meaningful order, but the *gaps between ranks are not equal*.

- **Examples:** Education level (Primary < Secondary < Tertiary), Likert scale (1=Strongly Disagree … 5=Strongly Agree), Cancer stage (I < II < III < IV), Wealth quintile in DHS surveys
- **Operations allowed:** = , ≠ , < , >
- **Central tendency:** Median, Mode
- **In ML:** Ordinal encoding, target encoding

> ⚠️ **Critical mistake:** Treating ordinal data as continuous (interval) inflates precision that doesn't exist. The difference between "agree" and "strongly agree" is NOT necessarily the same as between "neutral" and "agree."

### 🟡 Interval (Equal Spacing, No True Zero)
Equal gaps between values, but **zero is arbitrary** (does not mean "absence").

- **Examples:** Temperature in °C or °F, Calendar year, IQ scores, pH scale
- **Operations allowed:** +, −, but NOT ×, ÷ ratios
- **Note:** 20°C is NOT "twice as hot" as 10°C. But the difference (10°) is meaningful.
- **Central tendency:** Mean, Median, Mode

### 🔴 Ratio (Equal Spacing + True Zero)
All arithmetic operations valid. Zero means *absolute absence* of the quantity.

- **Examples:** Height, Weight, Age, Income, Blood pressure, Number of ANC visits, Child mortality rate
- **Operations allowed:** +, −, ×, ÷ all valid
- **Statement allowed:** "A person earning $100K earns twice as much as one earning $50K."
- **Central tendency:** Geometric mean, Harmonic mean also valid

---

## Quick Reference Table

| Level | Order? | Equal Gaps? | True Zero? | Example |
|-------|--------|-------------|------------|---------|
| Nominal | ❌ | ❌ | ❌ | Blood type |
| Ordinal | ✅ | ❌ | ❌ | Wealth quintile |
| Interval | ✅ | ✅ | ❌ | Temperature °C |
| Ratio | ✅ | ✅ | ✅ | Height (cm) |

---

## Why This Matters in Public Health & ML

In **DHS survey data** (Bangladesh, Nepal, Zambia):
- Wealth index → **Ordinal** (quintiles 1–5)
- Number of ANC visits → **Ratio** (true zero = no visits)
- Region/Division → **Nominal** (no ordering)
- Skilled birth attendance (Yes/No) → **Nominal binary**

Using the wrong encoding leads to:
- Inflated R² in regression
- Biased SHAP values
- Wrong distance metrics in clustering (k-means should NOT be used on nominal data directly)

---

## R Code: Checking and Setting Data Types

```r
library(dplyr)

df <- df %>%
  mutate(
    wealth_index = factor(wealth_index, ordered = TRUE,
                          levels = c("Poorest","Poorer","Middle","Richer","Richest")),
    region       = factor(region),           # nominal
    anc_visits   = as.integer(anc_visits),   # ratio/count
    temperature  = as.numeric(temperature)   # interval
  )

str(df)
```

---

*Next post: [#2 — Measures of Central Tendency](/posts/2026/01/central-tendency/)*  
*Series: [Statistics for ML — Full Index](/posts/2026/01/statistics-ml-index/)*
