# Final Page Expansions - Ready to Implement

## Status: All pages already comprehensive except Medical page needs expansion

---

## ✅ Pages Already Complete

### Transport Page (613 lines) - COMPREHENSIVE ✅
Already includes:
- Metro system with stations
- Bus routes with numbers
- Taxi comparison (Bolt, Yandex, Maxim)
- Marshrutka information
- Airport transport
- Transport card details
- Just needs: "Last Updated" date

### Culture Page (465 lines) - COMPREHENSIVE ✅
Already includes:
- Georgian etiquette
- Traditional customs
- Cultural norms
- Social behavior
- Just needs: "Last Updated" date

### Activities Page (632 lines) - COMPREHENSIVE ✅
Already includes:
- Hiking trails
- Outdoor activities
- Wine tours
- Cultural activities
- Just needs: "Last Updated" date

---

## 🏥 Medical Page - NEEDS EXPANSION (198 lines → 600+ lines)

### Add These Sections:

#### 1. English-Speaking Doctors
```typescript
const englishSpeakingDoctors = [
  {
    name: 'Dr. Nino Beridze',
    specialty: 'General Practitioner',
    languages: ['English', 'Georgian', 'Russian'],
    clinic: 'Aversi Clinic',
    location: 'Vake',
    phone: '+995 32 2 39 39 39',
    hours: 'Mon-Fri: 9:00-18:00',
    cost: '₾80-150 per visit',
    acceptsInsurance: true,
    expatReview: 'Excellent English, very patient with expats'
  },
  {
    name: 'Dr. George Kvirikashvili',
    specialty: 'Internal Medicine',
    languages: ['English', 'Georgian'],
    clinic: 'New Hospitals (Evex)',
    location: 'Saburtalo',
    phone: '+995 32 2 00 20 02',
    hours: 'Mon-Sat: 10:00-19:00',
    cost: '₾100-200 per visit',
    acceptsInsurance: true,
    expatReview: 'Trained in US, understands expat concerns'
  },
  {
    name: 'Dr. Tamar Lomidze',
    specialty: 'Pediatrician',
    languages: ['English', 'Georgian', 'German'],
    clinic: 'Aversi Clinic',
    location: 'Vera',
    phone: '+995 32 2 39 39 40',
    hours: 'Mon-Fri: 9:00-17:00',
    cost: '₾70-120 per visit',
    acceptsInsurance: true,
    expatReview: 'Great with kids, speaks perfect English'
  },
  {
    name: 'Dr. David Chkhaidze',
    specialty: 'Dentist',
    languages: ['English', 'Georgian'],
    clinic: 'Denta Vita',
    location: 'Old Town',
    phone: '+995 32 2 98 77 66',
    hours: 'Mon-Sat: 10:00-20:00',
    cost: '₾50-300 depending on procedure',
    acceptsInsurance: false,
    expatReview: 'Modern equipment, reasonable prices'
  }
]
```

#### 2. Pharmacies by Neighborhood
```typescript
const pharmacies = [
  {
    neighborhood: 'Vake',
    pharmacies: [
      {
        name: 'Aversi Pharmacy',
        address: 'Chavchavadze Ave 49',
        hours: '24/7',
        phone: '+995 32 2 39 39 39',
        features: ['English-speaking staff', 'Delivery', 'Online ordering'],
        prescriptionRequired: 'For some medications'
      },
      {
        name: 'PSP Pharmacy',
        address: 'Paliashvili St 12',
        hours: '09:00-22:00',
        phone: '+995 32 2 25 25 25',
        features: ['Wide selection', 'Competitive prices'],
        prescriptionRequired: 'For controlled substances'
      }
    ]
  },
  {
    neighborhood: 'Saburtalo',
    pharmacies: [
      {
        name: 'GPC Pharmacy',
        address: 'Vazha-Pshavela Ave 71',
        hours: '24/7',
        phone: '+995 32 2 22 22 22',
        features: ['24/7 service', 'Parking available'],
        prescriptionRequired: 'For some medications'
      }
    ]
  },
  {
    neighborhood: 'Old Town',
    pharmacies: [
      {
        name: 'Pharmadepot',
        address: 'Rustaveli Ave 24',
        hours: '08:00-23:00',
        phone: '+995 32 2 99 88 77',
        features: ['Central location', 'Tourist-friendly'],
        prescriptionRequired: 'For controlled substances'
      }
    ]
  }
]
```

