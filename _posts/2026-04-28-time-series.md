---
title: "Statistics for ML #97 — Time Series Analysis: ARIMA, ACF, PACF"
date: 2026-04-28
permalink: /posts/2026/04/time-series/
tags: [time-series, survival-analysis, causal-inference, experimentation]
---

## Time Series Analysis: ARIMA, ACF, PACF

Post **#97/100** in the *Statistics for ML* series — [Md Salek Miah](/) | Statistician & ML Researcher | SUST, Bangladesh.

**Time Series Analysis** models data collected over time, capturing trends, seasonality, and autocorrelation.

### Key Concepts

- **Stationarity:** Mean, variance, autocorrelation constant over time
- **ACF (Autocorrelation Function):** Correlation of series with its own lags
- **PACF (Partial ACF):** Direct correlation at lag k, controlling for shorter lags
- **ARIMA(p,d,q):** p=AR order, d=differencing, q=MA order

### Public Health Application

Trend analysis of water quality index in the Buriganga River (our published research):
```python
import pandas as pd
from statsmodels.tsa.statespace.sarimax import SARIMAX
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf

# Our Buriganga WQI trend analysis
wqi_data = pd.read_csv('buriganga_wqi.csv', index_col='date', parse_dates=True)

fig, (ax1, ax2) = plt.subplots(2,1, figsize=(12,8))
plot_acf(wqi_data['WQI'].dropna(), lags=24, ax=ax1)
plot_pacf(wqi_data['WQI'].dropna(), lags=24, ax=ax2)

# Fit SARIMA
model = SARIMAX(wqi_data['WQI'], order=(1,1,1), seasonal_order=(1,1,1,12))
result = model.fit()
print(result.summary())
```

---
*[Series Index](/posts/2026/01/statistics-ml-index/) | Post #97/100 | [Md Salek Miah](/) | [saleksta@gmail.com](mailto:saleksta@gmail.com)*
