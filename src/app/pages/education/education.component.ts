import { Component } from '@angular/core';
interface Education {
  school: string;
  degree: string;
  period: string;
  description: string[];
}
@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  degrees: Education[] = [
    {
      school: 'Alliant University',
      degree: 'Doctor of Psychology (PsyD) in Clinical Psychology',
      period: 'Aug 2024 - Present',
      description: [
        'Pursuing a PsyD with a focus on clinical psychology, emphasizing research and practical application.',
        'Engaging in coursework covering psychopathology, psychological assessment, and therapeutic interventions.',
        'Conducting research on mental health topics, contributing to the field of clinical psychology.'
      ]
    },
    {
      school: 'San Francisco State University',
      degree: 'Bachelor of Arts in Psychology',
      period: 'Aug 2020 - May 2024',
      description: [
        'Graduated with a BA in Psychology, gaining a strong foundation in psychological theories and research methods.',
        'Completed coursework in cognitive psychology, developmental psychology, and abnormal psychology.',      ]
    },
    {
      school: 'San Francisco State University',
      degree: 'Bachelor of Science in Public Health',
      period: 'Aug 2020 - May 2024',
      description: [
        'Dean\'s list for sevenr out of eight semesters, demonstrating consistent academic excellence.',
        'Graduated with a BS in Public Health, gaining a strong foundation in health promotion and disease prevention.',
        'Completed coursework in epidemiology, health policy, and community health.',      ]
    }
  ]
}