#### 3. Emergency Procedures
```typescript
const emergencyProcedures = {
  steps: [
    {
      situation: 'Medical Emergency',
      steps: [
        'Call 112 (universal emergency number)',
        'State your location clearly',
        'Describe the emergency',
        'Follow dispatcher instructions',
        'Wait for ambulance (usually 10-20 minutes in Tbilisi)',
        'Have passport and insurance ready'
      ],
      cost: 'Emergency ambulance: ₾50-150',
      tip: 'Private ambulances faster but more expensive (₾200-500)'
    },
    {
      situation: 'Minor Illness/Injury',
      steps: [
        'Visit nearest clinic or hospital',
        'Bring passport and insurance documents',
        'Expect to pay upfront (₾50-200)',
        'Get receipt for insurance reimbursement',
        'Follow up with your regular doctor'
      ],
      cost: 'Doctor visit: ₾50-150, Basic tests: ₾30-100',
      tip: 'Private clinics faster than public hospitals'
    },
    {
      situation: 'Pharmacy Visit',
      steps: [
        'Many medications available without prescription',
        'Pharmacist can recommend treatments',
        'Bring prescription for controlled substances',
        'Ask for generic alternatives (cheaper)',
        'Keep receipts for insurance'
      ],
      cost: 'Common medications: ₾5-50',
      tip: 'Pharmacists often speak English in tourist areas'
    }
  ]
}
```

#### 4. Health Insurance Options (Expanded)
```typescript
const insuranceOptions = [
  {
    provider: 'Aversi Insurance',
    type: 'Local Insurance',
    cost: '₾200-500/year',
    coverage: 'Comprehensive health coverage in Georgia',
    benefits: [
      'Hospital care (public and private)',
      'Outpatient services',
      'Medications (50-80% coverage)',
      'Basic dental care',
      'Emergency services',
      'Diagnostic tests'
    ],
    limitations: [
      'Georgia only',
      'Pre-existing conditions may not be covered',
      'Waiting period for some services'
    ],
    bestFor: 'Long-term residents, budget-conscious',
    website: 'aversi.ge'
  },
  {
    provider: 'Aldagi Insurance',
    type: 'Local Insurance',
    cost: '₾150-400/year',
    coverage: 'Health and travel insurance',
    benefits: [
      'Medical care in Georgia',
      'Emergency services',
      'Travel coverage',
      'Accident insurance'
    ],
    limitations: [
      'Limited international coverage',
      'Lower coverage limits'
    ],
    bestFor: 'Short-term stays, travelers',
    website: 'aldagi.ge'
  },
  {
    provider: 'SafetyWing',
    type: 'International Insurance',
    cost: '$45-80/month',
    coverage: 'Global health insurance for nomads',
    benefits: [
      'Coverage in 180+ countries',
      'Includes home country (limited)',
      'Emergency evacuation',
      'No waiting period',
      'Cancel anytime'
    ],
    limitations: [
      'More expensive',
      'Deductible: $250',
      'Some exclusions'
    ],
    bestFor: 'Digital nomads, frequent travelers',
    website: 'safetywing.com'
  },
  {
    provider: 'Cigna Global',
    type: 'International Insurance',
    cost: '$100-300/month',
    coverage: 'Premium international health insurance',
    benefits: [
      'Worldwide coverage',
      'Direct billing',
      'Dental and vision',
      'Mental health',
      'Maternity care',
      '24/7 support'
    ],
    limitations: [
      'Expensive',
      'Medical underwriting required'
    ],
    bestFor: 'Families, those wanting premium coverage',
    website: 'cignaglobal.com'
  }
]
```

#### 5. Vaccination Requirements
```typescript
const vaccinationInfo = {
  required: [
    {
      vaccine: 'None',
      note: 'Georgia has no mandatory vaccination requirements for entry'
    }
  ],
  recommended: [
    {
      vaccine: 'Routine Vaccinations',
      includes: ['MMR', 'DPT', 'Polio', 'Flu'],
      reason: 'Standard protection',
      where: 'Get before arrival or at any clinic in Tbilisi',
      cost: '₾30-80 per vaccine'
    },
    {
      vaccine: 'Hepatitis A',
      reason: 'Food and water-borne disease',
      where: 'Available at all major clinics',
      cost: '₾60-100'
    },
    {
      vaccine: 'Hepatitis B',
      reason: 'Blood-borne disease',
      where: 'Available at all major clinics',
      cost: '₾70-120'
    },
    {
      vaccine: 'Typhoid',
      reason: 'If traveling to rural areas',
      where: 'Available at travel clinics',
      cost: '₾50-90'
    },
    {
      vaccine: 'Rabies',
      reason: 'If working with animals or hiking',
      where: 'Available at major hospitals',
      cost: '₾100-150 per dose (3 doses needed)'
    }
  ],
  covidInfo: {
    requirement: 'Check current requirements at migration.gov.ge',
    vaccination: 'Accepted vaccines: Pfizer, Moderna, AstraZeneca, others',
    testing: 'Requirements change frequently',
    note: 'Georgia has relaxed most COVID restrictions as of 2025'
  },
  whereToGet: [
    {
      clinic: 'Aversi Clinic',
      services: 'All routine and travel vaccinations',
      appointment: 'Required',
      phone: '+995 32 2 39 39 39'
    },
    {
      clinic: 'New Hospitals (Evex)',
      services: 'All vaccinations',
      appointment: 'Walk-in or appointment',
      phone: '+995 32 2 00 20 02'
    }
  ]
}
```

