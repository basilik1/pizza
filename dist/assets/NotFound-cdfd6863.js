import { j as s, g as t, L as n } from './index-bd4a9963.js';
const o = () =>
    s.jsxs('div', {
      className: t.root,
      children: [
        s.jsxs('div', {
          className: t.info,
          children: [
            s.jsx('h1', { children: 'Ничего не найдено' }),
            s.jsx('p', { children: 'Страница отсутсвует' }),
          ],
        }),
        s.jsx('div', {
          className: t.button,
          children: s.jsxs(n, {
            to: '/cart',
            className: t.buttonBack,
            children: [
              s.jsx('svg', {
                width: '8',
                height: '14',
                viewBox: '0 0 8 14',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: s.jsx('path', {
                  d: 'M7 13L1 6.93015L6.86175 1',
                  stroke: '#D3D3D3',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              }),
              s.jsx('span', { children: 'Вернуться назад' }),
            ],
          }),
        }),
      ],
    }),
  i = () => s.jsx(o, {});
export { i as default };
