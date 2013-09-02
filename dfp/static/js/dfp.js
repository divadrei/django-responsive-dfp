$(window).load(function() {
  var ads_index = 0;
  var targeting = {};
  if ($('.dfp-ads').length > 0) {
    $.getScript('//www.googletagservices.com/tag/js/gpt.js', function() {
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();

      $('[data-dfpfield]').each(function() {
        if (typeof($(this).data('dfpvalue')) === 'undefined') {
          targeting[$(this).data('dfpfield')] = $(this)
            .text();

        } else {
          targeting[$(this).data('dfpfield')] = $(this)
            .data('dfpvalue');
        }
      });
      $('.dfp-ads').each(function() {
        if (typeof($(this).data('slot')) == 'undefined') {
          return;
        }
        var slot;

        slot = '/' + $(this).data('account') + '/' + $(this).data('slot')
        
        $('.dfp-ads>div').each(function() {
          if (typeof($(this).attr('id')) === 'undefined') {
            $(this).attr('id', 'ads-dfp-' + ads_index);
            ads_index++;
          }
          
          var media_query = $(this).data("media-query");
          var sizes = $(this).data('sizes');
          sizes = sizes.split(',')
          for (i=0;i<sizes.length;i++) {
            sizes[i]= sizes[i].split('x');
            sizes[i][0]=parseInt(sizes[i][0]);
            sizes[i][1]=parseInt(sizes[i][1]);
          }
          googletag.defineSlot(
            slot, sizes,
            $(this).attr('id')).addService(googletag
            .pubads());
          $.each(targeting, function(key, value) {
            googletag.pubads().setTargeting(key, value)
          });
          $.data($(this), 'dfp_init', false);
          var self = this;
          enquire.register(media_query, {
            match : function() {
              $(self).show();
              if ($.data($(self), 'dfp_init') === true) {
                return;
              }
              googletag.display($(self).attr('id'));
              $.data($(self), 'dfp_init', true);
              
            },
            unmatch: function() {
              $(self).hide();
            }
          });
        });
      });
    });
  }
});