 Django responsive DFP
======================

Description
-----------

The `django-responsive-dfp` package allows you to easily display responsive ads using dfp ans media-queries.

Dependencies
------------

* Django >= 1.3

Installation
------------

    pip install django-responsive-dfp

add the plugin to ``INSTALLED_APPS``::

    INSTALLED_APPS = (
        ...
        'dfp', 
        ...
    )

define settings for your dfp slots

    DFP_SLOTS = {
        "header": {
          "account" : 12345678,
          "slot" : "Leaderboard_Header",
          "responsive" : [
            {
              "media_query" : "(min-width: 1248px)",
              "sizes" : ((1150,120),)
            },
            {
              "media_query" : "(min-width: 948px) and (max-width: 1248px)",
              "sizes" : ((640,120),)
            }
          ]
        } 
    }

Usage
------------

In your templates, you need to load ``dfp``:

    ...
    {% load dfp %}
    ... 

then you simply call the tag with the slot name

    {% dfp "header" %}