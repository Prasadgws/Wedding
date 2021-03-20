import React, {Component} from 'react';
var filter_Response_By_Seq = []
 class Divide_Array extends Component {

  constructor(props) {
    super(props)
    this.state = {
    selectedCustomer: 1,
    catergoires: {
        "items": [
            {
                "recordId": "5557856BBE8C4E1AB813B4AB63039D09",
                "versionId": "D3A85B6815814E5BB91E610AFD8897B8",
                "documentId": "HTTG1",
                "title": "Krell Troubleshooting Guide",
                "version": "1.0",
                "answerId": 1055029,
                "locale": {
                    "recordId": "en_US",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/locales/en_US",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "dateModified": "2021-03-16T20:56:17+0000",
                "displayStartDate": "1900-01-01T00:00:00+0000",
                "displayEndDate": "9999-12-31T00:00:00+0000",
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content/5557856BBE8C4E1AB813B4AB63039D09",
                        "mediaType": "application/json, application/xml",
                        "method": "GET"
                    },
                    {
                        "rel": "collection",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content",
                        "mediaType": "application/json, application/xml",
                        "method": "GET",
                        "profile": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/metadata-catalog/content"
                    }
                ],
                "contentType": {
                    "recordId": "FA575BAB09CC4E1FB27901733FE18696",
                    "referenceKey": "HOT_TROUBLESHOOTING_GUIDE",
                    "name": "HOT Troubleshooting Guide",
                    "stripeCd": "ORA_SVC_CRM",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/contentTypes/FA575BAB09CC4E1FB27901733FE18696",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "priority": "PRIORITY_0",
                "createDate": "2021-03-16T20:56:13+0000",
                "lastModifiedDate": "2021-03-16T20:56:13+0000",
                "dateAdded": "2021-03-16T20:56:13+0000",
                "owner": {
                    "recordId": 300000001068877,
                    "name": "Matt Krell",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000001068877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "lastModifier": {
                    "recordId": 300000001068877,
                    "name": "Matt Krell",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000001068877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "creator": {
                    "recordId": 300000001068877,
                    "name": "Matt Krell",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000001068877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "published": true,
                "pending": false,
                "publishDate": "2021-03-16T20:56:17+0000",
                "checkedOut": false,
                "publishedVersion": "1.0",
                "xml": "<HOT_TROUBLESHOOTING_GUIDE><TROUBLESHOOTING_GUIDE><![CDATA[Krell Troubleshooting Guide]]></TROUBLESHOOTING_GUIDE><HOT_OVERVIEW><![CDATA[Krell Troubleshooting Guide]]></HOT_OVERVIEW><HOT_CONNECTED/><HOT_COMMERCIAL><![CDATA[Yes this is for commercial]]></HOT_COMMERCIAL><HOT_APPLIANCE_OF_INTEREST_SYSTEMS/><HOT_CORPORATE_ONLY/><HOT_VOLUME_ISSUES/><HOT_LEAKING_ISSUES/><HOT_POWER_ISSUES/><HOT_HEATING_ISSUES/><HOT_FROTHER/><HOT_PHYSICAL_DAMAGE_ISSUES/><HOT_BUTTON_LIGHT_DISPLAY_ISSUES/><HOT_MISCELLANEOUS_ISSUES/><HOT_PLATFORM_COMPLAINTS/><HOT_REPLACEMENT_SCENARIOS/><HOT_ETEAM/><HOT_SR_SPECIALIST/></HOT_TROUBLESHOOTING_GUIDE>",
                "resourcePath": "$STAGING_RESOURCE_HOST_URL/fusion/content/draft/5557856BBE8C4E1AB813B4AB63039D09/D3A85B6815814E5BB91E610AFD8897B8/"
            },
            {
                "recordId": "F7399B002AAA4B55AB1D5A56F4C243D9",
                "versionId": "053392A06A2F410DA9A5B225DDB2A4AF",
                "documentId": "HET2",
                "title": "Krell Troubleshooting Guide for Commercial Brewers",
                "version": "1.0",
                "answerId": 1055028,
                "locale": {
                    "recordId": "en_US",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/locales/en_US",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "dateModified": "2021-03-16T20:54:33+0000",
                "displayStartDate": "1900-01-01T00:00:00+0000",
                "displayEndDate": "9999-12-31T00:00:00+0000",
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content/F7399B002AAA4B55AB1D5A56F4C243D9",
                        "mediaType": "application/json, application/xml",
                        "method": "GET"
                    },
                    {
                        "rel": "collection",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content",
                        "mediaType": "application/json, application/xml",
                        "method": "GET",
                        "profile": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/metadata-catalog/content"
                    }
                ],
                "contentType": {
                    "recordId": "B6CDEA8DE4564542BEF00F2F8F897524",
                    "referenceKey": "HOT_EXTERNAL__TROUBLE_SHOOTING",
                    "name": "HOT External - Troubleshooting Tips",
                    "stripeCd": "ORA_SVC_CRM",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/contentTypes/B6CDEA8DE4564542BEF00F2F8F897524",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "priority": "PRIORITY_0",
                "createDate": "2021-03-16T20:54:30+0000",
                "lastModifiedDate": "2021-03-16T20:54:30+0000",
                "dateAdded": "2021-03-16T20:54:30+0000",
                "owner": {
                    "recordId": 300000001068877,
                    "name": "Matt Krell",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000001068877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "lastModifier": {
                    "recordId": 300000001068877,
                    "name": "Matt Krell",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000001068877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "creator": {
                    "recordId": 300000001068877,
                    "name": "Matt Krell",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000001068877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "published": true,
                "pending": false,
                "publishDate": "2021-03-16T20:54:33+0000",
                "checkedOut": false,
                "publishedVersion": "1.0",
                "xml": "<HOT_EXTERNAL__TROUBLE_SHOOTING><TITLE><![CDATA[Krell Troubleshooting Guide for Commercial Brewers]]></TITLE><DETAILS><![CDATA[Don't put plugged in brewer in the bathtub]]></DETAILS></HOT_EXTERNAL__TROUBLE_SHOOTING>",
                "resourcePath": "$STAGING_RESOURCE_HOST_URL/fusion/content/draft/F7399B002AAA4B55AB1D5A56F4C243D9/053392A06A2F410DA9A5B225DDB2A4AF/"
            },
            {
                "recordId": "01C66270BEF648149C99487802464F85",
                "versionId": "AA50588251FF48839F620CDEEF3F2361",
                "documentId": "HEF3",
                "title": "Krell FAQ 2 for Commercial Brewers",
                "version": "1.0",
                "answerId": 1055027,
                "locale": {
                    "recordId": "en_US",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/locales/en_US",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "dateModified": "2021-03-16T20:52:58+0000",
                "displayStartDate": "1900-01-01T00:00:00+0000",
                "displayEndDate": "9999-12-31T00:00:00+0000",
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content/01C66270BEF648149C99487802464F85",
                        "mediaType": "application/json, application/xml",
                        "method": "GET"
                    },
                    {
                        "rel": "collection",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content",
                        "mediaType": "application/json, application/xml",
                        "method": "GET",
                        "profile": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/metadata-catalog/content"
                    }
                ],
                "contentType": {
                    "recordId": "BE195A09CCE04B1B8A228EB7434E8A2C",
                    "referenceKey": "HOT_EXTERNAL__FAQ",
                    "name": "HOT External - FAQ",
                    "stripeCd": "ORA_SVC_CRM",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/contentTypes/BE195A09CCE04B1B8A228EB7434E8A2C",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "priority": "PRIORITY_0",
                "createDate": "2021-03-16T20:52:54+0000",
                "lastModifiedDate": "2021-03-16T20:52:54+0000",
                "dateAdded": "2021-03-16T20:52:54+0000",
                "owner": {
                    "recordId": 300000001068877,
                    "name": "Matt Krell",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000001068877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "lastModifier": {
                    "recordId": 300000001068877,
                    "name": "Matt Krell",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000001068877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "creator": {
                    "recordId": 300000001068877,
                    "name": "Matt Krell",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000001068877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "published": true,
                "pending": false,
                "publishDate": "2021-03-16T20:52:58+0000",
                "checkedOut": false,
                "publishedVersion": "1.0",
                "xml": "<HOT_EXTERNAL__FAQ><TITLE><![CDATA[Krell FAQ 2 for Commercial Brewers]]></TITLE><ANSWER><![CDATA[Plumb to water line]]></ANSWER></HOT_EXTERNAL__FAQ>",
                "resourcePath": "$STAGING_RESOURCE_HOST_URL/fusion/content/draft/01C66270BEF648149C99487802464F85/AA50588251FF48839F620CDEEF3F2361/"
            },
            {
                "recordId": "7180015A7ADC4ED1986B7A40E4D615ED",
                "versionId": "E024A2C6B3284C7794C198C99825FFA2",
                "documentId": "HEF2",
                "title": "Krell FAQ for Commercial Brewers",
                "version": "1.0",
                "answerId": 1055026,
                "locale": {
                    "recordId": "en_US",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/locales/en_US",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "dateModified": "2021-03-16T20:51:50+0000",
                "displayStartDate": "1900-01-01T00:00:00+0000",
                "displayEndDate": "9999-12-31T00:00:00+0000",
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content/7180015A7ADC4ED1986B7A40E4D615ED",
                        "mediaType": "application/json, application/xml",
                        "method": "GET"
                    },
                    {
                        "rel": "collection",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content",
                        "mediaType": "application/json, application/xml",
                        "method": "GET",
                        "profile": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/metadata-catalog/content"
                    }
                ],
                "contentType": {
                    "recordId": "BE195A09CCE04B1B8A228EB7434E8A2C",
                    "referenceKey": "HOT_EXTERNAL__FAQ",
                    "name": "HOT External - FAQ",
                    "stripeCd": "ORA_SVC_CRM",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/contentTypes/BE195A09CCE04B1B8A228EB7434E8A2C",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "priority": "PRIORITY_0",
                "createDate": "2021-03-16T20:51:43+0000",
                "lastModifiedDate": "2021-03-16T20:51:43+0000",
                "dateAdded": "2021-03-16T20:51:43+0000",
                "owner": {
                    "recordId": 300000001068877,
                    "name": "Matt Krell",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000001068877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "lastModifier": {
                    "recordId": 300000001068877,
                    "name": "Matt Krell",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000001068877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "creator": {
                    "recordId": 300000001068877,
                    "name": "Matt Krell",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000001068877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "published": true,
                "pending": false,
                "publishDate": "2021-03-16T20:51:50+0000",
                "checkedOut": false,
                "publishedVersion": "1.0",
                "xml": "<HOT_EXTERNAL__FAQ><TITLE><![CDATA[Krell FAQ for Commercial Brewers]]></TITLE><ANSWER><![CDATA[Plug it in and make some coffee.]]></ANSWER></HOT_EXTERNAL__FAQ>",
                "resourcePath": "$STAGING_RESOURCE_HOST_URL/fusion/content/draft/7180015A7ADC4ED1986B7A40E4D615ED/E024A2C6B3284C7794C198C99825FFA2/"
            },
            {
                "recordId": "42CEABC1E3A3472A9C86E717A967E190",
                "versionId": "0B6EDC209B254EF594CA72859938EAEC",
                "documentId": "CFAQ15",
                "title": "Cold FAQ Test",
                "version": "1.0",
                "answerId": 1055025,
                "locale": {
                    "recordId": "en_US",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/locales/en_US",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "dateModified": "2021-03-16T19:32:07+0000",
                "displayStartDate": "1900-01-01T00:00:00+0000",
                "displayEndDate": "9999-12-31T00:00:00+0000",
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content/42CEABC1E3A3472A9C86E717A967E190",
                        "mediaType": "application/json, application/xml",
                        "method": "GET"
                    },
                    {
                        "rel": "collection",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content",
                        "mediaType": "application/json, application/xml",
                        "method": "GET",
                        "profile": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/metadata-catalog/content"
                    }
                ],
                "contentType": {
                    "recordId": "9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                    "referenceKey": "COLDFAQ",
                    "name": "COLD - FAQ",
                    "stripeCd": "ORA_SVC_CRM",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/contentTypes/9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "priority": "PRIORITY_0",
                "createDate": "2021-03-16T19:32:01+0000",
                "lastModifiedDate": "2021-03-16T19:32:01+0000",
                "dateAdded": "2021-03-16T19:32:01+0000",
                "owner": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "lastModifier": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "creator": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "published": true,
                "pending": false,
                "publishDate": "2021-03-16T19:32:07+0000",
                "checkedOut": false,
                "publishedVersion": "1.0",
                "xml": "<COLDFAQ><TITLE><![CDATA[Cold FAQ Test]]></TITLE><ANSWER><![CDATA[Cold FAQ Test]]></ANSWER></COLDFAQ>",
                "resourcePath": "$STAGING_RESOURCE_HOST_URL/fusion/content/draft/42CEABC1E3A3472A9C86E717A967E190/0B6EDC209B254EF594CA72859938EAEC/"
            },
            {
                "recordId": "34D18FBB476B46EDA178530F423BC5E4",
                "versionId": "8FE5B2F17E7F4A02B0DD93DC24C92776",
                "documentId": "CFAQ14",
                "title": "Cold FAQ Test",
                "version": "1.0",
                "answerId": 1055024,
                "locale": {
                    "recordId": "en_US",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/locales/en_US",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "dateModified": "2021-03-16T19:31:42+0000",
                "displayStartDate": "1900-01-01T00:00:00+0000",
                "displayEndDate": "9999-12-31T00:00:00+0000",
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content/34D18FBB476B46EDA178530F423BC5E4",
                        "mediaType": "application/json, application/xml",
                        "method": "GET"
                    },
                    {
                        "rel": "collection",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content",
                        "mediaType": "application/json, application/xml",
                        "method": "GET",
                        "profile": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/metadata-catalog/content"
                    }
                ],
                "contentType": {
                    "recordId": "9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                    "referenceKey": "COLDFAQ",
                    "name": "COLD - FAQ",
                    "stripeCd": "ORA_SVC_CRM",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/contentTypes/9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "priority": "PRIORITY_0",
                "createDate": "2021-03-16T19:31:39+0000",
                "lastModifiedDate": "2021-03-16T19:31:39+0000",
                "dateAdded": "2021-03-16T19:31:39+0000",
                "owner": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "lastModifier": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "creator": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "published": true,
                "pending": false,
                "publishDate": "2021-03-16T19:31:42+0000",
                "checkedOut": false,
                "publishedVersion": "1.0",
                "xml": "<COLDFAQ><TITLE><![CDATA[Cold FAQ Test]]></TITLE><ANSWER><![CDATA[Cold FAQ Test]]></ANSWER></COLDFAQ>",
                "resourcePath": "$STAGING_RESOURCE_HOST_URL/fusion/content/draft/34D18FBB476B46EDA178530F423BC5E4/8FE5B2F17E7F4A02B0DD93DC24C92776/"
            },
            {
                "recordId": "2E390BEFB2D14A4BA221E82EE3047A49",
                "versionId": "67FD6AC3E249436D83A944962E7C2634",
                "documentId": "CFAQ13",
                "title": "Cold FAQ Test",
                "version": "1.0",
                "answerId": 1055023,
                "locale": {
                    "recordId": "en_US",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/locales/en_US",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "dateModified": "2021-03-16T19:31:18+0000",
                "displayStartDate": "1900-01-01T00:00:00+0000",
                "displayEndDate": "9999-12-31T00:00:00+0000",
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content/2E390BEFB2D14A4BA221E82EE3047A49",
                        "mediaType": "application/json, application/xml",
                        "method": "GET"
                    },
                    {
                        "rel": "collection",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content",
                        "mediaType": "application/json, application/xml",
                        "method": "GET",
                        "profile": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/metadata-catalog/content"
                    }
                ],
                "contentType": {
                    "recordId": "9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                    "referenceKey": "COLDFAQ",
                    "name": "COLD - FAQ",
                    "stripeCd": "ORA_SVC_CRM",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/contentTypes/9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "priority": "PRIORITY_0",
                "createDate": "2021-03-16T19:31:14+0000",
                "lastModifiedDate": "2021-03-16T19:31:14+0000",
                "dateAdded": "2021-03-16T19:31:14+0000",
                "owner": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "lastModifier": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "creator": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "published": true,
                "pending": false,
                "publishDate": "2021-03-16T19:31:18+0000",
                "checkedOut": false,
                "publishedVersion": "1.0",
                "xml": "<COLDFAQ><TITLE><![CDATA[Cold FAQ Test]]></TITLE><ANSWER><![CDATA[Cold FAQ Test]]></ANSWER></COLDFAQ>",
                "resourcePath": "$STAGING_RESOURCE_HOST_URL/fusion/content/draft/2E390BEFB2D14A4BA221E82EE3047A49/67FD6AC3E249436D83A944962E7C2634/"
            },
            {
                "recordId": "7E451283B10A40EE9575B3557A29246B",
                "versionId": "6697DDF42EA942EAA7F9ABE74471E327",
                "documentId": "CFAQ12",
                "title": "Cold FAQ Test",
                "version": "1.0",
                "answerId": 1055022,
                "locale": {
                    "recordId": "en_US",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/locales/en_US",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "dateModified": "2021-03-16T19:30:53+0000",
                "displayStartDate": "1900-01-01T00:00:00+0000",
                "displayEndDate": "9999-12-31T00:00:00+0000",
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content/7E451283B10A40EE9575B3557A29246B",
                        "mediaType": "application/json, application/xml",
                        "method": "GET"
                    },
                    {
                        "rel": "collection",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content",
                        "mediaType": "application/json, application/xml",
                        "method": "GET",
                        "profile": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/metadata-catalog/content"
                    }
                ],
                "contentType": {
                    "recordId": "9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                    "referenceKey": "COLDFAQ",
                    "name": "COLD - FAQ",
                    "stripeCd": "ORA_SVC_CRM",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/contentTypes/9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "priority": "PRIORITY_0",
                "createDate": "2021-03-16T19:30:50+0000",
                "lastModifiedDate": "2021-03-16T19:30:50+0000",
                "dateAdded": "2021-03-16T19:30:50+0000",
                "owner": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "lastModifier": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "creator": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "published": true,
                "pending": false,
                "publishDate": "2021-03-16T19:30:53+0000",
                "checkedOut": false,
                "publishedVersion": "1.0",
                "xml": "<COLDFAQ><TITLE><![CDATA[Cold FAQ Test]]></TITLE><ANSWER><![CDATA[Cold FAQ Test]]></ANSWER></COLDFAQ>",
                "resourcePath": "$STAGING_RESOURCE_HOST_URL/fusion/content/draft/7E451283B10A40EE9575B3557A29246B/6697DDF42EA942EAA7F9ABE74471E327/"
            },
            {
                "recordId": "2FC864156A414AF6A40914F56C4FEA9E",
                "versionId": "4EDC945CDF2C4FE0AAE5357AC8A2D343",
                "documentId": "CFAQ11",
                "title": "Cold FAQ Test",
                "version": "1.0",
                "answerId": 1055021,
                "locale": {
                    "recordId": "en_US",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/locales/en_US",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "dateModified": "2021-03-16T19:30:31+0000",
                "displayStartDate": "1900-01-01T00:00:00+0000",
                "displayEndDate": "9999-12-31T00:00:00+0000",
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content/2FC864156A414AF6A40914F56C4FEA9E",
                        "mediaType": "application/json, application/xml",
                        "method": "GET"
                    },
                    {
                        "rel": "collection",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content",
                        "mediaType": "application/json, application/xml",
                        "method": "GET",
                        "profile": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/metadata-catalog/content"
                    }
                ],
                "contentType": {
                    "recordId": "9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                    "referenceKey": "COLDFAQ",
                    "name": "COLD - FAQ",
                    "stripeCd": "ORA_SVC_CRM",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/contentTypes/9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "priority": "PRIORITY_0",
                "createDate": "2021-03-16T19:30:23+0000",
                "lastModifiedDate": "2021-03-16T19:30:23+0000",
                "dateAdded": "2021-03-16T19:30:23+0000",
                "owner": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "lastModifier": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "creator": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "published": true,
                "pending": false,
                "publishDate": "2021-03-16T19:30:31+0000",
                "checkedOut": false,
                "publishedVersion": "1.0",
                "xml": "<COLDFAQ><TITLE><![CDATA[Cold FAQ Test]]></TITLE><ANSWER><![CDATA[Cold FAQ Test]]></ANSWER></COLDFAQ>",
                "resourcePath": "$STAGING_RESOURCE_HOST_URL/fusion/content/draft/2FC864156A414AF6A40914F56C4FEA9E/4EDC945CDF2C4FE0AAE5357AC8A2D343/"
            },
            {
                "recordId": "937BAEA473634DAD997269F4CDA67228",
                "versionId": "2759BC91B6D841C1A5CD0C595C355A10",
                "documentId": "CFAQ10",
                "title": "Cold FAQ Test",
                "version": "1.0",
                "answerId": 1055020,
                "locale": {
                    "recordId": "en_US",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/locales/en_US",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "dateModified": "2021-03-16T19:30:05+0000",
                "displayStartDate": "1900-01-01T00:00:00+0000",
                "displayEndDate": "9999-12-31T00:00:00+0000",
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content/937BAEA473634DAD997269F4CDA67228",
                        "mediaType": "application/json, application/xml",
                        "method": "GET"
                    },
                    {
                        "rel": "collection",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content",
                        "mediaType": "application/json, application/xml",
                        "method": "GET",
                        "profile": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/metadata-catalog/content"
                    }
                ],
                "contentType": {
                    "recordId": "9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                    "referenceKey": "COLDFAQ",
                    "name": "COLD - FAQ",
                    "stripeCd": "ORA_SVC_CRM",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/contentTypes/9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "priority": "PRIORITY_0",
                "createDate": "2021-03-16T19:30:00+0000",
                "lastModifiedDate": "2021-03-16T19:30:00+0000",
                "dateAdded": "2021-03-16T19:30:00+0000",
                "owner": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "lastModifier": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "creator": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "published": true,
                "pending": false,
                "publishDate": "2021-03-16T19:30:05+0000",
                "checkedOut": false,
                "publishedVersion": "1.0",
                "xml": "<COLDFAQ><TITLE><![CDATA[Cold FAQ Test]]></TITLE><ANSWER><![CDATA[Cold FAQ Test]]></ANSWER></COLDFAQ>",
                "resourcePath": "$STAGING_RESOURCE_HOST_URL/fusion/content/draft/937BAEA473634DAD997269F4CDA67228/2759BC91B6D841C1A5CD0C595C355A10/"
            },
            {
                "recordId": "2BB8A28431F24E65B396C7D0AEA292DF",
                "versionId": "528311EA91AB4A918E16095B1F2F035E",
                "documentId": "CFAQ9",
                "title": "Cold FAQ Test",
                "version": "1.0",
                "answerId": 1055019,
                "locale": {
                    "recordId": "en_US",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/locales/en_US",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "dateModified": "2021-03-16T19:29:39+0000",
                "displayStartDate": "1900-01-01T00:00:00+0000",
                "displayEndDate": "9999-12-31T00:00:00+0000",
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content/2BB8A28431F24E65B396C7D0AEA292DF",
                        "mediaType": "application/json, application/xml",
                        "method": "GET"
                    },
                    {
                        "rel": "collection",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content",
                        "mediaType": "application/json, application/xml",
                        "method": "GET",
                        "profile": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/metadata-catalog/content"
                    }
                ],
                "contentType": {
                    "recordId": "9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                    "referenceKey": "COLDFAQ",
                    "name": "COLD - FAQ",
                    "stripeCd": "ORA_SVC_CRM",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/contentTypes/9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "priority": "PRIORITY_0",
                "createDate": "2021-03-16T19:29:35+0000",
                "lastModifiedDate": "2021-03-16T19:29:35+0000",
                "dateAdded": "2021-03-16T19:29:35+0000",
                "owner": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "lastModifier": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "creator": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "published": true,
                "pending": false,
                "publishDate": "2021-03-16T19:29:39+0000",
                "checkedOut": false,
                "publishedVersion": "1.0",
                "xml": "<COLDFAQ><TITLE><![CDATA[Cold FAQ Test]]></TITLE><ANSWER><![CDATA[Cold FAQ Test]]></ANSWER></COLDFAQ>",
                "resourcePath": "$STAGING_RESOURCE_HOST_URL/fusion/content/draft/2BB8A28431F24E65B396C7D0AEA292DF/528311EA91AB4A918E16095B1F2F035E/"
            },
            {
                "recordId": "5312CB0FCDE94C7D95A4D41BA10BEA77",
                "versionId": "EFDE95400D30472280B0B4BCC9E7FDEE",
                "documentId": "CFAQ8",
                "title": "Cold FAQ Test",
                "version": "1.0",
                "answerId": 1055018,
                "locale": {
                    "recordId": "en_US",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/locales/en_US",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "dateModified": "2021-03-16T19:29:16+0000",
                "displayStartDate": "1900-01-01T00:00:00+0000",
                "displayEndDate": "9999-12-31T00:00:00+0000",
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content/5312CB0FCDE94C7D95A4D41BA10BEA77",
                        "mediaType": "application/json, application/xml",
                        "method": "GET"
                    },
                    {
                        "rel": "collection",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content",
                        "mediaType": "application/json, application/xml",
                        "method": "GET",
                        "profile": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/metadata-catalog/content"
                    }
                ],
                "contentType": {
                    "recordId": "9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                    "referenceKey": "COLDFAQ",
                    "name": "COLD - FAQ",
                    "stripeCd": "ORA_SVC_CRM",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/contentTypes/9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "priority": "PRIORITY_0",
                "createDate": "2021-03-16T19:29:11+0000",
                "lastModifiedDate": "2021-03-16T19:29:11+0000",
                "dateAdded": "2021-03-16T19:29:11+0000",
                "owner": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "lastModifier": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "creator": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "published": true,
                "pending": false,
                "publishDate": "2021-03-16T19:29:16+0000",
                "checkedOut": false,
                "publishedVersion": "1.0",
                "xml": "<COLDFAQ><TITLE><![CDATA[Cold FAQ Test]]></TITLE><ANSWER><![CDATA[Cold FAQ Test]]></ANSWER></COLDFAQ>",
                "resourcePath": "$STAGING_RESOURCE_HOST_URL/fusion/content/draft/5312CB0FCDE94C7D95A4D41BA10BEA77/EFDE95400D30472280B0B4BCC9E7FDEE/"
            },
            {
                "recordId": "8E5B2F3A21974FBC8CC36464ACAD4C5A",
                "versionId": "49CEBF5637254171841A36F46B40C800",
                "documentId": "CFAQ7",
                "title": "Cold FAQ Test",
                "version": "1.0",
                "answerId": 1055017,
                "locale": {
                    "recordId": "en_US",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/locales/en_US",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "dateModified": "2021-03-16T19:28:49+0000",
                "displayStartDate": "1900-01-01T00:00:00+0000",
                "displayEndDate": "9999-12-31T00:00:00+0000",
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content/8E5B2F3A21974FBC8CC36464ACAD4C5A",
                        "mediaType": "application/json, application/xml",
                        "method": "GET"
                    },
                    {
                        "rel": "collection",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content",
                        "mediaType": "application/json, application/xml",
                        "method": "GET",
                        "profile": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/metadata-catalog/content"
                    }
                ],
                "contentType": {
                    "recordId": "9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                    "referenceKey": "COLDFAQ",
                    "name": "COLD - FAQ",
                    "stripeCd": "ORA_SVC_CRM",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/contentTypes/9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "priority": "PRIORITY_0",
                "createDate": "2021-03-16T19:28:41+0000",
                "lastModifiedDate": "2021-03-16T19:28:41+0000",
                "dateAdded": "2021-03-16T19:28:41+0000",
                "owner": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "lastModifier": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "creator": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "published": true,
                "pending": false,
                "publishDate": "2021-03-16T19:28:49+0000",
                "checkedOut": false,
                "publishedVersion": "1.0",
                "xml": "<COLDFAQ><TITLE><![CDATA[Cold FAQ Test]]></TITLE><ANSWER><![CDATA[Cold FAQ Test]]></ANSWER></COLDFAQ>",
                "resourcePath": "$STAGING_RESOURCE_HOST_URL/fusion/content/draft/8E5B2F3A21974FBC8CC36464ACAD4C5A/49CEBF5637254171841A36F46B40C800/"
            },
            {
                "recordId": "E9797335204A4827A660B7FD24528C3A",
                "versionId": "B1C0F9DA11134C0FA0E20A83A58B124E",
                "documentId": "CFAQ6",
                "title": "Cold FAQ Test",
                "version": "1.0",
                "answerId": 1055016,
                "locale": {
                    "recordId": "en_US",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/locales/en_US",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "dateModified": "2021-03-16T19:28:19+0000",
                "displayStartDate": "1900-01-01T00:00:00+0000",
                "displayEndDate": "9999-12-31T00:00:00+0000",
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content/E9797335204A4827A660B7FD24528C3A",
                        "mediaType": "application/json, application/xml",
                        "method": "GET"
                    },
                    {
                        "rel": "collection",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content",
                        "mediaType": "application/json, application/xml",
                        "method": "GET",
                        "profile": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/metadata-catalog/content"
                    }
                ],
                "contentType": {
                    "recordId": "9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                    "referenceKey": "COLDFAQ",
                    "name": "COLD - FAQ",
                    "stripeCd": "ORA_SVC_CRM",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/contentTypes/9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "priority": "PRIORITY_0",
                "createDate": "2021-03-16T19:28:14+0000",
                "lastModifiedDate": "2021-03-16T19:28:14+0000",
                "dateAdded": "2021-03-16T19:28:14+0000",
                "owner": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "lastModifier": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "creator": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "published": true,
                "pending": false,
                "publishDate": "2021-03-16T19:28:19+0000",
                "checkedOut": false,
                "publishedVersion": "1.0",
                "xml": "<COLDFAQ><TITLE><![CDATA[Cold FAQ Test]]></TITLE><ANSWER><![CDATA[Cold FAQ Test]]></ANSWER></COLDFAQ>",
                "resourcePath": "$STAGING_RESOURCE_HOST_URL/fusion/content/draft/E9797335204A4827A660B7FD24528C3A/B1C0F9DA11134C0FA0E20A83A58B124E/"
            },
            {
                "recordId": "806E572C14C245E8AE31EA0D75E47A39",
                "versionId": "507E6FFF0C304A40ABD0B14CA0C846A2",
                "documentId": "CFAQ5",
                "title": "Cold FAQ Test",
                "version": "1.0",
                "answerId": 1055015,
                "locale": {
                    "recordId": "en_US",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/locales/en_US",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "dateModified": "2021-03-16T19:27:51+0000",
                "displayStartDate": "1900-01-01T00:00:00+0000",
                "displayEndDate": "9999-12-31T00:00:00+0000",
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content/806E572C14C245E8AE31EA0D75E47A39",
                        "mediaType": "application/json, application/xml",
                        "method": "GET"
                    },
                    {
                        "rel": "collection",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content",
                        "mediaType": "application/json, application/xml",
                        "method": "GET",
                        "profile": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/metadata-catalog/content"
                    }
                ],
                "contentType": {
                    "recordId": "9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                    "referenceKey": "COLDFAQ",
                    "name": "COLD - FAQ",
                    "stripeCd": "ORA_SVC_CRM",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/contentTypes/9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "priority": "PRIORITY_0",
                "createDate": "2021-03-16T19:27:46+0000",
                "lastModifiedDate": "2021-03-16T19:27:46+0000",
                "dateAdded": "2021-03-16T19:27:46+0000",
                "owner": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "lastModifier": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "creator": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "published": true,
                "pending": false,
                "publishDate": "2021-03-16T19:27:51+0000",
                "checkedOut": false,
                "publishedVersion": "1.0",
                "xml": "<COLDFAQ><TITLE><![CDATA[Cold FAQ Test]]></TITLE><ANSWER><![CDATA[Cold FAQ Test]]></ANSWER></COLDFAQ>",
                "resourcePath": "$STAGING_RESOURCE_HOST_URL/fusion/content/draft/806E572C14C245E8AE31EA0D75E47A39/507E6FFF0C304A40ABD0B14CA0C846A2/"
            },
            {
                "recordId": "1DF26EECCD4244A7A40F34C463DBB6EB",
                "versionId": "757B78BB976544D68CC5804E86CCEE5B",
                "documentId": "CFAQ4",
                "title": "Cold FAQ Test",
                "version": "1.0",
                "answerId": 1055014,
                "locale": {
                    "recordId": "en_US",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/locales/en_US",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "dateModified": "2021-03-16T19:27:18+0000",
                "displayStartDate": "1900-01-01T00:00:00+0000",
                "displayEndDate": "9999-12-31T00:00:00+0000",
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content/1DF26EECCD4244A7A40F34C463DBB6EB",
                        "mediaType": "application/json, application/xml",
                        "method": "GET"
                    },
                    {
                        "rel": "collection",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content",
                        "mediaType": "application/json, application/xml",
                        "method": "GET",
                        "profile": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/metadata-catalog/content"
                    }
                ],
                "contentType": {
                    "recordId": "9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                    "referenceKey": "COLDFAQ",
                    "name": "COLD - FAQ",
                    "stripeCd": "ORA_SVC_CRM",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/contentTypes/9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "priority": "PRIORITY_0",
                "createDate": "2021-03-16T19:27:13+0000",
                "lastModifiedDate": "2021-03-16T19:27:13+0000",
                "dateAdded": "2021-03-16T19:27:13+0000",
                "owner": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "lastModifier": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "creator": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "published": true,
                "pending": false,
                "publishDate": "2021-03-16T19:27:18+0000",
                "checkedOut": false,
                "publishedVersion": "1.0",
                "xml": "<COLDFAQ><TITLE><![CDATA[Cold FAQ Test]]></TITLE><ANSWER><![CDATA[Cold FAQ Test]]></ANSWER></COLDFAQ>",
                "resourcePath": "$STAGING_RESOURCE_HOST_URL/fusion/content/draft/1DF26EECCD4244A7A40F34C463DBB6EB/757B78BB976544D68CC5804E86CCEE5B/"
            },
            {
                "recordId": "92ADB641661445AE9FE2C03E1D21CEC4",
                "versionId": "CF8225EC3778441282BC3151742D72E9",
                "documentId": "CFAQ3",
                "title": "Cold FAQ Test",
                "version": "1.0",
                "answerId": 1055013,
                "locale": {
                    "recordId": "en_US",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/locales/en_US",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "dateModified": "2021-03-16T19:26:35+0000",
                "displayStartDate": "1900-01-01T00:00:00+0000",
                "displayEndDate": "9999-12-31T00:00:00+0000",
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content/92ADB641661445AE9FE2C03E1D21CEC4",
                        "mediaType": "application/json, application/xml",
                        "method": "GET"
                    },
                    {
                        "rel": "collection",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content",
                        "mediaType": "application/json, application/xml",
                        "method": "GET",
                        "profile": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/metadata-catalog/content"
                    }
                ],
                "contentType": {
                    "recordId": "9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                    "referenceKey": "COLDFAQ",
                    "name": "COLD - FAQ",
                    "stripeCd": "ORA_SVC_CRM",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/contentTypes/9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "priority": "PRIORITY_0",
                "createDate": "2021-03-16T19:26:30+0000",
                "lastModifiedDate": "2021-03-16T19:26:30+0000",
                "dateAdded": "2021-03-16T19:26:30+0000",
                "owner": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "lastModifier": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "creator": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "published": true,
                "pending": false,
                "publishDate": "2021-03-16T19:26:35+0000",
                "checkedOut": false,
                "publishedVersion": "1.0",
                "xml": "<COLDFAQ><TITLE><![CDATA[Cold FAQ Test]]></TITLE><ANSWER><![CDATA[Cold FAQ Test]]></ANSWER></COLDFAQ>",
                "resourcePath": "$STAGING_RESOURCE_HOST_URL/fusion/content/draft/92ADB641661445AE9FE2C03E1D21CEC4/CF8225EC3778441282BC3151742D72E9/"
            },
            {
                "recordId": "AD9CD1CECCC9417AB48B19B6518083D1",
                "versionId": "B4364A033F914AD4848FCC5F8BE26C33",
                "documentId": "CFAQ2",
                "title": "Cold FAQ Test",
                "version": "1.0",
                "answerId": 1055012,
                "locale": {
                    "recordId": "en_US",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/locales/en_US",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "dateModified": "2021-03-16T19:25:55+0000",
                "displayStartDate": "1900-01-01T00:00:00+0000",
                "displayEndDate": "9999-12-31T00:00:00+0000",
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content/AD9CD1CECCC9417AB48B19B6518083D1",
                        "mediaType": "application/json, application/xml",
                        "method": "GET"
                    },
                    {
                        "rel": "collection",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content",
                        "mediaType": "application/json, application/xml",
                        "method": "GET",
                        "profile": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/metadata-catalog/content"
                    }
                ],
                "contentType": {
                    "recordId": "9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                    "referenceKey": "COLDFAQ",
                    "name": "COLD - FAQ",
                    "stripeCd": "ORA_SVC_CRM",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/contentTypes/9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "priority": "PRIORITY_0",
                "createDate": "2021-03-16T19:25:49+0000",
                "lastModifiedDate": "2021-03-16T19:25:49+0000",
                "dateAdded": "2021-03-16T19:25:49+0000",
                "owner": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "lastModifier": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "creator": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "published": true,
                "pending": false,
                "publishDate": "2021-03-16T19:25:55+0000",
                "checkedOut": false,
                "publishedVersion": "1.0",
                "xml": "<COLDFAQ><TITLE><![CDATA[Cold FAQ Test]]></TITLE><ANSWER><![CDATA[Cold FAQ Test]]></ANSWER></COLDFAQ>",
                "resourcePath": "$STAGING_RESOURCE_HOST_URL/fusion/content/draft/AD9CD1CECCC9417AB48B19B6518083D1/B4364A033F914AD4848FCC5F8BE26C33/"
            },
            {
                "recordId": "79EBB40CE7114B6396F0C6D0966BFBC9",
                "versionId": "0CA7EC31FCD6435B8DF50FBB050C4DCC",
                "documentId": "CFAQ1",
                "title": "Cold FAQ Test",
                "version": "1.0",
                "answerId": 1055011,
                "locale": {
                    "recordId": "en_US",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/locales/en_US",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "dateModified": "2021-03-16T19:25:03+0000",
                "displayStartDate": "1900-01-01T00:00:00+0000",
                "displayEndDate": "9999-12-31T00:00:00+0000",
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content/79EBB40CE7114B6396F0C6D0966BFBC9",
                        "mediaType": "application/json, application/xml",
                        "method": "GET"
                    },
                    {
                        "rel": "collection",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content",
                        "mediaType": "application/json, application/xml",
                        "method": "GET",
                        "profile": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/metadata-catalog/content"
                    }
                ],
                "contentType": {
                    "recordId": "9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                    "referenceKey": "COLDFAQ",
                    "name": "COLD - FAQ",
                    "stripeCd": "ORA_SVC_CRM",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/contentTypes/9B9F9951A3B44DBD9A4E4E2BFE44B2F5",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "priority": "PRIORITY_0",
                "createDate": "2021-03-16T19:24:57+0000",
                "lastModifiedDate": "2021-03-16T19:24:57+0000",
                "dateAdded": "2021-03-16T19:24:57+0000",
                "owner": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "lastModifier": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "creator": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "published": true,
                "pending": false,
                "publishDate": "2021-03-16T19:25:03+0000",
                "checkedOut": false,
                "publishedVersion": "1.0",
                "xml": "<COLDFAQ><TITLE><![CDATA[Cold FAQ Test]]></TITLE><ANSWER><![CDATA[Cold FAQ Test]]></ANSWER></COLDFAQ>",
                "resourcePath": "$STAGING_RESOURCE_HOST_URL/fusion/content/draft/79EBB40CE7114B6396F0C6D0966BFBC9/0CA7EC31FCD6435B8DF50FBB050C4DCC/"
            },
            {
                "recordId": "3CC78334AA984E9B8DFD10C8B4A1B676",
                "versionId": "A76128C3A77F4090A7F3AB14793448E9",
                "documentId": "HEU1",
                "title": "Kjell Test",
                "version": "1.0",
                "answerId": 1053013,
                "locale": {
                    "recordId": "en_US",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/locales/en_US",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "dateModified": "2021-03-16T01:21:39+0000",
                "displayStartDate": "1900-01-01T00:00:00+0000",
                "displayEndDate": "9999-12-31T00:00:00+0000",
                "links": [
                    {
                        "rel": "canonical",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content/3CC78334AA984E9B8DFD10C8B4A1B676",
                        "mediaType": "application/json, application/xml",
                        "method": "GET"
                    },
                    {
                        "rel": "collection",
                        "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content",
                        "mediaType": "application/json, application/xml",
                        "method": "GET",
                        "profile": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/metadata-catalog/content"
                    }
                ],
                "contentType": {
                    "recordId": "9E85A70E6E674393A0B82F2992D37694",
                    "referenceKey": "HOT_EXTERNAL__USE_CARE",
                    "name": "HOT External - Use & Care Guide",
                    "stripeCd": "ORA_SVC_CRM",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/contentTypes/9E85A70E6E674393A0B82F2992D37694",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "priority": "PRIORITY_0",
                "createDate": "2021-03-16T01:21:34+0000",
                "lastModifiedDate": "2021-03-16T01:21:34+0000",
                "dateAdded": "2021-03-16T01:21:34+0000",
                "owner": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "lastModifier": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "creator": {
                    "recordId": 300000382626877,
                    "name": "Kjell Nygaard",
                    "email": "********",
                    "externalType": "ACCOUNT",
                    "links": [
                        {
                            "rel": "canonical",
                            "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/users/300000382626877",
                            "mediaType": "application/json, application/xml",
                            "method": "GET"
                        }
                    ]
                },
                "published": true,
                "pending": false,
                "publishDate": "2021-03-16T01:21:39+0000",
                "checkedOut": false,
                "publishedVersion": "1.0",
                "xml": "<HOT_EXTERNAL__USE_CARE><TITLE><![CDATA[Kjell Test]]></TITLE><DETAILS><![CDATA[Kjell Test]]></DETAILS></HOT_EXTERNAL__USE_CARE>",
                "resourcePath": "$STAGING_RESOURCE_HOST_URL/fusion/content/draft/3CC78334AA984E9B8DFD10C8B4A1B676/A76128C3A77F4090A7F3AB14793448E9/"
            }
        ],
        "hasMore": true,
        "limit": 20,
        "offset": 0,
        "links": [
            {
                "rel": "canonical",
                "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content?limit=20&offset=0&mode=EXTENDED",
                "mediaType": "application/json, application/xml",
                "method": "GET"
            },
            {
                "rel": "next",
                "href": "https://ccmu-dev2.fa.us6.oraclecloud.com:443/km/api/latest/content?limit=20&offset=20&mode=EXTENDED",
                "mediaType": "application/json, application/xml",
                "method": "GET"
            }
        ],
        "count": 20
    },
    Category_Filter_Data:{},
    final_page_Load_Data : []
}
  }
  componentDidMount()
  {
   this.onPage_Load_Category_Filter()
  }

  onPage_Load_Category_Filter = ()=>{
      console.log("data divide",this.state.catergoires.items);
      var i;
      const itemsOne = this.state.catergoires.items.slice(0, 5) 
      const itemsTwo = this.state.catergoires.items.slice(5, 10) 
      const itemsThrid = this.state.catergoires.items.slice(10, 15) 

    //   for (i = 0;  this.state.catergoires.items.length > 5; i++) {
    //     filter_Response_By_Seq.push(this.state.catergoires.items[i]);
    //     console.log("filter_Response_By_Seq",filter_Response_By_Seq)
    // }
    console.log("items items",itemsOne);
    console.log("itemsTwo itemsTwo",itemsTwo);
    console.log("itemsThrid itemsThrid",itemsThrid);
  }

  render() {
    return (
    <div className="addmargin">
   Divide_Array
      <div>

      
      </div>
     </div>
     )
  }

}
export default Divide_Array;