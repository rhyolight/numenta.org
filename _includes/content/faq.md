Frequently Asked Questions
===========================

* [Is there a specific application for NuPIC?](#is_there_a_specific_application_for_nupic)
* [What's the difference between your contributor license and Apache's?](#whats_the_difference_between_your_contributor_license_and_apaches)
* [What's the difference between this and your old offering?](#whats_the_difference_between_this_and_your_old_offering)
* [Can I add an external library to NuPIC?](#can_i_add_an_external_library_to_nupic)
* [Does NuPIC contain Hierarchal Temporal Memory?](#does_nupic_contain_hierarchal_temporal_memory)

Is there a specific application for NuPIC?
--------------------
The algorithm lends itself well to high-speed temporal data, but it could potentially be applied to many different fields and endeavors.


What's the difference between your contributor license and Apache's?
--------------------
Not much, really. Here's a [diff](http://www.diffchecker.com/tas54ez4). We've also made a change to the contributor license that diverges from slightly from the Apache version, you can read more about it [on our blog]({{ site.baseurl }}/blog/2013/09/03/numenta-contributor-license-v1-1.html).


What's the difference between this and your old offering?
--------------------
It is important to emphasize that the old and new NuPIC algorithms are completely different.  This isn't an enhancement.  It might be a bit confusing that we are using the same name but we figured only a few people would be aware of the old NuPIC offering. The main differences are: a) NuPIC today includes the CLA whereas the old NuPIC had our previous algorithms, b) old NuPIC was tuned for vision whereas new NuPIC is tuned for [Grok](http://groksolutions.com/product.html), and c) old NuPIC ran on Windows.


Can I add an external library to NuPIC?
--------------------
You can add external libraries to NuPIC. They must have a license that permits proprietary use of the library. External libraries licensed under GPL, for instance, will not be accepted.

Does NuPIC contain Hierarchal Temporal Memory?
--------------------
Yes... and no. The software architecture for hierarchies exists within the [Network API](https://github.com/numenta/nupic/wiki/NuPIC-Core-Network-API) of [NuPIC.Core](https://github.com/numenta/nupic.core), as well as the Python client. You can create models and link them together into a hierarchy, with lower levels passing data up into higher levels. However, hierarchy is not implemented in the easier to use [Online Prediction Framework](https://github.com/numenta/nupic/wiki/Online-Prediction-Framework). That wouldn't prevent anyone from experimenting with hierarchies themselves, however.

The algorithmic mechanism for creating an effective learned spatiotemporal hierarchy using the CLA is still very much a research topic. A good mechanism for temporal pooling within a hierarchical architecture is an active area of research for Jeff and the NuPIC community. Please search our mailing list archives for discussion and proposals on that topic.
