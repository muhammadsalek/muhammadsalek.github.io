---
title: "Statistics for ML #98 — Survival Analysis & Hazard Functions"
date: 2026-04-01
permalink: /posts/2026/04/survival-analysis/
tags: [time-series, survival-analysis, causal-inference, experimentation]
---

## Survival Analysis & Hazard Functions

Post **#98/100** in the *Statistics for ML* series — [Md Salek Miah](/) | Statistician & ML Researcher | SUST, Bangladesh.

**Survival Analysis** models the time until an event occurs (death, disease, recovery) and handles **censoring** — when the event hasn't occurred yet at study end.

### Key Functions

- **Survival function:** S(t) = P(T > t) — probability of surviving past time t
- **Hazard function:** h(t) = instantaneous risk of event at t, given survival to t
- **Cumulative hazard:** H(t) = ∫₀ᵗ h(u)du

### Kaplan-Meier Estimator (non-parametric)
$$\hat{S}(t) = \prod_{t_i \leq t} \left(1 - \frac{d_i}{n_i}\right)$$

### Cox Proportional Hazards (semi-parametric)
$$h(t|X) = h_0(t) \cdot \exp(\beta_1 X_1 + ... + \beta_k X_k)$$

```python
from lifelines import KaplanMeierFitter, CoxPHFitter

# Cardiovascular disease survival (from our conference presentation)
kmf = KaplanMeierFitter()
kmf.fit(df['time_to_event'], event_observed=df['event'])
kmf.plot_survival_function()
plt.title('Kaplan-Meier Survival Curve: CVD Dataset')

# Cox model
cph = CoxPHFitter()
cph.fit(df[['time_to_event','event','age','bmi','smoking','hypertension']],
        duration_col='time_to_event', event_col='event')
cph.print_summary()
```

---
*[Series Index](/posts/2026/01/statistics-ml-index/) | Post #98/100 | [Md Salek Miah](/) | [saleksta@gmail.com](mailto:saleksta@gmail.com)*
