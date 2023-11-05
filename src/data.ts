import Page from '@/types/Page';

export const pages: Page[] = [
  { id: 1, title: 'zajęcia cykliczne', imgUrl: '/src/assets/img01.jpg', hasContent: true },
  { id: 2, title: 'kontakt, o nas, dokumenty', imgUrl: '/src/assets/img02.jpg', hasContent: true },
  { id: 3, title: 'wakacje, ferie zimowe', imgUrl: '/src/assets/img03.jpg', hasContent: true },
  { id: 4, title: 'warsztaty weekendowe', imgUrl: '/src/assets/img04.jpg', hasContent: true },
  {
    id: 5,
    title: '',
    imgUrl: '/polewidzenia.svg',
    hasContent: false,
  },
  { id: 6, title: 'przygotowanie do egzaminów', imgUrl: '/src/assets/img06.jpg', hasContent: true },
  { id: 7, title: 'warsztaty dla szkół', imgUrl: '/src/assets/img07.jpg', hasContent: true },
  { id: 8, title: 'warsztaty dla biznesu', imgUrl: '/src/assets/img08.jpg', hasContent: true },
  { id: 9, title: 'ceramika', imgUrl: '/src/assets/img09.jpg', hasContent: true },
];
