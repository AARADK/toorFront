interface HomeTitleProps {
    title: React.ReactNode
  }
  
  export const HomeTitle = ({ title }: HomeTitleProps) => {
    return (
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <div className="w-20 h-1 bg-yellow-500 mt-2 rounded mx-auto mb-10" />
      </div>
    )
  }
  