import existingTheme from 'shiki/themes/github-dark.mjs'

export default {
  ...existingTheme,
  type: 'dark',
  name: 'custom',
  colors: {
    'editor.background': 'var(--color-neutral-800)'
  },
  tokenColors: [
    ...(existingTheme.tokenColors as any),
    {
      scope: ['entity.name.tag.html', 'entity.name.tag', 'punctuation.definition.tag.html'],
      settings: {
        foreground: '#F97583'
      }
    },
  ]
}
