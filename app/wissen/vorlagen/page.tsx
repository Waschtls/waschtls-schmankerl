import type { Metadata } from 'next';
import VorlagenClient from './VorlagenClient';

export const metadata: Metadata = {
  title: 'Vorlagen & Vordrucke für Zöliakie – Kita, Schule, Ausflüge',
  description:
    'Musterbriefe, Notfallkarten und Checklisten für Eltern von Kindern mit Zöliakie. Direkt kopieren und anpassen.',
};

export default function VorlagenPage() {
  return <VorlagenClient />;
}
