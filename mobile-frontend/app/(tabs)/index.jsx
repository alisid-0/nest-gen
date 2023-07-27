import { StyleSheet, Touchable } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View, } from '@/components/Themed';
import { ScrollView, TouchableOpacity, TextInput, Image} from 'react-native';
import axios from 'axios';
import { useRouter, Link, router } from 'expo-router';
import { useState, useEffect } from 'react';

export default function Home() {

  const houses = 
  
  [{"address": {"city": "Wildwood", "county": "St. Louis", "county_needed_for_uniq": false, "fips_code": "29189", "lat": 38.607529, "line": "2726 Quail Valley Dr", "lon": -90.59889, "neighborhood_name": "Chesterfield Valley", "postal_code": "63005", "state": "Missouri", "state_code": "MO"}, "agents": [[Object]], "baths": 3, "baths_full": 2, "baths_half": 1, "beds": 4, "branding": {"listing_office": [Object]}, "building_size": {"size": 2618, "units": "sqft"}, "client_display_flags": {"flip_the_market_enabled": true, "has_open_house": false, "is_co_broke_email": true, "is_co_broke_phone": false, "is_coming_soon": true, "is_new_listing": false, "is_new_plan": false, "is_office_standard_listing": false, "is_showcase": false, "is_showcase_choice_enabled": false, "is_turbo": false, "lead_form_phone_required": true, "presentation_status": "for_sale", "price_change": 0, "show_contact_a_lender_in_lead_form": false, "show_veterans_united_in_lead_form": false, "suppress_map_pin": false}, "data_source_name": "mls", "last_update": "2023-07-26T13:15:10Z", "lead_forms": {"cashback_enabled": false, "flip_the_market_enabled": true, "form": [Object], "form_type": "classic", "is_lcm_enabled": false, "lead_type": "co_broke", "local_phone": "(636)202-1382", "local_phones": [Object], "show_agent": false, "show_broker": false, "show_builder": false, "show_contact_a_lender": false, "show_text_leads": true, "show_veterans_united": false, "smarthome_enabled": true}, "list_tracking": "type|property|data|prop_id|7045976396|list_id|2958058975|page|rank|list_branding|listing_agent|listing_office|advertiser_id|agent|office|broker|property_status|product_code|advantage_code^1|1|0|1|1CSYW|2MQP|F8MQ|1|G|5^^$0|1|2|$3|4|5|6|7|J|8|K|9|$A|L|B|M]|C|$D|N|E|O|F|P]|G|Q|H|R|I|S]]", "listing_id": "2958058975", "lot_size": {"size": 12632, "units": "sqft"}, "mls": {"abbreviation": "SLMO", "id": "23044544", "name": "MARIS", "plan_id": null, "type": "mls"}, "office": {"id": "203f56513cc746e3b70168c06ce3a294", "name": "Coldwell Banker Realty - Gundaker"}, "page_no": 1, "photo_count": 2, "price": 469000, "products": ["core.agent", "core.broker", "co_broke"], "prop_status": "for_sale", "prop_type": "single_family", "property_id": "M7045976396", "rank": 1, "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/2726-Quail-Valley-Dr_Wildwood_MO_63005_M70459-76396", "thumbnail": "https://ap.rdcpix.com/3312c1cf84f8bad43315550dd0af07a3l-m3660822399x.jpg"}, {"address": {"city": "Grover", "county": "St. Louis", "county_needed_for_uniq": false, "fips_code": "29189", "lat": 38.573616, "line": "151 Imperial Crown Way Unit G", "lon": -90.629858, "neighborhood_name": "Grover", "postal_code": "63040", "state": "Missouri", "state_code": "MO", "time_zone": "America/Chicago"}, "agents": [[Object]], "baths": 2, "baths_full": 2, "beds": 2, "branding": {"listing_office": [Object]}, "building_size": {"size": 1032, "units": "sqft"}, "client_display_flags": {"flip_the_market_enabled": true, "has_open_house": true, "is_co_broke_email": true, "is_co_broke_phone": false, "is_coming_soon": true, "is_new_listing": false, "is_new_plan": false, "is_office_standard_listing": false, "is_showcase": false, "is_showcase_choice_enabled": false, "is_turbo": false, "lead_form_phone_required": true, "presentation_status": "for_sale", "price_change": 0, "show_contact_a_lender_in_lead_form": false, "show_veterans_united_in_lead_form": false, "suppress_map_pin": false}, "data_source_name": "mls", "last_update": "2023-07-26T09:26:27Z", "lead_forms": {"cashback_enabled": false, "flip_the_market_enabled": true, "form": [Object], "form_type": "classic", "is_lcm_enabled": false, "lead_type": "co_broke", "local_phone": "(636)202-1382", "local_phones": [Object], "show_agent": false, "show_broker": false, "show_builder": false, "show_contact_a_lender": false, "show_text_leads": true, "show_veterans_united": false, "smarthome_enabled": true}, "list_tracking": "type|property|data|prop_id|7935867690|list_id|2958011134|page|rank|list_branding|listing_agent|listing_office|advertiser_id|agent|office|broker|property_status|product_code|advantage_code^1|2|0|1|1VFAY|VKS2|1AIB5|1|G|5^^$0|1|2|$3|4|5|6|7|J|8|K|9|$A|L|B|M]|C|$D|N|E|O|F|P]|G|Q|H|R|I|S]]", "listing_id": "2958011134", "lot_size": {"size": 1372, "units": "sqft"}, "mls": {"abbreviation": "SLMO", "id": "23043903", "name": "MARIS", "plan_id": null, "type": "mls"}, "office": {"id": "7b0f66030666f1979f86157cb544efbb", "name": "Keller Williams Chesterfield"}, "open_houses": [[Object]], "page_no": 1, "photo_count": 17, "price": 177500, "products": ["core.agent", "core.broker", "co_broke"], "prop_status": "for_sale", "prop_sub_type": "condos", "prop_type": "condo", "property_id": "M7935867690", "rank": 2, "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/151-Imperial-Crown-Way-Unit-G_Grover_MO_63040_M79358-67690", "thumbnail": "https://ap.rdcpix.com/9af2419a7a8d038332b8becafa4ab751l-m675427724x.jpg"}, {"address": {"city": "Wildwood", "county": "St. Louis", "county_needed_for_uniq": false, "fips_code": "29189", "lat": 38.58523, "line": "17029 Fire Glow Dr", "lon": -90.637365, "postal_code": "63011", "state": "Missouri", "state_code": "MO"}, "agents": [[Object]], "baths": 3, "baths_full": 2, "baths_half": 1, "beds": 3, "branding": {"listing_office": [Object]}, "building_size": {"size": 2230, "units": "sqft"}, "client_display_flags": {"flip_the_market_enabled": true, "has_open_house": false, "is_co_broke_email": true, "is_co_broke_phone": false, "is_new_listing": true, "is_new_plan": false, "is_office_standard_listing": false, "is_showcase": false, "is_showcase_choice_enabled": false, "is_turbo": false, "lead_form_phone_required": true, "presentation_status": "for_sale", "price_change": 0, "show_contact_a_lender_in_lead_form": false, "show_veterans_united_in_lead_form": false, "suppress_map_pin": false}, "data_source_name": "mls", "last_update": "2023-07-24T15:48:04Z", "lead_forms": {"cashback_enabled": false, "flip_the_market_enabled": true, "form": [Object], "form_type": "classic", "is_lcm_enabled": false, "lead_type": "co_broke", "local_phone": "(636)202-1382", "local_phones": [Object], "show_agent": false, "show_broker": false, "show_builder": false, "show_contact_a_lender": false, "show_text_leads": true, "show_veterans_united": false, "smarthome_enabled": true}, "list_tracking": "type|property|data|prop_id|9304331153|list_id|2957995915|page|rank|list_branding|listing_agent|listing_office|advertiser_id|agent|office|broker|property_status|product_code|advantage_code^1|3|0|1|49S7|40KR|2EXQH|35T|G|5^^$0|1|2|$3|4|5|6|7|J|8|K|9|$A|L|B|M]|C|$D|N|E|O|F|P]|G|Q|H|R|I|S]]", "listing_id": "2957995915", "lot_size": {"size": 5092, "units": "sqft"}, "mls": {"abbreviation": "SLMO", "id": "23043930", "name": "MARIS", "plan_id": null, "type": "mls"}, "office": {"id": "e90fc6afe2a7cc0f217689d095b36e59", "name": "Realty Executives of St. Louis"}, "page_no": 1, "photo_count": 36, "price": 589900, "products": ["core.agent", "core.broker", "co_broke"], "prop_status": "for_sale", "prop_sub_type": "condos", "prop_type": "condo", "property_id": "M9304331153", "rank": 3, "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/17029-Fire-Glow-Dr_Wildwood_MO_63011_M93043-31153", "thumbnail": "https://ap.rdcpix.com/c7c07f951301cfdb8443834464b50a80l-m671245430x.jpg"}, {"address": {"city": "Wildwood", "county": "St. Louis", "county_needed_for_uniq": false, "fips_code": "29189", "lat": 38.606191, "line": "2771 Sun Meadow Dr", "lon": -90.60223, "neighborhood_name": "Valley View", "postal_code": "63005", "state": "Missouri", "state_code": "MO"}, "agents": [[Object]], "baths": 4, "baths_full": 3, "baths_half": 1, "beds": 4, "branding": {"listing_office": [Object]}, "building_size": {"size": 4243, "units": "sqft"}, "client_display_flags": {"flip_the_market_enabled": true, "has_open_house": false, "is_co_broke_email": true, "is_co_broke_phone": false, "is_new_listing": true, "is_new_plan": false, "is_office_standard_listing": false, "is_showcase": false, "is_showcase_choice_enabled": false, "is_turbo": false, "lead_form_phone_required": true, "presentation_status": "for_sale", "price_change": 0, "show_contact_a_lender_in_lead_form": false, "show_veterans_united_in_lead_form": false, "suppress_map_pin": false}, "data_source_name": "mls", "last_update": "2023-07-24T12:16:22Z", "lead_forms": {"cashback_enabled": false, "flip_the_market_enabled": true, "form": [Object], "form_type": "classic", "is_lcm_enabled": false, "lead_type": "co_broke", "local_phone": "(636)202-1382", "local_phones": [Object], "show_agent": false, "show_broker": false, "show_builder": false, "show_contact_a_lender": false, "show_text_leads": true, "show_veterans_united": false, "smarthome_enabled": true}, "list_tracking": "type|property|data|prop_id|7535814649|list_id|2957988798|page|rank|list_branding|listing_agent|listing_office|advertiser_id|agent|office|broker|property_status|product_code|advantage_code^1|4|0|1|7DTL|1S3IQ|2K4RY|35T|G|5^^$0|1|2|$3|4|5|6|7|J|8|K|9|$A|L|B|M]|C|$D|N|E|O|F|P]|G|Q|H|R|I|S]]", "listing_id": "2957988798", "lot_size": {"size": 16117, "units": "sqft"}, "mls": {"abbreviation": "SLMO", "id": "23043463", "name": "MARIS", "plan_id": null, "type": "mls"}, "office": {"id": "99db85a7b23e3f461c4fcfd97475544d", "name": "Red Key Realty West"}, "page_no": 1, "photo_count": 47, "price": 650000, "products": ["core.agent", "core.broker", "co_broke"], "prop_status": "for_sale", "prop_type": "single_family", "property_id": "M7535814649", "rank": 4, "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/2771-Sun-Meadow-Dr_Wildwood_MO_63005_M75358-14649", "thumbnail": "https://ap.rdcpix.com/fdec7d07b9f2ac35d5b5c36618a94900l-m1861562867x.jpg"}, {"address": {"city": "Wildwood", "county": "St. Louis", "county_needed_for_uniq": false, "fips_code": "29189", "lat": 38.636913, "line": "1524 Honey Locust Ct", "lon": -90.63389, "neighborhood_name": "Wildhorse", "postal_code": "63005", "state": "Missouri", "state_code": "MO", "time_zone": "America/Chicago"}, "agents": [[Object]], "baths": 5, "baths_full": 4, "baths_half": 1, "beds": 5, "branding": {"listing_office": [Object]}, "building_size": {"size": 4554, "units": "sqft"}, "client_display_flags": {"flip_the_market_enabled": true, "has_open_house": true, "is_co_broke_email": true, "is_co_broke_phone": false, "is_new_listing": true, "is_new_plan": false, "is_office_standard_listing": false, "is_showcase": false, "is_showcase_choice_enabled": false, "is_turbo": false, "lead_form_phone_required": true, "presentation_status": "for_sale", "price_change": 0, "show_contact_a_lender_in_lead_form": false, "show_veterans_united_in_lead_form": false, "suppress_map_pin": false}, "data_source_name": "mls", "last_update": "2023-07-24T19:26:00Z", "lead_forms": {"cashback_enabled": false, "flip_the_market_enabled": true, "form": [Object], "form_type": "classic", "is_lcm_enabled": false, "lead_type": "co_broke", "local_phone": "(636)202-1382", "local_phones": [Object], "show_agent": false, "show_broker": false, "show_builder": false, "show_contact_a_lender": false, "show_text_leads": true, "show_veterans_united": false, "smarthome_enabled": true}, "list_tracking": "type|property|data|prop_id|7234964249|list_id|2957971301|page|rank|list_branding|listing_agent|listing_office|advertiser_id|agent|office|broker|property_status|product_code|advantage_code^1|5|0|1|BKMV|J3V|2VRE0|35T|G|5^^$0|1|2|$3|4|5|6|7|J|8|K|9|$A|L|B|M]|C|$D|N|E|O|F|P]|G|Q|H|R|I|S]]", "listing_id": "2957971301", "lot_size": {"size": 24829, "units": "sqft"}, "mls": {"abbreviation": "SLMO", "id": "23035014", "name": "MARIS", "plan_id": null, "type": "mls"}, "office": {"id": "853ec2a792b5bd3e185e11440849632f", "name": "Laura McCarthy Real Estate"}, "open_houses": [[Object]], "page_no": 1, "photo_count": 39, "price": 865000, "products": ["core.agent", "core.broker", "co_broke"], "prop_status": "for_sale", "prop_type": "single_family", "property_id": "M7234964249", "rank": 5, "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/1524-Honey-Locust-Ct_Wildwood_MO_63005_M72349-64249", "thumbnail": "https://ap.rdcpix.com/e9c7d9052e3d1f4507e39cb1b22f627al-m3758367796x.jpg"}, {"address": {"city": "Wildwood", "county": "St. Louis", "county_needed_for_uniq": false, "fips_code": "29189", "lat": 38.601784, "line": "17941 Homestead Bluffs Dr", "lon": -90.672022, "neighborhood_name": "Homestead Estates at Wildwood", "postal_code": "63005", "state": "Missouri", "state_code": "MO"}, "agents": [[Object]], "baths": 4, "baths_full": 3, "baths_half": 1, "beds": 4, "branding": {"listing_office": [Object]}, "building_size": {"size": 4852, "units": "sqft"}, "client_display_flags": {"flip_the_market_enabled": true, "has_open_house": false, "is_co_broke_email": true, "is_co_broke_phone": false, "is_coming_soon": true, "is_new_listing": false, "is_new_plan": false, "is_office_standard_listing": false, "is_showcase": false, "is_showcase_choice_enabled": false, "is_turbo": false, "lead_form_phone_required": true, "presentation_status": "for_sale", "price_change": 0, "show_contact_a_lender_in_lead_form": false, "show_veterans_united_in_lead_form": false, "suppress_map_pin": false}, "data_source_name": "mls", "last_update": "2023-07-26T13:20:30Z", "lead_forms": {"cashback_enabled": false, "flip_the_market_enabled": true, "form": [Object], "form_type": "classic", "is_lcm_enabled": false, "lead_type": "co_broke", "local_phone": "(636)202-1382", "local_phones": [Object], "show_agent": false, "show_broker": false, "show_builder": false, "show_contact_a_lender": false, "show_text_leads": true, "show_veterans_united": false, "smarthome_enabled": true}, "list_tracking": "type|property|data|prop_id|7554511665|list_id|2957937275|page|rank|list_branding|listing_agent|listing_office|advertiser_id|agent|office|broker|property_status|product_code|advantage_code^1|6|0|1|26LO|1QZB2|1SIJ9|1|G|5^^$0|1|2|$3|4|5|6|7|J|8|K|9|$A|L|B|M]|C|$D|N|E|O|F|P]|G|Q|H|R|I|S]]", "listing_id": "2957937275", "lot_size": {"size": 92391, "units": "sqft"}, "mls": {"abbreviation": "SLMO", "id": "23038959", "name": "MARIS", "plan_id": null, "type": "mls"}, "office": {"id": "dad48f70ac205b73c15c665eed84c2ef", "name": "Berkshire Hathaway HomeServices Alliance Real Estate - Chesterfield Office"}, "page_no": 1, "photo_count": 62, "price": 1250000, "products": ["core.agent", "core.broker", "co_broke"], "prop_status": "for_sale", "prop_type": "single_family", "property_id": "M7554511665", "rank": 6, "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/17941-Homestead-Bluffs-Dr_Wildwood_MO_63005_M75545-11665", "thumbnail": "https://ap.rdcpix.com/13dca727c8b3c66c07a867c6df28b6efl-m117055593x.jpg", "virtual_tour": {"href": "https://vimeo.com/844952497/1fd8650e0c"}}, {"address": {"city": "Wildwood", "county": "St. Louis", "county_needed_for_uniq": false, "fips_code": "29189", "lat": 38.562335, "line": "18534 Hawks Rest Ct", "lon": -90.714441, "neighborhood_name": "Hawks Rest", "postal_code": "63069", "state": "Missouri", "state_code": "MO"}, "agents": [[Object]], "baths": 4, "baths_full": 4, "beds": 4, "branding": {"listing_office": [Object]}, "building_size": {"size": 5843, "units": "sqft"}, "client_display_flags": {"flip_the_market_enabled": true, "has_open_house": false, "is_co_broke_email": true, "is_co_broke_phone": false, "is_foreclosure": true, "is_new_listing": true, "is_new_plan": false, "is_office_standard_listing": false, "is_showcase": false, "is_showcase_choice_enabled": false, "is_turbo": false, "lead_form_phone_required": true, "presentation_status": "for_sale", "price_change": 0, "show_contact_a_lender_in_lead_form": false, "show_veterans_united_in_lead_form": false, "suppress_map_pin": false}, "data_source_name": "mls", "last_update": "2023-07-21T16:16:22Z", "lead_forms": {"cashback_enabled": false, "flip_the_market_enabled": true, "form": [Object], "form_type": "classic", "is_lcm_enabled": false, "lead_type": "co_broke", "local_phone": "(636)202-1382", "local_phones": [Object], "show_agent": false, "show_broker": false, "show_builder": false, "show_contact_a_lender": false, "show_text_leads": true, "show_veterans_united": false, "smarthome_enabled": true}, "list_tracking": "type|property|data|prop_id|7074566558|list_id|2957936216|page|rank|list_branding|listing_agent|listing_office|advertiser_id|agent|office|broker|property_status|product_code|advantage_code^1|7|0|1|4UVR|1RL51|2PIPN|FSX|G|5^^$0|1|2|$3|4|5|6|7|J|8|K|9|$A|L|B|M]|C|$D|N|E|O|F|P]|G|Q|H|R|I|S]]", "listing_id": "2957936216", "lot_size": {"size": 186437, "units": "sqft"}, "mls": {"abbreviation": "SLMO", "id": "23037065", "name": "MARIS", "plan_id": null, "type": "mls"}, "office": {"id": "f42a26faa091d592ea85eb2729c91785", "name": "Nichols & Associates Real Esta"}, "page_no": 1, "photo_count": 29, "price": 634900, "products": ["core.agent", "core.broker", "co_broke"], "prop_status": "for_sale", "prop_type": "single_family", "property_id": "M7074566558", "rank": 7, "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/18534-Hawks-Rest-Ct_Wildwood_MO_63069_M70745-66558", "thumbnail": "https://ap.rdcpix.com/2ec18aecd141b360ccd45ec46713689cl-m1882160910x.jpg"}, {"address": {"city": "Wildwood", "county": "St. Louis", "county_needed_for_uniq": false, "fips_code": "29189", "lat": 38.55079, "line": "1409 Palisades Rd", "lon": -90.593105, "postal_code": "63021", "state": "Missouri", "state_code": "MO"}, "agents": [[Object]], "baths": 0, "beds": null, "branding": {"listing_office": [Object]}, "client_display_flags": {"flip_the_market_enabled": true, "has_open_house": false, "is_co_broke_email": false, "is_co_broke_phone": false, "is_new_listing": true, "is_new_plan": false, "is_office_standard_listing": false, "is_showcase": false, "is_showcase_choice_enabled": false, "is_turbo": false, "lead_form_phone_required": true, "presentation_status": "for_sale", "price_change": 0, "show_contact_a_lender_in_lead_form": false, "show_veterans_united_in_lead_form": false, "suppress_map_pin": false}, "data_source_name": "mls", "last_update": "2023-07-23T14:00:41Z", "lead_forms": {"cashback_enabled": false, "flip_the_market_enabled": true, "form": [Object], "form_type": "classic", "is_lcm_enabled": false, "lead_type": "co_broke", "local_phone": "(636)202-1382", "local_phones": [Object], "show_agent": false, "show_broker": false, "show_builder": false, "show_contact_a_lender": false, "show_text_leads": true, "show_veterans_united": false, "smarthome_enabled": true}, "list_tracking": "type|property|data|prop_id|8047025819|list_id|2957931703|page|rank|list_branding|listing_agent|listing_office|advertiser_id|agent|office|broker|property_status|product_code|advantage_code^1|8|0|1|DR3U|VKS2|1AIB5|35T|0|5^^$0|1|2|$3|4|5|6|7|J|8|K|9|$A|L|B|M]|C|$D|N|E|O|F|P]|G|Q|H|R|I|S]]", "listing_id": "2957931703", "lot_size": {"size": 147233, "units": "sqft"}, "mls": {"abbreviation": "SLMO", "id": "23040955", "name": "MARIS", "plan_id": null, "type": "mls"}, "office": {"id": "7b0f66030666f1979f86157cb544efbb", "name": "Keller Williams Chesterfield"}, "page_no": 1, "photo_count": 19, "price": 115000, "products": ["core.agent", "core.broker"], "prop_status": "for_sale", "prop_type": "land", "property_id": "M8047025819", "rank": 8, "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/1409-Palisades-Rd_Wildwood_MO_63021_M80470-25819", "thumbnail": "https://ap.rdcpix.com/b283d3badb96a624b8509e4fca0c304fl-m2149399226x.jpg", "virtual_tour": {"href": "https://youtu.be/lWP9e7nmVLQ"}}, {"address": {"city": "Wildwood", "county": "St. Louis", "county_needed_for_uniq": false, "fips_code": "29189", "lat": 38.586392, "line": "2421 August Grove Ct", "lon": -90.628454, "postal_code": "63011", "state": "Missouri", "state_code": "MO"}, "agents": [[Object]], "baths": 5, "baths_full": 4, "baths_half": 1, "beds": 6, "branding": {"listing_office": [Object]}, "building_size": {"size": 5436, "units": "sqft"}, "client_display_flags": {"flip_the_market_enabled": true, "has_open_house": false, "is_co_broke_email": true, "is_co_broke_phone": false, "is_new_listing": false, "is_new_plan": false, "is_office_standard_listing": false, "is_pending": true, "is_showcase": false, "is_showcase_choice_enabled": false, "is_turbo": false, "lead_form_phone_required": true, "presentation_status": "for_sale", "price_change": 0, "show_contact_a_lender_in_lead_form": false, "show_veterans_united_in_lead_form": false, "suppress_map_pin": false}, "data_source_name": "mls", "last_update": "2023-07-21T21:49:37Z", "lead_forms": {"cashback_enabled": false, "flip_the_market_enabled": true, "form": [Object], "form_type": "classic", "is_lcm_enabled": false, "lead_type": "co_broke", "local_phone": "(636)202-1382", "local_phones": [Object], "show_agent": false, "show_broker": false, "show_builder": false, "show_contact_a_lender": false, "show_text_leads": true, "show_veterans_united": false, "smarthome_enabled": true}, "list_tracking": "type|property|data|prop_id|9023491103|list_id|2957888323|page|rank|list_branding|listing_agent|listing_office|advertiser_id|agent|office|broker|property_status|product_code|advantage_code^1|9|0|1|PY0S|2QVHJ|2QBDY|6BL|G|5^^$0|1|2|$3|4|5|6|7|J|8|K|9|$A|L|B|M]|C|$D|N|E|O|F|P]|G|Q|H|R|I|S]]", "listing_id": "2957888323", "lot_size": {"size": 12720, "units": "sqft"}, "mls": {"abbreviation": "SLMO", "id": "23042675", "name": "MARIS", "plan_id": null, "type": "mls"}, "office": {"id": "8ce13a1f38bbf91eeca3076a3171ad05", "name": "Compass Realty Group"}, "page_no": 1, "photo_count": 57, "price": 949900, "products": ["core.agent", "core.broker", "co_broke"], "prop_status": "for_sale", "prop_type": "single_family", "property_id": "M9023491103", "rank": 9, "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/2421-August-Grove-Ct_Wildwood_MO_63011_M90234-91103", "thumbnail": "https://ap.rdcpix.com/b4283498f464ccb1743ac209f61af681l-m4261408263x.jpg"}, {"address": {"city": "Chesterfield", "county": "St. Louis", "county_needed_for_uniq": false, "fips_code": "29189", "lat": 38.656073, "line": "16960 Pine Summit Dr", "lon": -90.600945, "postal_code": "63005", "state": "Missouri", "state_code": "MO"}, "agents": [[Object]], "baths": 5, "baths_full": 4, "baths_half": 1, "beds": 5, "branding": {"listing_office": [Object]}, "building_size": {"size": 4120, "units": "sqft"}, "client_display_flags": {"flip_the_market_enabled": true, "has_open_house": false, "is_co_broke_email": true, "is_co_broke_phone": false, "is_new_listing": true, "is_new_plan": false, "is_office_standard_listing": false, "is_showcase": false, "is_showcase_choice_enabled": false, "is_turbo": false, "lead_form_phone_required": true, "presentation_status": "for_sale", "price_change": 0, "show_contact_a_lender_in_lead_form": false, "show_veterans_united_in_lead_form": false, "suppress_map_pin": false}, "data_source_name": "mls", "last_update": "2023-07-21T17:20:50Z", "lead_forms": {"cashback_enabled": false, "flip_the_market_enabled": true, "form": [Object], "form_type": "classic", "is_lcm_enabled": false, "lead_type": "co_broke", "local_phone": "(636)202-1382", "local_phones": [Object], "show_agent": false, "show_broker": false, "show_builder": false, "show_contact_a_lender": false, "show_text_leads": true, "show_veterans_united": false, "smarthome_enabled": true}, "list_tracking": "type|property|data|prop_id|9328707919|list_id|2957886804|page|rank|list_branding|listing_agent|listing_office|advertiser_id|agent|office|broker|property_status|product_code|advantage_code^1|A|0|1|2OLDX|1QZB2|1SIJ9|35T|G|5^^$0|1|2|$3|4|5|6|7|J|8|K|9|$A|L|B|M]|C|$D|N|E|O|F|P]|G|Q|H|R|I|S]]", "listing_id": "2957886804", "lot_size": {"size": 10528, "units": "sqft"}, "mls": {"abbreviation": "SLMO", "id": "23043253", "name": "MARIS", "plan_id": null, "type": "mls"}, "office": {"id": "dad48f70ac205b73c15c665eed84c2ef", "name": "Berkshire Hathaway HomeServices Alliance Real Estate - Chesterfield Office"}, "page_no": 1, "photo_count": 70, "price": 1099000, "products": ["core.agent", "core.broker", "co_broke"], "prop_status": "for_sale", "prop_type": "single_family", "property_id": "M9328707919", "rank": 10, "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/16960-Pine-Summit-Dr_Wildwood_MO_63005_M93287-07919", "thumbnail": "https://ap.rdcpix.com/1325c71034772f8f6893aff108920030l-m570611307x.jpg"}]
  console.log(houses)
  const [newHouses, setNewHouses] = useState(houses)
  const [home, setHome] = useState(null)

  useEffect(()=>{
    const getNewHouses = async()=>{
      const options = {
        method: 'GET',
        url: 'https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale',
        params: {
          city: 'Wildwood',
          state_code: 'MO',
          offset: '0',
          limit: '10',
          sort: 'relevance'
        },
        headers: {
          'X-RapidAPI-Key': '55744ee29emsh8d7f5fc5fdca9b9p176e64jsn68abcf1c6127',
          'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        // console.log(response.data.properties);
        setNewHouses(response.data.properties)
      } catch (error) {
        console.error(error);
      }
    }

    // getNewHouses()

    

  },[])

  
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Getting Started</Text>

      <View style={styles.section}>
        <TextInput style={styles.input} placeholder='Search housing'/>
        <TouchableOpacity>
          <Image source={require('../../assets/images/search.png')} style={styles.searchImg}/>
        </TouchableOpacity>
      </View>
      

      <ScrollView horizontal contentContainerStyle={styles.scrollview}>

        <TouchableOpacity>
          <Text style={styles.scrollViewItem}>Buy</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.scrollViewItem}>Rent</Text>
        </TouchableOpacity>


      </ScrollView>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}

      <View style={styles.leftContainer}>
        <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 15}}>New in your area</Text>
        <ScrollView horizontal style={{gap:5}}>
          {newHouses && (
            newHouses.map((house,index)=>(
              <TouchableOpacity key={index} style={{paddingHorizontal: 10, }}
                onPress={()=> {
                  setHome(house);
                  router.push({ pathname: 'selected_home', params: {home: JSON.stringify(house)}})
                }} 
                >
                <View style={{backgroundColor:'white', borderRadius: 10, overflow: 'hidden'}}>
                  <Image 
                    source={{uri:`${house.thumbnail}`}} 
                    style={{width: 250, aspectRatio: 16/9}}
                  />
                  <Text 
                    style={{
                      position: 'absolute', 
                      top: 0, 
                      color: 'white', 
                      backgroundColor: 'rgba(0,0,0,0.2)', 
                      paddingHorizontal: 5, 
                      paddingVertical: 2,
                      width: 250
                    }}
                  >
                    {house.beds} beds, {house.baths} baths
                  </Text>
                  <Text 
                    style={{
                      position: 'absolute', 
                      bottom: 0, 
                      color: 'white', 
                      backgroundColor: 'rgba(0,0,0,0.6)', 
                      paddingHorizontal: 5, 
                      paddingVertical: 2,
                      width: 250
                    }}
                  >
                    {house.address.line} {house.address.city}, {house.address.state_code}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      </View>

      

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftContainer:{
    width: '100%',
    marginLeft: 50
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    // textAlign: 'left'
  },
  section: {
    gap: 10,
    flexDirection: 'row',
    height: 50,
    width: '80%',
  },
  scrollview: {
    justifyContent: 'center',
    flexDirection: 'row',
    height: 50,
    width: '100%',
  },
  searchImg: {
    height: 40,
    width: 40,
    backgroundColor: 'orange',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 30
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
  input: {
    flex: 4,
    height: 40,
    borderWidth: 0.3,
    padding: 10,
    borderRadius: 10,
  },
  scrollViewItem: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 5,
    borderWidth: 0.3,
    borderRadius: 10
  }
});


