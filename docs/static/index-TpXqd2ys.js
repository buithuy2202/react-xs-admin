import { r as a, a8 as m, a7 as u, Z as n, a9 as c } from './index-76VpSOXG.js';
import { u as d } from './useInfoPageTabs-7AG4vJAS.js';
const l = a.memo(() => {
  const [s, t] = a.useState(),
    [e] = m(),
    { handleTabs: r } = d(),
    o = u();
  return (
    a.useEffect(() => {
      t(e.get('id') || ''), r('qurey', 'update', Number(e.get('id')));
    }, []),
    n(c, { children: [o.formatMessage({ id: 'layout.memu.detailsPage' }), '-', s] })
  );
});
export { l as default };
