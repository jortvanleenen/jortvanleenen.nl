---
layout: null
permalink: /api/news
pagination:
  enabled: true
  permalink: ''
  collection: news
  extension: .json
  indexpage: 'feed-:num'
---

{
    "items": [
        {% for item in paginator.posts %}
            {% unless forloop.first %},{% endunless %}
            {
            "title": {{ item.title | jsonify }},
            "date": "{{ item.date | date_to_xmlschema }}",
            "content": {{ item.content | markdownify | jsonify }}
            }
        {% endfor %}
    ]{% if paginator.next_page_path %},
    "next": "{{ paginator.next_page_path | relative_url }}"{% endif %}{% if paginator.previous_page_path %},
    "prev": "{{ paginator.previous_page_path | relative_url }}"{% endif %}{% if paginator.first_page_path %},
    "first": "{{ paginator.first_page_path | relative_url }}"{% endif %}
}
