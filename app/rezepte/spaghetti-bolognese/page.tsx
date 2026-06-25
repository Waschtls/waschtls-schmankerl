import RecipeLayout from '@/app/components/RecipeLayout';

export const metadata = {
  title: 'Glutenfreie Spaghetti Bolognese – der Familienklassiker',
  description: 'Spaghetti Bolognese mit glutenfreier Pasta – das Original mit Hackfleisch, Tomaten und frischen Kräutern. In 45 Minuten fertig, Kinder lieben sie, Soße einfrierbar.',
};

export default function SpaghettiBoloPage() {
  return (
    <RecipeLayout
      title="Spaghetti Bolognese"
      kat="Mittagessen"
      badges={[
        { type: 'golden', label: '👶 kleinkindtauglich' },
      ]}
      tagline="Bei uns gab's Spaghetti Bolognese früher mindestens einmal pro Woche. Nach der Zöliakie-Diagnose haben wir einfach die Pasta gewechselt – und sonst nichts. Die Soße ist von Natur aus glutenfrei, wenn man auf die Brühe achtet. Fertig in 45 Minuten, Kinder essen immer."
      useCases={['Schnelles Abendessen', 'Mittagessen für die ganze Familie', 'Soße einfrieren für stressige Abende', 'Kindergeburtstag-Buffet']}
      minuten={45}
      portionen={4}
      schwierigkeit="Einfach"
      infoBox="Glutenfreie Pasta gibt es von Barilla, Schär und anderen – Barilla GF ist in fast jedem Supermarkt erhältlich und von vielen als die beste GF-Pasta im normalen Handel bewertet. Gemüsebrühe immer auf GF prüfen, da Maltodextrin aus Weizen häufig vorkommt."
      zutaten={[
        '500 g glutenfreie Spaghetti (z. B. Barilla GF oder Schär)',
        '400 g Rinderhackfleisch (oder gemischt)',
        '1 Dose gehackte Tomaten (400 g)',
        '2 EL Tomatenmark',
        '1 Zwiebel',
        '2 Knoblauchzehen',
        '1 Möhre',
        '1 Stange Sellerie',
        '150 ml Rotwein (oder GF-Gemüsebrühe)',
        '2 EL Olivenöl',
        '1 TL getrockneter Oregano',
        '1 TL getrockneter Thymian',
        'Salz, Pfeffer, 1 Prise Zucker',
        'Parmesan zum Servieren',
      ]}
      zubereitung={[
        'Zwiebel, Knoblauch, Möhre und Sellerie sehr fein würfeln – je feiner, desto besser bindet das Gemüse die Soße.',
        'Olivenöl in einem großen Topf erhitzen. Gemüse bei mittlerer Hitze 5 Minuten anschwitzen bis es weich ist.',
        'Hackfleisch dazugeben und bei höherer Hitze krümelig anbraten. Dabei rühren, damit es keine großen Klumpen gibt.',
        'Tomatenmark einrühren und 1–2 Minuten mitrösten.',
        'Rotwein angießen, aufkochen und ca. 2 Minuten einkochen lassen.',
        'Gehackte Tomaten, Oregano, Thymian, Salz, Pfeffer und eine Prise Zucker dazugeben. Aufkochen.',
        'Hitze reduzieren und die Soße 20–25 Minuten ohne Deckel köcheln lassen – sie soll eindicken.',
        'Spaghetti nach Packungsangabe al dente kochen. Vor dem Abgießen eine Tasse Pastawasser aufheben.',
        'Soße abschmecken. Mit Pastawasser nach Bedarf verdünnen. Mit Spaghetti und geriebenem Parmesan servieren.',
      ]}
      naehrwerte={{ kalorien: 495, kohlenhydrate: 60, protein: 28, fett: 13, ballaststoffe: 5 }}
      tipps={[
        'Das Pastawasser ist kein Abfall – darin ist Stärke, die die Soße geschmeidig macht und sie an der Pasta haften lässt.',
        'Für Kleinkinder: Rotwein durch Gemüsebrühe ersetzen und Pasta etwas länger kochen.',
        'Je länger die Soße köchelt, desto intensiver. Wer Zeit hat: 45–60 Minuten bei ganz schwacher Hitze.',
        'Soße ohne Pasta einfrieren: portionsweise in Gefrierbeutel, hält 3 Monate. An stressigen Abenden einfach auftauen und frische Pasta kochen.',
        'Mit Zucchini, Karotten oder Spinat strecken – Kinder merken es kaum, wenn das Gemüse sehr fein ist.',
      ]}
      affiliate={{ text: 'Barilla Glutenfrei Spaghetti sind in vielen Supermärkten erhältlich und kommen dem Original am nächsten. Weitere Empfehlungen auf unserer Produktseite.' }}
      warenkundeLink={{ label: 'Nudeln mit einfacher Tomatensauce (vegetarisch)', href: '/rezepte/nudeln-mit-tomatensauce' }}
      prev={{ title: 'Rindergulasch', href: '/rezepte/rindergulasch' }}
      next={{ title: 'Fleischküchle', href: '/rezepte/fleischkuechle' }}
    />
  );
}
