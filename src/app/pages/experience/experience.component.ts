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
      company: 'City of Fremont',
      role: 'Clinical Psychology Intern',
      period: 'Aug 2025 - Present',
      description: [
        'Provide individual and family therapy to children and adolescents in school and community-based settings.',
        'Conduct intake assessments, collaborate with multidisciplinary teams, and support case management.',
        'Utilize evidence-based approaches to address anxiety, depression, trauma, and family-related challenges.',
        'Promote culturally responsive mental health care and early intervention within the community.',
        'Engage in supervision and professional development as part of the City of Fremont’s Youth and Family Services practicum program.'
      ]
    },
    {
      company: 'Institute of Aging Research',
      role: 'Intern',
      period: 'Sep 2024 - Jun 2025',
      description: [
        'Provide emotional support, crisis intervention, and active listening to older adults and adults with disabilities through a 24-hour hotline.',
        'Address issues such as loneliness, depression, and anxiety with empathy and evidence-based techniques.',
        'Collaborate with a multidisciplinary team to ensure client safety and appropriate follow-up support.'
      ]
    },
    {
      company: 'Fremont Hospital - Behavioral Health',
      role: 'Mental Health Technician',
      period: 'May 2023 - Feb 2025',
      description: [
        'In charge of patient care, safety, create a therapeutic environment and activities and maintain documentation to support the clinical staff.'
      ]
    }
  ];
}