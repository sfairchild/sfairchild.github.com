---
layout: page
title: Welcome
tagline: I'm glad you are here
---
{% include JB/setup %}

This is my guide used mostly for self reference on different technologies and getting environments setup. Feel free to use it and if you notice any error feel free to contact me and let me know.

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>