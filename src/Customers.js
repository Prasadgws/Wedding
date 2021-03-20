import React, {Component} from 'react';

var pageData
var new_Array_Push_Data
 class Customers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedCustomer: 1,
      catergoires:{
        "items": [
            {
                "ParentCategoryId": 300000385775391,
                "CategoryId": 300000385775393,
                "CategoryShortName": "2_EXT_COLD_TOP_7UP",
                "CategoryName": "7 UP",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 2,
                "Hierarchy": "External KM - COLD > For FAQs, and articles, select a brand below... > 7 UP",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385775391 > 300000385775393"
            },
            {
                "ParentCategoryId": 300000385643262,
                "CategoryId": 300000385643264,
                "CategoryShortName": "2_EXT_COLD_7_UP",
                "CategoryName": "7 UP",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 3,
                "Hierarchy": "External KM - COLD > All Brands > Flavored Soft Drinks > 7 UP",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385643261 > 300000385643262 > 300000385643264"
            },
            {
                "ParentCategoryId": 300000385643262,
                "CategoryId": 300000385643265,
                "CategoryShortName": "3_EXT_COLD_AW",
                "CategoryName": "A&W",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 3,
                "Hierarchy": "External KM - COLD > All Brands > Flavored Soft Drinks > A&W",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385643261 > 300000385643262 > 300000385643265"
            },
            {
                "ParentCategoryId": 300000385775391,
                "CategoryId": 300000385775394,
                "CategoryShortName": "3_EXT_COLD_TOP_AW",
                "CategoryName": "A&W",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 2,
                "Hierarchy": "External KM - COLD > For FAQs, and articles, select a brand below... > A&W",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385775391 > 300000385775394"
            },
            {
                "ParentCategoryId": 300000383640520,
                "CategoryId": 300000385643261,
                "CategoryShortName": "4_EXT_COLD_ALL_BRANDS",
                "CategoryName": "All Brands",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 1,
                "Hierarchy": "External KM - COLD > All Brands",
                "LeafNodeFlag": false,
                "CategoryIdHierarchy": "300000383640520 > 300000385643261"
            },
            {
                "ParentCategoryId": 300000385643266,
                "CategoryId": 300000385643267,
                "CategoryShortName": "1_EXT_COLD_BAI",
                "CategoryName": "BAI",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 3,
                "Hierarchy": "External KM - COLD > All Brands > Teas & Waters > BAI",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385643261 > 300000385643266 > 300000385643267"
            },
            {
                "ParentCategoryId": 300000385775391,
                "CategoryId": 300000385775395,
                "CategoryShortName": "4_EXT_COLD_TOP_CANADA_DRY",
                "CategoryName": "Canada Dry",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 2,
                "Hierarchy": "External KM - COLD > For FAQs, and articles, select a brand below... > Canada Dry",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385775391 > 300000385775395"
            },
            {
                "ParentCategoryId": 300000385643266,
                "CategoryId": 300000385643268,
                "CategoryShortName": "2_EXT_COLD_CANADA_DRY",
                "CategoryName": "Canada Dry",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 3,
                "Hierarchy": "External KM - COLD > All Brands > Teas & Waters > Canada Dry",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385643261 > 300000385643266 > 300000385643268"
            },
            {
                "ParentCategoryId": 300000385643384,
                "CategoryId": 300000385643385,
                "CategoryShortName": "1_EXT_COLD_CLAMATO",
                "CategoryName": "Clamato",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 3,
                "Hierarchy": "External KM - COLD > All Brands > Juices, Juice Drinks, Mixers & More > Clamato",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385643261 > 300000385643384 > 300000385643385"
            },
            {
                "ParentCategoryId": 300000385643388,
                "CategoryId": 300000385775522,
                "CategoryShortName": "6_EXT_COLD_PT_COUPONS_PREM_REQ",
                "CategoryName": "Coupons and Premium Requests",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 2,
                "Hierarchy": "External KM - COLD > Popular Search Topics > Coupons and Premium Requests",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385643388 > 300000385775522"
            },
            {
                "ParentCategoryId": 300000385775391,
                "CategoryId": 300000385775392,
                "CategoryShortName": "1_EXT_COLD_TOP_DR_PEPPER",
                "CategoryName": "DR Pepper",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 2,
                "Hierarchy": "External KM - COLD > For FAQs, and articles, select a brand below... > DR Pepper",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385775391 > 300000385775392"
            },
            {
                "ParentCategoryId": 300000385643262,
                "CategoryId": 300000385643263,
                "CategoryShortName": "1_EXT_COLD_DR_PEPPER",
                "CategoryName": "DR Pepper",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 3,
                "Hierarchy": "External KM - COLD > All Brands > Flavored Soft Drinks > DR Pepper",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385643261 > 300000385643262 > 300000385643263"
            },
            {
                "ParentCategoryId": 300000385643266,
                "CategoryId": 300000385643383,
                "CategoryShortName": "3_EXT_COLD_DEJA_BLUE",
                "CategoryName": "Deja Blue",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 3,
                "Hierarchy": "External KM - COLD > All Brands > Teas & Waters > Deja Blue",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385643261 > 300000385643266 > 300000385643383"
            },
            {
                "ParentCategoryId": 300000385643388,
                "CategoryId": 300000385775520,
                "CategoryShortName": "4_EXT_COLD_PT_ENV_SUSTAIN",
                "CategoryName": "Environmental Sustainability",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 2,
                "Hierarchy": "External KM - COLD > Popular Search Topics > Environmental Sustainability",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385643388 > 300000385775520"
            },
            {
                "ParentCategoryId": 300000383696033,
                "CategoryId": 300000383696039,
                "CategoryShortName": "KDP_EXTERNAL_GREASE",
                "CategoryName": "External Grease",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 3,
                "Hierarchy": "1. Complaint > Package Quality > Primary Container Damage > External Grease",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383511414 > 300000383693254 > 300000383696033 > 300000383696039"
            },
            {
                "ParentCategoryId": null,
                "CategoryId": 300000383640520,
                "CategoryShortName": "1_EXT_KM_COLD",
                "CategoryName": "External KM - COLD",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 0,
                "Hierarchy": null,
                "LeafNodeFlag": false,
                "CategoryIdHierarchy": null
            },
            {
                "ParentCategoryId": 300000385643261,
                "CategoryId": 300000385643262,
                "CategoryShortName": "1_EXT_COLD_FLAVORED_SOFT_DRINKS",
                "CategoryName": "Flavored Soft Drinks",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 2,
                "Hierarchy": "External KM - COLD > All Brands > Flavored Soft Drinks",
                "LeafNodeFlag": false,
                "CategoryIdHierarchy": "300000383640520 > 300000385643261 > 300000385643262"
            },
            {
                "ParentCategoryId": 300000383640520,
                "CategoryId": 300000385775391,
                "CategoryShortName": "1_EXT_COLD_FAQS",
                "CategoryName": "For FAQs, and articles, select a brand below...",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 1,
                "Hierarchy": "External KM - COLD > For FAQs, and articles, select a brand below...",
                "LeafNodeFlag": false,
                "CategoryIdHierarchy": "300000383640520 > 300000385775391"
            },
            {
                "ParentCategoryId": 300000383696837,
                "CategoryId": 300000383696838,
                "CategoryShortName": "KDP_GLASS_EXTERIOR",
                "CategoryName": "Glass - Exterior",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 3,
                "Hierarchy": "1. Complaint > Product Quality > Foreign Material > Glass - Exterior",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383511414 > 300000383696548 > 300000383696837 > 300000383696838"
            },
            {
                "ParentCategoryId": 300000385643384,
                "CategoryId": 300000385643386,
                "CategoryShortName": "2_EXT_COLD_HAWAIIAN_PUNCH",
                "CategoryName": "Hawaiian Punch",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 3,
                "Hierarchy": "External KM - COLD > All Brands > Juices, Juice Drinks, Mixers & More > Hawaiian Punch",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385643261 > 300000385643384 > 300000385643386"
            },
            {
                "ParentCategoryId": 300000385643261,
                "CategoryId": 300000385643384,
                "CategoryShortName": "3_EXT_COLD_JUICES_JUICE_DRINKS",
                "CategoryName": "Juices, Juice Drinks, Mixers & More",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 2,
                "Hierarchy": "External KM - COLD > All Brands > Juices, Juice Drinks, Mixers & More",
                "LeafNodeFlag": false,
                "CategoryIdHierarchy": "300000383640520 > 300000385643261 > 300000385643384"
            },
            {
                "ParentCategoryId": 300000383640520,
                "CategoryId": 300000385643389,
                "CategoryShortName": "3_EXT_COLD_LINKS",
                "CategoryName": "Links",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 1,
                "Hierarchy": "External KM - COLD > Links",
                "LeafNodeFlag": false,
                "CategoryIdHierarchy": "300000383640520 > 300000385643389"
            },
            {
                "ParentCategoryId": 300000385643384,
                "CategoryId": 300000385643387,
                "CategoryShortName": "3_EXT_COLD_MARGARITAVILLE",
                "CategoryName": "Margaritaville",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 3,
                "Hierarchy": "External KM - COLD > All Brands > Juices, Juice Drinks, Mixers & More > Margaritaville",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385643261 > 300000385643384 > 300000385643387"
            },
            {
                "ParentCategoryId": 300000385643388,
                "CategoryId": 300000385775517,
                "CategoryShortName": "1_EXT_COLD_PT_NEW_PRODUCTS",
                "CategoryName": "New Products",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 2,
                "Hierarchy": "External KM - COLD > Popular Search Topics > New Products",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385643388 > 300000385775517"
            },
            {
                "ParentCategoryId": 300000385643389,
                "CategoryId": 300000386144691,
                "CategoryShortName": "1_EXT_COLD_HOMEPAGE_NUTRITION_FACTS",
                "CategoryName": "Nutrition Facts",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 2,
                "Hierarchy": "External KM - COLD > Links > Nutrition Facts",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385643389 > 300000386144691"
            },
            {
                "ParentCategoryId": 300000383640520,
                "CategoryId": 300000385643388,
                "CategoryShortName": "2_EXT_COLD_POPULAR_SEARCH_TOPICS",
                "CategoryName": "Popular Search Topics",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 1,
                "Hierarchy": "External KM - COLD > Popular Search Topics",
                "LeafNodeFlag": false,
                "CategoryIdHierarchy": "300000383640520 > 300000385643388"
            },
            {
                "ParentCategoryId": 300000385643388,
                "CategoryId": 300000385775518,
                "CategoryShortName": "2_EXT_COLD_PT_PRODUCT_AVAILABILITY",
                "CategoryName": "Product Availability",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 2,
                "Hierarchy": "External KM - COLD > Popular Search Topics > Product Availability",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385643388 > 300000385775518"
            },
            {
                "ParentCategoryId": 300000385643389,
                "CategoryId": 300000386144693,
                "CategoryShortName": "3_EXT_COLD_HOMEPAGE_PRODUCT_SUPPORT_FOR_HOT_BEVERAGES",
                "CategoryName": "Product Support for Hot Beverages",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 2,
                "Hierarchy": "External KM - COLD > Links > Product Support for Hot Beverages",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385643389 > 300000386144693"
            },
            {
                "ParentCategoryId": 300000385643388,
                "CategoryId": 300000385775519,
                "CategoryShortName": "3_EXT_COLD_PT_PROMOTIONS",
                "CategoryName": "Promotions",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 2,
                "Hierarchy": "External KM - COLD > Popular Search Topics > Promotions",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385643388 > 300000385775519"
            },
            {
                "ParentCategoryId": 300000385643389,
                "CategoryId": 300000386144692,
                "CategoryShortName": "2_EXT_COLD_HOMEPAGE_RECYLABILITY",
                "CategoryName": "Recylability",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 2,
                "Hierarchy": "External KM - COLD > Links > Recylability",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385643389 > 300000386144692"
            },
            {
                "ParentCategoryId": 300000385643388,
                "CategoryId": 300000385775521,
                "CategoryShortName": "5_EXT_COLD_PT_SAFETY_QUALITY",
                "CategoryName": "Safety and Quality",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 2,
                "Hierarchy": "External KM - COLD > Popular Search Topics > Safety and Quality",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385643388 > 300000385775521"
            },
            {
                "ParentCategoryId": 300000385775391,
                "CategoryId": 300000385775396,
                "CategoryShortName": "5_EXT_COLD_TOP_SCHWEPPES",
                "CategoryName": "Schweppes",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 2,
                "Hierarchy": "External KM - COLD > For FAQs, and articles, select a brand below... > Schweppes",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385775391 > 300000385775396"
            },
            {
                "ParentCategoryId": 300000385775391,
                "CategoryId": 300000385775397,
                "CategoryShortName": "6_EXT_COLD_TOP_SUNKIST",
                "CategoryName": "Sunkist",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 2,
                "Hierarchy": "External KM - COLD > For FAQs, and articles, select a brand below... > Sunkist",
                "LeafNodeFlag": true,
                "CategoryIdHierarchy": "300000383640520 > 300000385775391 > 300000385775397"
            },
            {
                "ParentCategoryId": 300000385643261,
                "CategoryId": 300000385643266,
                "CategoryShortName": "2_EXT_COLD_TEAS_WATERS",
                "CategoryName": "Teas & Waters",
                "StripeCd": "ORA_SVC_CRM",
                "BusinessUnitName": "KDP CCT US/COLD",
                "Depth": 2,
                "Hierarchy": "External KM - COLD > All Brands > Teas & Waters",
                "LeafNodeFlag": false,
                "CategoryIdHierarchy": "300000383640520 > 300000385643261 > 300000385643266"
            }
        ],
      
    },  imagesData:{
      "items": [
          {
              "Id": 300000385874751,
              "RecordName": "PORTAL-0000001",
              "CreatedBy": "kjell.nygaard",
              "CreationDate": "2021-02-19T00:59:42+00:00",
              "LastUpdatedBy": "kjell.nygaard",
              "LastUpdateDate": "2021-02-23T17:58:41+00:00",
              "RecordNumber": "FSN4637018",
              "LastUpdateLogin": null,
              "ConflictId": 0,
              "UserLastUpdateDate": null,
              "CurrencyCode": "USD",
              "CurcyConvRateType": "Corporate",
              "CorpCurrencyCode": "USD",
              "OraZcxOwner_Id_c": 300000382626885,
              "OraZcxOwner_c": "Kjell Nygaard",
              "Site_c": "COLD",
              "PageType_c": "HOMEPAGE",
              "VideoURL_c": null,
              "ImageURL_c": "https://dam.keurig.com/content/dam/public-videos/support/Cleaning_Brewer.jpg",
              "Product_Id_c": null,
              "Product_c": null,
              "Category_c": "1_EXT_COLD_HOMEPAGE_NUTRITION_FACTS",
              "PageSection_c": "LINKS",
              "SubType_c": "HYPERLINK",
              "SearchTerm_c": null,
              "HyperLinkURL_c": "https://www.keurig.com/",
              "ActiveFlag_c": true,
              "SelectedRow": null,
              "links": [
                  {
                      "rel": "self",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874751",
                      "name": "OECPortalMapping_c",
                      "kind": "item",
                      "properties": {
                          "changeIndicator": "ACED0005737200136A6176612E7574696C2E41727261794C6973747881D21D99C7619D03000149000473697A65787000000001770400000001737200146A6176612E6D6174682E426967446563696D616C54C71557F981284F0300024900057363616C654C0006696E7456616C7400164C6A6176612F6D6174682F426967496E74656765723B787200106A6176612E6C616E672E4E756D62657286AC951D0B94E08B020000787000000000737200146A6176612E6D6174682E426967496E74656765728CFC9F1FA93BFB1D030006490008626974436F756E744900096269744C656E67746849001366697273744E6F6E7A65726F427974654E756D49000C6C6F776573745365744269744900067369676E756D5B00096D61676E69747564657400025B427871007E0004FFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFE00000001757200025B42ACF317F8060854E002000078700000000103787878"
                      }
                  },
                  {
                      "rel": "canonical",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874751",
                      "name": "OECPortalMapping_c",
                      "kind": "item"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874751/lov/LOVVA_For_PageType_c",
                      "name": "LOVVA_For_PageType_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874751/lov/LOVVA_For_OraZcxOwner_c",
                      "name": "LOVVA_For_OraZcxOwner_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874751/lov/LOVVA_For_PageSection_c",
                      "name": "LOVVA_For_PageSection_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874751/lov/LOVVA_For_Product_c",
                      "name": "LOVVA_For_Product_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874751/lov/FK_LOVVA_For_Product_c",
                      "name": "FK_LOVVA_For_Product_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874751/lov/ViewAccessor_CurrencyCode",
                      "name": "ViewAccessor_CurrencyCode",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874751/lov/LOVVA_For_ActiveFlag_c",
                      "name": "LOVVA_For_ActiveFlag_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874751/lov/LOVVA_For_Site_c",
                      "name": "LOVVA_For_Site_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874751/lov/FK_LOVVA_For_OraZcxOwner_c",
                      "name": "FK_LOVVA_For_OraZcxOwner_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874751/lov/LOVVA_For_SubType_c",
                      "name": "LOVVA_For_SubType_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "child",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874751/child/Attachment",
                      "name": "Attachment",
                      "kind": "collection"
                  },
                  {
                      "rel": "child",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874751/child/Note",
                      "name": "Note",
                      "kind": "collection"
                  }
              ]
          },
          {
              "Id": 300000385874752,
              "RecordName": "PORTAL-0000002",
              "CreatedBy": "kjell.nygaard",
              "CreationDate": "2021-02-19T01:07:02.660+00:00",
              "LastUpdatedBy": "kjell.nygaard",
              "LastUpdateDate": "2021-02-19T01:15:11.529+00:00",
              "RecordNumber": "FSN4637019",
              "LastUpdateLogin": null,
              "ConflictId": 0,
              "UserLastUpdateDate": null,
              "CurrencyCode": "USD",
              "CurcyConvRateType": "Corporate",
              "CorpCurrencyCode": "USD",
              "OraZcxOwner_Id_c": 300000382626885,
              "OraZcxOwner_c": "Kjell Nygaard",
              "Site_c": "COLD",
              "PageType_c": "HOMEPAGE",
              "VideoURL_c": null,
              "ImageURL_c": "https://dam.keurig.com/content/dam/public-videos/support/Cleaning_Brewer.jpg",
              "Product_Id_c": null,
              "Product_c": null,
              "Category_c": "RECYLABILITY",
              "PageSection_c": "LINKS",
              "SubType_c": "HYPERLINK",
              "SearchTerm_c": "Category='RECYLABILITY'",
              "HyperLinkURL_c": null,
              "ActiveFlag_c": true,
              "SelectedRow": null,
              "links": [
                  {
                      "rel": "self",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874752",
                      "name": "OECPortalMapping_c",
                      "kind": "item",
                      "properties": {
                          "changeIndicator": "ACED0005737200136A6176612E7574696C2E41727261794C6973747881D21D99C7619D03000149000473697A65787000000001770400000001737200146A6176612E6D6174682E426967446563696D616C54C71557F981284F0300024900057363616C654C0006696E7456616C7400164C6A6176612F6D6174682F426967496E74656765723B787200106A6176612E6C616E672E4E756D62657286AC951D0B94E08B020000787000000000737200146A6176612E6D6174682E426967496E74656765728CFC9F1FA93BFB1D030006490008626974436F756E744900096269744C656E67746849001366697273744E6F6E7A65726F427974654E756D49000C6C6F776573745365744269744900067369676E756D5B00096D61676E69747564657400025B427871007E0004FFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFE00000001757200025B42ACF317F8060854E002000078700000000101787878"
                      }
                  },
                  {
                      "rel": "canonical",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874752",
                      "name": "OECPortalMapping_c",
                      "kind": "item"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874752/lov/LOVVA_For_PageType_c",
                      "name": "LOVVA_For_PageType_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874752/lov/LOVVA_For_OraZcxOwner_c",
                      "name": "LOVVA_For_OraZcxOwner_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874752/lov/LOVVA_For_PageSection_c",
                      "name": "LOVVA_For_PageSection_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874752/lov/LOVVA_For_Product_c",
                      "name": "LOVVA_For_Product_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874752/lov/FK_LOVVA_For_Product_c",
                      "name": "FK_LOVVA_For_Product_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874752/lov/ViewAccessor_CurrencyCode",
                      "name": "ViewAccessor_CurrencyCode",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874752/lov/LOVVA_For_ActiveFlag_c",
                      "name": "LOVVA_For_ActiveFlag_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874752/lov/LOVVA_For_Site_c",
                      "name": "LOVVA_For_Site_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874752/lov/FK_LOVVA_For_OraZcxOwner_c",
                      "name": "FK_LOVVA_For_OraZcxOwner_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874752/lov/LOVVA_For_SubType_c",
                      "name": "LOVVA_For_SubType_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "child",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874752/child/Attachment",
                      "name": "Attachment",
                      "kind": "collection"
                  },
                  {
                      "rel": "child",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874752/child/Note",
                      "name": "Note",
                      "kind": "collection"
                  }
              ]
          },
          {
              "Id": 300000385874769,
              "RecordName": "PORTAL-0000003",
              "CreatedBy": "kjell.nygaard",
              "CreationDate": "2021-02-19T01:15:18.445+00:00",
              "LastUpdatedBy": "kjell.nygaard",
              "LastUpdateDate": "2021-02-19T01:21:34+00:00",
              "RecordNumber": "FSN4637020",
              "LastUpdateLogin": null,
              "ConflictId": 0,
              "UserLastUpdateDate": null,
              "CurrencyCode": "USD",
              "CurcyConvRateType": "Corporate",
              "CorpCurrencyCode": "USD",
              "OraZcxOwner_Id_c": 300000382626885,
              "OraZcxOwner_c": "Kjell Nygaard",
              "Site_c": null,
              "PageType_c": "HOMEPAGE",
              "VideoURL_c": null,
              "ImageURL_c": "https://dam.keurig.com/content/dam/public-videos/support/Cleaning_Brewer.jpg",
              "Product_Id_c": null,
              "Product_c": null,
              "Category_c": "1_EXT_COLD_TOP_DR_PEPPER",
              "PageSection_c": "FAQS",
              "SubType_c": "LOGO",
              "SearchTerm_c": null,
              "HyperLinkURL_c": null,
              "ActiveFlag_c": true,
              "SelectedRow": null,
              "links": [
                  {
                      "rel": "self",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874769",
                      "name": "OECPortalMapping_c",
                      "kind": "item",
                      "properties": {
                          "changeIndicator": "ACED0005737200136A6176612E7574696C2E41727261794C6973747881D21D99C7619D03000149000473697A65787000000001770400000001737200146A6176612E6D6174682E426967446563696D616C54C71557F981284F0300024900057363616C654C0006696E7456616C7400164C6A6176612F6D6174682F426967496E74656765723B787200106A6176612E6C616E672E4E756D62657286AC951D0B94E08B020000787000000000737200146A6176612E6D6174682E426967496E74656765728CFC9F1FA93BFB1D030006490008626974436F756E744900096269744C656E67746849001366697273744E6F6E7A65726F427974654E756D49000C6C6F776573745365744269744900067369676E756D5B00096D61676E69747564657400025B427871007E0004FFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFE00000001757200025B42ACF317F8060854E002000078700000000102787878"
                      }
                  },
                  {
                      "rel": "canonical",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874769",
                      "name": "OECPortalMapping_c",
                      "kind": "item"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874769/lov/LOVVA_For_PageType_c",
                      "name": "LOVVA_For_PageType_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874769/lov/LOVVA_For_OraZcxOwner_c",
                      "name": "LOVVA_For_OraZcxOwner_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874769/lov/LOVVA_For_PageSection_c",
                      "name": "LOVVA_For_PageSection_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874769/lov/LOVVA_For_Product_c",
                      "name": "LOVVA_For_Product_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874769/lov/FK_LOVVA_For_Product_c",
                      "name": "FK_LOVVA_For_Product_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874769/lov/ViewAccessor_CurrencyCode",
                      "name": "ViewAccessor_CurrencyCode",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874769/lov/LOVVA_For_ActiveFlag_c",
                      "name": "LOVVA_For_ActiveFlag_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874769/lov/LOVVA_For_Site_c",
                      "name": "LOVVA_For_Site_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874769/lov/FK_LOVVA_For_OraZcxOwner_c",
                      "name": "FK_LOVVA_For_OraZcxOwner_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874769/lov/LOVVA_For_SubType_c",
                      "name": "LOVVA_For_SubType_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "child",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874769/child/Attachment",
                      "name": "Attachment",
                      "kind": "collection"
                  },
                  {
                      "rel": "child",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000385874769/child/Note",
                      "name": "Note",
                      "kind": "collection"
                  }
              ]
          },
          {
              "Id": 300000386187132,
              "RecordName": "PORTAL-0000004",
              "CreatedBy": "APEXIT_CCTADMIN1",
              "CreationDate": "2021-02-23T06:00:12+00:00",
              "LastUpdatedBy": "APEXIT_CCTADMIN1",
              "LastUpdateDate": "2021-02-23T06:02:42.919+00:00",
              "RecordNumber": "FSN4637205",
              "LastUpdateLogin": null,
              "ConflictId": 0,
              "UserLastUpdateDate": null,
              "CurrencyCode": "USD",
              "CurcyConvRateType": "Corporate",
              "CorpCurrencyCode": "USD",
              "OraZcxOwner_Id_c": 300000368968912,
              "OraZcxOwner_c": "CCTADMIN1 APEXIT",
              "Site_c": "COLD",
              "PageType_c": "HOMEPAGE",
              "VideoURL_c": null,
              "ImageURL_c": "https://dam-auth.keurig.com/content/dam/public-videos/support/K-Mini_descaling.JPG/jcr:content/renditions/cq5dam.web.1280.1280.jpeg?ch_ck=1531235378000",
              "Product_Id_c": null,
              "Product_c": null,
              "Category_c": "2_EXT_COLD_HOMEPAGE_RECYLABILITY",
              "PageSection_c": "LINKS",
              "SubType_c": "KM_SEARCH",
              "SearchTerm_c": null,
              "HyperLinkURL_c": null,
              "ActiveFlag_c": true,
              "SelectedRow": null,
              "links": [
                  {
                      "rel": "self",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187132",
                      "name": "OECPortalMapping_c",
                      "kind": "item",
                      "properties": {
                          "changeIndicator": "ACED0005737200136A6176612E7574696C2E41727261794C6973747881D21D99C7619D03000149000473697A65787000000001770400000001737200146A6176612E6D6174682E426967446563696D616C54C71557F981284F0300024900057363616C654C0006696E7456616C7400164C6A6176612F6D6174682F426967496E74656765723B787200106A6176612E6C616E672E4E756D62657286AC951D0B94E08B020000787000000000737200146A6176612E6D6174682E426967496E74656765728CFC9F1FA93BFB1D030006490008626974436F756E744900096269744C656E67746849001366697273744E6F6E7A65726F427974654E756D49000C6C6F776573745365744269744900067369676E756D5B00096D61676E69747564657400025B427871007E0004FFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFE00000001757200025B42ACF317F8060854E002000078700000000101787878"
                      }
                  },
                  {
                      "rel": "canonical",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187132",
                      "name": "OECPortalMapping_c",
                      "kind": "item"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187132/lov/LOVVA_For_PageType_c",
                      "name": "LOVVA_For_PageType_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187132/lov/LOVVA_For_OraZcxOwner_c",
                      "name": "LOVVA_For_OraZcxOwner_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187132/lov/LOVVA_For_PageSection_c",
                      "name": "LOVVA_For_PageSection_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187132/lov/LOVVA_For_Product_c",
                      "name": "LOVVA_For_Product_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187132/lov/FK_LOVVA_For_Product_c",
                      "name": "FK_LOVVA_For_Product_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187132/lov/ViewAccessor_CurrencyCode",
                      "name": "ViewAccessor_CurrencyCode",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187132/lov/LOVVA_For_ActiveFlag_c",
                      "name": "LOVVA_For_ActiveFlag_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187132/lov/LOVVA_For_Site_c",
                      "name": "LOVVA_For_Site_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187132/lov/FK_LOVVA_For_OraZcxOwner_c",
                      "name": "FK_LOVVA_For_OraZcxOwner_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187132/lov/LOVVA_For_SubType_c",
                      "name": "LOVVA_For_SubType_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "child",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187132/child/Attachment",
                      "name": "Attachment",
                      "kind": "collection"
                  },
                  {
                      "rel": "child",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187132/child/Note",
                      "name": "Note",
                      "kind": "collection"
                  }
              ]
          },
          {
              "Id": 300000386187135,
              "RecordName": "PORTAL-0000005",
              "CreatedBy": "APEXIT_CCTADMIN1",
              "CreationDate": "2021-02-23T06:04:05.358+00:00",
              "LastUpdatedBy": "APEXIT_CCTADMIN1",
              "LastUpdateDate": "2021-02-23T06:06:45.971+00:00",
              "RecordNumber": "FSN4637211",
              "LastUpdateLogin": null,
              "ConflictId": 0,
              "UserLastUpdateDate": null,
              "CurrencyCode": "USD",
              "CurcyConvRateType": "Corporate",
              "CorpCurrencyCode": "USD",
              "OraZcxOwner_Id_c": 300000368968912,
              "OraZcxOwner_c": "CCTADMIN1 APEXIT",
              "Site_c": "COLD",
              "PageType_c": "HOMEPAGE",
              "VideoURL_c": null,
              "ImageURL_c": "https://dam-auth.keurig.com/content/dam/public-videos/support/K-Mini_descaling.JPG/jcr:content/renditions/cq5dam.web.1280.1280.jpeg?ch_ck=1531235378000",
              "Product_Id_c": null,
              "Product_c": null,
              "Category_c": "3_EXT_COLD_HOMEPAGE_PRODUCT_SUPPORT_FOR_HOT_BEVERAGES",
              "PageSection_c": "LINKS",
              "SubType_c": "HYPERLINK",
              "SearchTerm_c": null,
              "HyperLinkURL_c": "https://support.keurig.comm",
              "ActiveFlag_c": true,
              "SelectedRow": null,
              "links": [
                  {
                      "rel": "self",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187135",
                      "name": "OECPortalMapping_c",
                      "kind": "item",
                      "properties": {
                          "changeIndicator": "ACED0005737200136A6176612E7574696C2E41727261794C6973747881D21D99C7619D03000149000473697A65787000000001770400000001737200146A6176612E6D6174682E426967446563696D616C54C71557F981284F0300024900057363616C654C0006696E7456616C7400164C6A6176612F6D6174682F426967496E74656765723B787200106A6176612E6C616E672E4E756D62657286AC951D0B94E08B020000787000000000737200146A6176612E6D6174682E426967496E74656765728CFC9F1FA93BFB1D030006490008626974436F756E744900096269744C656E67746849001366697273744E6F6E7A65726F427974654E756D49000C6C6F776573745365744269744900067369676E756D5B00096D61676E69747564657400025B427871007E0004FFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFE00000001757200025B42ACF317F8060854E002000078700000000101787878"
                      }
                  },
                  {
                      "rel": "canonical",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187135",
                      "name": "OECPortalMapping_c",
                      "kind": "item"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187135/lov/LOVVA_For_PageType_c",
                      "name": "LOVVA_For_PageType_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187135/lov/LOVVA_For_OraZcxOwner_c",
                      "name": "LOVVA_For_OraZcxOwner_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187135/lov/LOVVA_For_PageSection_c",
                      "name": "LOVVA_For_PageSection_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187135/lov/LOVVA_For_Product_c",
                      "name": "LOVVA_For_Product_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187135/lov/FK_LOVVA_For_Product_c",
                      "name": "FK_LOVVA_For_Product_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187135/lov/ViewAccessor_CurrencyCode",
                      "name": "ViewAccessor_CurrencyCode",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187135/lov/LOVVA_For_ActiveFlag_c",
                      "name": "LOVVA_For_ActiveFlag_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187135/lov/LOVVA_For_Site_c",
                      "name": "LOVVA_For_Site_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187135/lov/FK_LOVVA_For_OraZcxOwner_c",
                      "name": "FK_LOVVA_For_OraZcxOwner_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187135/lov/LOVVA_For_SubType_c",
                      "name": "LOVVA_For_SubType_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "child",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187135/child/Attachment",
                      "name": "Attachment",
                      "kind": "collection"
                  },
                  {
                      "rel": "child",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187135/child/Note",
                      "name": "Note",
                      "kind": "collection"
                  }
              ]
          },
          {
              "Id": 300000386187136,
              "RecordName": "PORTAL-0000006",
              "CreatedBy": "APEXIT_CCTADMIN1",
              "CreationDate": "2021-02-23T06:07:36.268+00:00",
              "LastUpdatedBy": "APEXIT_CCTADMIN1",
              "LastUpdateDate": "2021-02-23T06:09:08.375+00:00",
              "RecordNumber": "FSN4637214",
              "LastUpdateLogin": null,
              "ConflictId": 0,
              "UserLastUpdateDate": null,
              "CurrencyCode": "USD",
              "CurcyConvRateType": "Corporate",
              "CorpCurrencyCode": "USD",
              "OraZcxOwner_Id_c": 300000368968912,
              "OraZcxOwner_c": "CCTADMIN1 APEXIT",
              "Site_c": "COLD",
              "PageType_c": "HOMEPAGE",
              "VideoURL_c": null,
              "ImageURL_c": null,
              "Product_Id_c": null,
              "Product_c": null,
              "Category_c": "1_EXT_COLD_PT_NEW_PRODUCTS",
              "PageSection_c": "KM_SEARCH",
              "SubType_c": "KM_SEARCH",
              "SearchTerm_c": "1_EXT_COLD_PT_NEW_PRODUCTS",
              "HyperLinkURL_c": null,
              "ActiveFlag_c": true,
              "SelectedRow": null,
              "links": [
                  {
                      "rel": "self",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187136",
                      "name": "OECPortalMapping_c",
                      "kind": "item",
                      "properties": {
                          "changeIndicator": "ACED0005737200136A6176612E7574696C2E41727261794C6973747881D21D99C7619D03000149000473697A65787000000001770400000001737200146A6176612E6D6174682E426967446563696D616C54C71557F981284F0300024900057363616C654C0006696E7456616C7400164C6A6176612F6D6174682F426967496E74656765723B787200106A6176612E6C616E672E4E756D62657286AC951D0B94E08B020000787000000000737200146A6176612E6D6174682E426967496E74656765728CFC9F1FA93BFB1D030006490008626974436F756E744900096269744C656E67746849001366697273744E6F6E7A65726F427974654E756D49000C6C6F776573745365744269744900067369676E756D5B00096D61676E69747564657400025B427871007E0004FFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFE00000001757200025B42ACF317F8060854E002000078700000000101787878"
                      }
                  },
                  {
                      "rel": "canonical",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187136",
                      "name": "OECPortalMapping_c",
                      "kind": "item"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187136/lov/LOVVA_For_PageType_c",
                      "name": "LOVVA_For_PageType_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187136/lov/LOVVA_For_OraZcxOwner_c",
                      "name": "LOVVA_For_OraZcxOwner_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187136/lov/LOVVA_For_PageSection_c",
                      "name": "LOVVA_For_PageSection_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187136/lov/LOVVA_For_Product_c",
                      "name": "LOVVA_For_Product_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187136/lov/FK_LOVVA_For_Product_c",
                      "name": "FK_LOVVA_For_Product_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187136/lov/ViewAccessor_CurrencyCode",
                      "name": "ViewAccessor_CurrencyCode",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187136/lov/LOVVA_For_ActiveFlag_c",
                      "name": "LOVVA_For_ActiveFlag_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187136/lov/LOVVA_For_Site_c",
                      "name": "LOVVA_For_Site_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187136/lov/FK_LOVVA_For_OraZcxOwner_c",
                      "name": "FK_LOVVA_For_OraZcxOwner_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187136/lov/LOVVA_For_SubType_c",
                      "name": "LOVVA_For_SubType_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "child",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187136/child/Attachment",
                      "name": "Attachment",
                      "kind": "collection"
                  },
                  {
                      "rel": "child",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187136/child/Note",
                      "name": "Note",
                      "kind": "collection"
                  }
              ]
          },
          {
              "Id": 300000386187137,
              "RecordName": "PORTAL-0000007",
              "CreatedBy": "APEXIT_CCTADMIN1",
              "CreationDate": "2021-02-23T06:11:06.410+00:00",
              "LastUpdatedBy": "APEXIT_CCTADMIN1",
              "LastUpdateDate": "2021-02-23T06:12:20.878+00:00",
              "RecordNumber": "FSN4637218",
              "LastUpdateLogin": null,
              "ConflictId": 0,
              "UserLastUpdateDate": null,
              "CurrencyCode": "USD",
              "CurcyConvRateType": "Corporate",
              "CorpCurrencyCode": "USD",
              "OraZcxOwner_Id_c": 300000368968912,
              "OraZcxOwner_c": "CCTADMIN1 APEXIT",
              "Site_c": "COLD",
              "PageType_c": "HOMEPAGE",
              "VideoURL_c": null,
              "ImageURL_c": null,
              "Product_Id_c": null,
              "Product_c": null,
              "Category_c": "2_EXT_COLD_PT_PRODUCT_AVAILABILITY",
              "PageSection_c": "KM_SEARCH",
              "SubType_c": "KM_SEARCH",
              "SearchTerm_c": "2_EXT_COLD_PT_PRODUCT_AVAILABILITY",
              "HyperLinkURL_c": null,
              "ActiveFlag_c": true,
              "SelectedRow": null,
              "links": [
                  {
                      "rel": "self",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187137",
                      "name": "OECPortalMapping_c",
                      "kind": "item",
                      "properties": {
                          "changeIndicator": "ACED0005737200136A6176612E7574696C2E41727261794C6973747881D21D99C7619D03000149000473697A65787000000001770400000001737200146A6176612E6D6174682E426967446563696D616C54C71557F981284F0300024900057363616C654C0006696E7456616C7400164C6A6176612F6D6174682F426967496E74656765723B787200106A6176612E6C616E672E4E756D62657286AC951D0B94E08B020000787000000000737200146A6176612E6D6174682E426967496E74656765728CFC9F1FA93BFB1D030006490008626974436F756E744900096269744C656E67746849001366697273744E6F6E7A65726F427974654E756D49000C6C6F776573745365744269744900067369676E756D5B00096D61676E69747564657400025B427871007E0004FFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFE00000001757200025B42ACF317F8060854E002000078700000000101787878"
                      }
                  },
                  {
                      "rel": "canonical",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187137",
                      "name": "OECPortalMapping_c",
                      "kind": "item"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187137/lov/LOVVA_For_PageType_c",
                      "name": "LOVVA_For_PageType_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187137/lov/LOVVA_For_OraZcxOwner_c",
                      "name": "LOVVA_For_OraZcxOwner_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187137/lov/LOVVA_For_PageSection_c",
                      "name": "LOVVA_For_PageSection_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187137/lov/LOVVA_For_Product_c",
                      "name": "LOVVA_For_Product_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187137/lov/FK_LOVVA_For_Product_c",
                      "name": "FK_LOVVA_For_Product_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187137/lov/ViewAccessor_CurrencyCode",
                      "name": "ViewAccessor_CurrencyCode",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187137/lov/LOVVA_For_ActiveFlag_c",
                      "name": "LOVVA_For_ActiveFlag_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187137/lov/LOVVA_For_Site_c",
                      "name": "LOVVA_For_Site_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187137/lov/FK_LOVVA_For_OraZcxOwner_c",
                      "name": "FK_LOVVA_For_OraZcxOwner_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187137/lov/LOVVA_For_SubType_c",
                      "name": "LOVVA_For_SubType_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "child",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187137/child/Attachment",
                      "name": "Attachment",
                      "kind": "collection"
                  },
                  {
                      "rel": "child",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187137/child/Note",
                      "name": "Note",
                      "kind": "collection"
                  }
              ]
          },
          {
              "Id": 300000386187138,
              "RecordName": "PORTAL-0000008",
              "CreatedBy": "APEXIT_CCTADMIN1",
              "CreationDate": "2021-02-23T06:12:47.585+00:00",
              "LastUpdatedBy": "APEXIT_CCTADMIN1",
              "LastUpdateDate": "2021-02-23T06:13:53.518+00:00",
              "RecordNumber": "FSN4637219",
              "LastUpdateLogin": null,
              "ConflictId": 0,
              "UserLastUpdateDate": null,
              "CurrencyCode": "USD",
              "CurcyConvRateType": "Corporate",
              "CorpCurrencyCode": "USD",
              "OraZcxOwner_Id_c": 300000368968912,
              "OraZcxOwner_c": "CCTADMIN1 APEXIT",
              "Site_c": "COLD",
              "PageType_c": "HOMEPAGE",
              "VideoURL_c": null,
              "ImageURL_c": null,
              "Product_Id_c": null,
              "Product_c": null,
              "Category_c": "3_EXT_COLD_PT_PROMOTIONS",
              "PageSection_c": "KM_SEARCH",
              "SubType_c": "KM_SEARCH",
              "SearchTerm_c": "3_EXT_COLD_PT_PROMOTIONS",
              "HyperLinkURL_c": null,
              "ActiveFlag_c": true,
              "SelectedRow": null,
              "links": [
                  {
                      "rel": "self",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187138",
                      "name": "OECPortalMapping_c",
                      "kind": "item",
                      "properties": {
                          "changeIndicator": "ACED0005737200136A6176612E7574696C2E41727261794C6973747881D21D99C7619D03000149000473697A65787000000001770400000001737200146A6176612E6D6174682E426967446563696D616C54C71557F981284F0300024900057363616C654C0006696E7456616C7400164C6A6176612F6D6174682F426967496E74656765723B787200106A6176612E6C616E672E4E756D62657286AC951D0B94E08B020000787000000000737200146A6176612E6D6174682E426967496E74656765728CFC9F1FA93BFB1D030006490008626974436F756E744900096269744C656E67746849001366697273744E6F6E7A65726F427974654E756D49000C6C6F776573745365744269744900067369676E756D5B00096D61676E69747564657400025B427871007E0004FFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFE00000001757200025B42ACF317F8060854E002000078700000000101787878"
                      }
                  },
                  {
                      "rel": "canonical",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187138",
                      "name": "OECPortalMapping_c",
                      "kind": "item"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187138/lov/LOVVA_For_PageType_c",
                      "name": "LOVVA_For_PageType_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187138/lov/LOVVA_For_OraZcxOwner_c",
                      "name": "LOVVA_For_OraZcxOwner_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187138/lov/LOVVA_For_PageSection_c",
                      "name": "LOVVA_For_PageSection_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187138/lov/LOVVA_For_Product_c",
                      "name": "LOVVA_For_Product_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187138/lov/FK_LOVVA_For_Product_c",
                      "name": "FK_LOVVA_For_Product_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187138/lov/ViewAccessor_CurrencyCode",
                      "name": "ViewAccessor_CurrencyCode",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187138/lov/LOVVA_For_ActiveFlag_c",
                      "name": "LOVVA_For_ActiveFlag_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187138/lov/LOVVA_For_Site_c",
                      "name": "LOVVA_For_Site_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187138/lov/FK_LOVVA_For_OraZcxOwner_c",
                      "name": "FK_LOVVA_For_OraZcxOwner_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "lov",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187138/lov/LOVVA_For_SubType_c",
                      "name": "LOVVA_For_SubType_c",
                      "kind": "collection"
                  },
                  {
                      "rel": "child",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187138/child/Attachment",
                      "name": "Attachment",
                      "kind": "collection"
                  },
                  {
                      "rel": "child",
                      "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/crmRestApi/resources/11.13.18.05/OECPortalMapping_c/300000386187138/child/Note",
                      "name": "Note",
                      "kind": "collection"
                  }
              ]
          }
      ],
  },
  Category_Filter_Data:{},
}
  }
  componentDidMount()
  {
    //this.add_Data_In_Objct();
    this.onPage_Load_Category_Filter();
    this.sorting_Two_DifferentArray()
  }
 sortPageItems = function (array){
    array.sort(function(a, b) {
      return parseFloat(a.CategoryId) - parseFloat(b.CategoryId);
    });
  };
  onPage_Load_Category_Filter = function () {
     var tempData =this.state.catergoires.items;
    console.log(tempData);
    var root = null;
    var r = [],
      o = {};
    tempData.forEach(function(a) {
      if (o[a.CategoryId] && o[a.CategoryId].children) {
        a.children = o[a.CategoryId] && o[a.CategoryId].children;
      }
      o[a.CategoryId] = a;
      if (a.ParentCategoryId == root) {
        r.push(a);
      } else {
        o[a.ParentCategoryId] = o[a.ParentCategoryId] || {};
        o[a.ParentCategoryId].children = o[a.ParentCategoryId]
          .children || [];
        o[a.ParentCategoryId].children.push(a);
      }
    });
    if (r.length > 0 && r[0].children) {
       pageData = r[0].children;
      pageData.forEach(item=> {
        if(item.children){
          this.sortPageItems(item.children);
        }
      });
        this.sortPageItems(pageData);
        console.log("============pageData===========",pageData)
        this.setState({
          Category_Filter_Data:pageData,
        })
       return pageData;
     }
     return [];
     
  };


  sorting_Two_DifferentArray =()=>{
    debugger
    var i;
    var j;
    var k;
     new_Array_Push_Data = pageData;
   

    for (i = 0; i < pageData.length; i++) {
      for (j = 0; j < this.state.imagesData.items.length; j++) {
        // if(pageData[i].children[i].CategoryShortName === this.state.imagesData.items[j].Category_c)
        // {
        //   console.log("===========same ===========",pageData[i].children[i].CategoryShortName )
        // }
        if(pageData[i].hasOwnProperty('children'))
        {
          for (k = 0; k < pageData[i].children.length; k++) {
            if(pageData[i].children[k].CategoryShortName === this.state.imagesData.items[j].Category_c)
            {
              console.log("===========same===========",pageData[i].children[k].CategoryShortName)
              new_Array_Push_Data[i].children[k].imagesData = this.state.imagesData.items[j];
            }
            else
            {
                if(!pageData[i].children[k].hasOwnProperty('imagesData'))
                {
                    new_Array_Push_Data[i].children[k]["imagesData"] = {
                        ImageURL_c: ""
                      };
                }
           
            }
          }
        }
      
      }
    }
    console.log("=======new_Array_Push_Data====",new_Array_Push_Data)
  }


  add_Data_In_Objct = ()=>{
    var data_Tem = [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      },
    ]
    var secound_Add_Data = [
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
  ]
    for (let k = 0; k < data_Tem.length; k++) {
      data_Tem[k].imagesData = secound_Add_Data;
      console.log("========data_Tem=======",data_Tem[k])
    }
  
   

  }

  render() {
    return (
    <div className="addmargin">
      Home
     </div>
     )
  }

}
export default Customers;