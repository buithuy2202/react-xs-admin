import { e as s, G as o, J as r, H as t, L as i } from './index-88b30955.js';
import { R as m } from './index-33a96627.js';
const c = s.memo(() => {
  const a = o(),
    e = r();
  return t(m, {
    status: '403',
    title: '403',
    subTitle: a.formatMessage({ id: 'layout.error.403' }),
    extra: t(i, {
      type: 'primary',
      onClick: () => {
        e('/');
      },
      children: 'Back Home',
    }),
  });
});
export { c as default };