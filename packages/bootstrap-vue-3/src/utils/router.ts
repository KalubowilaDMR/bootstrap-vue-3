/**
 * @param props
 * @returns
 */
export const isLink = (props: any): boolean => !!(props.href || props.to)
