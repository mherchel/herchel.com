---
title: D8 Theming Notes
date: "2018-07-17T00:00:00.000Z"
subtitle: "And you won't believe what happened next"
display: "false"
---
## Twig

### Basics
```twig
{# Prints Label #}
{{ label }}
```

```twig
{% if page.footer_fifth %}
 <!-- Markup here -->
{% endif %}
```


### Inheritance

Extends syntax says what file it is extending

```twig
{% extends "block.twig.html" %}
```
Then you define a block with all of the markup inside of it

```twig
{% block content %}
  Markup and twig syntax goes here.
{% endblock %}
```

Then in the file that gets extended, you need to put a place where the file is getting dropped.

```twig
{% block content %}
<div>
{{ content }}
</div>
{% endblock %}
```

namespaced paths

```
{% extends "@classy/block/block.html.twig" %}
```

### Disable caching

Uncomment the following in settings.php and move it to the bottom of the file.

```php
if (file_exists($app_root . '/' . $site_path . '/settings.local.php')) {
  include $app_root . '/' . $site_path . '/settings.local.php';
}
```

Copy `example.settings.local.php` to `settings.local.php`.

Uncomment lines to disable render and local page caches.

Make your development.services.yml file like so:

```yaml
# Local development services.
#
# To activate this feature, follow the instructions at the top of the
# 'example.settings.local.php' file, which sits next to this file.
parameters:
  http.response.debug_cacheability_headers: true
  twig.config:
    debug: true
    auto_reload: true
    cache: false
services:
  cache.backend.null:
    class: Drupal\Core\Cache\NullBackendFactory
```

### Twig stuff

AddClass funtion to add CSS class to existing attributes

```twig
<div{{ attributes.addClass('banner') }}>
```

Filter to run string through the 't' function

```twig
{{ 'Home'|t }}
```

### Controls in twig

https://drupalize.me/tutorial/loops-and-iterators-twig?p=2512


```twig
<ul>
  {% for item in items %}
    <li>{{ item.content }} }} </li>
  {% end for %}
</ul>
```

```twig
<ul class='blog-post__tags field__items'>
  {% for item in items if item.status %}
    <li>{{ value.content }}</li>
  {% endfor %}
</ul>
```

```twig
<ul class='blog-post__tags field__items'>
  {% for item in items %}
    <li>{{ item.content }}</li>
  {% else %}
    <li>This list is empty</li>
  {% endfor %}
</ul>
```

You also have access to a `loop` variable within the loop.

* `loop.index`	The current iteration of the loop. (1 indexed)
* `loop.index0`	The current iteration of the loop. (0 indexed)
* `loop.revindex`	The number of iterations from the end of the loop (1 indexed)
* `loop.revindex0`	The number of iterations from the end of the loop (0 indexed)
* `loop.first`	True if first iteration
* `loop.last`	True if last iteration
* `loop.length`	The number of items in the sequence
* `loop.parent`	The parent context

```twig
<ul class='blog-post__tags field__items'>
  {% for item in items %}
    {% if loop.first %}
      <li{{ item.attributes.addClass(['blog-post__tag', 'first']) }}>{{ item.content }}</li>
    {% elseif loop.last %}
      <li{{ item.attributes.addClass(['blog-post__tag', 'last']) }}>{{ item.content }}</li>
    {% else %}
      <li{{ item.attributes.addClass('blog-post__tag') }}>{{ item.content }}</li>
    {% endif %}

  {% endfor %}
  </ul>
```

### Twig functions

```twig
{{ random() }}
```

```twig
{% if ramdom(10) < 5 %}
 This will print if number is < 5
{% endif %}
```

#### Drupal specific twig function

* `url` - generates absolute URL
* `path` - generates relative path
* `link` - create html link
* `file_url`
* `attach_library` - attaches library to template.

### Twig Filters

Uppercase the text

```twig
{{ product|upper }}
```

Uppercase then reverse text

```twig
{{ product|upper|reverse }}
```

* `length` Length of object or array or string `{% if product|length == 0 %}`

### Drupal Specific Filters

https://www.drupal.org/docs/8/theming/twig/filters-modifying-variables-in-twig-templates

* `t` - translate
* `drupal_escape`
* `clean_class`
* `clean_id`
* `format_date`
* `raw` dangerous
* `safe_join` The safe_join filter joins several strings together with a supplied separator. `{{ items|safe_join(', ') }}`
* `without`  creates a copy of the renderable array and removes child elements by key specified through arguments passed to the filter. `{{ content|without('links') }}`

### Twig Tests

https://twig.symfony.com/doc/1.x/

```twig
{% if loop.index is divisible by(3) %}
    ...
{% endif %}
```

```twig
{% if foo.attribute is same as(false) %}
    the foo attribute really is the 'false' PHP value
{% endif %}
```

### Dump function

...doesn't appear to work.

```twig
{{ dump() }}
```

```twig
{{ dump(content) }}
```

### Add classes in Drupal twig

* Printing `<div{{ attributes }}>` works fine.
* Don't add additional spacing in the attributes.
* Add class 
```twig
<article{{ attributes.addClass('mikeclass') }}>
```
* Remove class
```twig
<div{{ attributes.removeClass('their-class') }}>
```
* add attribute
```twig
<div{{ attributes.setAttribute('data-bundle', node.bundle) }}>
```
* Check if attribute exists
```twig
{% if attribute.hasClass('myClass') %}
  {# do stuff #}
{% endif %}
```
* Add multiple classes:
```twig
{%
  set classes = [
    'node',
    'node--type-' ~ node.bundle|clean_class,
    node.isPromoted() ? 'node--promoted',
    node.isSticky() ? 'node--sticky',
    not node.isPublished() ? 'node--unpublished',
    view_mode ? 'node--view-mode-' ~ view_mode|clean_class,
  ]
%}
<article{{ attributes.addClass(classes) }}>
```

## Notes

You can reference the path to the theme with

```twig
{{ base_path ~ directory }}
```

Concatenate strings with a `~`

```twig
{{ base_path ~ directory }}
```