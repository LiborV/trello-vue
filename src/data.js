export const data = [
    {
        id: 1,
        title: 'Stěhování',
        cards: [
            {
                id: 1,
                text: 'Sehnat 2-3 lidi'
            },
            {
                id: 2,
                text: 'Zajistit krabice'
            },
            {
                id: 3,
                text: 'Vymalovat starý byt',
                labels: ['warning', 'info', 'danger', 'success', 'dark']
            },
            {
                id: 4,
                text: ''
            },
            {
                id: 5,
                text: 'Půjčit  dodávku'
            }
        ]
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet',
        cards: [
            {
                id: 1,
                text: 'Consectetuer adipiscing elit. Nullam dapibus fermentum ipsum.',
                labels: ['danger'],
                image: {
                    // eslint-disable-next-line max-len
                    filename: 'https://www.mojeid.cz/media/filer_public/a2/91/a291c289-6d47-42fe-85d4-04cca91728c1/210415_mojeid_ilustrace_uzivatel.svg',
                    alt: 'Nullam dapibus fermentum ipsum'
                }
            },
            {
                id: 2,
                text: 'Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus',
                labels: ['dark']
            },
            {
                id: 3,
                text: 'Aenean vel massa quis mauris vehicula lacinia. Donec ipsum massa, ullamcorper',
                labels: ['success'],
                tags: ['very', 'good', 'boy'],
                image: {
                    // eslint-disable-next-line max-len
                    filename: 'https://www.mojeid.cz/media/filer_public/d3/f2/d3f2eb76-e091-4fe3-a784-2218df971925/mojeid_ilustrace_uzivatele.svg',
                    alt: 'Donec ipsum massa, ullamcorper'
                }
            }
        ]
    },
    {
        id: 3,
        title: 'Oslava',
        cards: [
            {
                id: 1,
                text: 'Zvolit témo oslavy'
            },
            {
                id: 2,
                text:
                'Vytvořit seznam pozvaných'
            },
            {
                id: 3,
                text:
                'POslat pozvánky',
                labels: ['info', 'warning']
            },
            {
                id: 4,
                text: 'Naplánovat menu',
                tags: ['✝️', '🍷']
            },
            {
                id: 4,
                text: 'Naplánovat výpomoc'
            }
        ]
    }
]
