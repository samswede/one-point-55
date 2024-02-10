---
blocks:
  - message: |
      # OnePoint**55**

      This is basic text...
    links:
      - link: /impressum
        label: Impressum
        style: dark
      - link: /about
        label: About
        style: light
    _template: hero
  - message: |
      # testing

      # **testing 1**2**3**
    links:
      - link: /
        label: Learn More
        style: dark
    _template: content
  - message: |
      # Past **Trips**

      Checkout where we've been
    style: cards
    tripscarousel:
      - title: Zermatt 2022
        text: Hella good. Mountains n shit
        link: /
        image: /vercel.svg
      - title: Ibiza 2021
        text: yessssss
        link: /
        image: /next.svg
    _template: pasttrips
  - title: Frequently Asked Questions
    items:
      - trigger: Question 1
        content: Answer to Q1
      - trigger: Question 2
        content: Answer to Q2
      - trigger: Question 3
        content: Answer to Q3
    _template: accordion
---

