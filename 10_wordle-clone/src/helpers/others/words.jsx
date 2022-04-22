import wordBank from './wordle-bank.txt'

export const boardDefault = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]

export const generateWordSet = async () => {
    let wordSet
    let todayWord
    await fetch(wordBank)
        .then(response => response.text())
        .then(data => {
            const wordArr = data.split("\r\n")
            wordSet = new Set(wordArr)
            todayWord = wordArr[Math.floor(Math.random() * wordArr.length)]
        })
    
        return { wordSet, todayWord }
}