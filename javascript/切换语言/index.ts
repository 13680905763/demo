enum WordsEnum {
  中文 = 0,
  英文,
  国家,
  重置
}
const dictionarys = {
  china: ['中文', '英文', '国家', '重置'] as const,
  english: ['Chinese', 'English', 'Country', 'Reset'] as const
}
export type Language = keyof typeof dictionarys
type Words = keyof typeof WordsEnum

export const lang =
  <L extends Language>(language: L) =>
  <W extends Words>(word: W) =>
    dictionarys[language][WordsEnum[word]]

export type Lan = ReturnType<typeof lang>

const lan = lang('english')
const value = lan('重置')
