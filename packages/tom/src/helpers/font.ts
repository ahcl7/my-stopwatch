const SUPPORTED_FONT = {
   'big':
      {
         '0':
            '╭━━━╮\n' +
            '┃╭━╮┃\n' +
            '┃┃┃┃┃\n' +
            '┃┃┃┃┃\n' +
            '┃╰━╯┃\n' +
            '╰━━━╯',
         '1':
            ' ╱╭╮ \n' +
            '╱╭╯┃╱\n' +
            '╱╰╮┃ \n' +
            ' ╱┃┃╱\n' +
            '╱╭╯╰╮\n' +
            ' ╰━━╯',
         '2':
            '╭━━━╮\n' +
            '┃╭━╮┃\n' +
            '╰╯╭╯┃\n' +
            '╭━╯╭╯\n' +
            '┃┃╰━╮\n' +
            '╰━━━╯',
         '3':
            '╭━━━╮\n' +
            '┃╭━╮┃\n' +
            '╰╯╭╯┃\n' +
            '╭╮╰╮┃\n' +
            '┃╰━╯┃\n' +
            '╰━━━╯',
         '4':
            '╭╮╱╭╮\n' +
            '┃┃╱┃┃\n' +
            '┃╰━╯┃\n' +
            '╰━━╮┃\n' +
            '╱╱╱┃┃\n' +
            '╱╱╱╰╯',
         '5':
            '╭━━━╮\n' +
            '┃╭━━╯\n' +
            '┃╰━━╮\n' +
            '╰━━╮┃\n' +
            '╭━━╯┃\n' +
            '╰━━━╯',
         '6':
            '╭━━━╮\n' +
            '┃╭━━╯\n' +
            '┃╰━━╮\n' +
            '┃╭━╮┃\n' +
            '┃╰━╯┃\n' +
            '╰━━━╯',
         '7':
            '╭━━━╮\n' +
            '┃╭━╮┃\n' +
            '╰╯╭╯┃\n' +
            '╱╱┃╭╯\n' +
            '╱╱┃┃ \n' +
            '╱╱╰╯ ',
         '8':
            '╭━━━╮\n' +
            '┃╭━╮┃\n' +
            '┃╰━╯┃\n' +
            '┃╭━╮┃\n' +
            '┃╰━╯┃\n' +
            '╰━━━╯',
         '9':
            '╭━━━╮\n' +
            '┃╭━╮┃\n' +
            '┃╰━╯┃\n' +
            '╰━━╮┃\n' +
            '╭━━╯┃\n' +
            '╰━━━╯',
        ':':
          '  \n' +
          '  \n' +
          '╭╮\n' +
          '╰╯\n' +
          '╭╮\n' +
          '╰╯'
      }
}



const canApplyFont = (text: string | any[], font: string)  => {
   if (font === 'default') return true
   for(let i = 0; i < text.length; i++) {
      // @ts-ignore
      if (!SUPPORTED_FONT[font].hasOwnProperty(text[i])) return false
   }
   return true
}

// @ts-ignore
export const applyFont = (text: string , font: string):string => {
   if (font === 'default') return text
   if (canApplyFont(text, font)) {
      let maxHeight = 0
      for(const c of text) {
         // @ts-ignore
         maxHeight = Math.max(maxHeight, SUPPORTED_FONT[font][c].split('\n').length)
      }
      let res = ""
      for (let i = 0; i < maxHeight; i++) {
         for (const c of text) {
            // @ts-ignore
            res += SUPPORTED_FONT[font][c].split('\n')[i]
         }
         res += "\n"
      }
      return res
   } else return text
}
