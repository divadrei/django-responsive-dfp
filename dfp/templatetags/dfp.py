from django.conf import settings
from django.utils.safestring import SafeString
from django import template

register = template.Library()

def dfp(slot):
    html = SafeString()
    data = settings.DFP_SLOTS
    data = data[slot]

    html+='<div class="dfp-ads" data-slot="%s" data-account="%s" >' % (data['slot'],data['account'])
    for version in data['responsive']:
        html+='<div  data-sizes="%s" data-media-query="%s"></div>' % (",".join("%sx%s" % s for s in version['sizes']), version['media_query'])
    html+="</div>"
    return html

    return datetime.datetime.now().strftime(format_string)


register.simple_tag(dfp)