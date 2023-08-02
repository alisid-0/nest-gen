import { StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import EditScreenInfo from '@/components/EditScreenInfo'
import { Text, View } from '@/components/Themed'
import { useRoute } from '@react-navigation/native'
import { Image, ScrollView, TouchableOpacity } from 'react-native'
import { Button, Link, Box } from 'native-base'
import React from 'react'
import axios from 'axios'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { LoginContext } from './_layout'
import { useContext } from 'react'

function SelectedHome() {
  houseDeets= [{
  "meta": {
    "build": "3.23.181",
    "schema": "core.3",
    "tracking": "type|meta|data|resource_type|property_detail|query|client_id|rdc_mobile_native,14.13.0.68|schema|core.3|tag_version|v2^^^$0|1|2|$3|4|5|$6|7|8|9|A|B]]]",
    "returned_rows": 1,
    "matching_rows": 1,
    "tracking_params": {
      "ldpPropertyStatus": "ldp:for_sale",
      "pageType": "ldp",
      "leadDelivery": "co_broke",
      "leadEnhancements": "classic",
      "listingActivity": "active",
      "productType": "core.agent,core.broker",
      "propertyStatus": "for_sale",
      "listingId": "2958058975",
      "rentalDataSource": "unknown",
      "advertiserIdAgent": "2277032",
      "advertiserIdBroker": "711026",
      "advertiserIdOffice": "122785",
      "communityId": "unknown",
      "mprId": "7045976396",
      "listingMls": "SLMO",
      "planId": "unknown",
      "subId": "unknown",
      "city": "Wildwood",
      "neighborhood": "Chesterfield Valley",
      "state": "MO",
      "zip": "63005",
      "listingBaths": "3",
      "listingBeds": "4",
      "listingSqFt": "2618",
      "listingEnhancements": "broker-photo-top,broker-photo-btm,broker-phone-btm",
      "listingPrice": "469000",
      "photoCount": "2",
      "propertyType": "ldp:single_family",
      "version": "1.0"
    }
  },
  "properties": [
    {
      "property_id": "M7045976396",
      "prop_status": "for_sale",
      "listing_id": "2958058975",
      "prop_type": "single_family",
      "move_in_date": null,
      "suppression_flags": [
        "suppress_sold_price"
      ],
      "list_date": "2023-07-26T18:13:20Z",
      "hoa_fee": 25,
      "hoa_historic_fee": true,
      "last_update": "2023-07-26T22:24:57Z",
      "broker": {
        "advertiser_id": 711026,
        "name": "Coldwell Banker Realty - Gundaker",
        "phone1": {
          "number": "3149938000",
          "type": "broker"
        }
      },
      "year_built": 1984,
      "listing_status": "Coming Soon",
      "beds": 4,
      "description": "Welcome home to this beautiful 2-story in the desirable Chesterfield Valley subdivision. Situated on a gorgeous lot with mature trees and stunning landscaping, this one is sure to impress. The home features a classic floor plan with large formal living and dining spaces, family room, updated eat-in kitchen, 4 generous bedrooms upstairs with large primary ensuite and a partially finished basement with ample storage. You'll enjoy spending afternoons grilling and evenings sipping a glass of wine on the shaded back deck. Move-in ready and worry-free! Newer roof (2016), new AC (2021), tankless water heater, gorgeous deck that has been freshly sealed and new carpeting (2023) are just a few of the bonus features. Top-rated Rockwood Schools and super convenient location with all of the amenities in Chesterfield, Ellisville, Clarkson Valley and Wildwood!",
      "baths_full": 2,
      "baths_half": 1,
      "stories": 2,
      "schools": [
        {
          "nces_id": "292685001618",
          "id": "0741453001",
          "greatschools_id": "2901710",
          "name": "Ellisville Elementary School",
          "education_levels": [
            "elementary"
          ],
          "funding_type": "public",
          "lat": 38.595987,
          "lon": -90.590494,
          "student_count": 584,
          "student_teacher_ratio": 16.2,
          "location": {
            "city_slug_id": "Ellisville_MO",
            "postal_code": "63011",
            "state": "MO",
            "county": "St Louis County",
            "city": "Ellisville",
            "street": "1425 Froesel Drive"
          },
          "phone": "(636) 891-6600",
          "distance_in_miles": 0.9,
          "grades": {
            "range": {
              "low": "K",
              "high": "5"
            }
          },
          "relevance": "assigned",
          "ratings": {
            "great_schools_rating": 7,
            "parent_rating": 4
          }
        },
        {
          "nces_id": "292685000670",
          "id": "0741452901",
          "greatschools_id": "2901703",
          "name": "Crestview Middle School",
          "education_levels": [
            "middle"
          ],
          "funding_type": "public",
          "lat": 38.606079,
          "lon": -90.592647,
          "student_count": 1209,
          "student_teacher_ratio": 16.2,
          "location": {
            "city_slug_id": "Ellisville_MO",
            "postal_code": "63011",
            "state": "MO",
            "county": "St. Louis County",
            "city": "ELLISVILLE",
            "street": "16025 CLAYTON RD"
          },
          "phone": "(636) 891-6950",
          "distance_in_miles": 0.4,
          "grades": {
            "range": {
              "low": "6",
              "high": "8"
            }
          },
          "relevance": "assigned",
          "ratings": {
            "great_schools_rating": 6,
            "parent_rating": 5
          }
        },
        {
          "nces_id": "292685001624",
          "id": "0741453051",
          "greatschools_id": "2901715",
          "name": "Lafayette High School",
          "education_levels": [
            "high"
          ],
          "funding_type": "public",
          "lat": 38.595473,
          "lon": -90.637664,
          "student_count": 1796,
          "student_teacher_ratio": 15.5,
          "location": {
            "city_slug_id": "Wildwood_MO",
            "postal_code": "63011",
            "state": "MO",
            "county": "St. Louis County",
            "city": "WILDWOOD",
            "street": "17050 CLAYTON RD"
          },
          "phone": "(636) 733-4100",
          "distance_in_miles": 2.3,
          "grades": {
            "range": {
              "low": "9",
              "high": "12"
            }
          },
          "relevance": "assigned",
          "ratings": {
            "great_schools_rating": 7,
            "parent_rating": 3
          }
        },
        {
          "nces_id": "292685002567",
          "id": "0741453161",
          "greatschools_id": "2901723",
          "name": "Kehrs Mill Elementary School",
          "education_levels": [
            "elementary"
          ],
          "funding_type": "public",
          "lat": 38.619433,
          "lon": -90.57653,
          "student_count": 530,
          "student_teacher_ratio": 15.8,
          "location": {
            "city_slug_id": "Chesterfield_MO",
            "postal_code": "63017",
            "state": "MO",
            "county": "St Louis County",
            "city": "Chesterfield",
            "street": "2650 Kehrs Mill Road"
          },
          "phone": "(636) 891-6050",
          "distance_in_miles": 1.5,
          "grades": {
            "range": {
              "low": "K",
              "high": "5"
            }
          },
          "relevance": "nearby",
          "ratings": {
            "great_schools_rating": 10,
            "parent_rating": 4
          }
        },
        {
          "nces_id": "292685000712",
          "id": "0741452931",
          "greatschools_id": "2901706",
          "name": "Selvidge Middle School",
          "education_levels": [
            "middle"
          ],
          "funding_type": "public",
          "lat": 38.58713,
          "lon": -90.559171,
          "student_count": 636,
          "student_teacher_ratio": 13.8,
          "location": {
            "city_slug_id": "Ballwin_MO",
            "postal_code": "63021",
            "state": "MO",
            "county": "St Louis County",
            "city": "Ballwin",
            "street": "235 New Ballwin Road"
          },
          "phone": "(636) 891-6100",
          "distance_in_miles": 2.6,
          "grades": {
            "range": {
              "low": "6",
              "high": "8"
            }
          },
          "relevance": "nearby",
          "ratings": {
            "great_schools_rating": 6,
            "parent_rating": 5
          }
        },
        {
          "nces_id": "292685000657",
          "id": "0741452851",
          "greatschools_id": "2901701",
          "name": "Marquette Sr. High School",
          "education_levels": [
            "high"
          ],
          "funding_type": "public",
          "lat": 38.622899,
          "lon": -90.583164,
          "student_count": 2321,
          "student_teacher_ratio": 16.8,
          "location": {
            "city_slug_id": "Chesterfield_MO",
            "postal_code": "63017",
            "state": "MO",
            "county": "St Louis County",
            "city": "Chesterfield",
            "street": "2351 Clarkson Road"
          },
          "phone": "(636) 891-6000",
          "distance_in_miles": 1.4,
          "grades": {
            "range": {
              "low": "9",
              "high": "12"
            }
          },
          "relevance": "nearby",
          "ratings": {
            "great_schools_rating": 6,
            "parent_rating": 4
          }
        },
        {
          "nces_id": "A9707039",
          "id": "0741473651",
          "greatschools_id": "2903157",
          "name": "Elegant Child Early Learning Center",
          "education_levels": [
            "elementary"
          ],
          "funding_type": "private",
          "lat": 38.609376,
          "lon": -90.615259,
          "student_count": 392,
          "location": {
            "city_slug_id": "Wildwood_MO",
            "postal_code": "63011",
            "state": "MO",
            "county": "St Louis County",
            "city": "Wildwood",
            "street": "513 Strecker Road"
          },
          "phone": "(636) 458-4414",
          "distance_in_miles": 0.9,
          "grades": {
            "range": {
              "low": "PK",
              "high": "K"
            }
          },
          "relevance": "nearby",
          "ratings": {
            "great_schools_rating": null,
            "parent_rating": 3
          }
        },
        {
          "nces_id": "K9303352",
          "id": "0741472431",
          "greatschools_id": "2903071",
          "name": "Hope Montessori Academy Wildwood",
          "education_levels": [
            "elementary"
          ],
          "funding_type": "private",
          "lat": 38.604376,
          "lon": -90.618397,
          "student_count": 100,
          "location": {
            "city_slug_id": "Wildwood_MO",
            "postal_code": "63011",
            "state": "MO",
            "county": "ST. LOUIS",
            "city": "Wildwood",
            "street": "16554 CLAYTON RD"
          },
          "phone": "(636) 458-4540",
          "distance_in_miles": 1.1,
          "grades": {
            "range": {
              "low": "PK",
              "high": "K"
            }
          },
          "relevance": "nearby",
          "ratings": {
            "great_schools_rating": null,
            "parent_rating": null
          }
        }
      ],
      "garage": "2",
      "heating": "Warm Air",
      "cooling": "Central",
      "style": "Conventional",
      "feature_tags": [
        "central_air",
        "community_outdoor_space",
        "dishwasher",
        "fireplace",
        "forced_air",
        "hardwood_floors",
        "washer_dryer",
        "basement",
        "two_or_more_stories",
        "garage_1_or_more",
        "garage_2_or_more",
        "floor_plan",
        "ensuite",
        "new_roof",
        "groundscare",
        "multi_storey",
        "garage_1",
        "garage_2"
      ],
      "branding": {
        "listing_agent": {
          "photo_attribution": {
            "name": "Danielle Lester",
            "photo": null,
            "phone": null,
            "slogan": null,
            "show_realtor_logo": false,
            "link": null,
            "accent_color": null
          },
          "details": {
            "name": "Danielle Lester",
            "photo": null,
            "phone": null,
            "slogan": null,
            "show_realtor_logo": true,
            "link": "/realestateagents/Danielle-Lester_Wildwood_MO_2277032_820754574",
            "accent_color": null,
            "state_license": "2016013919"
          }
        },
        "listing_office": {
          "photo_attribution": {
            "name": "Coldwell Banker Realty - Gundaker",
            "photo": "https://ap.rdcpix.com/34b6512cde633bdd5e091402b6dc374bo-w1342287974s.jpg",
            "phone": null,
            "slogan": null,
            "show_realtor_logo": false,
            "link": null,
            "accent_color": null
          },
          "details": {
            "name": "Coldwell Banker Realty - Gundaker",
            "photo": "https://ap.rdcpix.com/34b6512cde633bdd5e091402b6dc374bo-w1342287974s.jpg",
            "phone": "(314) 993-8000",
            "slogan": null,
            "show_realtor_logo": false,
            "link": "https://www.coldwellbankerhomes.com//mo/saint-louis/office/ladue/oid_4336/",
            "accent_color": null
          }
        },
        "team_name": null
      },
      "address": {
        "city": "Wildwood",
        "line": "2726 Quail Valley Dr",
        "postal_code": "63005",
        "address_validation_code": "121",
        "state_code": "MO",
        "state": "Missouri",
        "county": "St. Louis",
        "fips_code": "29189",
        "county_needed_for_uniq": false,
        "time_zone": "America/Chicago",
        "lat": 38.607529,
        "lon": -90.59889,
        "neighborhood_name": "Chesterfield Valley",
        "neighborhoods": [
          {
            "name": "Chesterfield Valley",
            "city": "Wildwood",
            "state_code": "MO",
            "level": "residential_neighborhood",
            "id": 0
          }
        ]
      },
      "features": [
        {
          "category": "Bedrooms",
          "parent_category": "Interior",
          "text": [
            "Bedrooms: 4",
            "Bedrooms On Upper Level: 4"
          ]
        },
        {
          "category": "Other Rooms",
          "parent_category": "Interior",
          "text": [
            "Total Rooms: 8",
            "Basement Description: 8 ft + pour, Partially Finished"
          ]
        },
        {
          "category": "Bathrooms",
          "parent_category": "Interior",
          "text": [
            "Total Bathrooms: 2 / 1",
            "Full Bathrooms: 2",
            "1/2 Bathrooms: 1",
            "Half Bathrooms On Main Level: 1",
            "Full Bathrooms On Upper Level: 2",
            "Primary Bathroom Description: Double Sink, Full Bath, Tub & Separate Shwr"
          ]
        },
        {
          "category": "Interior Features",
          "parent_category": "Interior",
          "text": [
            "Built-In Bookcases",
            "9' Ceilings",
            "Some Wood Floors"
          ]
        },
        {
          "category": "Appliances",
          "parent_category": "Interior",
          "text": [
            "Dishwasher",
            "Disposal",
            "Dryer",
            "Range",
            "Refrigerator",
            "Washer"
          ]
        },
        {
          "category": "Heating and Cooling",
          "parent_category": "Interior",
          "text": [
            "Cooling Features: Central-Electric",
            "Fireplace Features: Gas",
            "Heating Features: Forced Air",
            "Number of Fireplaces: 1",
            "Water Heaters: Tankless HWH"
          ]
        },
        {
          "category": "Kitchen and Dining",
          "parent_category": "Interior",
          "text": [
            "Dining Room Description: Separate Dining",
            "Kitchen Features: Custom Cabinetry, Eat-In Kitchen, Pantry, Solid Surface Counter"
          ]
        },
        {
          "category": "Land Info",
          "parent_category": "Exterior",
          "text": [
            "Lot Description: Sidewalks, Streetlights",
            "Lot Size Acres: 0.29",
            "Lot Size Dimensions: irr",
            "Lot Size Square Feet: 12632"
          ]
        },
        {
          "category": "Garage and Parking",
          "parent_category": "Exterior",
          "text": [
            "Garage Spaces: 2",
            "Parking Features: Attached Garage, Garage Door Opener",
            "Parking Total: 2"
          ]
        },
        {
          "category": "Homeowners Association",
          "parent_category": "Community",
          "text": [
            "Association: Yes",
            "Association Fee: 300",
            "Association Fee Frequency: Annually",
            "Calculated Total Monthly Association Fees: 25"
          ]
        },
        {
          "category": "School Information",
          "parent_category": "Community",
          "text": [
            "Elementary School: Ellisville Elem.",
            "High School: Lafayette Sr. High",
            "Middle School: Crestview Middle",
            "School District: Rockwood R-VI"
          ]
        },
        {
          "category": "Other Property Info",
          "parent_category": "Listing",
          "text": [
            "Deck",
            "Annual Tax Amount: 4556",
            "Source Listing Status: Coming Soon",
            "County: St Louis",
            "Tax Year: 2022",
            "Ownership: Private",
            "Source Property Type: Residential",
            "Area: Lafayette",
            "Source Neighborhood: Chesterfield Valley 2 A Sec Of",
            "Postal Code Plus 4: 7012",
            "Subdivision: Chesterfield Valley 2 A Sec Of",
            "Source System Name: C2C",
            "Coming Soon Date: 2023-07-28"
          ]
        },
        {
          "category": "Building and Construction",
          "parent_category": "Features",
          "text": [
            "Total Square Feet Living: 2618",
            "Year Built: 1984",
            "Construction Materials: Brick Veneer Predom",
            "Living Area Source: County Records",
            "Property Age: 39",
            "Levels or Stories: 2",
            "Total Above Grade Sqft Area: 2618",
            "Architectural Style: Traditional"
          ]
        },
        {
          "category": "Utilities",
          "parent_category": "Features",
          "text": [
            "Sewer: Public",
            "Water Source: Public"
          ]
        },
        {
          "category": "Legal and finance",
          "text": [
            "HOA Frequency: Monthly/25",
            "HOA fee: $25"
          ]
        }
      ],
      "mls": {
        "name": "MARIS",
        "id": "23044544",
        "plan_id": null,
        "abbreviation": "SLMO",
        "type": "mls",
        "disclaimer": {
          "photo": null,
          "href": null,
          "text": "©2023  Mid America Regional Information Systems Inc. All rights reserved."
        }
      },
      "client_display_flags": {
        "presentation_status": "for_sale",
        "is_showcase": false,
        "lead_form_phone_required": true,
        "price_change": 0,
        "is_co_broke_email": true,
        "has_open_house": false,
        "is_foreclosure": false,
        "is_short_sale": false,
        "is_co_broke_phone": false,
        "is_new_listing": false,
        "is_new_plan": false,
        "is_new_construction": false,
        "is_turbo": false,
        "is_office_standard_listing": false,
        "suppress_map_pin": false,
        "show_contact_a_lender_in_lead_form": false,
        "show_veterans_united_in_lead_form": false,
        "flip_the_market_enabled": true,
        "is_showcase_choice_enabled": false,
        "is_coming_soon": true
      },
      "tax_history": [
        {
          "assessment": {
            "building": 41880,
            "land": 19020,
            "total": 60900
          },
          "tax": 4522,
          "year": "2021"
        },
        {
          "assessment": {
            "building": 43760,
            "land": 17100,
            "total": 60860
          },
          "tax": 4739,
          "year": "2020"
        },
        {
          "assessment": {
            "building": 43760,
            "land": 17100,
            "total": 60860
          },
          "tax": 4758,
          "year": "2019"
        },
        {
          "assessment": {
            "building": 40490,
            "land": 14250,
            "total": 54740
          },
          "tax": 4539,
          "year": "2018"
        },
        {
          "assessment": {
            "building": 40490,
            "land": 14250,
            "total": 54740
          },
          "tax": 4430,
          "year": "2017"
        },
        {
          "assessment": {
            "building": 40870,
            "land": 12370,
            "total": 53240
          },
          "tax": 4480,
          "year": "2016"
        },
        {
          "assessment": {
            "building": 40870,
            "land": 12370,
            "total": 53240
          },
          "tax": 4388,
          "year": "2015"
        },
        {
          "assessment": {
            "building": 36840,
            "land": 10910,
            "total": 47750
          },
          "tax": 4036,
          "year": "2014"
        },
        {
          "assessment": {
            "building": 36840,
            "land": 10910,
            "total": 47750
          },
          "tax": 4010,
          "year": "2013"
        },
        {
          "assessment": {
            "building": 43950,
            "land": 10750,
            "total": 54700
          },
          "tax": 4318,
          "year": "2012"
        },
        {
          "assessment": {
            "building": 43950,
            "land": 10750,
            "total": 54700
          },
          "tax": 4272,
          "year": "2011"
        },
        {
          "assessment": {
            "building": 43210,
            "land": 10750,
            "total": 53960
          },
          "tax": 4080,
          "year": "2010"
        },
        {
          "assessment": {
            "building": 43210,
            "land": 10750,
            "total": 53960
          },
          "tax": 3860,
          "year": "2009"
        },
        {
          "assessment": {
            "building": 52380,
            "land": 10750,
            "total": 63130
          },
          "tax": 4353,
          "year": "2008"
        },
        {
          "assessment": {
            "building": 52380,
            "land": 10750,
            "total": 63130
          },
          "tax": 4413,
          "year": "2007"
        }
      ],
      "property_history": [
        {
          "event_name": "Listed",
          "date": "2023-07-26T17:00:00Z",
          "price": 469000,
          "price_range_min": null,
          "price_range_max": null,
          "price_changed": 0,
          "sqft": 2618,
          "datasource_name": "MARIS",
          "source": "MLS #23044544"
        },
        {
          "event_name": "Sold",
          "date": "2001-05-18T17:00:00Z",
          "price": 0,
          "price_range_min": null,
          "price_range_max": null,
          "price_changed": 0,
          "sqft": 0,
          "datasource_name": "MARIS",
          "source": "MLS #113788"
        },
        {
          "event_name": "Listed",
          "date": "2001-04-06T17:00:00Z",
          "price": 242900,
          "price_range_min": null,
          "price_range_max": null,
          "price_changed": 0,
          "sqft": 2618,
          "datasource_name": "MARIS",
          "source": "MLS #113788"
        }
      ],
      "public_records": [
        {
          "baths": 3,
          "baths_1qtr": null,
          "baths_3qtr": null,
          "baths_full": 2,
          "baths_half": 1,
          "beds": 4,
          "construction": null,
          "cooling": "Central",
          "cl_id": "44C051B38AD8FB26EFDF1AB4E06B9E01",
          "date_updated": "07/20/2023",
          "distinct_baths": 3,
          "exterior1": "Frame/Masonry",
          "exterior2": null,
          "fireplace": "Wood Stove",
          "garage": "Frame",
          "garage_spaces": null,
          "heating": "Warm Air",
          "lot_size": 12632,
          "pool": null,
          "prop_type": "single_family",
          "roofing": null,
          "rooms": 8,
          "sqft": 2618,
          "stories": 2,
          "style": [
            "Conventional"
          ],
          "units": 1,
          "view": null,
          "year_built": 1984,
          "year_renovated": null,
          "zoning": "107R2"
        }
      ],
      "products": [
        "core.agent",
        "core.broker",
        "co_broke",
        "suppress_sold_price"
      ],
      "office": {
        "name": "Coldwell Banker Realty - Gundaker",
        "advertiser_id": 122785,
        "mls_set": "O-SLMO-CBG 24",
        "href": "https://www.coldwellbankerhomes.com//mo/saint-louis/office/ladue/oid_4336/",
        "photo": {
          "href": "https://ap.rdcpix.com/34b6512cde633bdd5e091402b6dc374bo-w1342287974l.jpg"
        },
        "email": "corinne.mcgrady@cbgundaker.com",
        "slogan": "more homes, more professionals, more service.",
        "phones": [
          {
            "number": "314-993-8000",
            "type": "office",
            "primary": true
          },
          {
            "number": "314-997-1952",
            "type": "fax"
          }
        ],
        "address": {
          "city": "Saint Louis",
          "state_code": "MO"
        },
        "advantage_phone": {
          "display_number": "(314) 993-8000"
        },
        "mls_membership": {
          "member": {
            "office_system_id": "CBG 24"
          }
        },
        "id": "203f56513cc746e3b70168c06ce3a294"
      },
      "agents": [
        {
          "name": "Danielle Lester",
          "profile_name": "Danielle Lester",
          "advertiser_id": "2277032",
          "href": "https://www.coldwellbankerhomes.com/mo/saint-louis/agent/danielle-dani-lester/aid_155061/?utm_campaign=OLDP-RDC&utm_source=RDC&utm_medium=oldp&utm_content=agentwebsite",
          "photo": {
            "href": "https://ap.rdcpix.com/275794092/780dc278b964bdf998f0d44a93573208a-c0l.jpg"
          },
          "nrds_id": "524542971",
          "nrds_verified_id": "524542971",
          "nrds_verification_method": "Claimed",
          "office_name": "Coldwell Banker Realty - Gundaker",
          "email": "dani.lester@cbrealty.com",
          "slogan": "",
          "state_license": "2016013919",
          "mls_memberships": {
            "member": {
              "agent_system_id": "DALESTER",
              "name": null,
              "office_system_id": "CBG 24",
              "id": "DALESTER",
              "abbreviation": "SLMO"
            }
          },
          "id": "2277032",
          "primary": true
        }
      ],
      "lead_forms": {
        "form": {
          "name": {
            "required": true,
            "minimum_character_count": 1
          },
          "email": {
            "required": true,
            "minimum_character_count": 5
          },
          "phone": {
            "required": true,
            "minimum_character_count": 10,
            "maximum_character_count": 11
          },
          "message": {
            "required": false,
            "minimum_character_count": 0
          },
          "show": true
        },
        "show_agent": false,
        "show_broker": false,
        "show_builder": false,
        "show_contact_a_lender": false,
        "show_veterans_united": false,
        "form_type": "classic",
        "lead_type": "co_broke",
        "is_lcm_enabled": false,
        "flip_the_market_enabled": true,
        "local_phone": "(636)202-1382",
        "local_phones": {
          "comm_console_mweb": "(636)202-1204"
        },
        "show_text_leads": true,
        "cashback_enabled": false,
        "smarthome_enabled": true
      },
      "lot_size": {
        "size": 12632,
        "units": "sqft"
      },
      "building_size": {
        "size": 2618,
        "units": "sqft"
      },
      "price": 469000,
      "rdc_web_url": "https://www.realtor.com/realestateandhomes-detail/2726-Quail-Valley-Dr_Wildwood_MO_63005_M70459-76396",
      "rdc_app_url": "move-rdc://www.realtor.com/realestateandhomes-detail/2726-Quail-Valley-Dr_Wildwood_MO_63005_M70459-76396",
      "baths": 3,
      "photo_count": 2,
      "raw": {
        "status": "Coming Soon",
        "tax_amount": 4556
      },
      "photo_attribution": [
        "Presented by Danielle Lester with Coldwell Banker Realty - Gundaker"
      ],
      "mortgage": {
        "rates_url": "https://www.realtor.com/mortgage/rates/?from=mobile#zip=63005&property_price=469000&mlid=2958058975",
        "estimate": {
          "loan_amount": 375200,
          "rate": 7.295,
          "term": 30,
          "monthly_payment": 3172,
          "principal_and_interest": 2571,
          "monthly_property_taxes": 380,
          "monthly_home_insurance": 196,
          "hoa_fees": 25,
          "monthly_mortgage_insurance": 0,
          "total_payment": 925555,
          "down_payment": 93800
        }
      },
      "data_source_name": "mls",
      "detail_tracking": "type|property|data|prop_id|7045976396|list_id|2958058975|address|city|Wildwood|state|MO|postal|63005|neighborhood|Chesterfield+Valley|county|St.+Louis|mls|id|23044544|abbr|SLMO|price|detail_branding|listing_agent|listing_office|data_source|advertiser_id|agent|office|broker|property_status|product_code|advantage_code^A1VS|4AV5|3F9F|1CSYW|2MQP|F8MQ|1|G|5^^$0|1|2|$3|4|5|6|7|$8|9|A|B|C|D|E|F|G|H]|I|$J|K|L|M]|N|Z|O|$P|10|Q|11]|R|I|S|$T|12|U|13|V|14]|W|15|X|16|Y|17]]",
      "photos": [
        {
          "description": "",
          "href": "https://ap.rdcpix.com/3312c1cf84f8bad43315550dd0af07a3l-m3660822399x.jpg",
          "tags": [
            {
              "label": "house_view",
              "probability": 0.9980302453041077
            },
            {
              "label": "porch",
              "probability": 0.9999574422836304
            },
            {
              "label": "yard",
              "probability": 0.9983243346214294
            },
            {
              "label": "house_view",
              "probability": 0.9967522621154785
            },
            {
              "label": "house_view",
              "probability": 0.9994921684265137
            }
          ],
          "type": "realtordotcom_mls_listing_image"
        },
        {
          "description": "",
          "href": "https://ap.rdcpix.com/3312c1cf84f8bad43315550dd0af07a3l-m4199113055x.jpg",
          "tags": [
            {
              "label": "house_view",
              "probability": 0.9990906715393066
            },
            {
              "label": "yard",
              "probability": 0.999447762966156
            },
            {
              "label": "house_view",
              "probability": 0.9986321330070496
            },
            {
              "label": "house_view",
              "probability": 0.998625636100769
            }
          ],
          "type": "realtordotcom_mls_listing_image"
        }
      ]
    }
  ]
}]

  const route = useRoute()
  const {home} = route.params

  const house = JSON.parse(home)

  let house_id

  if (house.property_id){
    house_id = house.property_id.slice(1)
  } else if (house.home_id){
    house_id = house.home_id.slice(1)
  }

  console.log(house_id)
  const contextValue = useContext(LoginContext)
  const user = contextValue.user
  const setUser = contextValue.setUser
  const signedIn = contextValue.signedIn
  const setSignedIn = contextValue.setSignedIn

  // console.log(house)

  const [houseDetails, setHouseDetails] = useState(houseDeets[0].properties[0])

  console.log(houseDetails)

  const [selectedTab, setSelectedTab] = useState('Overview')
  const [isExpanded, setIsExpanded] = useState(false)
  const [isFactsExpanded, setIsFactsExpanded] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [savedHomes, setSavedHomes] = useState([])
  const [savedHomeId, setSavedHomeId] = useState(null) 

  const shortDescription = houseDetails.description.slice(0,100) + '...'
  const displayFeatures = isFactsExpanded ? houseDetails.features : houseDetails.features.slice(0, 2)

  const [isPressed, setIsPressed] = useState(false)
  const scrollRef = React.useRef()


  function formatString(str) {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  useEffect(() => {
    const fetchHouseDetails = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://realty-in-us.p.rapidapi.com/properties/v2/detail',
          params: { property_id: house_id },
          headers: {
            'X-RapidAPI-Key': '55744ee29emsh8d7f5fc5fdca9b9p176e64jsn68abcf1c6127',
            'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com',
          },
        }

        const response = await axios.request(options)
        setHouseDetails(response.data.properties[0])
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }

    fetchHouseDetails()
  }, [])

  useEffect(() => {
    if(signedIn){
      axios
        .get('http://localhost:3001/api/savedhomes')
        .then((response) => {
          const homeIsSaved = response.data.some(
            (savedHome) => savedHome.home_id === house.property_id
          )
          setIsSaved(homeIsSaved)
        })
        .catch(console.error)
    } 
  }, [])

  const saveHome = async () => {
    if (!signedIn) {
      alert('Please log in to save homes.')
      return
    }

    if (!isSaved) {
      
      try {
        const response = await axios.post('http://localhost:3001/api/savedhomes/', {
          home_id: house.property_id,
          price: house.price,
          beds: house.beds,
          baths: house.baths,
          size_sqft: house.building_size.size,
          address_line: house.address.line,
          city: house.address.city,
          state_code: house.address.state_code,
          postal_code: house.address.postal_code,
          prop_type: house.prop_type,
          prop_status: house.prop_status,
          thumbnail: house.thumbnail,
          user_id: user._id,
        })

        setIsSaved(true)

        const updatedUser = await axios.get(
          `http://localhost:3001/api/users/${user._id}`
        )
        setUser(updatedUser.data)
      } catch (error) {
        console.error(error)
      }
    } else {
      
      try {
        
        let savedHomeId
        for (let homeId of user.saved_homes) {
          
          if (homeId === house.property_id) {
            savedHomeId = homeId
            break
          }
        }

        if (savedHomeId) {
          await axios.delete(
            `http://localhost:3001/api/savedhomes/${savedHomeId}/${user._id}`
          )

          setIsSaved(false)

          const updatedUser = await axios.get(
            `http://localhost:3001/api/users/${user._id}`
          )
          setUser(updatedUser.data)
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
  
  

  
  
  

  return (
    <ScrollView contentContainerStyle={styles.container} ref={scrollRef}>

      <ScrollView horizontal>
        {houseDetails && houseDetails.photos.map((photo,index)=>(
          <Image key={index}source={{uri: `${photo.href}`}} style={{width: 300, aspectRatio:16/9}}></Image>
        ))}
      </ScrollView>

      <View style={{width: '90%', marginVertical: 15, gap: 7}}>
        <View style={{flexDirection:'row', gap: 10, alignItems: 'flex-end'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>${numberWithCommas(house.price)}</Text>
          <Text style={{marginBottom: 1}}>{house.beds} bd | {house.baths} ba | {houseDetails.building_size.size} sqft </Text>
          <TouchableOpacity 
            style={{
              width: 30,
              height: 30,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              paddingLeft: 1,
              paddingTop: 1,
            }}
            onPress={saveHome}
          >
            <FontAwesome
              name='heart'
              color='black'
              size={20} 
              style={{ position: 'absolute', top: 4, right: 3.5 }} 
            />
            <FontAwesome
              name='heart'
              color={isSaved ? 'red' : 'white'}
              size={16} 
            />
          </TouchableOpacity>
        </View>
        <Text>{houseDetails.address.line}, {houseDetails.address.city} {houseDetails.address.state_code} {houseDetails.address.postal_code}</Text>
        <Text style={{fontWeight: 'bold'}}>{formatString(houseDetails.prop_type)} | {formatString(houseDetails.prop_status)}</Text>
      </View>
      
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', gap:10, width:'90%'}}>
        <Link href={houseDetails.rdc_web_url} isExternal>
          <Box borderWidth="1" borderColor="coolGray.300" shadow="3" bg="blue.300" p="5" rounded="8">
            <Text>View Listing</Text>
          </Box>
        </Link>

        <Link href={houseDetails.agents[0].href}>
          <Box  borderWidth="1" borderColor="coolGray.300" shadow="3" bg="blue.300" p="5" rounded="8">
            <Text>Contact Agent</Text>
          </Box>
        </Link>
      </View>

      <View style={styles.separatorTop} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={{width: '90%', alignItems: 'flex-start', paddingVertical: 20}}>
       <ScrollView horizontal showsHorizontalScrollIndicator= 'false' ref={scrollRef}>

        <TouchableOpacity style={{paddingHorizontal: 10}} onPress={() => {
            setSelectedTab('Overview')
            scrollRef.current.scrollTo({ y: 560, animated: true})
        }}>
          <Text style={{color: selectedTab === 'Overview' ? 'blue' : 'black'}}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingHorizontal: 10}} onPress={() => {
          setSelectedTab('Facts and Features')
          scrollRef.current.scrollTo({ y: 800, animated: true})
          }}>
          <Text style={{color: selectedTab === 'Facts and Features' ? 'blue' : 'black'}}>Facts and Features</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingHorizontal: 10}} onPress={() => {
          setSelectedTab('Price and tax history')
          scrollRef.current.scrollTo({ y: 1050, animated: true})
          }}>
          <Text style={{color: selectedTab === 'Price and tax history' ? 'blue' : 'black'}}>Price and tax history</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingHorizontal: 10}} onPress={() => {
          setSelectedTab('Schools')
          scrollRef.current.scrollTo({ y: 1530, animated: true})
          }}>
          <Text style={{color: selectedTab === 'Schools' ? 'blue' : 'black'}}>Schools</Text>
        </TouchableOpacity>

       </ScrollView>
      </View>

      <View style={styles.separatorBottom} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.leftContainerGap}>
          <View style={styles.leftContainer}>
            <Text>{formatString(house.prop_type)} residence</Text>
          </View>
          <View style={styles.leftContainer}>
            <Text>Built in {String(houseDetails.year_built)}</Text>
          </View>
          {houseDetails.public_records && houseDetails.public_records[0] && houseDetails.public_records[0].cooling && (
            <>
              <View style={styles.leftContainer}>
                <Text>{houseDetails.public_records[0].cooling} cooling</Text>
              </View>
              <View style={styles.leftContainer}>
                <Text>{houseDetails.public_records[0].heating} heating</Text>
              </View>
            </>
          )}
          <View style={styles.leftContainer}>
            <Text>{((houseDetails.lot_size.size)/43560).toFixed(2)} acres</Text>
          </View>
          <View style={styles.leftContainer}>
            <Text>HOA Fee: {((houseDetails.hoa_fee)*12).toFixed(0)}/yr</Text>
          </View>
      </View>

      <View style={styles.leftContainerGap}>
        <View style={{marginVertical: 5}}></View>
        <Text style={styles.title}>Overview</Text>
        <Text>
          {isExpanded ? houseDetails.description : shortDescription}
        </Text>
        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
          <Text style={{color: 'blue'}}>
            {isExpanded ? 'Read Less' : 'Read More'}
          </Text>
        </TouchableOpacity>
        <View style={styles.leftContainer}>
          <Text>Listing Provided By:</Text>
          <Text>{houseDetails.agents[0].name} </Text>
          <Text>{houseDetails.branding.listing_office.details.phone}</Text>
          <Text>{houseDetails.agents[0].office_name} </Text>
        </View>
        <View style={styles.leftContainer}>
          <Text>Source: {houseDetails.mls.name} MLS#: {houseDetails.mls.id}</Text>
        </View>
      </View>

      <View style={styles.leftContainerGap} >
        <View style={{marginVertical: 5}}></View>
        <Text style={styles.title}>Facts and Features</Text>
        {displayFeatures.map((feature,index)=>(
          <View key={index} style={styles.leftContainerGap}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>{feature.category}</Text>
            {feature.text.map((text, index)=>(
              <Text key={index}>{text}</Text>
            ))}
          </View>
        ))}
        <TouchableOpacity onPress={() => setIsFactsExpanded(!isFactsExpanded)}>
          <Text style={{color: 'blue', fontSize: 16}}>
            {isFactsExpanded ? 'See less ▲' : 'See more facts and features ▼'}
          </Text>
        </TouchableOpacity>
      </View>
      
      {houseDetails.prop_status != 'for_rent' && (

        <View style={styles.leftContainer} >
          <View style={{marginVertical: 5}}></View>
          <Text style={styles.title}>Price and Tax history</Text>
          <View style={{width: '100%'}}>

            <Text style={{fontWeight: 'bold', paddingTop: 10}}>Price History</Text>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 10, width: '88%', paddingTop: 10}}>
              <Text style={{textAlign: 'center'}}>Date</Text>
              <Text style={{textAlign: 'center'}}>Event</Text>
              <Text style={{textAlign: 'center'}}>Price</Text>
            </View>
            
            <View style={styles.separatorFull} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            {houseDetails.property_history && houseDetails.property_history.map((history, index) => (
              <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 10}} key={index}>
                <View style={{width: 80, alignItems: 'flex-start'}}>
                  <Text style={{textAlign: 'center'}}>{new Date(history.date).toLocaleDateString()}</Text>
                </View>
                <View style={{width: 80, alignItems: 'flex-start'}}>
                  <Text style={{textAlign: 'center'}}>{history.event_name}</Text>
                </View>
                <View style={{width: 80, alignItems: 'flex-start'}}>
                  <Text style={{textAlign: 'center'}}>{history.event_name ==='Sold'? '' : `$${history.price}`}</Text>
                </View>
              </View>
            ))}

            <Text style={{fontWeight: 'bold', paddingTop: 10}}>Tax History</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 10, width: '88%', paddingTop: 10}}>
                <Text style={{textAlign: 'center'}}>Year</Text>
                <Text style={{textAlign: 'center'}}>Property Taxes</Text>
                <Text style={{textAlign: 'center'}}>Tax Assessment</Text>
              </View>
              
              <View style={styles.separatorFull} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

              {houseDetails.tax_history && houseDetails.tax_history.map((history, index) => (
                <View style={{flexDirection: 'row', gap: 10}} key={index}>
                  <View style={{width: 50, alignItems: 'flex-start'}}>
                    <Text style={{textAlign: 'center'}}>{history.year}</Text>
                  </View>
                  <View style={{width: 125, alignItems: 'flex-start'}}>
                    <Text style={{textAlign: 'center'}}>${history.tax}</Text>
                  </View>
                  {history.assessment && history.assessment.total && (
                    <View style={{width: 80, alignItems: 'flex-start'}}>
                      <Text style={{textAlign: 'center'}}>${history.assessment.total}</Text>
                    </View>
                  )}
                </View>
              ))}
          </View>
        </View>
      )}


      <View style={styles.leftContainerGap} >
        <View style={{marginVertical: 5}}></View>
        <Text style={styles.title}>Schools</Text>
        {houseDetails.schools.map((school,index)=>(
          <View key={index} style={{flexDirection:'row', alignItems: 'center', gap: 10, paddingVertical: 10}}>
            <View style={{width: 50, height: 50, backgroundColor: 'blue', borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: 'white'}}>{!school.ratings.great_schools_rating? 'N/A' : `${school.ratings.great_schools_rating}/10`}</Text>
            </View>
            <View style={{justifyContent: 'space-between', height: 50, padding: 5}}>
              <Text style={{fontWeight: 'bold'}}>{school.name}</Text>
              <View style={{flexDirection: 'row', gap: 10}}>
                {school.grades.range && (
                  <>
                    <Text>Grades: {school.grades.range.low}-{school.grades.range.high}</Text>
                    <Text>Distance: {school.distance_in_miles}</Text>
                  </>
                )}
              </View>
            </View>
          </View>
        ))}
      </View>

      
      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  leftContainer: {
    width: '90%',
    alignItems: 'flex-start',
    
  },
  leftContainerGap: {
    width: '90%',
    alignItems: 'flex-start',
    gap: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separatorTop: {
    marginTop: 10,
    height: 1,
    width: '80%',
  },
  separatorBottom: {
    marginBottom: 10,
    height: 1,
    width: '80%',
  },
  separatorFull: {
    marginBottom: 10,
    height: 1,
    width: '100%',
  }
})

export default SelectedHome