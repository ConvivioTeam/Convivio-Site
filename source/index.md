---
layout: page
title: We bring people together
description: The digital collaboration company
meta-title-override: Convivio — We bring people together
include-below:
  - cps-case-study.html
  - recent-blog-posts.html
  - events.html
---


<h2 class="sub-heading sub-heading--centered">The digital collaboration company</h2>

<ul class="icon-list">
  <li class="icon-list__icon icon-list__icon--connected">
    <h3 class="icon-list__title">Exploring complexity</h3>
  </li>
  <li class="icon-list__icon icon-list__icon--speech">
    <h3 class="icon-list__title">Collaborative working</h3>
  </li>
  <li class="icon-list__icon icon-list__icon--chart">
    <h3 class="icon-list__title">Better digital services</h3>
  </li>
</ul>

<p class="intro-copy">We’re a digital agency that works with the public sector to explore complex problems and improve the way government works for people.</p>

<p class="intro-copy">We do this with great collaboration skills, agile ways of working, and digital tools.</p>

<a class="button button--primary button--spacing-top button--spacing-bottom" href="/what-we-do">See what we do</a>

<h2 class="sub-heading sub-heading--centered icon-list--massive-top-spacing">Organisations we've worked with</h2>

<ul class="icon-list icon-list--narrow-half icon-list--hide-titles">
  <li class="icon-list__icon icon-list__icon--government-digital-service">
    <h3 class="icon-list__title">Government Digital Service</h3>
  </li>
  <li class="icon-list__icon icon-list__icon--moj">
    <h3 class="icon-list__title">Ministry of Justice</h3>
  </li>
  <li class="icon-list__icon icon-list__icon--cabinet-office">
  <h3 class="icon-list__title">Cabinet Office</h3>
  </li>
</ul>

<ul class="icon-list icon-list--narrow-half icon-list--hide-titles">
  <li class="icon-list__icon icon-list__icon--jac">
    <h3 class="icon-list__title">Judicial Appointments Commission</h3>
  </li>
  <li class="icon-list__icon icon-list__icon--cps">
    <h3 class="icon-list__title">Crown Prosecution Service</h3>
  </li>
  <li class="icon-list__icon icon-list__icon--hackney">
    <h3 class="icon-list__title">Hackney Council</h3>
  </li>
</ul>

<h2 class="sub-heading sub-heading--centered icon-list--massive-top-spacing">Accreditations</h2>
 <ul class="image-list image-list--contain-image image-list--hide-titles">
  {% for post in site.data.accreditations %}
    <li class="image-list__item">
    <a class="image-list__link" target="_blank" rel="noopener" href="{{ post.url }}">
      <div class="image-list__image" style="background-image: url({{ post.img }})"></div>
      <h3 class="image-list__title">{{ post.title }}</h3>
      <p class="image-list__text">
        {{ post.text }}
      </p>
      </a>
    </li>
  {% endfor %}
</ul>