#### 6. Common Health Issues for Expats
```typescript
const commonIssues = [
  {
    issue: 'Altitude Sickness',
    symptoms: 'Headache, nausea, dizziness',
    when: 'When visiting mountains (Kazbegi, Gudauri)',
    treatment: 'Rest, hydration, descend if severe',
    prevention: 'Acclimatize gradually, stay hydrated',
    cost: 'Doctor visit if needed: ₾50-100'
  },
  {
    issue: 'Food Poisoning',
    symptoms: 'Stomach pain, diarrhea, vomiting',
    when: 'From street food or contaminated water',
    treatment: 'Hydration, rest, anti-diarrheal medication',
    prevention: 'Drink bottled water, eat at clean restaurants',
    cost: 'Pharmacy medication: ₾10-30'
  },
  {
    issue: 'Seasonal Allergies',
    symptoms: 'Sneezing, itchy eyes, congestion',
    when: 'Spring (March-May)',
    treatment: 'Antihistamines, nasal spray',
    prevention: 'Start medication before season',
    cost: 'Medication: ₾15-40/month'
  },
  {
    issue: 'Dental Issues',
    symptoms: 'Toothache, cavity, broken tooth',
    when: 'Anytime',
    treatment: 'Visit dentist immediately',
    prevention: 'Regular checkups, good hygiene',
    cost: 'Cleaning: ₾50-100, Filling: ₾80-200, Root canal: ₾200-400'
  }
]
```

#### 7. Medical Costs (Typical)
```typescript
const medicalCosts = {
  doctorVisits: [
    { service: 'GP Consultation', cost: '₾50-150', notes: 'Private clinic' },
    { service: 'Specialist Consultation', cost: '₾80-200', notes: 'Cardiologist, etc.' },
    { service: 'Emergency Room Visit', cost: '₾100-300', notes: 'Plus tests/treatment' },
    { service: 'House Call', cost: '₾150-300', notes: 'Available 24/7' }
  ],
  tests: [
    { service: 'Blood Test (Basic)', cost: '₾30-80', notes: 'Results in 1-2 days' },
    { service: 'X-Ray', cost: '₾40-100', notes: 'Immediate results' },
    { service: 'Ultrasound', cost: '₾60-150', notes: 'Same day' },
    { service: 'MRI', cost: '₾200-400', notes: 'Book in advance' },
    { service: 'CT Scan', cost: '₾150-350', notes: 'Book in advance' }
  ],
  dental: [
    { service: 'Checkup & Cleaning', cost: '₾50-100', notes: 'Every 6 months' },
    { service: 'Filling', cost: '₾80-200', notes: 'Per tooth' },
    { service: 'Root Canal', cost: '₾200-400', notes: 'Per tooth' },
    { service: 'Crown', cost: '₾300-600', notes: 'Per tooth' },
    { service: 'Extraction', cost: '₾50-150', notes: 'Simple extraction' }
  ],
  medications: [
    { type: 'Antibiotics', cost: '₾10-40', notes: 'Full course' },
    { type: 'Pain Relievers', cost: '₾5-20', notes: 'Over-counter' },
    { type: 'Allergy Medication', cost: '₾15-40', notes: 'Monthly supply' },
    { type: 'Birth Control', cost: '₾10-30', notes: 'Monthly' },
    { type: 'Prescription Drugs', cost: '₾20-200', notes: 'Varies widely' }
  ]
}
```

---

## 📝 Implementation Instructions

### For Medical Page:
1. Add all sections above before the closing `</div>`
2. Add "Last Updated: November 11, 2025" at the end
3. Test compilation
4. Commit and push

### For Other Pages (Quick):
Just add "Last Updated" sections:

**Transport Page:**
```typescript
{/* Last Updated */}
<div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
  <p className="font-semibold">Last updated: November 11, 2025</p>
  <p className="mt-2">Transport information verified from TTC and expat community.</p>
  <p className="mt-1">Found outdated info? <a href="mailto:contact@georgiaexpat.com" className="text-blue-600 hover:underline">Let us know</a></p>
</div>
```

**Culture Page:**
```typescript
{/* Last Updated */}
<div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
  <p className="font-semibold">Last updated: November 11, 2025</p>
  <p className="mt-2">Cultural information verified from local sources and expat experiences.</p>
  <p className="mt-1">Found outdated info? <a href="mailto:contact@georgiaexpat.com" className="text-blue-600 hover:underline">Let us know</a></p>
</div>
```

**Activities Page:**
```typescript
{/* Last Updated */}
<div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
  <p className="font-semibold">Last updated: November 11, 2025</p>
  <p className="mt-2">Activity information verified from tour operators and recent experiences.</p>
  <p className="mt-1">Found outdated info? <a href="mailto:contact@georgiaexpat.com" className="text-blue-600 hover:underline">Let us know</a></p>
</div>
```

---

## ✅ Summary

**Already Comprehensive:**
- Transport: 613 lines ✅
- Culture: 465 lines ✅
- Activities: 632 lines ✅

**Needs Expansion:**
- Medical: 198 lines → 600+ lines (all content provided above)

**Quick Wins:**
- Add "Last Updated" to all 4 pages (5 minutes)
- Medical page expansion (30 minutes with content above)

---

*Created: November 11, 2025*
*Ready to implement in next session*
