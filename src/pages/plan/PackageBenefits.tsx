import React, { useEffect, useState } from 'react';
import usePlanStore from '../../store/plan';
import { useMutation } from '@tanstack/react-query';
import { fetchPlanBenefits, fetchPlans } from '../../api/plan';
import CustomButton from '../../components/CustomButton';
import Accordion from '../../components/Accordion';

type Props = {};

interface Coverage {
  AnnualLimit: number;
  Covered: boolean;
}

interface Benefit {
  AccidentAndEmergency: boolean;
  AdvanceAndComplexInvestigation: {
    CTScan: boolean;
    EEG: number;
    Echocardiography: number;
    MRIScan: boolean;
  };
  AmbulanceAndEvacuationServices: boolean;
  AntenatalCareAndDelivery: boolean;
  CancerCare: Coverage;
  ChronicDiseases: boolean;
  Cost: number;
  Dental: Coverage;
  Drugs: boolean;
  Eye: Coverage;
  FamilyPlanning: boolean;
  FeedingAndInPatientTreatment: boolean;
  GeneralOutPatientCare: {
    GeneralConsultations: boolean;
    Registration: boolean;
  };
  HealthPromotion: boolean;
  ImmunisationI: boolean;
  ImmunisationII: boolean;
  ImmunisationIII: boolean;
  InPatientCare: {
    AdmissionDays: number;
    RoomType: string;
  };
  IntensiveCareServices: number;
  IntermediateSurgeries: number;
  KidneyDialysis: number;
  LaboratoryInvestigation: boolean;
  MajorSurgeries: number;
  MinorSurgeries: number;
  NeonatalCare: boolean;
  PaediatricCare: boolean;
  Physiotherapy: {
    Sessions: number;
  };
  Plan: string;
  SelectiveScreening: Coverage;
  SpecialistConsultationsType1: {
    Cardiology: number;
    Dermatology: number;
    GeneralFamilyMedicine: number;
    GeneralSurgery: number;
    Haematology: number;
    ObstetricsAndGynaecology: number;
    Ophthalmology: number;
    Orthopaedics: number;
    Paediatrics: number;
  };
  SpecialistConsultationsType2: {
    ENTSurgery: number;
    Endocrinology: number;
    Gastroenterology: number;
    MaxillofacialSurgery: number;
    Neurosurgery: number;
    Oncology: number;
    Urologist: number;
  };
  Telemedicine: boolean;
  XRayAndOtherDiagnosticTests: boolean;
}

