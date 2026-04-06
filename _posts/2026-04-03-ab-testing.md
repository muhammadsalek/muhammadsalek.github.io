---
title: "Statistics for ML #100 — A/B Testing & Experimentation Design"
date: 2026-04-03
permalink: /posts/2026/04/ab-testing/
tags: [time-series, survival-analysis, causal-inference, experimentation]
---

## A/B Testing & Experimentation Design

Post **#100/100** in the *Statistics for ML* series — [Md Salek Miah](/) | Statistician & ML Researcher | SUST, Bangladesh.

**A/B Testing** is the gold standard for causal inference in experimental settings. It is hypothesis testing applied to business, clinical, and policy decisions.

### The Framework

1. **Define hypothesis:** H₀: μ_A = μ_B vs H₁: μ_A ≠ μ_B
2. **Calculate required sample size** (power analysis)
3. **Randomise** units to treatment A and B
4. **Run experiment** — collect data
5. **Analyse** — t-test, z-test, or Bayesian approach
6. **Decide** — reject or fail to reject H₀

### Sample Size Formula

$$n = \frac{2(z_{\alpha/2} + z_\beta)^2 \sigma^2}{\delta^2}$$

where δ = minimum detectable effect, β = desired power.

### Common Pitfalls

- **Peeking:** Stopping early when significant — inflates Type I error
- **Multiple metrics:** Testing many outcomes → Bonferroni correction needed
- **Network effects:** Spillover between treatment/control (SUTVA violation)
- **Novelty effect:** Short-run engagement boost from any change

```python
from scipy import stats
import numpy as np

# Sample size calculation
def required_n(effect_size, alpha=0.05, power=0.80):
    z_alpha = stats.norm.ppf(1 - alpha/2)
    z_beta = stats.norm.ppf(power)
    return int(np.ceil(2 * (z_alpha + z_beta)**2 / effect_size**2))

# For 5% lift in SBA rate (0.67 → 0.705)
p1, p2 = 0.67, 0.705
effect = (p2 - p1) / np.sqrt((p1*(1-p1) + p2*(1-p2))/2)  # Cohen's h
n = required_n(effect)
print(f'Required n per group = {n}')

# Analyse results
control_sba = np.random.binomial(1, 0.67, n)
treatment_sba = np.random.binomial(1, 0.705, n)
t_stat, p_val = stats.ttest_ind(control_sba, treatment_sba)
print(f't-stat = {t_stat:.3f}, p-value = {p_val:.4f}')
```

---

## 🎉 Series Complete!

Congratulations on reaching the end of the **Statistics for ML — 100 Posts** series!

This series covered everything from basic data types to causal inference, designed for statisticians, epidemiologists, and ML practitioners working on real-world health data.

### What We Covered

- 📊 **Part 1 (Posts 1–20):** Foundations — data types, distributions, CLT, sampling
- 📈 **Part 2 (Posts 21–35):** Probability distributions — Bernoulli to multivariate Normal
- 🔬 **Part 3 (Posts 36–50):** Statistical inference — MLE, hypothesis testing, ANOVA
- 📉 **Part 4 (Posts 51–63):** Regression — OLS to regularisation
- 🤖 **Part 5 (Posts 64–78):** ML concepts — bias-variance, cross-validation, ROC
- 🧠 **Part 6 (Posts 79–87):** Bayesian & probabilistic ML
- 🔥 **Part 7 (Posts 88–96):** Deep learning foundations
- 🌍 **Part 8 (Posts 97–100):** Advanced — time series, survival, causal inference, A/B testing

### Connect With Me

- 📧 [saleksta@gmail.com](mailto:saleksta@gmail.com)
- 🌐 [Portfolio](https://salek-protfolio.vercel.app/)
- 📊 [ResearchGate](https://www.researchgate.net/profile/Md-Miah-142)
- 💻 [GitHub](https://github.com/muhammadsalek)

---
*[Series Index](/posts/2026/01/statistics-ml-index/) | Post #100/100 | [Md Salek Miah](/) | [saleksta@gmail.com](mailto:saleksta@gmail.com)*
