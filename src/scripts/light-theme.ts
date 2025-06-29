import existingTheme from 'shiki/themes/github-light.mjs'

export default {
  ...existingTheme,
  type: 'light',
  name: 'light-custom',
  // colors: {
  //   'editor.background': 'var(--color-neutral-800)'
  // },
  tokenColors: [
    ...(existingTheme.tokenColors as any),
    {
      scope: ['entity.name.tag.html', 'entity.name.tag', 'punctuation.definition.tag.html'],
      settings: {
        foreground: '#D73A49'
      }
    },
  ]
}
