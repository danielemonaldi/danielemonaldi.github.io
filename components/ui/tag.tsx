interface TagProps {
  text: string
}

export function Tag({ text }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">{text}</span>
  )
}
