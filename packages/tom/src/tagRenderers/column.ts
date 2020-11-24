import { createTagRenderer } from './TagRenderer';
import { Alignment, align } from '../helpers/alignment';

import { applyFont } from '../helpers/font'
export default createTagRenderer(
  (
    {
      gapSize = 0,
      crossAxisAlignment = 'start',
       font = "default"
    }: {
      gapSize?: number;
      crossAxisAlignment?: Alignment;
      font?: string
    },
    { children },
  ) => {
    const fontAppliedChildren = children.map(s => applyFont(s, font))
    const maxLength = Math.max(...fontAppliedChildren.map((s) => Math.max(...s.split('\n').map(l => l.length))))
    return fontAppliedChildren.map((text) => {
       return text.split('\n').map((line) => { return align(line, crossAxisAlignment, maxLength, () => ' ') }).join('\n')})
      .join('\n'.repeat(gapSize + 1));
  },
);
