import React, { useMemo, useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  srcList?: string[]
}

export function ImageWithFallback(props: Props) {
  const [didError, setDidError] = useState(false)
  const [srcIndex, setSrcIndex] = useState(0)

  const handleError = () => {
    setDidError(true)
  }

  const { src, srcList, alt, style, className, ...rest } = props

  // Normalize src so assets from public/ ("/foo.png") work even when the app is served from a non-root base URL
  const candidates = useMemo(() => {
    const base = (import.meta as any)?.env?.BASE_URL || '/'
    const baseWithSlash = base.endsWith('/') ? base : base + '/'
    // Build the logical order: explicit src first (if provided), then any additional fallbacks
    const listRaw: string[] = []
    if (src && typeof src === 'string') listRaw.push(src)
    if (srcList && srcList.length) listRaw.push(...srcList)
    // De-duplicate the base list while preserving order
    const seenBase = new Set<string>()
    const list = listRaw.filter((u) => (u && !seenBase.has(u) ? (seenBase.add(u), true) : false))
    const expanded = list.flatMap((item) => {
      if (!item || typeof item !== 'string') return [] as string[]
      const out: string[] = [item]
      // If it starts with '/', also try base + itemWithoutLeadingSlash
      if (item.startsWith('/')) out.push(baseWithSlash + item.replace(/^\//, ''))
      else {
        // If it doesn't start with '/', try '/'+item and base+item
        out.push('/' + item, baseWithSlash + item)
      }
      return out
    })
    // De-duplicate while preserving order
    const seen = new Set<string>()
    return expanded.filter((u) => (u && !seen.has(u) ? (seen.add(u), true) : false))
  }, [src, srcList])

  const rawSrc = useMemo(() => candidates[srcIndex], [candidates, srcIndex])

  const resolvedSrc = useMemo(() => {
    const current = rawSrc
    if (!current || typeof current !== 'string') return current as string | undefined
    // Absolute http(s) or data URLs are left as-is
    if (/^(?:https?:)?\/\//i.test(current) || current.startsWith('data:')) return current
    // If it starts with a slash, prefix with Vite's BASE_URL
    if (current.startsWith('/')) {
      // import.meta.env.BASE_URL always ends with a slash (e.g. "/" or "/repo/")
      const base = (import.meta as any)?.env?.BASE_URL || '/'
      return base.replace(/\/$/, '/') + current.replace(/^\//, '')
    }
    return current
  }, [rawSrc])

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img
      src={resolvedSrc}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={() => {
        if (candidates && srcIndex < candidates.length - 1) {
          setSrcIndex((i) => i + 1)
        } else {
          handleError()
        }
      }}
    />
  )
}
