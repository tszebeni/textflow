# textflow
Text Flow plugin for jquery

## How it works
[Demo page](http://khaliy.github.io/textflow.html)

The element container needs to have fixed dimensions the element can fit into it.
This plugin calculates based on the dimensions of the container so it supports multiline text well.

Here is a simple textflow setup:

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="textflow.jquery.js"></script>
<script>
  $(".wall-text").textflow();
</script>
```

The text should fill its space now.

## Options
You can specify the min and max font sizes for the element as an option passed as argument to the method, which can also be overridden by data attributes on the element itself:

```html
<script>
  $(".wall-text").textflow({
    min: 10,
    max: 40
  });
</script>
<span class="wall-text" data-min="10" data-max="100">...</span>
```


