import { Component } from '@angular/core';

interface EmotionNode {
  label: string;
  color: string;
  children: EmotionNode[];
}

function leaf(label: string, color: string): EmotionNode {
  return { label, color, children: [] };
}

function branch(label: string, color: string, children: EmotionNode[]): EmotionNode {
  return { label, color, children };
}

const EMOTIONS: EmotionNode[] = [
  branch('Happy', '#F4D03F', [
    branch('Optimistic', '#F7DC6F', [leaf('Hopeful', '#FCF3CF'), leaf('Inspired', '#FCF3CF')]),
    branch('Peaceful', '#F7DC6F', [leaf('Loved', '#FCF3CF'), leaf('Thankful', '#FCF3CF')]),
    branch('Proud', '#F7DC6F', [leaf('Successful', '#FCF3CF'), leaf('Confident', '#FCF3CF')]),
    branch('Excited', '#F7DC6F', [leaf('Eager', '#FCF3CF'), leaf('Energetic', '#FCF3CF')]),
    branch('Powerful', '#F7DC6F', [leaf('Courageous', '#FCF3CF'), leaf('Creative', '#FCF3CF')]),
  ]),
  branch('Disgusted', '#52BE80', [
    branch('Repelled', '#7DCEA0', [leaf('Horrified', '#D5F5E3'), leaf('Hesitant', '#D5F5E3')]),
    branch('Awful', '#7DCEA0', [leaf('Nauseated', '#D5F5E3'), leaf('Detestable', '#D5F5E3')]),
    branch('Disenchanted', '#7DCEA0', [leaf('Appalled', '#D5F5E3'), leaf('Revolted', '#D5F5E3')]),
    branch('Disapproving', '#7DCEA0', [leaf('Judgemental', '#D5F5E3'), leaf('Embarrassed', '#D5F5E3')]),
    branch('Startled', '#7DCEA0', [leaf('Shocked', '#D5F5E3'), leaf('Dismayed', '#D5F5E3')]),
  ]),
  branch('Fearful', '#9B59B6', [
    branch('Anxious', '#BB8FCE', [leaf('Worried', '#E8DAEF'), leaf('Overwhelmed', '#E8DAEF')]),
    branch('Insecure', '#BB8FCE', [leaf('Inadequate', '#E8DAEF'), leaf('Inferior', '#E8DAEF')]),
    branch('Weak', '#BB8FCE', [leaf('Worthless', '#E8DAEF'), leaf('Insignificant', '#E8DAEF')]),
    branch('Rejected', '#BB8FCE', [leaf('Excluded', '#E8DAEF'), leaf('Persecuted', '#E8DAEF')]),
    branch('Threatened', '#BB8FCE', [leaf('Nervous', '#E8DAEF'), leaf('Exposed', '#E8DAEF')]),
  ]),
  branch('Angry', '#E74C3C', [
    branch('Distant', '#EC7063', [leaf('Numb', '#FADBD8'), leaf('Withdrawn', '#FADBD8')]),
    branch('Critical', '#EC7063', [leaf('Dismissive', '#FADBD8'), leaf('Sceptical', '#FADBD8')]),
    branch('Frustrated', '#EC7063', [leaf('Annoyed', '#FADBD8'), leaf('Infuriated', '#FADBD8')]),
    branch('Bitter', '#EC7063', [leaf('Violated', '#FADBD8'), leaf('Indignant', '#FADBD8')]),
    branch('Humiliated', '#EC7063', [leaf('Ridiculed', '#FADBD8'), leaf('Disrespected', '#FADBD8')]),
  ]),
  branch('Sad', '#5499C7', [
    branch('Hurt', '#85C1E9', [leaf('Disappointed', '#D6EAF8'), leaf('Wounded', '#D6EAF8')]),
    branch('Guilty', '#85C1E9', [leaf('Ashamed', '#D6EAF8'), leaf('Remorseful', '#D6EAF8')]),
    branch('Despair', '#85C1E9', [leaf('Powerless', '#D6EAF8'), leaf('Grief', '#D6EAF8')]),
    branch('Vulnerable', '#85C1E9', [leaf('Fragile', '#D6EAF8'), leaf('Victimised', '#D6EAF8')]),
    branch('Lonely', '#85C1E9', [leaf('Abandoned', '#D6EAF8'), leaf('Isolated', '#D6EAF8')]),
  ]),
];

@Component({
  selector: 'app-woe',
  imports: [],
  templateUrl: './woe.component.html',
  styleUrl: './woe.component.scss'
})
export class WOEComponent {
  readonly root = EMOTIONS;
  path: EmotionNode[] = [];

  get currentOptions(): EmotionNode[] {
    return this.path.length === 0 ? this.root : this.path[this.path.length - 1].children;
  }

  get isComplete(): boolean {
    return this.path.length > 0 && this.currentOptions.length === 0;
  }

  get prompt(): string {
    if (this.path.length === 0) {
      return '';
    }
    if (this.isComplete) {
      return 'You\'re feeling:';
    }
    return `Feeling ${this.path[this.path.length - 1].label.toLowerCase()}. More specifically?`;
  }

  select(node: EmotionNode): void {
    this.path.push(node);
  }

  back(): void {
    this.path.pop();
  }

  restart(): void {
    this.path = [];
  }

}
