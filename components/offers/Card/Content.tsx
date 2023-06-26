interface Props {
  description: string
}

export default function Content({ description }: Props) {
  return (
    <main className="bg-white/10 px-6 py-4">
      <p className="line-clamp-6 text-sm">{description}</p>
    </main>
  )
}
