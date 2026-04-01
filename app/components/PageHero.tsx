interface PageHeroProps {
  title: string
  description: string
  subtitle?: string
}

export default function PageHero({ title, description, subtitle }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        {subtitle && (
          <p className="text-sm font-medium text-gray-400 mb-3">{subtitle}</p>
        )}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{title}</h1>
        <p className="text-lg text-gray-300 max-w-2xl">{description}</p>
      </div>
    </section>
  )
}
