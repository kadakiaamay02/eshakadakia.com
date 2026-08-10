import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkExperience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: WorkExperience[] = [
        {
      company: 'LifeMoves - Behavioral Health Program',
      role: '',
      period: 'Aug 2026 - Present',
      description: [ 
        'Provide individual, group, and milieu-based behavioral health services to adults and families experiencing homelessness within a shelter-based, interdisciplinary setting.',
        'Provide brief, trauma-informed clinical interventions focused on stabilization, coping skills, emotion regulation, and client-centered support.',
        'Facilitate therapeutic groups addressing personal empowerment, anger management, emotion regulation, grief and loss, and interpersonal functioning.',
        'Conduct clinical assessments, including intake evaluations, mental status examinations, and suicide/homicide risk assessments, under clinical supervision.',
        'Develop and maintain individual caseload while completing clinical documentation, treatment planning, collateral contacts, and case coordination.',
        'Collaborate with clinical supervisors, MSW trainees, case managers, and multidisciplinary shelter staff to coordinate client care and connect clients with appropriate services.',
        'Receive foundational training in community-based neuropsychological assessment, including MMSE, TOPF, RBANS, Trails A/B, D-KEFS, WAIS, WRAML, and MIGDAS.'
      ]
    },
    {
      company: 'City of Fremont',
      role: 'Clinical Psychology Trainee, Youth and Family Services Practicum',
      period: 'Aug 2025 - June 2026',
      description: [
        'Provided direct clinical services to children, adolescents, and families within a community mental health setting, including individual therapy, school-based interventions, and crisis support',
        'Conducted biopsychosocial assessments, risk assessments (including suicidality and self-harm), and treatment planning under licensed supervision',
        'Utilized evidence-based and developmentally appropriate interventions to address mood disorders, adjustment difficulties, family conflict, and trauma-related concerns',
        'Collaborated with multidisciplinary teams, caregivers, schools, and community providers to support client stability and continuity of care',
        'Maintained accurate and timely clinical documentation in compliance with ethical, legal, and agency standards',
        'Gained experience working with diverse and underserved populations with attention to cultural humility and systems-based care follow-up while adhering to confidentiality and organizational policies'

      ]
    },
    {
      company: 'Institute of Aging Research',
      role: 'Volunteer Crisis Counselor',
      period: 'Sep 2024 - Jun 2025',
      description: [
        'Provided emotional support, crisis intervention, and active listening to older adults and adults with disabilities, addressing issues such as loneliness, depression, and anxiety through a 24-hour hotline.',
        'Conducted risk assessments, documented interactions, and collaborated with supervisors to ensure proper care and follow-up while adhering to confidentiality and organizational policies.'
      ]
    },
    {
      company: 'Fremont Hospital - Behavioral Health',
      role: 'Mental Health Technician',
      period: 'May 2023 - Feb 2025',
      description: [
        'Observed and documented patient behaviors (adolescents and adults)',
        'Proficient in crisis intervention techniques and de-escalation strategies.',
        'Enhanced patient support through empathetic listening and promotion of positive coping mechanisms.',
        'Facilitated recreational and therapeutic activities.',
        'Maintained patient confidentiality and adhered to ethical guidelines while handling sensitive information.'

      ]
    },
    {
      company: 'MAX_415',
      role: '',
      period: 'Sept 2023 - Dec 2023',
      description: [
        'Worked on grant writing, strategic team building, program planning, and conducting focus groups with high schoolers',
        'Empowered youth and conducted outreach initiatives.'
      ]
    }
  ];
}