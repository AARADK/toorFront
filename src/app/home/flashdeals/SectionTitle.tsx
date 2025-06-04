const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="mb-4">
      <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
      <p className="text-slate-600">{subtitle}</p>
    </div>
  )
  
  export default SectionTitle
  