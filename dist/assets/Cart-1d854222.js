import {
  G as h,
  u as x,
  j as s,
  s as t,
  b as m,
  a as u,
  r as p,
  L as d,
  c as v,
  d as C,
  e as g,
  f as w,
} from './index-bd4a9963.js';
function b(e) {
  return h({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M15.3709 3.43994L18.5819 9.00194L22.0049 9.00212V11.0021L20.8379 11.0019L20.0813 20.0852C20.0381 20.6035 19.6048 21.0021 19.0847 21.0021H4.92502C4.40493 21.0021 3.97166 20.6035 3.92847 20.0852L3.17088 11.0019L2.00488 11.0021V9.00212L5.42688 9.00194L8.63886 3.43994L10.3709 4.43994L7.73688 9.00194H16.2719L13.6389 4.43994L15.3709 3.43994ZM18.8309 11.0019L5.17788 11.0021L5.84488 19.0021H18.1639L18.8309 11.0019ZM13.0049 13.0021V17.0021H11.0049V13.0021H13.0049ZM9.00488 13.0021V17.0021H7.00488V13.0021H9.00488ZM17.0049 13.0021V17.0021H15.0049V13.0021H17.0049Z',
        },
      },
    ],
  })(e);
}
const N = ({ item: e }) => {
  const {
      imageUrl: c,
      price: l,
      sizes: o,
      weight: n,
      typeNamesBoard: j,
      title: L,
      count: i,
    } = e,
    r = x();
  return s.jsxs('div', {
    className: t.item,
    children: [
      s.jsx('div', {
        className: t.itemImg,
        children: s.jsx('img', { src: c, alt: 'Pizza' }),
      }),
      s.jsxs('div', {
        className: t.info,
        children: [
          s.jsx('h3', { children: L }),
          s.jsxs('p', { children: [j, ' тесто, ', o, ' см. ', n, ' гр.'] }),
        ],
      }),
      s.jsxs('div', {
        className: t.count,
        children: [
          i === 1
            ? s.jsx('button', {
                className: `${t.button_one} ${t.buttonCount}`,
                children: s.jsx('svg', {
                  width: '10',
                  height: '10',
                  viewBox: '0 0 10 10',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: s.jsx('path', {
                    d: 'M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z',
                    fill: '#EB5A1E',
                  }),
                }),
              })
            : s.jsx('button', {
                disabled: i === 1,
                className: t.buttonCount,
                onClick: () => {
                  r(m(e));
                },
                children: s.jsx('svg', {
                  width: '10',
                  height: '10',
                  viewBox: '0 0 10 10',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: s.jsx('path', {
                    d: 'M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z',
                    fill: '#EB5A1E',
                  }),
                }),
              }),
          s.jsx('b', { children: i }),
          s.jsx('button', {
            className: t.buttonCount,
            onClick: () => {
              r(u(e));
            },
            children: s.jsxs('svg', {
              width: '10',
              height: '10',
              viewBox: '0 0 10 10',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                s.jsx('path', {
                  d: 'M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z',
                  fill: '#EB5A1E',
                }),
                s.jsx('path', {
                  d: 'M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z',
                  fill: '#EB5A1E',
                }),
              ],
            }),
          }),
        ],
      }),
      s.jsx('div', {
        className: t.price,
        children: s.jsxs('b', { children: [l * i, ' ₽'] }),
      }),
      s.jsx('div', {
        className: t.remove,
        children: s.jsx('button', {
          className: t.buttonRemove,
          onClick: () => {
            r(p(e));
          },
          children: s.jsxs('svg', {
            width: '10',
            height: '10',
            viewBox: '0 0 10 10',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              s.jsx('path', {
                d: 'M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z',
                fill: '#EB5A1E',
              }),
              s.jsx('path', {
                d: 'M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z',
                fill: '#EB5A1E',
              }),
            ],
          }),
        }),
      }),
    ],
  });
};
function k(e) {
  return h({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    child: [
      { tag: 'circle', attr: { cx: '8', cy: '21', r: '1' } },
      { tag: 'circle', attr: { cx: '19', cy: '21', r: '1' } },
      {
        tag: 'path',
        attr: {
          d: 'M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12',
        },
      },
    ],
  })(e);
}
const B = '_root_d82ey_1',
  f = '_cartEmpty_d82ey_6',
  E = '_button_d82ey_18',
  V = '_buttonBack_d82ey_24',
  a = { root: B, cartEmpty: f, button: E, buttonBack: V },
  y = () =>
    s.jsx(s.Fragment, {
      children: s.jsxs('div', {
        className: a.root,
        children: [
          s.jsxs('div', {
            className: a.cartEmpty,
            children: [
              s.jsx('h2', { children: 'Корзина пуста' }),
              s.jsx('p', {
                children: 'Для заказа, перейдите на главную страницу.',
              }),
              s.jsx(k, { size: 150 }),
            ],
          }),
          s.jsx('div', {
            className: a.button,
            children: s.jsxs(d, {
              to: '/',
              className: a.buttonBack,
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
    }),
  M = () => {
    const { items: e, totalPrice: c } = v(C),
      l = g(e),
      o = x();
    return s.jsx('div', {
      className: t.container,
      children:
        e.length === 0
          ? s.jsx(y, {})
          : s.jsxs('div', {
              className: t.cart,
              children: [
                s.jsxs('div', {
                  className: t.top,
                  children: [
                    s.jsx('h2', { className: t.title, children: 'Корзина' }),
                    s.jsxs('div', {
                      className: t.clear,
                      onClick: () => {
                        e.length > 0 &&
                          window.confirm('Очистить корзину?') &&
                          o(w());
                      },
                      children: [
                        s.jsx(b, { size: 25 }),
                        s.jsx('span', { children: 'Очистить корзину' }),
                      ],
                    }),
                  ],
                }),
                s.jsx('div', {
                  className: t.items,
                  children: e.map((n) => s.jsx(N, { item: n }, n.id)),
                }),
                s.jsxs('div', {
                  className: t.bottom,
                  children: [
                    s.jsxs('div', {
                      className: t.details,
                      children: [
                        s.jsxs('span', {
                          children: [
                            'Всего пицц ',
                            s.jsxs('b', { children: [l, ' шт.'] }),
                          ],
                        }),
                        s.jsxs('span', {
                          children: [
                            'Сумма заказа: ',
                            s.jsxs('b', { children: [c, ' ₽'] }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs('div', {
                      className: t.cartBottom,
                      children: [
                        s.jsxs(d, {
                          to: '/',
                          className: `${t.buttonNav} ${t.buttonBack}`,
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
                        s.jsx(d, {
                          to: '*',
                          className: `${t.buttonNav} ${t.buttonPay}`,
                          children: s.jsx('span', {
                            children: 'Оплатить сейчас',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
    });
  },
  z = () => s.jsx(M, {});
export { z as default };
