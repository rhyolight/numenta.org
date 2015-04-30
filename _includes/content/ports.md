
# Active Ports of NuPIC

NuPIC is open source and GPLv3. We encourage others to port our implementation
of HTM into their language of choice. Below is a list of active ports the NuPIC
community has been working on.

{% for item in site.data.ports %}
  #### [{{ item.name }}]({{ item.link }}) ({{ item.lang }})
  <p>{{ item.desc }}</p>
  <hr/>
{% endfor %}
