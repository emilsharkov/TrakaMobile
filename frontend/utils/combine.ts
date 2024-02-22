const combineClasses = (...strings: (string | undefined)[]): string => {
    return strings
        .filter(str => typeof str === 'string')
        .reverse()
        .join(' ')
}

export {combineClasses}