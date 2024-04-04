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

export const PlanList: Plan[] = [
  {
    icon: PersonIcon({}),
    planCoverage: [
      'One Person',
      'Weekly Diagnosis/consultation',
      'Emergencies and FirstAid',
      'Bi-weekly blood tests',
      'Prescription of medications',
      'Admin Fee of ₦3,000',
    ],
    planDeposit: '₦5,000',
    planDuration: '₦23,000',
    planType: 'Standard',
  },
  {
    icon: BuildingIcon({}),
    planCoverage: [
      'One person',
      'Bi-Weekly Diagnosis/consultation',
      'Emergencies and FirstAid',
      'Weekly blood tests',
      'Prescription of medications',
      'Admin Fee of ₦3,000',
    ],
    planDeposit: '₦12,000',
    planDuration: '₦33,000',
    planType: 'Diamond',
  },
  {
    icon: PeopleIcon({}),
    planCoverage: [
      'One person',
      'Bi-Weekly Diagnosis/consultation',
      'Emergencies and FirstAid',
      'Weekly blood tests',
      'Prescription of medications',
      'Admin Fee of ₦3,000',
    ],
    planDeposit: '₦15,000',
    planDuration: '₦43,000',
    planType: 'Gold',
  },
  {
    icon: BuildingIcon({}),
    planCoverage: [
      'One person',
      'Bi-Weekly Diagnosis/consultation',
      'Emergencies and FirstAid',
      'Weekly blood tests',
      'Prescription of medications',
      'Admin Fee of ₦8,000',
    ],
    planDeposit: '₦12,000',
    planDuration: '₦68,000',
    planType: 'Small Team',
  },
  {
    icon: PeopleIcon({}),
    planCoverage: [
      'One person',
      'Bi-Weekly Diagnosis/consultation',
      'Emergencies and FirstAid',
      'Weekly blood tests',
      'Prescription of medications',
      'Admin Fee of ₦8,000',
    ],
    planDeposit: '₦12,000',
    planDuration: '₦88,000',
    planType: 'Diamond Team',
  },
  {
    icon: PeopleIcon({}),
    planCoverage: [
      'One person',
      'Bi-Weekly Diagnosis/consultation',
      'Emergencies and FirstAid',
      'Weekly blood tests',
      'Prescription of medications',
      'Admin Fee of ₦8,000',
    ],
    planDeposit: '₦15,000',
    planDuration: '₦108,000',
    planType: 'Gold Team',
  },
];

