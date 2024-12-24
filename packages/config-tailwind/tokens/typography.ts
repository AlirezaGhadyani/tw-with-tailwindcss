const pxTo = (value: number) => `${parseFloat(`${value}`) / 16}rem`;

export const typography = {
  title: pxTo(20.3),
  subTitle: pxTo(18),
  body: pxTo(16),
  bodySmall: pxTo(14.2),
  caption: pxTo(12.6),
  footNote: pxTo(11.2),
  tag: pxTo(10),

  header1: pxTo(41),
  header2: pxTo(36.5),
  header3: pxTo(32.4),
  header4: pxTo(28.8),
  header5: pxTo(25.6),
  header6: pxTo(22.8),
};
