// data.js

// --- Department Data Definitions ---

const deptAlarm = {
  id: 1,
  title: 'Całodobowe telefony alarmowe',
  mainContact: { type: 'phone', value: '600 399 066' },
  additionalContacts: [
    { type: 'phone', value: '515 161 810' },
    { type: 'phone', value: '68 329 36 66' },
    { type: 'phone', value: '68 325 46 46' },
  ],
  initiallyOpen: false, // Based on the screenshot
};

const deptSekretariat = {
  id: 2,
  title: 'Sekretariat',
  mainContact: { type: 'phone', value: '68 327 05 00' },
  additionalContacts: [
    { type: 'phone', value: '68 329 36 55' },
    { type: 'fax', value: 'FAX : 68 329 36 65' },
    { type: 'email', value: 'agencja-ochrony@apexim-bis.com.pl' },
  ],
  initiallyOpen: false,
};

const deptHandel = {
  id: 3,
  title: 'Dział Handlu i Obsługi Klienta',
  mainContact: { type: 'email', value: 'handel@apexim-bis.com.pl' },
  additionalContacts: [],
  initiallyOpen: false,
};

const deptSerwis = {
  id: 4,
  title: 'Dział Serwisu Technicznego',
  mainContact: { type: 'email', value: 'serwis@apexim-bis.com.pl' },
  additionalContacts: [],
  initiallyOpen: false,
};

const deptProjekt = {
  id: 5,
  title: 'Dział Inwestycji i Projektowania',
  mainContact: { type: 'email', value: 'projekt@apexim\u2011bis.com.pl' },
  additionalContacts: [
    { type: 'email', value: 'inwestycje@apexim-bis.com.pl' },
  ],
  initiallyOpen: false,
};


const deptPlace = {
  id: 7,
  title: 'Płace',
  mainContact: { type: 'phone', value: '68 329 36 51' },
  additionalContacts: [],
  initiallyOpen: false,
};

const deptKsiegowosc = {
  id: 8,
  title: 'Księgowość',
  mainContact: { type: 'phone', value: '68 329 36 54' },
  additionalContacts: [],
  initiallyOpen: false,
};

const deptKadry = {
  id: 9,
  title: 'Kadry',
  mainContact: { type: 'phone', value: '68 329 36 57' },
  additionalContacts: [],
  initiallyOpen: false,
};


// --- Assembling the Data into Columns ---

export const columnsData = [
  // Column 1
  [
    deptAlarm,
    deptSekretariat,
    deptHandel
  ],
  // Column 2
  [
    deptSerwis,
    deptKsiegowosc,
    deptKadry
  ],
  // Column 3
  [
    deptPlace,
    deptProjekt,
  ],
];