---
title: "Spatial Inequalities in Maternal Health: What Maps Tell Us That Tables Cannot"
date: 2026-01-15
permalink: /posts/2026/01/spatial-inequalities-maternal-health/
tags:
  - spatial analysis
  - maternal health
  - GIS
  - epidemiology
  - Bangladesh
  - Nepal
---

Numbers in a regression table tell you *that* an association exists. A map tells you *where* it exists — and where it is worst. In maternal health research across South Asia and Sub-Saharan Africa, this geographic dimension is not just interesting; it is **essential for policy**.

## Why Spatial Analysis?

In Bangladesh, the national skilled birth attendance (SBA) rate is approximately 67%. But this aggregate number masks dramatic sub-national variation: Sylhet Division consistently records among the lowest rates (<50%), while Dhaka Division exceeds 80%. A national policy that ignores this heterogeneity will fail the women who need it most.

## Our Approach: Combining ML with Geospatial Methods

In our multi-country studies, we follow a three-step spatial pipeline:

### 1. Cluster-Level Prediction
Using DHS GPS cluster coordinates, we generate ML-based predictions for each enumeration area and map them using `sf` and `tmap` in R (or `geopandas` in Python).

### 2. Spatial Autocorrelation Testing
We apply **Moran's I statistic** to test whether low-SBA clusters are randomly distributed or spatially clustered. In all our studies, we find significant positive autocorrelation — meaning high-risk areas are geographically concentrated and mutually reinforcing.

### 3. Local Indicators of Spatial Association (LISA)
LISA maps identify specific "hot spots" (high-high clusters) and "cold spots" (low-low clusters) of poor maternal health outcomes. These become the direct targets for geographically prioritized interventions.

## A Striking Finding: The Haor Region

In our study of pregnancy danger sign knowledge in the Haor (wetland) region of Bangladesh, women in these flood-prone, geographically isolated communities showed dramatically lower knowledge scores than the national average — even after controlling for education, wealth, and healthcare access. The spatial pattern revealed that **geographic isolation itself** is an independent determinant, above and beyond individual-level factors.

This finding has direct policy implications: mobile health units and community health worker programs must be geographically targeted to Haor districts, not just allocated proportionally by population.

## Tools We Use

| Task | Tools |
|------|-------|
| Spatial data handling | R: `sf`, `spdep` · Python: `geopandas` |
| Visualization | R: `tmap`, `ggplot2` · QGIS · ArcGIS Pro |
| Spatial autocorrelation | `spdep::moran.test()` · GeoDa |
| Choropleth mapping | `tmap` · `leaflet` · `folium` |

---

*The combination of ML predictions + spatial visualization is now a standard part of our research pipeline. If you are working on similar problems and want to collaborate, reach out: [saleksta@gmail.com](mailto:saleksta@gmail.com)*
