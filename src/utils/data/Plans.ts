import BuildingIcon from '../../assets/svgs/BuildingIcon';
import PersonIcon from '../../assets/svgs/PersonIcon';
import PeopleIcon from '../../assets/svgs/PeopleIcon';

export interface Plan {
  icon: React.ReactElement;
  planType: string;
  planDuration: string;
  planCoverage: Array<string>;
  planDeposit: string;
}

export const getPlanIcon = (planName: string) => {
  let icon: React.ReactElement | string = '';

  switch (planName) {
    case 'STANDARD':
      icon = PersonIcon({});
      break;
    case 'DIAMOND':
      icon = BuildingIcon({});
      break;
    case 'GOLD':
      icon = PeopleIcon({});
      break;
    case 'MAXISTANDARD':
      icon = BuildingIcon({});
      break;
    case 'MAXIDIAMOND':
      icon = PeopleIcon({});
      break;
    case 'MAXIGOLD':
      icon = PeopleIcon({});
      break;
    default:
      icon = '';
      break;
  }

  return icon;
};

export const PlanList: Plan[] = [
  {
    icon: PersonIcon({}),
    planCoverage: [
      'One Person',
      'General Consultation',
      'Telemedicine',
      'Medication Cover',
      'Dental care',
      'Health Education',
    ],
    planDeposit: '₦6,250',
    planDuration: '₦25,000',
    planType: 'Standard',
  },
  {
    icon: BuildingIcon({}),
    planCoverage: [
      'One Person',
      'Specialist Consultation',
      'Medication Cover',
      'Admission on Treatment covered',
      'Laboratory investigation/ medical test cover',
      'Accident, emergency, and surgery cover',
      'Neonatal and Paediatric care cover',
    ],
    planDeposit: '₦8,750',
    planDuration: '₦35,000',
    planType: 'Diamond',
  },
  {
    icon: PeopleIcon({}),
    planCoverage: [
      'One person',
      'Specialist consultation',
      'Physiotherapy',
      'X-ray and other diagnostic test',
      'CT Scan',
      'Ambulance and evacuation services',
    ],
    planDeposit: '₦11,250',
    planDuration: '₦45,000',
    planType: 'Gold',
  },
  {
    icon: BuildingIcon({}),
    planCoverage: [
      'One Person care',
      'Specialist Consultation',
      'In-patient care in a semi-private ward',
      'Emergency',
      'Intensive care services',
      'Eyes and dental care',
    ],
    planDeposit: '₦17,500',
    planDuration: '₦70,000',
    planType: 'Maxi Standard',
  },
  {
    icon: PeopleIcon({}),
    planCoverage: [
      'One Person care',
      'Specialist Consultations',
      'In-patient care in a Single room',
      'Advanced investigation including MRI Scan',
      'Intermediate and Major surgeries',
      'Chronic disease care',
      'Anti-natal and neonatal care',
      'Intensive care services',
    ],
    planDeposit: '₦22,500',
    planDuration: '₦90,000',
    planType: 'Maxi Diamond',
  },
  {
    icon: PeopleIcon({}),
    planCoverage: [
      'One Person Care',
      'All types of specialist consultation and care',
      'Advanced care investigation',
      'Accident and emergency care',
      'Ambulance and evacuation need',
      'Minor and major surgeries',
      'Chronic and cancer care',
      'Eye and dental care',
      'In-patient care in a single room',
      'Kidney dialysis',
    ],
    planDeposit: '₦27,500',
    planDuration: '₦110,000',
    planType: 'Maxi Gold',
  },
];

interface PaymentPlan {
  amount: number;
  duration: number;
}

interface PlanCategory {
  planType: string;
  planPrice: number;
  planDeposit: number;
  plans: PaymentPlan[];
}

interface InstallmentCategory {
  [key: string]: PlanCategory[];
}

export const planInstallments: InstallmentCategory = {
  standard: [
    {
      planType: 'standard',
      planPrice: 25000,
      planDeposit: 6250,
      plans: [
        {
          amount: 188,
          duration: 100,
        },
        {
          amount: 1565,
          duration: 12,
        },
        {
          amount: 6250,
          duration: 3,
        },
      ],
    },
  ],
  diamond: [
    {
      planType: 'diamond',
      planPrice: 35000,
      planDeposit: 8750,
      plans: [
        {
          amount: 265,
          duration: 100,
        },
        {
          amount: 2190,
          duration: 12,
        },
        {
          amount: 8750,
          duration: 3,
        },
      ],
    },
  ],
  gold: [
    {
      planType: 'gold',
      planPrice: 45000,
      planDeposit: 11250,
      plans: [
        {
          amount: 340,
          duration: 100,
        },
        {
          amount: 2815,
          duration: 12,
        },
        {
          amount: 11250,
          duration: 3,
        },
      ],
    },
  ],
  'maxi-standard': [
    {
      planType: 'maxi-standard',
      planPrice: 70000,
      planDeposit: 17500,
      plans: [
        {
          amount: 295,
          duration: 180,
        },
        {
          amount: 2190,
          duration: 24,
        },
        {
          amount: 8750,
          duration: 6,
        },
      ],
    },
  ],
  'maxi-diamond': [
    {
      planType: 'maxi-diamond',
      planPrice: 90000,
      planDeposit: 22500,
      plans: [
        {
          amount: 375,
          duration: 180,
        },
        {
          amount: 2815,
          duration: 24,
        },
        {
          amount: 11250,
          duration: 6,
        },
      ],
    },
  ],
  'maxi-gold': [
    {
      planType: 'maxi-gold',
      planPrice: 110000,
      planDeposit: 27500,
      plans: [
        {
          amount: 460,
          duration: 180,
        },
        {
          amount: 3440,
          duration: 24,
        },
        {
          amount: 13750,
          duration: 6,
        },
      ],
    },
  ],
};

