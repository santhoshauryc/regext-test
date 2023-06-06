
const piiRegexes = [
    // International phone number
    /\+[1-9]{1}[0-9]{3,14}/g, 
    // France Phone Numbers
    /\b([0O]?[1lI][1lI])?[3E][3E][0O]?[\dOIlZEASB]{9}\b/g,
    // German Phone Numbers and Driver license numbers 
    /\b[\d\w]\d{2}[\d\w]{6}\d[\d\w]\b/g, 
    // UK Phone Numbers
    /\b([0O]?[1lI][1lI])?[4A][4A][\dOIlZEASB]{10,11}\b/g, 
    // US Phone Numbers
    /\b((\+|\b)[1l][\-\. ])?\(?\b[\dOlZSB]{3,5}([\-\. ]|\) ?)[\dOlZSB]{3}[\-\. ][\dOlZSB]{4}\b/g, 
    // US street addresses
    /\b\d{1,8}\b[\s\S]{10,100}?\b(AK|AL|AR|AZ|CA|CO|CT|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|MA|MD|ME|MI|MN|MO|MS|MT|NC|ND|NE|NH|NJ|NM|NV|NY|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VA|VT|WA|WI|WV|WY)\b\s\d{5}\b/g,
    // email addresses
    /\b[a-z0-9._%\+\-—|]+@[a-z0-9.\-—|]+\.[a-z|]{2,6}\b/g,
    // birthdates
    /\b(birth|birthdate|birthday|dob|born)\W+(?:\w+\W+){0,5}?(?<REDACT>(\d{4}|\d{1,2})[\/\-]\d{1,2}[\/\-](\d{4}|\d{1,2}))\b/g,
    // IP v4 addresses
    /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g,
    // IP v6 addresses
    /\b([\d\w]{4}|0)(\:([\d\w]{4}|0)){7}\b/g,
    // Credit card numbers
    /\b((4\d{3}|5[1-5]\d{2}|2\d{3}|3[47]\d{1,2})[\s\-]?\d{4,6}[\s\-]?\d{4,6}?([\s\-]\d{3,4})?(\d{3})?)\b/g,
    // ABA routing numbers
    /\b((0[0-9])|(1[0-2])|(2[1-9])|(3[0-2])|(6[1-9])|(7[0-2])|80)([0-9]{7})\b/g,
    // Swift codes
    /\b[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?\b/g,
    // IBAN Codes
    /(?:(?:IT|SM)\d{2}[\w]\d{22}|CY\d{2}[\w]\d{23}|NL\d{2}[\w]{4}\d{10}|LV\d{2}[\w]{4}\d{13}|(?:BG|BH|GB|IE)\d{2}[\w]{4}\d{14}|GI\d{2}[\w]{4}\d{15}|RO\d{2}[\w]{4}\d{16}|KW\d{2}[\w]{4}\d{22}|MT\d{2}[\w]{4}\d{23}|NO\d{13}|(?:DK|FI|GL|FO)\d{16}|MK\d{17}|(?:AT|EE|KZ|LU|XK)\d{18}|(?:BA|HR|LI|CH|CR)\d{19}|(?:GE|DE|LT|ME|RS)\d{20}|IL\d{21}|(?:AD|CZ|ES|MD|SA)\d{22}|PT\d{23}|(?:BE|IS)\d{24}|(?:FR|MR|MC)\d{25}|(?:AL|DO|LB|PL)\d{26}|(?:AZ|HU)\d{27}|(?:GR|MU)\d{28})/g,
    // Argentina DNI numbers
    /\d{2}\.\d{3}\.\d{3}/g,
    // Canadian Passport numbers
    /\b[\w]{2}[\d]{6}\b/g,
    // Croatian VAT ID numbers
    /\bHR\d{11}\b/g,
    // Czech VAT ID numbers
    /\bCZ\d{8,10}\b/g,
    // Denmark personal identification numbers
    /\b\d{10}|\d{6}[-\s]\d{4}\b/g,
    // French national identification numbers
    /\b\b\d{12}\b\b/g,
    // German VAT ID numbers
    /\b\d{13}|\d{13}\s\d{2}\b/g,
    // Frances driver license numbers
    /\b\d{12}\b/g,
    // french passport numbers
    /\b\d{2}11\d{5}\b/g,
    // German id card numbers
    /\bl\d{8}\b/g,
    // German passport ID numbers
    /\b[cfghjk]\d{3}\w{5}\d\b/g,
    // Ireland personal public service numbers
    /\b\d{7}\w{1,2}\b/g,
    // Netherlands citizen service numbers BSN
    // /\b\d{8}|\d{3}[-\.\s]\d{3}[-\.\s]\d{3}\b/g, // this is a bit too greedy
    // Poland national identification numbers
    /\b\d{11}\b/g,
    // Portugal, Portugal's Citizen Card Number
    /\d{9}[\w\d]{2}|\d{8}-\d[\d\w]{2}\d/g,
    // Spain SSN
    /\b\d{2}\/?\d{8}\/?\d{2}\b/g,
    // Sweden passport numbers
    /\b\d{8}\b/g,
    // UK passport numbers
    /\b\d{9}\b/g,
    // UK driving license numbers
    /\b[\w9]{5}\d{6}[\w9]{2}\d{5}\b/g,
    // UK national insurance numbers
    /\b\d{3}\s\d{3}\s\d{4}\b/g,
    // US SSN, US social security numbers
    /\b[\d]{3} [\d]{2} [\d]{4}|([\d] ?){3}[\—\-_] ?([\d] ?){2}[\—\-_] ?([\d] ?){4}\b/g
];

function redactFbResponse(txt) {
    let redactedArray = [];
    for (let rex of piiRegexes) {
        const redacted = txt.replaceAll(rex, (match)=>'*'.repeat(match.length));
        if(txt.indexOf('US Street Addresses') !== -1 && redacted.indexOf('US Street Addresses') === -1) {
            console.log('rex', rex);
            console.log('>>>>>>');
        }
        redactedArray.push(redacted);
    }
    let result = '';
    for(let i = 0; i < txt.length; i++) {
        let char = txt[i];
        for(let j = 0; j < redactedArray.length; j++) {
            const currentRedactedTxt = redactedArray[j];
            if(currentRedactedTxt[i] === '*') {
                char =  '*';
                break;
            }
        }
        result += char;
    }
    return result;
}