const PackageBenefits = (props: Props) => {
  const generateParams = () => {
    const link = '/available-packages';
    return link;
  };

  const [benefits, setBenefits] = useState<Benefit[]>([]);

  const fetchPlansMutation = useMutation({
    mutationFn: fetchPlanBenefits,
    onSuccess: (data) => {
      setBenefits(data);
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  useEffect(() => {
    fetchPlansMutation.mutate();
  }, []);
  return (
    <div className="p-5">
      <p className="text-center font-semibold">Package Benefits</p>

      {fetchPlansMutation.isPending && (
        <p className="text-center font-semibold my-10">Getting Packages...</p>
      )}

      {fetchPlansMutation.isError && (
        <p className="lg:text-lg text-red-600 mt-2">
          {fetchPlansMutation.error.message}
        </p>
      )}

      {fetchPlansMutation.isSuccess && (
        <div className="flex flex-wrap w-full gap-5 pt-7">
          {benefits.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full rounded-lg border border-slate-200 p-5"
              >
                <p className="text-xl font-bold text-center">
                  Plan {item.Plan}
                </p>
                <p className="text-sm my-2 font-light text-textGrey text-center">
                  This plan goes for
                </p>
                <p className="text-sm font-light text-textGrey text-center">
                  ₦
                  <span className="text-2xl font-bold text-center">
                    {item.Cost ? item.Cost.toLocaleString() : 0}{' '}
                  </span>
                  per year
                </p>

                <div className="py-2">
                  <p>This plan covers:</p>

                  <p
                    className={
                      item.AccidentAndEmergency
                        ? 'no-underline'
                        : 'line-through'
                    }
                  >
                    <span>&#10003;</span> Accident And Emergency
                  </p>

                  <Accordion
                    title={'Advance And Complex Investigation'}
                    content={[
                      { CTScan: item.AdvanceAndComplexInvestigation.CTScan },
                      { EEG: item.AdvanceAndComplexInvestigation.EEG },
                      {
                        Echocardiography:
                          item.AdvanceAndComplexInvestigation.Echocardiography,
                      },
                      { MRIScan: item.AdvanceAndComplexInvestigation.MRIScan },
                    ]}
                  />
                  <p
                    className={
                      item.AmbulanceAndEvacuationServices
                        ? 'no-underline'
                        : 'line-through'
                    }
                  >
                    <span>&#10003;</span> Ambulance And Evacuation Services
                  </p>

                  <p
                    className={
                      item.AntenatalCareAndDelivery
                        ? 'no-underline'
                        : 'line-through'
                    }
                  >
                    <span>&#10003;</span> Antenatal Care And Delivery
                  </p>

                  <Accordion
                    title={'Cancer Care'}
                    content={[
                      { Covered: item.CancerCare.Covered },
                      {
                        [`Annual Limit: ${item.CancerCare.AnnualLimit}`]: true,
                      },
                    ]}
                  />

                  <p
                    className={
                      item.ChronicDiseases ? 'no-underline' : 'line-through'
                    }
                  >
                    <span>&#10003;</span> Chronic Diseases
                  </p>

                  <Accordion
                    title={'Dental'}
                    content={[
                      { Covered: item.Dental.Covered },
                      { [`Annual Limit: ${item.Dental.AnnualLimit}`]: true },
                    ]}
                  />

                  <p className={item.Drugs ? 'no-underline' : 'line-through'}>
                    <span>&#10003;</span> Drugs
                  </p>

                  <Accordion
                    title={'Eye'}
                    content={[
                      { Covered: item.Eye.Covered },
                      { [`Annual Limit: ${item.Eye.AnnualLimit}`]: true },
                    ]}
                  />

                  <p
                    className={
                      item.FamilyPlanning ? 'no-underline' : 'line-through'
                    }
                  >
                    <span>&#10003;</span> Family Planning
                  </p>

                  <p
                    className={
                      item.FeedingAndInPatientTreatment
                        ? 'no-underline'
                        : 'line-through'
                    }
                  >
                    <span>&#10003;</span> Feeding And InPatient Treatment
                  </p>

                  <Accordion
                    title={'General OutPatient Care'}
                    content={[
                      {
                        GeneralConsultations:
                          item.GeneralOutPatientCare.GeneralConsultations,
                      },
                      { Registration: item.GeneralOutPatientCare.Registration },
                    ]}
                  />

                  <p
                    className={
                      item.HealthPromotion ? 'no-underline' : 'line-through'
                    }
                  >
                    <span>&#10003;</span> Health Promotion
                  </p>

                  <p
                    className={
                      item.ImmunisationI ? 'no-underline' : 'line-through'
                    }
                  >
                    <span>&#10003;</span> Immunisation I
                  </p>
                  <p
                    className={
                      item.ImmunisationII ? 'no-underline' : 'line-through'
                    }
                  >
                    <span>&#10003;</span> Immunisation II
                  </p>
                  <p
                    className={
                      item.ImmunisationIII ? 'no-underline' : 'line-through'
                    }
                  >
                    <span>&#10003;</span> Immunisation III
                  </p>

                  <Accordion
                    title={'InPatient Care'}
                    content={[
                      {
                        [`Admission Days: ${item.InPatientCare.AdmissionDays}`]:
                          true,
                      },
                      { [`Room Type: ${item.InPatientCare.RoomType}`]: true },
                    ]}
                  />

                  <p>
                    <span>&#10003;</span> Intensive Care Services:{' '}
                    {item.IntensiveCareServices}
                  </p>

                  <p>
                    <span>&#10003;</span> Intermediate Surgeries:{' '}
                    {item.IntermediateSurgeries}
                  </p>

                  <p>
                    <span>&#10003;</span> Kidney Dialysis: {item.KidneyDialysis}
                  </p>

                  <p
                    className={
                      item.LaboratoryInvestigation
                        ? 'no-underline'
                        : 'line-through'
                    }
                  >
                    <span>&#10003;</span> Laboratory Investigation
                  </p>

                  <p>
                    <span>&#10003;</span> Major Surgeries: {item.MajorSurgeries}
                  </p>

                  <p>
                    <span>&#10003;</span> Minor Surgeries: {item.MinorSurgeries}
                  </p>

                  <p
                    className={
                      item.NeonatalCare ? 'no-underline' : 'line-through'
                    }
                  >
                    <span>&#10003;</span> Neonatal Care
                  </p>

                  <p
                    className={
                      item.PaediatricCare ? 'no-underline' : 'line-through'
                    }
                  >
                    <span>&#10003;</span> Paediatric Care
                  </p>

                  <Accordion
                    title={'Physiotherapy'}
                    content={[
                      { [`Sessions: ${item.Physiotherapy.Sessions}`]: true },
                    ]}
                  />

                  <Accordion
                    title={'Selective Screening'}
                    content={[
                      { Covered: item.SelectiveScreening.Covered },
                      {
                        [`Annual Limit: ${item.SelectiveScreening.AnnualLimit}`]:
                          true,
                      },
                    ]}
                  />

                  <Accordion
                    title={'Specialist Consultations Type 1'}
                    content={[
                      {
                        [`Cardiology: ${item.SpecialistConsultationsType1.Cardiology}`]:
                          true,
                      },
                      {
                        [`Dermatology: ${item.SpecialistConsultationsType1.Dermatology}`]:
                          true,
                      },
                      {
                        [`General Family Medicine: ${item.SpecialistConsultationsType1.GeneralFamilyMedicine}`]:
                          true,
                      },
                      {
                        [`General Surgery: ${item.SpecialistConsultationsType1.GeneralSurgery}`]:
                          true,
                      },
                      {
                        [`Haematology: ${item.SpecialistConsultationsType1.Haematology}`]:
                          true,
                      },
                      {
                        [`Obstetrics And Gynaecology: ${item.SpecialistConsultationsType1.ObstetricsAndGynaecology}`]:
                          true,
                      },
                      {
                        [`Ophthalmology: ${item.SpecialistConsultationsType1.Ophthalmology}`]:
                          true,
                      },
                      {
                        [`Orthopaedics: ${item.SpecialistConsultationsType1.Orthopaedics}`]:
                          true,
                      },
                      {
                        [`Paediatrics: ${item.SpecialistConsultationsType1.Paediatrics}`]:
                          true,
                      },
                    ]}
                  />

                  <Accordion
                    title={'Specialist Consultations Type 2'}
                    content={[
                      {
                        [`ENTSurgery: ${item.SpecialistConsultationsType2.ENTSurgery}`]:
                          true,
                      },
                      {
                        [`Endocrinology: ${item.SpecialistConsultationsType2.Endocrinology}`]:
                          true,
                      },
                      {
                        [`Gastroenterology: ${item.SpecialistConsultationsType2.Gastroenterology}`]:
                          true,
                      },
                      {
                        [`Maxillofacial Surgery: ${item.SpecialistConsultationsType2.MaxillofacialSurgery}`]:
                          true,
                      },
                      {
                        [`Neurosurgery: ${item.SpecialistConsultationsType2.Neurosurgery}`]:
                          true,
                      },
                      {
                        [`Oncology: ${item.SpecialistConsultationsType2.Oncology}`]:
                          true,
                      },
                      {
                        [`Urologist: ${item.SpecialistConsultationsType2.Urologist}`]:
                          true,
                      },
                    ]}
                  />

                  <p
                    className={
                      item.Telemedicine ? 'no-underline' : 'line-through'
                    }
                  >
                    <span>&#10003;</span> Telemedicine
                  </p>

                  <p
                    className={
                      item.XRayAndOtherDiagnosticTests
                        ? 'no-underline'
                        : 'line-through'
                    }
                  >
                    <span>&#10003;</span> XRay And Other Diagnostic Tests
                  </p>
                </div>
                <CustomButton
                  linkRoute={generateParams()}
                  linkTitle="Get Started"
                  buttonType="full"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PackageBenefits;

