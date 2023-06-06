const testData = [
    {
      category: "International phone numbers",
      regex: /\+[1-9]{1}[0-9]{3,14}/g,
      samples: [
        "+1234567890",
        "+9876543210",
        "+1122334455",
        "+9999999999"
      ]
    },
    {
      category: "France Phone Numbers",
      regex: /\b([0O]?[1lI][1lI])?[3E][3E][0O]?[\dOIlZEASB]{9}\b/g,
      samples: [
        "1234567890",
        "9876543210",
        "1122334455",
        "9999999999"
      ]
    },
    {
      category: "German Phone Numbers",
      regex: /\b[\d\w]\d{2}[\d\w]{6}\d[\d\w]\b/g,
      samples: [
        "1234567890",
        "9876543210",
        "1122334455",
        "9999999999"
      ]
    },
    {
      category: "UK Phone Numbers",
      regex: /\b([0O]?[1lI][1lI])?[4A][4A][\dOIlZEASB]{10,11}\b/g,
      samples: [
        "1234567890",
        "9876543210",
        "1122334455",
        "9999999999"
      ]
    },
    {
      category: "US Phone Numbers",
      regex: /\b((\+|\b)[1l][\-\. ])?\(?\b[\dOlZSB]{3,5}([\-\. ]|\) ?)[\dOlZSB]{3}[\-\. ][\dOlZSB]{4}\b/g,
      samples: [
        "123-456-7890",
        "987-654-3210",
        "111-222-3333",
        "999-888-7777"
      ]
    },
    {
      category: "US Street Addresses",
      regex: /\b\d{1,8}\b[\s\S]{10,100}?\b(AK|AL|AR|AZ|CA|CO|CT|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|MA|MD|ME|MI|MN|MO|MS|MT|NC|ND|NE|NH|NJ|NM|NV|NY|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VA|VT|WA|WI|WV|WY)\b\s\d{5}\b/g,
      samples: [
        "123 Main St, New York, NY 12345",
        "456 Elm St, Los Angeles, CA 98765",
        "789 Oak Ave, Chicago, IL 54321",
        "321 Pine Rd, Houston, TX 11111"
      ]
    },
    {
      category: "Email Addresses",
      regex: /\b[a-z0-9._%\+\-—|]+@[a-z0-9.\-—|]+\.[a-z|]{2,6}\b/g,
      samples: [
        "example1@example.com",
        "example2@example.com",
        "example3@example.com",
        "example4@example.com"
      ]
    },
    {
      category: "Birth Dates",
      regex: /\b(birth|birthdate|birthday|dob|born)\W+(?:\w+\W+){0,5}?(?<REDACT>(\d{4}|\d{1,2})[\/\-]\d{1,2}[\/\-](\d{4}|\d{1,2}))\b/g,
      samples: [
        "birth 01/01/1990",
        "birthdate: 05/10/1985",
        "dob 12/31/2000",
        "born: 07/15/1975"
      ]
    },
    {
      category: "IPv4",
      regex: /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g,
      samples: [
        "192.168.0.1",
        "10.0.0.1",
        "172.16.0.1",
        "255.255.255.0"
      ]
    },
    {
      category: "IPv6",
      regex: /\b([\d\w]{4}|0)(\:([\d\w]{4}|0)){7}\b/g,
      samples: [
        "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
        "2001:0db8:abcd:0000:0000:ef01:2345:6789",
        "2001:0db8:1234:5678:abcd:ef01:2345:6789",
        "2001:0db8:aaaa:bbbb:cccc:dddd:eeee:ffff"
      ]
    },
    {
      category: "Credit Cards",
      regex: /\b((4\d{3}|5[1-5]\d{2}|2\d{3}|3[47]\d{1,2})[\s\-]?\d{4,6}[\s\-]?\d{4,6}?([\s\-]\d{3,4})?(\d{3})?)\b/g,
      samples: [
        "4111111111111111",
        "1234567890123456",
        "5555555555554444",
        "378282246310005"
      ]
    },
    {
      category: "ABA Routing Numbers",
      regex: /\b((0[0-9])|(1[0-2])|(2[1-9])|(3[0-2])|(6[1-9])|(7[0-2])|80)([0-9]{7})\b/g,
      samples: [
        "011103093",
        "067014822",
        "211274450",
        "054001725"
      ]
    },
    {
      category: "SWIFT Code",
      regex: /\b[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?\b/g,
      samples: [
        "AAAABBCC123",
      ]
    },
    {
      category: "IBAN Codes",
      regex: /(?:(?:IT|SM)\d{2}[\w]\d{22}|CY\d{2}[\w]\d{23}|NL\d{2}[\w]{4}\d{10}|LV\d{2}[\w]{4}\d{13}|(?:BG|BH|GB|IE)\d{2}[\w]{4}\d{14}|GI\d{2}[\w]{4}\d{15}|RO\d{2}[\w]{4}\d{16}|KW\d{2}[\w]{4}\d{22}|MT\d{2}[\w]{4}\d{23}|NO\d{13}|(?:DK|FI|GL|FO)\d{16}|MK\d{17}|(?:AT|EE|KZ|LU|XK)\d{18}|(?:BA|HR|LI|CH|CR)\d{19}|(?:GE|DE|LT|ME|RS)\d{20}|IL\d{21}|(?:AD|CZ|ES|MD|SA)\d{22}|PT\d{23}|(?:BE|IS)\d{24}|(?:FR|MR|MC)\d{25}|(?:AL|DO|LB|PL)\d{26}|(?:AZ|HU)\d{27}|(?:GR|MU)\d{28})/g,

      samples: [
        "NL91ABNA0417164300",
        "IT36Z8765432100000001234567",
        "DE91100000000123456789",
        "FR1420041010050500013M02606"
      ]
    },
    {
      category: "Argentina, National Identity (DNI) Number",
      regex: /\d{2}\.\d{3}\.\d{3}/g,
      samples: [
        "12.345.678",
        "98.765.432",
        "11.223.344",
        "99.999.999"
      ]
    },
    {
      category: "Australia, Tax File Number",
      regex: /TFN(:|:\s|\s|)(?<redact>(\d{8,9}))/g,
      samples: [
        "TFN: 12345678",
        "TFN: 87654321",
        "TFN: 111111111",
        "TFN: 999999999"
      ]
    },
    {
      category: "Canada, Canadian passport IDs",
      regex: /\b[\w]{2}[\d]{6}\b/g,
      samples: [
        "AB123456",
        "CD654321",
        "EF987654",
        "GH123789"
      ]
    },
    {
      category: "Croatia, Croatian VAT ID card number",
      regex: /\bHR\d{11}\b/g,
      samples: [
        "HR12345678901",
        "HR98765432109",
        "HR11223344556",
        "HR99999999999"
      ]
    },
    {
      category: "Czech Republic, Czech Republic VAT ID card number",
      regex: /\bCZ\d{8,10}\b/g,
      samples: [
        "CZ12345678",
        "CZ98765432",
        "CZ11223344",
        "CZ99999999"
      ]
    },
    {
      category: "Denmark, Denmark Personal ID number",
      regex: /\b\d{10}|\d{6}[-\s]\d{4}\b/g,
      samples: [
        "1234567890",
        "9876543210",
        "1122334455",
        "9999999999"
      ]
    },
    {
      category: "France, France's National ID card (CNI)",
      regex: /\b\b\d{12}\b\b/g,
      samples: [
        "123456789012",
        "987654321098",
        "112233445566",
        "999999999999"
      ]
    },
    {
      category: "France, France's Social Security Number (INSEE)",
      regex: /\b\d{13}|\d{13}\s\d{2}\b/g,
      samples: [
        "1234567890123",
        "9876543210987",
        "1122334455667",
        "9999999999999"
      ]
    },
    {
      category: "France, France's Driver's license ID",
      regex: /\b\d{12}\b/g,
      samples: [
        "123456789012",
        "987654321098",
        "112233445566",
        "999999999999"
      ]
    },
    {
      category: "France, France's Passport ID",
      regex: /\b\d{2}11\d{5}\b/g,
      samples: [
        "801108024",
        "801178335",
        "021156471",
        "691106462",
        "591134151"
      ]
    },
    {
      category: "Germany, Germany's ID card number",
      regex: /\bl\d{8}\b/g,
      samples: [
        "l13742910",
        "l41067250",
        "l07277353",
        "l80692224",
        "l56345720",
      ]
    },
    {
      category: "Germany, Germany's Passport ID",
      regex: /\b[cfghjk]\d{3}\w{5}\d\b/g,
      samples: [
        "k2790IrEZ4",
        "k936Xt4C95",
        "g472523Z03",
        "f406c6iFF3",
        "h932W0kCn2",
      ]
    },
    {
      category: "Germany, Germany's Driver's License ID",
      regex: /\b[\d\w]\d{2}[\d\w]{6}\d[\d\w]\b/g,
      samples: [
        "A123456789B",
        "C987654321D",
        "E112233445F",
        "G999999999H"
      ]
    },
    {
      category: "Ireland, Personal Public Service (PPS) Number",
      regex: /\b\d{7}\w{1,2}\b/g,
      samples: [
        "1234567AB",
        "9876543CD",
        "1122334EF",
        "9999999GH"
      ]
    },
    {
      category: "Netherlands, Citizen's Service (BSN) number",
      regex: /\b\d{8}|\d{3}[-\.\s]\d{3}[-\.\s]\d{3}\b/g,
      samples: [
        "12345678",
        "98765432",
        "11223344",
        "99999999"
      ]
    },
    {
      category: "Poland, Poland's National ID (PESEL)",
      regex: /\b\d{11}\b/g,
      samples: [
        "12345678901",
        "98765432109",
        "11223344556",
        "99999999999"
      ]
    },
    {
      category: "Portugal, Portugal's Citizen Card Number",
      regex: /\d{9}[\w\d]{2}|\d{8}-\d[\d\w]{2}\d/g,
      samples: [
        "123456789AB",
        "987654321CD",
        "112233445EF",
        "999999999GH"
      ]
    },
    {
      category: "Spain, Spain's SSN",
      regex: /\b\d{2}\/?\d{8}\/?\d{2}\b/g,
      samples: [
        "03/92079158/98",
        "7052121337/62",
        "49/81401048/72",
        "0061752159/86",
        "43/3451809454",
      ]
    },
    {
      category: "Sweden, Sweden's Passport ID",
      regex: /\b\d{8}\b/g,
      samples: [
        "12345678",
        "98765432",
        "11223344",
        "99999999"
      ]
    },
    {
      category: "UK IDs, United Kingdom's Passport ID",
      regex: /\b\d{9}\b/g,
      samples: [
        "123456789",
        "987654321",
        "112233445",
        "999999999"
      ]
    },
    {
      category: "UK IDs, United Kingdom's Driver's license ID",
      regex: /\b[\w9]{5}\d{6}[\w9]{2}\d{5}\b/g,
      samples: [
        "VnBgL560202S070219",
        "QPO6X0760104S13041",
        "rWVLV346360gJ93364",
        "kXShx545060fn21512",
        "0pvcU8042198432469",
      ]
    },
    {
      category: "UK IDs, United Kingdom'sNational Health Service (NHS) number",
      regex: /\b\d{3}\s\d{3}\s\d{4}\b/g,
      samples: [
        "123 456 7890",
        "987 654 3210",
        "112 233 4455",
        "999 888 7777"
      ]
    },
    {
      category: "US SSN, US social security numbers",
      regex: /\b[\d]{3} [\d]{2} [\d]{4}|([\d] ?){3}[\—\-_] ?([\d] ?){2}[\—\-_] ?([\d] ?){4}\b/g,
      samples: [
        "123 45 6789",
        "987 65 4321",
        "123-45-6789",
        "987-65-4321"
      ]
    }
  ];
  const complaints = [
    "The website is slow and unresponsive, making it frustrating to navigate.",
    "I keep encountering error messages when trying to complete a transaction.",
    "The mobile app frequently crashes, hindering my ability to use it effectively.",
    "The website's search functionality is not working properly; it's difficult to find what I need.",
    "The product images on the website are not loading, leaving me unsure about the appearance.",
    "There are broken links throughout the website, leading to pages that don't exist.",
    "The checkout process is confusing and convoluted, causing unnecessary delays.",
    "I've been receiving excessive spam emails from your company, despite unsubscribing.",
    "The website's design is outdated and doesn't adapt well to different screen sizes.",
    "The login functionality is unreliable; I often encounter issues accessing my account.",
    "I've experienced multiple unauthorized charges on my credit card linked to your website.",
    "The website's security measures seem insufficient; I'm concerned about my personal information.",
    "The product descriptions on the website are misleading and do not match the actual item.",
    "I've encountered frequent bugs and glitches while using your software/application.",
    "The website's customer support chat is consistently offline or unresponsive.",
    "The loading times for product pages are excessively long, making it frustrating to browse.",
    "I've encountered compatibility issues with your website on certain web browsers.",
    "The website's navigation is confusing, making it difficult to find specific information.",
    "I'm unable to access certain features on the website despite being a registered user.",
    "The password reset functionality is not working, preventing me from accessing my account.",
    "The website freezes and becomes unresponsive, forcing me to restart my device.",
    "I've encountered broken forms on the website, making it impossible to submit important information.",
    "The mobile app drains my battery excessively, even when not in use.",
    "The website's customer reviews section is filled with spam and fake reviews.",
    "I've been locked out of my account due to suspicious activity, but it wasn't initiated by me.",
    "The website's terms of service and privacy policy are unclear and hard to understand.",
    "I've experienced issues with the website's payment gateway, resulting in failed transactions.",
    "The website's customer support phone line always leads to long wait times and no resolution.",
    "I've received incorrect product recommendations that don't match my preferences or purchase history.",
    "The website's order tracking system doesn't provide accurate and up-to-date information.",
    "I've encountered broken images and missing content on various pages of the website.",
    "The website's live chat support staff lacks knowledge and provides incorrect information.",
    "I've experienced constant pop-up ads on the website that disrupt my browsing experience.",
    "The website's terms and conditions include unfair clauses that limit customer rights.",
    "I've received damaged products due to poor packaging and insufficient protection.",
    "The website's customer feedback form does not submit successfully, preventing me from sharing my thoughts.",
    "I've encountered frequent server errors when trying to access specific sections of the website.",
    "The mobile app's notifications are delayed, causing me to miss important updates.",
    "I've experienced frequent app crashes while attempting to perform crucial tasks.",
    "The website's product categorization is confusing and inconsistent, making it hard to find desired items.",
    "I've encountered misleading advertisements that promote features the product doesn't actually have.",
    "The website's language localization is inaccurate, leading to confusion and misunderstandings.",
    "I've experienced issues with the website's email notifications; they often fail to deliver or arrive late.",
    "The mobile app's user interface is cluttered and poorly organized, leading to a confusing user experience.",
    "I've encountered broken videos and media files that don't play properly on the website.",
    "The website's customer support team lacks empathy and fails to understand the gravity of my concerns.",
    "I've experienced frequent timeouts and session expirations on the website, requiring me to start over.",
    "The mobile app's offline mode fails to function properly, preventing me from accessing saved content.",
    "I've encountered multiple instances of duplicated charges on my credit card statement from your website.",
  ];
  

  